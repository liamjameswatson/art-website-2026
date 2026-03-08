import { boolean, coerce, z } from "zod";
import { formatNumberWithDecimal } from "./utils";

// Insert Product validation schema

export const productImageSchema = z.object({
  url: z.string().url("Image URL must be a valid URL"),
  alt: z.string().min(3, "Image alt text is required"),
});

const currency = z
  .string()
  .refine(
    (value) => /^\d+(\.\d{2})?$/.test(formatNumberWithDecimal(Number(value))),
    "Price must be a valid number with up to two decimal places",
  );

export const paintingSchema = z.object({
  name: z.string().min(3, "Name is required"),
  slug: z.string().min(3, "Slug is required"),
  description: z.string().min(20, "Description is required"),
  //   price: z.number(),

  price: currency,
  artist: z.string().nullable(),
  yearCreated: z.string().nullable(),
  medium: z.string().min(3, "Medium is required"),
  style: z.string().nullable(),
  category: z.string().nullable(),

  //   dimensions
  width: z.number().positive("Width must be a positive number"),
  height: z.number().positive("Height must be a positive number"),
  depth: z.number().positive("Depth must be a positive number").nullable(),

  images: z.array(productImageSchema).min(1, "At least one image is required"),

  isFramed: z.boolean().default(false),
  isOriginal: z.boolean().default(true),
  isPrint: z.boolean().default(false),
  isSold: z.boolean().default(false),

  shippingPrice: currency.nullable(),
  readyToShip: z.boolean().default(false),

  totalPrice: z.number().positive("Total price must be a positive number"),

  isPaid: z.boolean().default(false),
  isDelivered: boolean().default(false),

  stock: coerce.number("Stock must have a number"),
});
