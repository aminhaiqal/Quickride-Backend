/*
  Warnings:

  - Made the column `name` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Ride" ALTER COLUMN "description" DROP NOT NULL;

-- AlterTable
ALTER TABLE "RideBooking" ALTER COLUMN "payment" DROP NOT NULL,
ALTER COLUMN "ridepref" DROP NOT NULL;

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "name" SET NOT NULL;
