"use client"
import { useShoppingCart } from "use-shopping-cart"
import { urlFor } from "../pages/api/sanity";

export interface ProductCart{
    name: string;
    description: string;
    price: number;
    currency: string;
    image: any;
}


export default function AddToBag({currency,description,image,name,price}: ProductCart) {
    const product ={
        name: name,
        description: description,
        price: price,
        currency: currency,
        image: urlFor(image).url(),
        id:"hgdghgy",
    };
    const {addItem} = useShoppingCart();
    return (
        <button onClick={() =>{
            addItem(product)
        }} className="px-12 py-A4 rounded-full bg-[#1ED760] font-bold text-white tracking-widest uppercase transform hover:scale-105 hover:bg-[#21e065] transition-colors duration-200">
            Add To Cart
        </button>
    )
}