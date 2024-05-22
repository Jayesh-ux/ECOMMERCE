import ImagesSliderServerComponent from "../components/ImagesSliderServerComponent";
import ColumnScroll from "../components/ColumnScroll";
import Category from "../components/Category";

export default function Home() {
  return (
    <div className=" pb-6 sm:pb-8 lg:pb-12">
      <ImagesSliderServerComponent />
      <section className="text-center m-4">
        <h1 className=" text-4xl font-bold ">Best Offers</h1>
        <ColumnScroll />
      </section>
      <section className="m-4 text-center">
        <h1 className="text-4xl font-bold ">Most Bought</h1>
        <ColumnScroll />
      </section>
      <div className="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 relative rounded-md border bg-grid-small-black/[0.1] dark:bg-grid-small-white/[0.1]">
        <Category />
      </div>
    </div>
  );
}