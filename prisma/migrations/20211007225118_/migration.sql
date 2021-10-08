/*
  Warnings:

  - You are about to drop the column `slug` on the `Note` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Note.slug_unique";

-- AlterTable
ALTER TABLE "Note" DROP COLUMN "slug";
