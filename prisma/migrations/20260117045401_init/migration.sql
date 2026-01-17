-- CreateTable
CREATE TABLE "Appointment" (
    "id" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "title" TEXT NOT NULL,
    "timeSlot" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'PENDING',
    "patientName" TEXT NOT NULL,
    "patientAge" INTEGER NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "doctorId" TEXT,

    CONSTRAINT "Appointment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Doctors" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "specialty" TEXT NOT NULL,

    CONSTRAINT "Doctors_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Doctors_email_key" ON "Doctors"("email");

-- AddForeignKey
ALTER TABLE "Appointment" ADD CONSTRAINT "Appointment_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Appointment" ADD CONSTRAINT "Appointment_doctorId_fkey" FOREIGN KEY ("doctorId") REFERENCES "Doctors"("id") ON DELETE SET NULL ON UPDATE CASCADE;
