import Image from "next/image";
import Link from "next/link";
import { getAllProducts } from "../_lib/actions/product-actions";
import { Painting } from "@/app/types/painting";

export default async function Home() {
  const paintings = await getAllProducts();

  return (
    <>
      {/* Hero banner */}
      <div className="px-8 pt-10 pb-6 max-w-7xl mx-auto">
        <p className="text-xs tracking-[0.25em] uppercase text-gray-400 font-light mb-2">
          Original Works
        </p>
        <h1 className="text-4xl md:text-5xl font-light text-gray-800 tracking-tight">
          The Collection
        </h1>
        <div className="mt-3 h-px w-12 bg-light-primary-1/50" />
      </div>

      {/* Gallery grid */}
      <section className="px-6 pb-16 max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
        {paintings?.map((painting: Painting) => (
          <Link
            href={`/products/${painting.slug}`}
            key={painting.id}
            className="group"
          >
            {/* Image */}
            <div className="relative aspect-square overflow-hidden rounded-sm bg-gray-100">
              <Image
                src={painting.images[0].url}
                alt={painting.images[0].alt}
                quality={90}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Badges */}
              <div className="absolute top-2 left-2 flex flex-col gap-1">
                {painting.isSold && (
                  <span className="text-[10px] tracking-[0.15em] uppercase bg-gray-800/80 text-white px-2 py-0.5 rounded-full">
                    Sold
                  </span>
                )}
                {painting.isPrint && !painting.isSold && (
                  <span className="text-[10px] tracking-[0.15em] uppercase bg-light-primary-1/80 text-white px-2 py-0.5 rounded-full">
                    Print
                  </span>
                )}
                {painting.isOriginal && !painting.isSold && (
                  <span className="text-[10px] tracking-[0.15em] uppercase bg-emerald-600/80 text-white px-2 py-0.5 rounded-full">
                    Original
                  </span>
                )}
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
            </div>

            {/* Label */}
            <div className="mt-3 px-1 space-y-1">
              <div className="flex items-start justify-between gap-2">
                <h2 className="text-sm font-light text-gray-700 tracking-wide leading-snug group-hover:text-light-primary-1 transition-colors duration-200">
                  {painting.name}
                </h2>
                <span className="text-xs text-gray-500 whitespace-nowrap mt-0.5 font-medium">
                  £{painting.price}
                </span>
              </div>

              <div className="flex items-center gap-2 text-[11px] text-gray-400">
                {painting.artist && <span>{painting.artist}</span>}
                {painting.artist && painting.yearCreated && (
                  <span className="text-gray-200">·</span>
                )}
                {painting.yearCreated && <span>{painting.yearCreated}</span>}
              </div>

              <p className="text-[11px] text-gray-400 tracking-wide">
                {painting.width} × {painting.height}
                {painting.depth ? ` × ${painting.depth}` : ""} cm ·{" "}
                {painting.medium}
              </p>
            </div>
          </Link>
        ))}
      </section>
    </>
  );
}

// import Image from "next/image";
// import Link from "next/link";

// import { getAllProducts } from "../_lib/actions/product-actions";
// import { Painting } from "@/app/types/painting";

// export default async function Home() {
//   const paintings = await getAllProducts();
//   console.log(paintings);

//   return (
//     <>
//       <section className="m-6 grid grid-cols-2 md:grid-cols-4 gap-3 ">
//         {paintings?.map((painting: Painting) => (
//           <Link href={`/products/${painting.slug}`} key={painting.id}>
//             <div className="relative aspect-square">
//               <Image
//                 src={painting.images[0].url}
//                 alt={painting.images[0].alt}
//                 quality={90}
//                 fill
//               />
//             </div>
//             <h1 className="text-sm font-medium text-center m-2">
//               {painting.name}
//             </h1>
//           </Link>
//         ))}
//       </section>
//     </>
//   );
// }
