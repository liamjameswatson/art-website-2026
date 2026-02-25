/*
  Warnings:

  - You are about to drop the column `isSold` on the `Product` table. All the data in the column will be lost.
  - You are about to alter the column `shippingPrice` on the `Product` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Decimal(10,2)`.
  - You are about to alter the column `totalPrice` on the `Product` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Decimal(10,2)`.
  - Made the column `medium` on table `Product` required. This step will fail if there are existing NULL values in that column.
  - Made the column `widthCm` on table `Product` required. This step will fail if there are existing NULL values in that column.
  - Made the column `heightCm` on table `Product` required. This step will fail if there are existing NULL values in that column.
  - Changed the type of `images` on the `Product` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Product" DROP COLUMN "isSold",
ALTER COLUMN "medium" SET NOT NULL,
ALTER COLUMN "widthCm" SET NOT NULL,
ALTER COLUMN "heightCm" SET NOT NULL,
ALTER COLUMN "shippingPrice" SET DATA TYPE DECIMAL(10,2),
ALTER COLUMN "totalPrice" SET DATA TYPE DECIMAL(10,2),
DROP COLUMN "images",
ADD COLUMN     "images" JSONB NOT NULL;
