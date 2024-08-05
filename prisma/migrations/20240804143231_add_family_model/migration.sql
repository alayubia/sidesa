-- CreateTable
CREATE TABLE "Family" (
    "id" SERIAL NOT NULL,
    "noKK" TEXT NOT NULL,
    "namaKepalaKeluarga" TEXT NOT NULL,
    "nik" TEXT[],
    "linkFolder" TEXT NOT NULL,

    CONSTRAINT "Family_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Family_noKK_key" ON "Family"("noKK");
