import Image from "next/image";
import Link from "next/link";
import React from "react";
import NavMenus from "./NavMenus";
import SmallDeviceNavbar from "./SmallDeviceNavbar";
import AppointmentSearchAndLogin from "./AppointmentSearchAndLogin";
import ActiveLink from "./ActiveLink";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";

const Navbar = async() => {
  const user = await getServerSession(authOptions);
  return (
    <div className="fixed w-full z-40 ">
      <nav className=" flex justify-between items-center max-w-7xl mx-auto py-2 px-2 overflow-hidden shadow-xs bg-white">
        <Link href={"/"}>
          <Image
            src={"/assets/logo/logo.svg"}
            height={"107"}
            width={"80"}
            alt="logo"
          ></Image>
        </Link>
        <ul className="hidden lg:flex">
          {NavMenus.map((menu, index) => (
            <li key={index}>
              <ActiveLink href={menu.path} className={`mx-5`}>
                {menu.pathName}
              </ActiveLink>
            </li>
          ))}
        </ul>
        <div className="flex justify-center items-center">
          <AppointmentSearchAndLogin user={user}></AppointmentSearchAndLogin>
          <SmallDeviceNavbar></SmallDeviceNavbar>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
