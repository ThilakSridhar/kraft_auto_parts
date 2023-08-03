/*
  Warnings:

  - You are about to drop the `Post` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Post";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "User";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Customer" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "customerCode" TEXT NOT NULL,
    "customerName" TEXT NOT NULL,
    "shortName" TEXT NOT NULL,
    "customerType" TEXT NOT NULL,
    "salesPerson" TEXT NOT NULL,
    "territory" TEXT NOT NULL,
    "consignee" TEXT NOT NULL,
    "customerVendorNo" TEXT,
    "typeOfCustomer" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "address1" TEXT NOT NULL,
    "address2" TEXT,
    "address3" TEXT,
    "city" TEXT NOT NULL,
    "website" TEXT
);

-- CreateIndex
CREATE UNIQUE INDEX "Customer_customerCode_key" ON "Customer"("customerCode");
