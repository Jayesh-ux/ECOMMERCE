import { simplifiedProduct } from "../interface";
import { client } from "../pages/api/sanity";
import ThreeDCardDemo from "./ThreeDCardDemo";
async function getData(){
  const query = `*[_type == "product"] | order(_createdAt desc) {
    _id,
    price,
    name,
    "slug": slug.current,
    "categoryName": category->name,
    "imageUrl": images[0].asset->url,
  }`;
  const data = await client.fetch(query);

  return data;
}


export default async function ColumnScroll() {
  const data: simplifiedProduct[] = await getData();


   return (
    <div className="pr-6 pl-2 flex overflow-x-auto snap-x snap-mandatory w-full flex-row">
      {data.map((product) => (
        <div key={product._id} className="w-1/2 sm:w-1/3 snap-item flex-shrink-0 mr-4 sm:mr-3">
          <ThreeDCardDemo product={product} />
        </div>
      ))}
    </div>
  );
}
