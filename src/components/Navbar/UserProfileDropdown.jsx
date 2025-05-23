"use client";
import userLogo from "@/../public/assets/logo/user logo.png";
import SignOutButton from "../SignOutButton/SignOutButton";
import { IoIosArrowDown } from "react-icons/io";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const UserProfileDropdown = ({ user }) => {
  const [isVisible, setIsVisible] = useState(false);
  const dropdownRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsVisible(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className=" flex flex-col items-center relative">
      {/* -----Dropdown button: User profile picture------ */}
      <div
        className="rounded-full h-[40px] w-[40px] relative cursor-pointer"
        onClick={() => setIsVisible(!isVisible)}
      >
        <Image
          src={user?.data?.user?.image ? user?.data?.user?.image : userLogo}
          fill
          className="rounded-full object-contain"
          alt="default user picture"
        />
        <IoIosArrowDown className="absolute bottom-1 right-1 bg-gray-600 text-white text-sm rounded-full hidden md:block" />
      </div>
      {/*-------------- Dropdown container with menus------------- */}
      <div
        className={`${
          isVisible ? " " : "hidden"
        } w-56 bg-white shadow-xl shadow-black absolute top-10 right-0 rounded-lg p-4 flex flex-col justify-center gap-3`}
        ref={dropdownRef}
      >
        <Link
          href={"/user-profile"}
          className="p-2 block rounded-md font-bold text-gray-600 shadow-md hover:bg-gray-50"
        >
          {user?.data?.user.name}
        </Link>
        <SignOutButton></SignOutButton>
      </div>
    </div>
  );
};

export default UserProfileDropdown;
