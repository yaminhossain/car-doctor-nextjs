"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { LuEyeClosed } from "react-icons/lu";
import { FaEye } from "react-icons/fa6";

const SignInPageForm = () => {
  const { register, handleSubmit } = useForm();
  const [passwordSeen, setPasswordSeen] = useState(false);

  // Form submission handler
  const formHandler = (data) => console.log(data);
  return (
    <form onSubmit={handleSubmit(formHandler)} className="py-4">
      {/* =====email field====== */}
      <div>
        <label className="my-3 font-semibold text-gray-700">Email</label> <br />
        <input
          {...register("email")}
          className="border border-gray-300 p-4 w-full rounded-lg mt-3 focus:outline-0"
          placeholder="Enter your email"
          type="email"
        />
      </div>
      {/* =====password field====== */}
      <div className="my-6">
        <label className="my-3 font-semibold text-gray-700">Password</label>{" "}
        <br />
        <div className="relative mt-3">
          <input
            {...register("password")}
            className="border border-gray-300 p-4 w-full  rounded-lg focus:outline-0"
            placeholder="Enter your password"
            type={`${passwordSeen ? "text" : "password"}`}
          />
          {passwordSeen ? (
            <div onClick={() => setPasswordSeen(false)}>
              <FaEye className="text-xl md:text-2xl text-gray-800 absolute right-2 bottom-1/2 top-1/2 -translate-y-1/2 cursor-pointer" />
            </div>
          ) : (
            <div onClick={() => setPasswordSeen(true)}>
              <LuEyeClosed className="text-xl md:text-2xl text-gray-800 absolute right-2 bottom-1/2 top-1/2 -translate-y-1/2 cursor-pointer" />
            </div>
          )}
        </div>
      </div>
      <button type="submit" className="button-solid-red w-full">
        Sign In
      </button>
    </form>
  );
};

export default SignInPageForm;
