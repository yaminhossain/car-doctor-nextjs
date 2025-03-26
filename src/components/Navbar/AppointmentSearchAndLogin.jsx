"use client";
import { LuCalendarClock } from "react-icons/lu";
import { IoSearch } from "react-icons/io5";
import { useRouter } from 'next/navigation'
const AppointmentSearchAndLogin = () => {
  const router = useRouter();
  const searchHandler = () => {
    router.push("/services");
  };
  return (
    <div className="flex justify-center items-center gap-5">
      <LuCalendarClock />
      <button onClick={searchHandler} className="cursor-pointer">
        <IoSearch />
      </button>
      <button className="button-outline-red">Log In</button>
    </div>
  );
};

export default AppointmentSearchAndLogin;
