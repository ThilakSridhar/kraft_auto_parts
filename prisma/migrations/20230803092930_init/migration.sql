/*
  Warnings:

  - The primary key for the `Customer` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Customer` table. All the data in the column will be lost.
  - You are about to alter the column `customerCode` on the `Customer` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Customer" (
    "customerCode" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
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
INSERT INTO "new_Customer" ("address1", "address2", "address3", "city", "consignee", "customerCode", "customerName", "customerType", "customerVendorNo", "salesPerson", "shortName", "status", "territory", "typeOfCustomer", "website") SELECT "address1", "address2", "address3", "city", "consignee", "customerCode", "customerName", "customerType", "customerVendorNo", "salesPerson", "shortName", "status", "territory", "typeOfCustomer", "website" FROM "Customer";
DROP TABLE "Customer";
ALTER TABLE "new_Customer" RENAME TO "Customer";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
