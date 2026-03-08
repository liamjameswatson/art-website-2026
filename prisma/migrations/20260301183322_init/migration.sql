/*
  Warnings:

  - You are about to drop the column `images` on the `Product` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Product" DROP COLUMN "images";

-- CreateTable
CREATE TABLE "ImageModel" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "url" TEXT NOT NULL,
    "alt" TEXT NOT NULL,
    "productId" UUID,

    CONSTRAINT "ImageModel_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ImageModel" ADD CONSTRAINT "ImageModel_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE SET NULL ON UPDATE CASCADE;
