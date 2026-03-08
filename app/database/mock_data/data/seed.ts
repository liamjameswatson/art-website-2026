//seed.ts
import "dotenv/config";
import { PrismaClient } from "@/app/generated/prisma/client";
import { paintings as products } from "./paintings";

async function main() {
  const prisma = new PrismaClient();

  // delete existing data
  await prisma.product.deleteMany();

  // seed new data
  for (const product of products) {
    console.log("SEEDING PRODUCT:");
    console.log(JSON.stringify(product, null, 2));

    await prisma.product.create({
      data: product,
    });
  }

  console.log("database seeded successfully");
}

main();

// npm run seed
// npx tsx ./app/mock_data/data/seed.ts
