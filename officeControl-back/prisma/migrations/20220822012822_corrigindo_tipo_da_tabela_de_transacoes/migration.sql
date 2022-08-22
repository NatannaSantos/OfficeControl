/*
  Warnings:

  - The values [entry,output] on the enum `TypeTransaction` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "TypeTransaction_new" AS ENUM ('entrada', 'saida');
ALTER TABLE "transactions" ALTER COLUMN "type" TYPE "TypeTransaction_new" USING ("type"::text::"TypeTransaction_new");
ALTER TYPE "TypeTransaction" RENAME TO "TypeTransaction_old";
ALTER TYPE "TypeTransaction_new" RENAME TO "TypeTransaction";
DROP TYPE "TypeTransaction_old";
COMMIT;
