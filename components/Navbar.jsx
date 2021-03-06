import Link from "next/link";
import React, { useState, useEffect } from "react";
import { getCategories } from "../services";

const Navbar = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
      getCategories().then((category) => setCategories(category));
    }, []);
  return (
    <div className="container mx-auto px-10 mb-8 ">
      <div className="w-full inline-block py-8 border-b">
        <div className="md:float-left block">
          <Link href="/">
            <span className="cursor-pointer text-4xl text-orange-600 font-bold">
              Blog
            </span>
          </Link>
        </div>
        <div className="hidden md:float-left md:contents">
          {categories.map((category, index) => (
            <Link key={index} href={`/category/${category.slug}`}>
              <span className="md:float-right mt-2 align-middle text-orange-600 ml-4 font-semibold cursor-pointer">
                {category.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
