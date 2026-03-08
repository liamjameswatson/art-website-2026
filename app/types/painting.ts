import { z } from "zod";
import { paintingSchema, productImageSchema } from "@/app/_lib/validators";

export type ProductImage = z.infer<typeof productImageSchema>;

export type Painting = z.infer<typeof paintingSchema> & {
  id: string;
  createdAt: Date;
};

// export type Painting = {

//   id?: string;
//   slug: string;

//   name: string;
//   description: string;
//   price: number;

//   artist?: string;
//   yearCreated?: number;
//   medium: string;
//   style?: string;
//   category?: string;

//   widthCm: number;
//   heightCm: number;
//   depthCm?: number;

//   images: Image[];

//   isFramed: boolean;
//   isOriginal: boolean;
//   isPrint: boolean;
//   tags?: string[];
//   isSold: boolean;

//   shippingPrice?: number;
//   readyToShip: boolean;

//   totalPrice: number;

//   isPaid: boolean;
//   isDelivered: boolean;

//   stock: number;
// };
