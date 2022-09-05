import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav } from "reactstrap";

const NavbarTop = () => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <>
      <div className=" hidden lg:block">
        <Navbar fixed="top" className="max-w-7xl mx-auto">
          <Link href="/">
            <img
              className="h-16 cursor-pointer mt-2"
              src="/arvin-logo-png-transparent.png"
              alt=""
            />
          </Link>

          <Nav className="ml-auto">
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
            <Link href={""}>
              <h1 className="cursor-pointer p-2 px-3 text-xl rounded-md hover:bg-amber-800 text-slate-300">
                Blog
              </h1>
            </Link>
            <Link href={""}>
              <h1 className="cursor-pointer p-2 px-3 text-xl rounded-md hover:bg-amber-800 text-slate-300">
                Contacts
              </h1>
            </Link>
          </Nav>
        </Navbar>
      </div>

      <div className="lg:hidden ">
        <Navbar color="dark" dark fixed="top" className="opacity-80">
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
              <Link href=''>
                <h1 className="cursor-pointer p-2 px-3 text-xl rounded-md hover:bg-amber-800 text-slate-300">
                  Blog
                </h1>
              </Link>
              <Link href="">
                <h1 className="cursor-pointer p-2 px-3 text-xl rounded-md hover:bg-amber-800 text-slate-300">
                  Contacts
                </h1>
              </Link>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    </>
  );
};

export default NavbarTop;
