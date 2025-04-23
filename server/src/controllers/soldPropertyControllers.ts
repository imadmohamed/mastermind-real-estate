import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import AWS from 'aws-sdk';
import { v4 as uuidv4 } from 'uuid';

const prisma = new PrismaClient();

AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  region: process.env.AWS_REGION!,
});

const s3 = new AWS.S3();
const BUCKET_NAME = process.env.S3_BUCKET_NAME!;

// Upload image and add description
export const uploadSoldProperty = async (req: Request, res: Response) => {
  try {
    const { description } = req.body;
    const file = req.file as Express.Multer.File;
    const key = `${uuidv4()}-${file.originalname}`;

    await s3.putObject({
      Bucket: BUCKET_NAME,
      Key: key,
      Body: file.buffer,
      ContentType: file.mimetype,
    }).promise();

    const url = `https://${BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/${key}`;

    const newSold = await prisma.soldProperty.create({
      data: {
        description,
        imageUrl: url,
      },
    });

    res.status(201).json(newSold);
  } catch (error) {
    res.status(500).json({ error: "Upload failed", details: error });
  }
};

// Get all sold properties
export const getSoldProperties = async (req: Request, res: Response) => {
  try {
    const properties = await prisma.soldProperty.findMany({
      orderBy: { createdAt: 'desc' },
    });
    res.json(properties);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch" });
  }
};
