-- CreateTable
CREATE TABLE "Todo" (
    "id" SERIAL NOT NULL,
    "task" TEXT NOT NULL,
    "createdOn" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Todo_pkey" PRIMARY KEY ("id")
);
