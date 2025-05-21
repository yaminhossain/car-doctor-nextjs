"use client";
import { LuCalendarClock } from "react-icons/lu";
import { IoSearch } from "react-icons/io5";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { FaRegUser } from "react-icons/fa";
import SignOutButton from "../SignOutButton/SignOutButton";
import { useSession } from "next-auth/react";
const AppointmentSearchAndLogin = () => {
  // Accessing the session data using NextAuth's useSession() hook. Works for both social providers and credentials provider
  const clientOnlyUser = useSession();
  const router = useRouter();
  const searchHandler = () => {
    router.push("/services");
  };
  // console.log("=======Server only user data======", user); // Not required as this is a client component and useSession() is providing the session data
  return (
    <div className="flex justify-baseline items-center gap-5">
      <LuCalendarClock className="size-6" />
      <button onClick={searchHandler} className="cursor-pointer">
        <IoSearch className="size-6 " />
      </button>
      {/* ---------IF user------ */}
      {clientOnlyUser.status === "authenticated" ? (
        <div>
          <SignOutButton></SignOutButton>
          <Link href={"/user-profile"} className="hidden lg:block">
            <FaRegUser className="size-7 border rounded-full p-2" />
          </Link>
        </div>
      ) : (
        <Link href={"/signin"}>
          {" "}
          <button className="button-outline-red ms-7">Log In</button>
        </Link>
      )}
    </div>
  );
};

export default AppointmentSearchAndLogin;
