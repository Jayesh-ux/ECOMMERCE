import ThreeDCardDemo from "../components/ThreeDCardDemo";
import { simplifiedProduct } from "../interface";
import { client } from "../pages/api/sanity";

async function getData(category: string) {
  const query = `*[_type == "product" && category->name == "${category}"]{
    _id,
    "imageUrl": images[0].asset->url,
    price,
    name,
    "slug": slug.current,
    "categoryName": category->name,
  }`;
  const data = await client.fetch(query);
  return data;
}

export default async function CategoryPage({ params }: { params: { category: string } }) {
  const data: simplifiedProduct[] = await getData(params.category);
  return (
    <>
      <div className="pr-2 pl-2 flex overflow-x-auto snap-x snap-mandatory w-full flex-row m-4 gap-2">
        {data.map((product) => (
          <div
            key={product._id}
            className="snap-item flex-shrink-0 w-64 md:w-1/3 mx-2 my-4 p-2 rounded-lg shadow-md"
          >
            <ThreeDCardDemo product={product} />
          </div>
        ))}
      </div>
    </>
  );
}