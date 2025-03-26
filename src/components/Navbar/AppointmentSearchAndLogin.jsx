"use client";
import { LuCalendarClock } from "react-icons/lu";
import { IoSearch } from "react-icons/io5";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { FaRegUser } from "react-icons/fa";
const AppointmentSearchAndLogin = () => {
  const router = useRouter();
  const searchHandler = () => {
    router.push("/services");
  };
  //dummy user
  const user = true;

  return (
    <div className="flex justify-baseline items-center gap-5">
      <LuCalendarClock className="size-6" />
      <button onClick={searchHandler} className="cursor-pointer">
        <IoSearch className="size-6 " />
      </button>
      {user ? (
        <Link href={"/user-profile"} className="hidden lg:block">
          <FaRegUser className="size-7 border rounded-full p-2" />
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
  );
};

export default AppointmentSearchAndLogin;
