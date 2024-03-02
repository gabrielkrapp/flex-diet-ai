/*
  Warnings:

  - You are about to drop the column `vegan` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "vegan";

-- CreateTable
CREATE TABLE "diets" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "breakfast" TEXT NOT NULL,
    "lunch" TEXT NOT NULL,
    "dinner" TEXT NOT NULL,

    CONSTRAINT "diets_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "diets" ADD CONSTRAINT "diets_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
