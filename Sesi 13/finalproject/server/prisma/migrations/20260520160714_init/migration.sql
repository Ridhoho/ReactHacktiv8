-- CreateTable
CREATE TABLE "Cafe" (
    "id" SERIAL NOT NULL,
    "cafe_id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "province" TEXT NOT NULL,
    "sales" INTEGER NOT NULL,

    CONSTRAINT "Cafe_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CafeDetail" (
    "id" SERIAL NOT NULL,
    "cafe_id" TEXT NOT NULL,
    "chartTitle" TEXT NOT NULL,
    "categories" JSONB NOT NULL,
    "series" JSONB NOT NULL,

    CONSTRAINT "CafeDetail_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Cafe_cafe_id_key" ON "Cafe"("cafe_id");

-- CreateIndex
CREATE UNIQUE INDEX "CafeDetail_cafe_id_key" ON "CafeDetail"("cafe_id");

-- AddForeignKey
ALTER TABLE "CafeDetail" ADD CONSTRAINT "CafeDetail_cafe_id_fkey" FOREIGN KEY ("cafe_id") REFERENCES "Cafe"("cafe_id") ON DELETE RESTRICT ON UPDATE CASCADE;
