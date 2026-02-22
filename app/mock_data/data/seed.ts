//seed.ts
import "dotenv/config";
import { PrismaClient } from "@/app/generated/prisma/client";
import { paintings } from "./paintings";

async function main() {
  const prisma = new PrismaClient();

  // delete existing data
  await prisma.product.deleteMany();

  // seed new data
  await prisma.product.createMany({
    data: paintings,
  });

  console.log("database seeded successfully");
}

main();

// npm run seed
// npx tsx ./app/mock_data/data/seed.ts
