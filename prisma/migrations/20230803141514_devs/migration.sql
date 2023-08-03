-- CreateTable
CREATE TABLE "gst" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "gstType" TEXT NOT NULL,
    "gstNumber" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "panNumber" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "gst_gstNumber_key" ON "gst"("gstNumber");

-- CreateIndex
CREATE UNIQUE INDEX "gst_panNumber_key" ON "gst"("panNumber");
