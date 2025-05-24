import Image from "next/image";
import Link from "next/link";
import React from "react";
import NavMenus from "./NavMenus";
import SmallDeviceNavbar from "./SmallDeviceNavbar";
import AppointmentSearchAndLogin from "./AppointmentSearchAndLogin";
import ActiveLink from "./ActiveLink";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";
import userData from "@/lib/userData";

const Navbar = async () => {
  const serverOnlyUser = await getServerSession(authOptions);
  // Serializing data in the server side for sending the data to client side as a props. We can also use spread operation like, {...user}
  // const serializedUser = user ? { user: user?.user } : null;
const user = userData(serverOnlyUser);










  return (
    <div className="fixed w-full z-40 ">
      <nav className="flex justify-between items-center max-w-7xl mx-auto py-2 px-2 shadow-xs bg-white ">
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
          <AppointmentSearchAndLogin></AppointmentSearchAndLogin>
          {/* <AppointmentSearchAndLogin
            user={serializedUser}
          ></AppointmentSearchAndLogin> */}
          <SmallDeviceNavbar></SmallDeviceNavbar>
        </div>
      </nav>

    </div>
  );
};

export default Navbar;
