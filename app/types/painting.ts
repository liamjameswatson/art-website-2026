export type Painting = {
  id?: string;
  slug: string;

  name: string;
  description: string;
  price: number;

  artist?: string;
  yearCreated?: number;
  medium: string;
  style?: string;
  category?: string;

  widthCm: number;
  heightCm: number;
  depthCm?: number;

  images: {
    url: string;
    alt: string;
  }[];

  isFramed: boolean;
  isOriginal: boolean;
  isPrint: boolean;
  tags?: string[];
  isSold: boolean;

  shippingPrice?: number;
  readyToShip: boolean;

  totalPrice: number;

  isPaid: boolean;
  isDelivered: boolean;

  stock: number;
};
