import { paintings } from "@/app/mock_data/data/paintings";

const ProductPage = async (props: { params: Promise<{ slug: string }> }) => {
  const { slug } = await props.params;
  console.log(props);
  console.log(slug);



 
 

  return <div className="h-full flex-center" >  {paintings.filter((painting) => painting.slug === slug).map((painting) => (
      <h1 key={painting.id}>{painting.name}</h1>
    ))}
  </div>;
};

export default ProductPage;
