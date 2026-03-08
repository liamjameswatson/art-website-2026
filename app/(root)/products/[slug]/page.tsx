import { getProductBySlug } from "@/app/_lib/actions/product-actions";
import ProductImages from "@/app/_components/common/ProductImages";
import { ProductImage } from "@/app/types/painting";

const ProductPage = async (props: { params: Promise<{ slug: string }> }) => {
  const { slug } = await props.params;
  const product = await getProductBySlug(slug);

  if (!product) return <p>No Product found</p>;
  if (!product.images) return <p>No images available</p>;

  return (
    <section className="min-h-screen bg-light-primary-4">
      {/* Breadcrumb */}
      <div className="px-8 pt-6 pb-0 max-w-7xl mx-auto">
        <p className="text-xs tracking-[0.2em] uppercase text-gray-400 font-light">
          Shop / <span className="text-gray-600">{product.name}</span>
        </p>
      </div>

      {/* Main layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 px-8 py-10 max-w-7xl mx-auto">
        {/* Images */}
        <div className="lg:col-span-6 xl:col-span-7">
          <ProductImages images={product.images as ProductImage[]} />
        </div>

        {/* Right panel */}
        <div className="lg:col-span-6 xl:col-span-5 lg:pl-14 flex flex-col justify-between pt-4 lg:pt-0">
          <div className="space-y-6">
            {/* Badges */}
            <div className="flex flex-wrap gap-2">
              {product.isOriginal && (
                <span className="text-[10px] tracking-[0.2em] uppercase text-emerald-600 border border-emerald-300 px-3 py-1 rounded-full">
                  Original
                </span>
              )}
              {product.isPrint && (
                <span className="text-[10px] tracking-[0.2em] uppercase text-light-primary-1 border border-light-primary-1/30 px-3 py-1 rounded-full">
                  Print
                </span>
              )}
              {product.isFramed && (
                <span className="text-[10px] tracking-[0.2em] uppercase text-gray-500 border border-gray-200 px-3 py-1 rounded-full">
                  Framed
                </span>
              )}
              {product.isSold && (
                <span className="text-[10px] tracking-[0.2em] uppercase text-red-400 border border-red-200 px-3 py-1 rounded-full">
                  Sold
                </span>
              )}
            </div>

            {/* Title + artist */}
            <div>
              <h1 className="text-3xl md:text-4xl font-light text-gray-800 leading-tight tracking-tight">
                {product.name}
              </h1>
              {product.artist && (
                <p className="mt-1 text-sm text-gray-400 font-light tracking-wide">
                  {product.artist}
                  {product.yearCreated && `, ${product.yearCreated}`}
                </p>
              )}
              <div className="mt-3 h-px w-12 bg-light-primary-1/50" />
            </div>

            {/* Description */}
            <p className="text-gray-500 text-sm leading-relaxed font-light max-w-md">
              {product.description}
            </p>

            {/* Details table */}
            <div className="space-y-2 text-xs text-gray-400 tracking-wide">
              {[
                { label: "Medium", value: product.medium },
                { label: "Style", value: product.style },
                { label: "Category", value: product.category },
                {
                  label: "Dimensions",
                  value: `${product.width} × ${product.height}${product.depth ? ` × ${product.depth}` : ""} cm`,
                },
                {
                  label: "Stock",
                  value:
                    product.stock > 0
                      ? `${product.stock} available`
                      : "Out of stock",
                },
                {
                  label: "Shipping",
                  value: product.readyToShip
                    ? `Ready to ship · £${product.shippingPrice ?? "TBC"}`
                    : "Made to order",
                },
              ]
                .filter((row) => row.value)
                .map((row) => (
                  <div
                    key={row.label}
                    className="flex justify-between border-b border-gray-100 pb-2"
                  >
                    <span className="uppercase tracking-[0.15em]">
                      {row.label}
                    </span>
                    <span className="text-gray-600 capitalize">
                      {row.value}
                    </span>
                  </div>
                ))}
            </div>
          </div>

          {/* Price + CTA */}
          <div className="mt-10 space-y-4">
            <div className="flex items-baseline gap-3">
              <span className="text-4xl font-light text-gray-800 tracking-tight">
                £{product.price}
              </span>
              {product.shippingPrice && (
                <span className="text-xs text-gray-400 tracking-wide">
                  + £{product.shippingPrice} shipping
                </span>
              )}
            </div>

            {product.isSold || product.stock === 0 ? (
              <button
                disabled
                className="w-full py-4 bg-gray-200 text-gray-400 text-sm tracking-[0.15em] uppercase font-medium rounded-full cursor-not-allowed"
              >
                Sold Out
              </button>
            ) : (
              <div className="flex flex-col gap-3">
                <button className="w-full py-4 bg-light-primary-1 text-white text-sm tracking-[0.15em] uppercase font-medium rounded-full shadow-lg hover:bg-light-primary-2 hover:shadow-xl transition-all duration-300 cursor-pointer">
                  Add to Cart
                </button>
                <button className="w-full py-4 bg-transparent text-light-primary-1 text-sm tracking-[0.15em] uppercase font-medium rounded-full border border-light-primary-1/40 hover:border-light-primary-1 hover:bg-light-primary-1/5 transition-all duration-300 cursor-pointer">
                  Buy Now
                </button>
              </div>
            )}

            <p className="text-center text-[11px] text-gray-400 tracking-wide pt-1">
              🔒 Secure checkout · Free returns within 30 days
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductPage;

// import { getProductBySlug } from "@/app/_lib/actions/product-actions";
// import ProductImages from "@/app/_components/common/ProductImages";
// import { ProductImage } from "@/app/types/painting";

// const ProductPage = async (props: { params: Promise<{ slug: string }> }) => {
//   const { slug } = await props.params;
//   console.log(props);
//   console.log(slug);

//   const product = await getProductBySlug(slug);
//   console.log(product);
//   if (!product) return <p>No Product found</p>; // not found

//   if (!product.images) {
//     return <p>No images available</p>;
//   }

//   return (
//     <section className="bg-light-primary-4 p-4 grid grid-cols-1 md:grid-cols-5 flex-1 ">
//       {/* Images */}
//       <div className="col-span-2">
//         <ProductImages images={product?.images as ProductImage[]} />
//       </div>

//       {/* Details */}
//       <div className="col-span-2 p-5">
//         <h1>{product.name}</h1>
//         <p>{product.description}</p>
//       </div>
//       {/* CTA */}
//       <div className="col-span-1 p-5">
//         £{product.price.toString()}
//         <div className="flex flex-col">
//           <button className="bg-light-primary-1 w-full rounded-full p-3 text-white text-lg shadow-md hover:bg-light-primary-2 transition-colors hover:cursor-pointer">
//             Add to cart
//           </button>
//           <button className="bg-light-primary-1 w-full rounded-full p-3 text-white text-lg shadow-md hover:bg-light-primary-2 transition-colors hover:cursor-pointer">
//             Buy now
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ProductPage;
