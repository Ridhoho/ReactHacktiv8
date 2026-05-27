import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../src/generated/prisma/client";

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
});
const prisma = new PrismaClient({ adapter });

const categories = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
];

const cafeDetails = [
  {
    cafeId: "PI-PLM",
    chartTitle: "Sales and Expenses Over Time",
    categories,
    series: [
      {
        name: "Monthly Sales (Rp Juta)",
        data: [650, 590, 800, 820, 560, 550, 700],
      },
      {
        name: "Monthly Expenses (Rp Juta)",
        data: [280, 480, 400, 190, 860, 260, 300],
      },
    ],
  },
  {
    cafeId: "PIM2-JS",
    chartTitle: "Sales and Expenses Over Time",
    categories,
    series: [
      {
        name: "Monthly Sales (Rp Juta)",
        data: [600, 640, 800, 800, 580, 500, 750],
      },
      {
        name: "Monthly Expenses (Rp Juta)",
        data: [240, 400, 400, 190, 900, 260, 390],
      },
    ],
  },
  {
    cafeId: "SH-TGR",
    chartTitle: "Sales and Expenses Over Time",
    categories,
    series: [
      {
        name: "Monthly Sales (Rp Juta)",
        data: [710, 590, 780, 800, 540, 450, 800],
      },
      {
        name: "Monthly Expenses (Rp Juta)",
        data: [240, 470, 400, 100, 660, 360, 400],
      },
    ],
  },
  {
    cafeId: "BIP-BDG",
    chartTitle: "Sales and Expenses Over Time",
    categories,
    series: [
      {
        name: "Monthly Sales (Rp Juta)",
        data: [630, 570, 840, 520, 860, 400, 850],
      },
      {
        name: "Monthly Expenses (Rp Juta)",
        data: [310, 440, 440, 480, 480, 320, 300],
      },
    ],
  },
  {
    cafeId: "PS-JS",
    chartTitle: "Sales and Expenses Over Time",
    categories,
    series: [
      {
        name: "Monthly Sales (Rp Juta)",
        data: [700, 600, 700, 700, 700, 650, 700],
      },
      {
        name: "Monthly Expenses (Rp Juta)",
        data: [380, 480, 400, 290, 560, 360, 300],
      },
    ],
  },
  {
    cafeId: "GI-JP",
    chartTitle: "Sales and Expenses Over Time",
    categories,
    series: [
      {
        name: "Monthly Sales (Rp Juta)",
        data: [810, 590, 800, 800, 540, 450, 830],
      },
      {
        name: "Monthly Expenses (Rp Juta)",
        data: [270, 370, 400, 400, 560, 320, 400],
      },
    ],
  },
  {
    cafeId: "PM-SMG",
    chartTitle: "Sales and Expenses Over Time",
    categories,
    series: [
      {
        name: "Monthly Sales (Rp Juta)",
        data: [710, 690, 780, 800, 640, 450, 800],
      },
      {
        name: "Monthly Expenses (Rp Juta)",
        data: [380, 470, 400, 200, 600, 360, 400],
      },
    ],
  },
  {
    cafeId: "TP-SBY",
    chartTitle: "Sales and Expenses Over Time",
    categories,
    series: [
      {
        name: "Monthly Sales (Rp Juta)",
        data: [960, 590, 470, 380, 440, 450, 950],
      },
      {
        name: "Monthly Expenses (Rp Juta)",
        data: [240, 300, 360, 220, 360, 360, 400],
      },
    ],
  },
  {
    cafeId: "HM-YGY",
    chartTitle: "Sales and Expenses Over Time",
    categories,
    series: [
      {
        name: "Monthly Sales (Rp Juta)",
        data: [500, 590, 580, 560, 540, 550, 590],
      },
      {
        name: "Monthly Expenses (Rp Juta)",
        data: [240, 270, 200, 200, 260, 260, 200],
      },
    ],
  },
  {
    cafeId: "BP-BPN",
    chartTitle: "Sales and Expenses Over Time",
    categories,
    series: [
      {
        name: "Monthly Sales (Rp Juta)",
        data: [780, 790, 780, 810, 740, 850, 790],
      },
      {
        name: "Monthly Expenses (Rp Juta)",
        data: [550, 570, 510, 550, 460, 460, 460],
      },
    ],
  },
  {
    cafeId: "PM-MKS",
    chartTitle: "Sales and Expenses Over Time",
    categories,
    series: [
      {
        name: "Monthly Sales (Rp Juta)",
        data: [310, 390, 380, 400, 440, 550, 600],
      },
      {
        name: "Monthly Expenses (Rp Juta)",
        data: [240, 270, 400, 100, 660, 260, 200],
      },
    ],
  },
  {
    cafeId: "NH-BTM",
    chartTitle: "Sales and Expenses Over Time",
    categories,
    series: [
      {
        name: "Monthly Sales (Rp Juta)",
        data: [950, 590, 780, 980, 540, 450, 950],
      },
      {
        name: "Monthly Expenses (Rp Juta)",
        data: [240, 610, 400, 300, 660, 360, 400],
      },
    ],
  },
];

const getSeriesTotal = (cafeId: string, seriesName: string) => {
  const detail = cafeDetails.find((cafeDetail) => cafeDetail.cafeId === cafeId);
  const series = detail?.series.find((item) => item.name === seriesName);

  return series?.data.reduce((total, value) => total + value, 0) ?? 0;
};

async function main() {
  if (process.env.NODE_ENV === "production") {
    throw new Error("Seed reset is blocked in production");
  }

  await prisma.$executeRawUnsafe(
    'TRUNCATE TABLE "CafeDetail", "Cafe" RESTART IDENTITY CASCADE',
  );

  await prisma.cafe.createMany({
    data: [
      {
        cafeId: "PIM2-JS",
        name: "Pondok Indah Mall 2",
        city: "Jakarta Selatan",
        province: "DKI Jakarta",
      },
      {
        cafeId: "SH-TGR",
        name: "Soekarno Hatta - 2F",
        city: "Tangerang",
        province: "Banten",
      },
      {
        cafeId: "BIP-BDG",
        name: "Bandung Indah Plaza",
        city: "Bandung",
        province: "Jawa Barat",
      },
      {
        cafeId: "PS-JS",
        name: "Plaza Senayan",
        city: "Jakarta Selatan",
        province: "DKI Jakarta",
      },
      {
        cafeId: "GI-JP",
        name: "Grand Indonesia",
        city: "Jakarta Pusat",
        province: "DKI Jakarta",
      },
      {
        cafeId: "PM-SMG",
        name: "Paragon Mall",
        city: "Semarang",
        province: "Jawa Tengah",
      },
      {
        cafeId: "TP-SBY",
        name: "Tunjungan Plaza",
        city: "Surabaya",
        province: "Jawa Timur",
      },
      {
        cafeId: "HM-YGY",
        name: "Hartono Mall",
        city: "Yogyakarta",
        province: "DI Yogyakarta",
      },
      {
        cafeId: "BP-BPN",
        name: "Balikpapan Plaza",
        city: "Balikpapan",
        province: "Kalimantan Timur",
      },
      {
        cafeId: "PM-MKS",
        name: "Panakkukang Mall",
        city: "Makassar",
        province: "Sulawesi Selatan",
      },
      {
        cafeId: "NH-BTM",
        name: "Nagoya Hill",
        city: "Batam",
        province: "Kepulauan Riau",
      },
      {
        cafeId: "PI-PLM",
        name: "Palembang Icon",
        city: "Palembang",
        province: "Sumatera Selatan",
      },
    ].map((cafe) => ({
      ...cafe,
      sales: getSeriesTotal(cafe.cafeId, "Monthly Sales (Rp Juta)"),
      expenses: getSeriesTotal(cafe.cafeId, "Monthly Expenses (Rp Juta)"),
    })),
  });

  await prisma.cafeDetail.createMany({
    data: cafeDetails,
  });

  console.log("Seed data inserted successfully");
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });


