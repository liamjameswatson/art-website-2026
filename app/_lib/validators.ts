import { boolean, coerce, z } from "zod";

// Insert Product validation schema

export const imageSchema = z.object({
  url: z.string().url("Image URL must be a valid URL"),
  alt: z.string().min(3, "Image alt text is required"),
});

export const paintingSchema = z.object({
  name: z.string().min(3, "Name is required"),
  slug: z.string().min(3, "Slug is required"),
  description: z.string().min(20, "Description is required"),
  price: z.number(),

  artist: z.string().nullable(),
  yearCreated: z.string().nullable(),
  medium: z.string().min(3, "Medium is required"),
  style: z.string().nullable(),
  category: z.string().nullable(),

  //   dimensions
  width: z.number().positive("Width must be a positive number"),
  height: z.number().positive("Height must be a positive number"),
  depth: z.number().positive("Depth must be a positive number").nullable(),

  images: z.array(imageSchema).min(1, "At least one image is required"),

  isFramed: z.boolean().default(false),
  isOriginal: z.boolean().default(true),
  isPrint: z.boolean().default(false),
  isSold: z.boolean().default(false),

  shippingPrice: z
    .number()
    .positive("Shipping price must be a positive number"),
  readyToShip: z.boolean().default(false),

  totalPrice: z.number().positive("Total price must be a positive number"),

  isPaid: z.boolean().default(false),
  isDelivered: boolean().default(false),

  stock: coerce.number("Stock must have a number"),
});
