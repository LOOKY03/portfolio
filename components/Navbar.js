import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="max-w-screen-2xl mx-auto text-white">
      <div className="flex justify-between items-center pl-10 pr-10 py-2">
        <img
          className="h-16 cursor-pointer"
          src="/arvin-logo-png-transparent.png"
          alt=""
        />
        <div className="flex space-x-5 ">
          <Link href="#about">
          <h1 className="cursor-pointer p-2 px-3 text-xl rounded-md hover:bg-amber-800">
            About
          </h1>
          </Link>
        <Link href='#projects'>
        <h1 className="cursor-pointer p-2 px-3 text-xl rounded-md hover:bg-amber-800">
            Projects
          </h1>
        </Link>
          
          <h1 className="cursor-pointer p-2 px-3 text-xl rounded-md hover:bg-amber-800">
            Blog
          </h1>
          <h1 className="cursor-pointer p-2 px-3 text-xl rounded-md hover:bg-amber-800">
            Contacts
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
