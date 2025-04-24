/*
  Warnings:

  - You are about to drop the column `latitude` on the `Location` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Location" DROP COLUMN "latitude";

-- CreateTable
CREATE TABLE "SoldProperty" (
    "id" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "SoldProperty_pkey" PRIMARY KEY ("id")
);
