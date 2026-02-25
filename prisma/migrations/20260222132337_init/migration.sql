-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "isSold" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "soldAt" TIMESTAMP(3);
