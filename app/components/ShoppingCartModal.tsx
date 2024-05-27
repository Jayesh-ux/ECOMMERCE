"use client";
import React, { useState } from "react";
import { Menu, ProductItem } from "../components/ui/navbar-menu";
import { cn } from "../../lib/utils";

export default function ShoppingCartModal() {
  return (
    <div>
      <Navbar />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div
      className={cn(
        "fixed top-10 inset-x-0 max-w-xs mx-auto z-50 p-2 pt-4 sm:max-w-sm md:max-w-md lg:max-w-lg",
        className
      )}
    >
      <Menu setActive={setActive}>
        <div className="flex flex-col mt-20">
          <div className="grid grid-cols-1 gap-2">
            <ProductItem
              title="Algochurn"
              href="https://www.google.com"
              src="https://www.google.com"
              description="Prepare for tech interviews like never before."
            />
            <ProductItem
              title="Tailwind Master Kit"
              href="https://www.google.com"
              src="https://www.google.com"
              description="Production ready Tailwind css components for your next project"
            />
            <ProductItem
              title="Moonbeam"
              href="https://www.google.com"
              src="https://www.google.com"
              description="Never write from scratch again. Go from idea to blog in minutes."
            />
            <ProductItem
              title="Rogue"
              href="https://www.google.com"
              src="https://www.google.com"
              description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
            />
          </div>
          <div className="flex justify-center mt-10">
            <button
              className={`bg-white px-4 py-2 text-black rounded-md hover:bg-green-500 hover:text-white transition duration-300 ease-in-out`} // Added hover styles
            >
              Checkout
            </button>
          </div>
        </div>
      </Menu>
    </div>
  );
}