import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="max-w-screen-2xl mx-auto text-white fixed top-0 z-10">
      <div className="flex justify-between items-center pl-10 pr-10 py-2">
        <Link href='/'>
        <img
          className="h-16 cursor-pointer fixed top-5 left-0 pl-10"
          src="/arvin-logo-png-transparent.png"
          alt=""
        />
        </Link>
       
        <div className="flex space-x-5 fixed right-10 top-5">
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
