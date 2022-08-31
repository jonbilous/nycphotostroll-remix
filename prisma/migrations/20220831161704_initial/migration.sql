-- CreateEnum
CREATE TYPE "EventType" AS ENUM ('photowalk');

-- CreateEnum
CREATE TYPE "ImageStatus" AS ENUM ('uploading', 'published');

-- CreateEnum
CREATE TYPE "Role" AS ENUM ('admin', 'normal');

-- CreateEnum
CREATE TYPE "ContributionType" AS ENUM ('poster', 'route');

-- CreateEnum
CREATE TYPE "ImageFeatureType" AS ENUM ('groupPhoto', 'favorite');

-- CreateTable
CREATE TABLE "Contribution" (
    "id" UUID NOT NULL,
    "type" "ContributionType" NOT NULL,
    "userId" UUID NOT NULL,
    "eventId" UUID NOT NULL,

    CONSTRAINT "Contribution_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Event" (
    "id" UUID NOT NULL,
    "uid" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "location" TEXT NOT NULL,
    "type" "EventType" NOT NULL,

    CONSTRAINT "Event_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Image" (
    "id" UUID NOT NULL,
    "uid" TEXT NOT NULL,
    "status" "ImageStatus" NOT NULL,
    "eventId" UUID NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" UUID NOT NULL,
    "featureType" "ImageFeatureType",

    CONSTRAINT "Image_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "name" TEXT,
    "uid" TEXT,
    "id" UUID NOT NULL,
    "auth0id" TEXT NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'normal',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Contribution_id_key" ON "Contribution"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Event_id_key" ON "Event"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Event_uid_key" ON "Event"("uid");

-- CreateIndex
CREATE UNIQUE INDEX "Image_id_key" ON "Image"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Image_uid_key" ON "Image"("uid");

-- CreateIndex
CREATE UNIQUE INDEX "User_uid_key" ON "User"("uid");

-- CreateIndex
CREATE UNIQUE INDEX "User_id_key" ON "User"("id");

-- CreateIndex
CREATE UNIQUE INDEX "User_auth0id_key" ON "User"("auth0id");

-- AddForeignKey
ALTER TABLE "Contribution" ADD CONSTRAINT "Contribution_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Contribution" ADD CONSTRAINT "Contribution_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Event"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Image" ADD CONSTRAINT "Image_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Event"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Image" ADD CONSTRAINT "Image_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
