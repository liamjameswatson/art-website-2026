export type Painting = {
  id: string;
  slug: string;

  name: string;
  description: string;
  price: number;

  artist?: string;
  yearCreated?: number;
  medium: string;
  style?: string;

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
  isSold: boolean;
  quantity?: number;

  shippingPrice?: number;
  readyToShip: boolean;
  processingTimeDays?: number;

  totalPrice: number;

  isPaid: boolean;
  isDelivered: boolean

  tags?: string[];

  dateAdded: string;
};
