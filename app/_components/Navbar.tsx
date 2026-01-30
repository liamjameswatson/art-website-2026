"use client";
import Link from "next/link";
import Logo from "@/app/_components/Logo";
import { FiSearch, FiShoppingBag, FiUser } from "react-icons/fi";
import { FiMenu } from "react-icons/fi";
import { useState, useRef } from "react";

const mainNav = [
  { title: "Creations", link: "/creations" },
  { title: "Collections", link: "/collections" },
  { title: "About", link: "/about" },
  { title: "Contact", link: "/contact" },
];

const Navbar = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [searchIsVisible, setSearchIsVisible] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  function handleSearch() {
    setSearchIsVisible(!searchIsVisible);
    inputRef.current?.focus();
  }
  return (
    <>
      <nav className="bg-light-primary-4 font-inter flex-between py-2 px-4 rounded-md md:px-12 relative">
        <div
          className={`hover:scale-105 transition-all z-30 ${mobileMenu && "invert"}`}
        >
          <Logo />
        </div>
        <ul
          className={`hidden lg:flex gap-12 ${searchIsVisible ? "opacity-0 duration-700 ease-out" : "opacity-100"} transition-all duration-800 ease-in origin-left`}
        >
          {mainNav.map((link) => (
            <li key={link.title}>
              <Link
                className="p-2 hover:bg-light-primary-1 rounded-md hover:text-white transition-all"
                href={link.link}
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
        <div>
          <ul
            className={`flex-center gap-3 border-light-primary-1 border-2 rounded-md p-2 relative z-20 ${mobileMenu && "text-white border-white z-100"}`}
          >
            <li
              className="hover:cursor-pointer hover:scale-105 transition-all"
              onClick={handleSearch}
            >
              <FiSearch />
            </li>
            <li className="hover:cursor-pointer hover:scale-105 transition-all">
              <FiUser />
            </li>
            <li className="hover:cursor-pointer hover:scale-105 transition-all">
              <FiShoppingBag />
            </li>
            <li
              className="hover:cursor-pointer hover:scale-105 transition-all lg:hidden"
              onClick={() => setMobileMenu((prev) => !prev)}
            >
              <FiMenu />
            </li>
          </ul>

          {/* Search bar */}
          <div>
            <input
              ref={inputRef}
              className={`${searchIsVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"} absolute bg-light-primary-4 w-1/2 md:w-1/3 py-2 top-1/2 left-1/2 z-20 -translate-x-1/2 -translate-y-1/2  transition-all duration-700 ease-out origin-right rounded-md px-4 shadow-sm shadow-light-primary-3`}
              placeholder=".... "
            />
            <button className="">Search</button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenu && (
        <div
          className="absolute w-screen h-screen bg-black top-0 left-0 overflow-hidden flex-center flex-col gap-4 text-2xl z-10
        "
        >
          {mainNav.map((link) => (
            <li key={link.title} className="">
              <Link
                onClick={() => setMobileMenu(false)}
                className="p-2 hover:bg-light-primary-1 rounded-md hover:text-white transition-all text-white"
                href={link.link}
              >
                {link.title}
              </Link>
            </li>
          ))}
        </div>
      )}
    </>
  );
};

export default Navbar;
