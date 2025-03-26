"use client";
import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import NavMenus from "./NavMenus";
import Link from "next/link";
const SmallDeviceNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navbarHandler = () => {
    setIsOpen(!isOpen);
    console.log("Navbar Clicked", isOpen);
  };

  return (
    <div className="block lg:hidden">
      <button onClick={navbarHandler}>
        <AiOutlineMenu className="size-5 cursor-pointer" />
      </button>
      {/* nav bar */}
      <div
        className={`${
          isOpen ? " right-0 " : " -right-full"
        } fixed h-dvh top-0 w-full bg-black/30 transition-all delay-150`}
        onClick={navbarHandler}
      >
        {/* small  device navbar menus */}
        <div
          className="bg-white  w-[75%] h-dvh absolute right-0 "
          onClick={(e) => e.stopPropagation()}
        >
          <ul>
            {NavMenus.map((menu, index) => (
              <li key={index} className="ms-7 my-7">
                <Link href={menu.path}>{menu.pathName}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SmallDeviceNavbar;
