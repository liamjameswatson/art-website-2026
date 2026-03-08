"use server";

// import { PrismaClient } from "@/app/generated/prisma/client";

import { prisma } from "@/app/database/prisma";

// Get all paintings

export async function getAllProducts() {
  // const prisma = new PrismaClient();
  const products = await prisma.product.findMany();
  console.log(prisma);
  return products;
}

// Get latest 10 paintings

export async function getLatestPaintings() {
  // const prisma = new PrismaClient();

  const paintings = await prisma.product.findMany({
    take: 4,
    orderBy: { createdAt: "desc" },
  });

  return paintings;
}

export async function getProductBySlug(slug: string) {
  if (!slug) return null;
  try {
    const product = await prisma.product.findUnique({
      where: { slug },
    });

    return product;
  } catch (error) {
    console.error("Error fetching product by slug", error);
    return null;
  }
}
