/*
  Warnings:

  - Added the required column `type` to the `transactions` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "TypeTransaction" AS ENUM ('entry', 'output');

-- AlterTable
ALTER TABLE "transactions" ADD COLUMN     "type" "TypeTransaction" NOT NULL;
