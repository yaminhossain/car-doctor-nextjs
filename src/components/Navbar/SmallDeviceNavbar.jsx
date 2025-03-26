"use client";
import { useEffect, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import NavMenus from "./NavMenus";
import Link from "next/link";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";
import ActiveLink from "./ActiveLink";

const SmallDeviceNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navbarHandler = () => {
    setIsOpen(!isOpen);
    // console.log("Navbar Clicked", isOpen);
  };
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"; // Disable scrolling
    } else {
      document.body.style.overflow = "auto"; // Enable scrolling again
    }

    return () => {
      document.body.style.overflow = "auto"; // Cleanup function in case navbar unmounts
    };
  }, [isOpen]);
  // dummy user
  const user = true;

  return (
    <div className="block lg:hidden px-4 lg:px-0">
      <button onClick={navbarHandler}>
        <AiOutlineMenu className="size-6 cursor-pointer pt-1" />
      </button>

      {/* nav bar */}
      <div
        className={`${
          isOpen ? " right-0 " : " -right-full"
        } fixed h-dvh top-0 w-full bg-black/30 transition-all delay-75`}
        onClick={navbarHandler}
      >
        {/* small  device navbar menus */}
        <div
          className="bg-white w-[75%] h-dvh absolute right-0 z-50"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={() => navbarHandler()}
            className="mt-5 ms-auto mr-2 block"
          >
            <IoIosCloseCircleOutline className="size-8" />
          </button>

          <ul>
            {NavMenus.map((menu, index) => (
              <li
                key={index}
                className="ms-7 my-7"
                onClick={() => navbarHandler()}
              >
                <ActiveLink href={menu.path}>{menu.pathName}</ActiveLink>
              </li>
            ))}
          </ul>
          {user ? (
            <Link
              href={"/user-profile"}
              className="flex items-center gap-2 ms-7 mt-7"
              onClick={() => navbarHandler()}
            >
              <FaRegUser className="size-7 border rounded-full p-2" />
              <p>Profile</p>
            </Link>
          ) : (
            <button
              className="button-outline-red ms-7"
              onClick={() => navbarHandler()}
            >
              Log In
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default SmallDeviceNavbar;
