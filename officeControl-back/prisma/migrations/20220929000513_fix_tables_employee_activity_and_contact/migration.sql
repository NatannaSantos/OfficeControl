-- AlterTable
ALTER TABLE "activities" ALTER COLUMN "hour" DROP NOT NULL;

-- AlterTable
ALTER TABLE "contacts" ALTER COLUMN "Tel" DROP NOT NULL,
ALTER COLUMN "email" DROP NOT NULL,
ALTER COLUMN "adress" DROP NOT NULL;

-- AlterTable
ALTER TABLE "employees" ALTER COLUMN "tel" DROP NOT NULL,
ALTER COLUMN "email" DROP NOT NULL,
ALTER COLUMN "adress" DROP NOT NULL;
