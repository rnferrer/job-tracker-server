/*
  Warnings:

  - You are about to drop the column `jobTitle` on the `AppliedJob` table. All the data in the column will be lost.
  - You are about to drop the column `lastEdit` on the `AppliedJob` table. All the data in the column will be lost.
  - You are about to drop the column `jobTitle` on the `SavedJob` table. All the data in the column will be lost.
  - You are about to drop the column `saveDate` on the `SavedJob` table. All the data in the column will be lost.
  - Added the required column `company_name` to the `AppliedJob` table without a default value. This is not possible if the table is not empty.
  - Added the required column `job_title` to the `AppliedJob` table without a default value. This is not possible if the table is not empty.
  - Added the required column `company_name` to the `SavedJob` table without a default value. This is not possible if the table is not empty.
  - Added the required column `job_title` to the `SavedJob` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "AppliedJob" DROP COLUMN "jobTitle",
DROP COLUMN "lastEdit",
ADD COLUMN     "company_name" TEXT NOT NULL,
ADD COLUMN     "job_title" TEXT NOT NULL,
ADD COLUMN     "last_edited" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "SavedJob" DROP COLUMN "jobTitle",
DROP COLUMN "saveDate",
ADD COLUMN     "company_name" TEXT NOT NULL,
ADD COLUMN     "job_title" TEXT NOT NULL,
ADD COLUMN     "save_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
