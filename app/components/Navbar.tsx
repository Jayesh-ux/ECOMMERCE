"use client";
import React, { useContext, useState } from "react";
import { ShoppingBagIcon, MenuIcon, X, SearchIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MyThemeContext from "../components/myThemeContext";

const links = [
  { name: "Home", href: "/" },
  { name: "Men", href: "/Men" },
  { name: "Women", href: "/Women" },
  { name: "Teens", href: "/Teens" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const themeCtx = useContext(MyThemeContext);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleThemeHandler = () => {
    themeCtx.toggleThemeHandler();
  };

  return (
    <header className="p-4 border-b md:flex md:items-center md:justify-between">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center md:space-x-8 md:flex-row flex-col md:items-start">
            <Link href="/">
              <h1 className="text-xl sm:text-2xl md:text-4xl font-bold">
                Ecommerce
              </h1>
            </Link>
            <div className="hidden lg:flex items-center justify-center ml-4 mr-4">
              <input
                type="search"
                placeholder="Search..."
                className="rounded-full pl-4 pr-8 py-2 text-black text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 bg-gray-100 border border-gray-300"
              />
              <SearchIcon className="ml-2 mr-2 text-gray-100" size={16} />
            </div>
          </div>
          <div className="flex items-center">
            <button className="h-10 w-10 flex flex-col items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
              <ShoppingBagIcon />
              <span className="text-xs font-semibold">Cart</span>
            </button>
            <button
              className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 ml-4"
              onClick={toggleThemeHandler}
            >
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                Light/Dark
              </span>
            </button>
            <button
              className="h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary ml-4 block md:block lg:hidden"
              onClick={toggleMenu}
            >
              {isMenuOpen ? <X /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile and Medium menu */}
      <nav
        className={`mobile-menu fixed top-0 right-0 w-64 sm:w-72 h-screen z-50 bg-white shadow-lg overflow-auto transition duration-300 ease-in-out transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-end pt-6 pb-8 px-4">
          <button
            className="text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            onClick={toggleMenu}
          >
            <X size={24} />
          </button>
        </div>
        <ul className="space-y-4 px-4">
          {links.map((link, idx) => (
            <li key={idx}>
              <Link
                href={link.href}
                className={`text-lg font-semibold hover:text-gray-400 block text-black transition duration-100 px-4 py-2 ${
                  pathname === link.href
                    ? "bg-gray-200 rounded-md"
                    : "bg-transparent"
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Desktop menu */}
      <nav className="hidden lg:flex">
        <ul className="flex space-x-4">
          {links.map((link, idx) => (
            <li key={idx}>
              <Link
                href={link.href}
                className={`text-lg font-semibold hover:text-gray-400 transition duration-100 px-4 py-2 ${
                  pathname === link.href
                    ? "bg-gray-500 rounded-md"
                    : "bg-transparent"
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}