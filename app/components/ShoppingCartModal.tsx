"use client";
import React, { useState } from "react";
import { Menu, ProductItem } from "../components/ui/navbar-menu";
import { cn } from "../../lib/utils";
import { useShoppingCart } from "use-shopping-cart";
import PhonePePayment from './PhonePePayment';


export default function ShoppingCartModal() {
  return (
    <div>
      <Navbar />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  const { cartCount, cartDetails, removeItem, totalPrice } = useShoppingCart();

  return (
    <div
      className={cn(
        "fixed top-10 inset-x-0 max-w-xs mx-auto z-50 p-2 pt-4 sm:max-w-sm md:max-w-md lg:max-w-lg",
        className
      )}
    >
      <Menu setActive={setActive}>
        <div className="flex flex-col mt-10 mb-10">
          <div className="text-center text-white text-xl font-bold pb-8">
            Shopping Cart
          </div>
          {cartCount === 0 ? (
            <h1 className=" text-center py-6">You Don't Have Any Items</h1>
          ) : (
            <>
              {Object.values(cartDetails ?? {}).map((entry) => (
                <div key={entry.id} className="grid grid-cols-1 gap-2">
                  <ProductItem
                    title={entry.name}
                    src={entry.image as string}
                    price={entry.price}
                    quantity={entry.quantity}
                  />
                  <button
                    onClick={() => removeItem(entry.id)}
                    className="font-medium hover:text-primary/80"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </>
          )}
        </div>
      </Menu>
      <div className=" bg-white border-t border-gray-200 px-4 py-6 sm:px-6">
        <div className="flex justify-between text-base font-medium text-gray-900">
          <p>Subtotal:</p>
          <p>${totalPrice}</p>
        </div>
        <p className="mt-0.5 text-sm text-gray-500">
          Shipping and Taxes are Calculated at Checkout
        </p>
      </div>
      <div className="flex justify-center mt-10">
        <PhonePePayment totalPrice={totalPrice} />
      </div>
    </div>
  );
}