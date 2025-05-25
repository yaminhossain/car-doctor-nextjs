"use client";
import { useEffect, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import NavMenus from "./NavMenus";
import { IoIosCloseCircleOutline } from "react-icons/io";
import ActiveLink from "./ActiveLink";
import { useSession } from "next-auth/react";
import SignOutButton from "../SignOutButton/SignOutButton";
import axios from "axios";

const SmallDeviceNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);
  const clientOnlyUser = useSession();
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

  // Fetching user data
  useEffect(() => {
    axios.get("/api/users").then((data) => setUser(data));
  }, []);

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
            {NavMenus(user?.data?.role).map((menu, index) => (
              <li
                key={index}
                className="ms-7 my-7"
                onClick={() => navbarHandler()}
              >
                <ActiveLink href={menu.path}>{menu.pathName}</ActiveLink>
              </li>
            ))}
          </ul>
          {clientOnlyUser && (
            <>
              <div className="px-7 w-full" onClick={() => navbarHandler()}>
                <SignOutButton></SignOutButton>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default SmallDeviceNavbar;
