"use client";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import PasswordValidation from "./PasswordValidation";

const SignUpPageForm = () => {
  const { register, handleSubmit } = useForm();

  // ========Password field value============
  const [passwordValue, setPasswordValue] = useState("");
  console.log(passwordValue);

  // =======Password validity check for all validation========
  const [isValidPassword, setIsValidPassword] = useState(false);
  console.log("Password Valid", isValidPassword);

  // Form submission handler
  const formHandler = (data) => console.log(data);

  // ==========Password Field on Focus=================
  const passwordFieldHandled = (e) => {
    setPasswordValue(e.target.value);
  };
  // ==========Confirm Password Field Event Handler=================
  const confirmPasswordFieldHandled = (e) => {
    const confirmPasswordValue = e.target.value;
    // -----Setting Password validity-----
    if (
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/.test(
        passwordValue
      ) &&
      passwordValue === confirmPasswordValue
    ) {
      setIsValidPassword(true);
    } else {
      setIsValidPassword(false);
    }
  };
  return (
    <form onSubmit={handleSubmit(formHandler)} className="py-4">
      {/* =====name field====== */}
      <div className="mb-6">
        <label className="my-3 font-semibold text-gray-700">Name</label> <br />
        <input
          {...register("name")}
          className="border border-gray-300 p-4 w-full rounded-lg mt-3 focus:outline-0"
          placeholder="Enter your name"
          type="text"
        />
      </div>
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
          placeholder="Enter a strong password"
          type="password"
          onChange={passwordFieldHandled}
        />
      </div>
      {/* ==========Password Validation=============== */}
      <PasswordValidation passwordValue={passwordValue}></PasswordValidation>

      {/* ========confirm password field====== */}
      <div className="my-6">
        <label className="my-3 font-semibold text-gray-700">
          Confirm Password
        </label>{" "}
        <br />
        <input
          {...register("confirmPassword")}
          className="border border-gray-300 p-4 w-full  rounded-lg mt-3 focus:outline-0"
          placeholder="Enter your password again"
          type="password"
          onChange={confirmPasswordFieldHandled}
        />
        {isValidPassword ? (
          <p className="text-green-400 mt-1.5">Good to go!</p>
        ) : (
          <p className="text-red-400 mt-1.5">Password did not match!</p>
        )}
      </div>
      {/* ===========Sign Up button======================= */}
      {isValidPassword ? (
        <button type="submit" className="button-solid-red w-full">
          Sign Up
        </button>
      ) : (
        <button
          type="submit"
          className="bg-[#ff3811] opacity-50 py-4 rounded-md text-white font-bold cursor-not-allowed w-full"
          disabled
        >
          Sign Up
        </button>
      )}
    </form>
  );
};

export default SignUpPageForm;
