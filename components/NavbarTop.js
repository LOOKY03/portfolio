import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav } from "reactstrap";

const NavbarTop = () => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <>
      <div className="max-w-screen-2xl mx-auto text-slate-300 fixed top-0 z-10 hidden lg:block">
        <div className="flex justify-between items-center pl-10 pr-10 py-2">
          <Link href="/">
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
            <Link href="#projects">
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

      <div className="lg:hidden ">
        <Navbar color="dark" dark fixed="top">
          <NavbarBrand className="me-auto">
            <Link href="/">
              <img
                src="/arvin-logo-png-transparent.png"
                className="h-10 cursor-pointer"
                alt=""
              />
            </Link>
          </NavbarBrand>
          <NavbarToggler onClick={toggleNavbar} className="me-2" />
          <Collapse isOpen={!collapsed} navbar>
            <Nav navbar>
              <Link href="#about">
                <h1 className="cursor-pointer p-2 px-3 text-xl rounded-md hover:bg-amber-800 text-slate-300">
                  About
                </h1>
              </Link>

              <Link href="#projects">
                <h1 className="cursor-pointer p-2 px-3 text-xl rounded-md hover:bg-amber-800 text-slate-300">
                  Projects
                </h1>
              </Link>
              <Link href={''}>
                <h1 className="cursor-pointer p-2 px-3 text-xl rounded-md hover:bg-amber-800 text-slate-300">
                  Blog
                </h1>
              </Link>
              <Link href={''}>
                <h1 className="cursor-pointer p-2 px-3 text-xl rounded-md hover:bg-amber-800 text-slate-300">
                  Contacts
                </h1>
              </Link>
            </Nav>
          </Collapse>
        </Navbar>
      </div>

      {/* <div class="p-2 space-y-2 bg-gray-600 rounded shadow w-12 fixed lg:hidden right-4 top-4 cursor-pointer z-10" onClick={()=>setIsOpen((prev) => !prev)}>
        <span class="block w-8 h-0.5 bg-gray-100 animate-pulse"></span>
        <span class="block w-8 h-0.5 bg-gray-100 animate-pulse"></span>
        <span class="block w-8 h-0.5 bg-gray-100 animate-pulse"></span>
      </div>
      <div className={isOpen ? "hidden" : "block bg-gray-600 text-white lg:hidden"}>
        <h4>About</h4>
        <h4>Projects</h4>
        <h4>Blog</h4>
        <h4>Contacts</h4>
      </div> */}
    </>
  );
};

export default NavbarTop;
