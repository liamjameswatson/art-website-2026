import { paintings } from "@/app/mock_data/data/paintings";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <h1>Hello Lo!</h1>;
      <section>
        {paintings.map((painting) => (
          <div key={painting.id}>
            <h1>{painting.name}</h1>
            {painting.images.map((image) => (
              <Image
                key={image.url}
                src={image.url}
                alt={image.alt}
                width={500}
                height={500}
              />
            ))}
          </div>
        ))}
      </section>
    </>
  );
}
