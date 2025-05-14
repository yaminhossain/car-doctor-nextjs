"use client";
import { LuCalendarClock } from "react-icons/lu";
import { IoSearch } from "react-icons/io5";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { FaRegUser } from "react-icons/fa";
import SignOutButton from "../SignOutButton/SignOutButton";
const AppointmentSearchAndLogin = ({ user }) => {
  const router = useRouter();
  const searchHandler = () => {
    router.push("/services");
  };
  console.log("=======================user info=============",user);
  return (
    <div className="flex justify-baseline items-center gap-5">
      <LuCalendarClock className="size-6" />
      <button onClick={searchHandler} className="cursor-pointer">
        <IoSearch className="size-6 " />
      </button>
      {/* ---------IF user------ */}
      {user ? (
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
