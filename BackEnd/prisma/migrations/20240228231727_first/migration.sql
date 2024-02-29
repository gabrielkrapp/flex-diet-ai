-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "dateOfBirth" TEXT NOT NULL,
    "height" DOUBLE PRECISION NOT NULL,
    "weight" DOUBLE PRECISION NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "vegan" BOOLEAN NOT NULL,
    "biotipo" TEXT NOT NULL,
    "diabetes" BOOLEAN NOT NULL,
    "lactose" BOOLEAN NOT NULL,
    "gluten" BOOLEAN NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
