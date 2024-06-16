import React from "react";
import { client } from "../../pages/api/sanity";
import { fullProduct } from "../../interface";
import ImageGallery from "../../components/ImageGallery";
import { Truck } from "lucide-react";
import AddToBag from "../../components/AddToBag";

async function getData(slug: string) {
    const query = `*[_type == "product" && slug.current == "${slug}"][0]{
        _id,
        price,
        name,
        description,
        images,
        "slug": slug.current,
        "categoryName": category->name,
    }`;

    const data = await client.fetch(query);

    return data;

}

export default async function ProductPage({ params }: { params: { slug: string }; }) {
    const data: fullProduct = await getData(params.slug)
    return (
        <div className="bg-white">
            <div className="mx-auto max-w-screen-xl px-4 md:px-8">
                <div className="grid gap-8 md:grid-cols-2">
                    <ImageGallery images={data.images} />
                    <div className="md:py-8">
                        <div className="mb-2 md:mb-3">
                            <span className="mb-0.5 inline-block text-gray-500">
                                {data.categoryName}
                            </span>
                            <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl">{data.name}</h2>
                        </div>
                        <div className="mb-4">
                            <div className="flex items-end gap-2">
                                <span className="text-xl font-bold text-gray-800 md:text-2xl">
                                    ${data.price}
                                </span>
                                <span className="mb-0.5 text-red-500 line-through">
                                    ${data.price + 30}
                                </span>
                            </div>
                            <div className="mb-6 flex items-center gap-2 text-gray-500">
                                <Truck />
                                <span className="text-sm text-gray-500">
                                    Speed Delivery On Request
                                </span>
                            </div>
                            <div className="flex gap-2.5">
                                <AddToBag currency="INR" description={data.description} image={data.images[0]} name={data.name} price={data.price} key={data._id} />
                                <button className="px-12 py-4 rounded-full bg-[#1ED760] font-bold text-white tracking-widest uppercase transform hover:scale-105 hover:bg-[#21e065] transition-colors duration-200">
                                    CheckOut Now
                                </button>
                            </div>
                            <p className="text-base mt-12 text-gray-500 tracking-wide">{data.description}</p>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}
