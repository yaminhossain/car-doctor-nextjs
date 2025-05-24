"use client";
import { LuCalendarClock } from "react-icons/lu";
import { IoSearch } from "react-icons/io5";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useSession } from "next-auth/react";
import UserProfileDropdown from "./UserProfileDropdown";
import Image from "next/image";
import userLogo from "@/../public/assets/logo/user logo.png";
const AppointmentSearchAndLogin = () => {
  // Accessing the session data using NextAuth's useSession() hook. Works for both social providers and credentials provider
  const clientOnlyUser = useSession();
  // console.log(clientOnlyUser);
  const router = useRouter();
  const searchHandler = () => {
    router.push("/services");
  };
  // console.log("=======Server only user data======", user); // Not required as this is a client component and useSession() is providing the session data
  return (
    <>
      <div className="flex  items-center gap-5">
        <LuCalendarClock className="size-6" />
        <button onClick={searchHandler} className="cursor-pointer">
          <IoSearch className="size-6 " />
        </button>
        {/* ---------IF user------ */}
        {clientOnlyUser.status === "authenticated" ? (
          <>
            {/* ----------user section for large device---------- */}
            <div className="hidden md:block">
              <UserProfileDropdown user={clientOnlyUser}></UserProfileDropdown>
            </div>
            {/* ----------user section for small device---------- */}
            <Link href={"/user-profile"}>
              <div className="rounded-full h-[30px] w-[30px] block md:hidden cursor-pointer relative">
                <Image
                  src={
                    clientOnlyUser?.data?.user?.image
                      ? clientOnlyUser?.data?.user?.image
                      : userLogo
                  }
                  fill
                  className="rounded-full object-contain"
                  alt="default user picture"
                />
              </div>
            </Link>
          </>
        ) : (
          <Link href={"/signin"}>
            {" "}
            <button className="button-outline-red ms-0 md:ms-7">Log In</button>
          </Link>
        )}
      </div>
    </>
  );
};

export default AppointmentSearchAndLogin;
