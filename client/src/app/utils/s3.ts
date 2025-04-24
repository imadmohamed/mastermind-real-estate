import AWS from "aws-sdk";
import { v4 as uuidv4 } from "uuid";
import type { Express } from "express";


const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  region: process.env.AWS_REGION!,
});

export const uploadToS3 = async (file: Express.Multer.File): Promise<string>=> {
  const fileKey = `soldproperties/${uuidv4()}_${file.originalname}`;
  const params = {
    Bucket: process.env.S3_BUCKET_NAME!,
    Key: fileKey,
    Body: file.buffer,
    ContentType: file.mimetype,
    ACL: "public-read",
  };

  const data = await s3.upload(params).promise();
  return data.Location; // public URL
};
