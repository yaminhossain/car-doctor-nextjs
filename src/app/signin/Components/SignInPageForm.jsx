"use client";
import { useForm } from "react-hook-form";

const SignInPageForm = () => {
  const { register, handleSubmit } = useForm();

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
        <input
          {...register("password")}
          className="border border-gray-300 p-4 w-full  rounded-lg mt-3 focus:outline-0"
          placeholder="Enter your password"
          type="password"
        />
      </div>
      <button type="submit" className="button-solid-red w-full">
        Sign In
      </button>
    </form>
  );
};

export default SignInPageForm;
