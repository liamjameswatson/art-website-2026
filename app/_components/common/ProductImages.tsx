"use client";
import Image from "next/image";
import { useState } from "react";
import { ProductImage } from "@/app/types/painting";

type ProductImagesProps = {
  images: ProductImage[];
};

const ProductImages = ({ images }: ProductImagesProps) => {
  
  const [selected, setSelected] = useState(0);

  
  return (
    <div className="space-y-4">
      <Image
        src={images[selected].url}
        alt={images[selected].alt}
        width={1000}
        height={1000}
        className="min-h-75 object-cover object-center"
      />
      <div className="flex">
        {images.map((image, index) => (
          <div key={image.url} onClick={() => setSelected(index)}>
            <Image src={image.url} alt={image.alt} width={200} height={200} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
