import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import Link from "next/link";

export default function ThreeDCardDemo({ product }) {
  return (
    <CardContainer className="inter-var">
      <CardBody
        className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full max-w-lg h-auto rounded-xl p-6 border flex flex-col"
        style={{ justifyContent: 'space-between' }}
      >
        <div>
          <div className="flex justify-center m-4">
            <CardItem
              translateZ="50"
              className="text-lg sm:text-xl font-bold text-neutral-600 dark:text-white mb-4 text-center text-ellipsis overflow-hidden"
            >
              {product.name}
            </CardItem>
          </div>
          <CardItem translateZ="100" className="w-full">
            <Image
              src={product.imageUrl}
              width={500}
              height={500}
              className="mx-auto mb-8 sm:mb-4 w-full max-h-96 object-cover rounded-xl group-hover/card:shadow-xl"
              alt="thumbnail"
            />
          </CardItem>
        </div>
        <div className="flex justify-center items-center mt-4">
          <CardItem
            translateZ={20}
            className="sm:px-4 px-2 py-2 rounded-xl text-xs sm:text-sm font-normal dark:text-white mr-2 sm:mr-4"
          >
            ${product.price}
          </CardItem>
          <Link
            href={`/product/${product.slug}`}
            target="_blank"
            className="sm:px-4 px-2 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-center rounded-full relative"
          >
            <span>Shop Now →</span>
            <div className="absolute inset-x-0 h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
          </Link>
        </div>
      </CardBody>
    </CardContainer>
  );
}