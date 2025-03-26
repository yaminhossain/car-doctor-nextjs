import Image from "next/image";
import Link from "next/link";
import React from "react";
import NavMenus from "./NavMenus";
import SmallDeviceNavbar from "./SmallDeviceNavbar";
import AppointmentSearchAndLogin from "./AppointmentSearchAndLogin";

const Navbar = () => {
  return (
    <nav className=" flex justify-between items-center max-w-7xl mx-auto py-8 overflow-hidden">
      <Link href={"/"}>
        <Image
          src={"/assets/logo/logo.svg"}
          height={"107"}
          width={"80"}
          alt="logo"
        ></Image>
      </Link>
      <ul className="hidden lg:flex" >
        {NavMenus.map((menu, index) => (
          <li key={index}>
            <Link href={menu.path} className="mx-5">
              {menu.pathName}
            </Link>
          </li>
        ))}
      </ul>
      <AppointmentSearchAndLogin></AppointmentSearchAndLogin>
      <SmallDeviceNavbar></SmallDeviceNavbar>
    </nav>
  );
};

export default Navbar;
