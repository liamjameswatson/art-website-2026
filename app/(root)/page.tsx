import { paintings } from "@/app/mock_data/data/paintings";
import Image from "next/image";
import Link from "next/link";

import { getAllProducts } from "../_lib/actions/product-actions";

export default async function Home() {
  const products = await getAllProducts();
  console.log(products);

  return (
    <>
      <section className="m-6 grid grid-cols-2 md:grid-cols-4 gap-3">
        {paintings.map((painting) => (
          <Link href={`/products/${painting.slug}`} key={painting.id}>
            {painting.images.map((image) => (
              <div key={image.url} className="relative aspect-square">
                <Image src={image.url} alt={image.alt} quality={100} fill />
              </div>
            ))}
            <h1 className="text-sm font-medium text-center m-2">
              {painting.name}
            </h1>
          </Link>
        ))}
      </section>
    </>
  );
}
