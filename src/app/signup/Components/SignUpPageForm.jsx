"use client";
import { useState } from "react";
import { set, useForm } from "react-hook-form";
import { FaRegCircleCheck, FaRegCircleXmark } from "react-icons/fa6";

const SignUpPageForm = () => {
  const { register, handleSubmit } = useForm();

  // ========password field value============
  const [passwordValue, setPasswordValue] = useState("");
  console.log(passwordValue);

  // =================password validity check. For all validation===========================
  const isValidPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/.test(passwordValue);
  if(isValidPassword) console.log("The password is valid");

  // Form submission handler
  const formHandler = (data) => console.log(data);

  // ==========Password Field on Focus=================
  const passwordFieldHandled = (e) => {
    setPasswordValue(e.target.value);
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
      {passwordValue.length > 0 && (
        <div>
          {/* -------validation 1----------- */}
          <div>
            {/^.{8,}$/.test(passwordValue) ? (
              <p className="text-green-400 flex items-center gap-2">
                <FaRegCircleCheck /> <span>At least 8 characters</span>
              </p>
            ) : (
              <p className="text-red-400 flex items-center gap-2">
                <FaRegCircleXmark /> <span>At least 8 characters</span>
              </p>
            )}
          </div>
          {/* --------validation 2----------- */}
          <div>
            {/^(?=.*[a-z]).*$/.test(passwordValue) ? (
              <p className="text-green-400 flex items-center gap-2">
                <FaRegCircleCheck /> <span>Lower case letters (a-z)</span>
              </p>
            ) : (
              <p className="text-red-400 flex items-center gap-2">
                <FaRegCircleXmark /> <span>Lower case letters (a-z)</span>
              </p>
            )}
          </div>
          {/* ----------validation 3---------- */}
          <div>
            {/^(?=.*[A-Z]).*$/.test(passwordValue) ? (
              <p className="text-green-400 flex items-center gap-2">
                <FaRegCircleCheck /> <span>Upper case letters (A-Z)</span>
              </p>
            ) : (
              <p className="text-red-400 flex items-center gap-2">
                <FaRegCircleXmark /> <span>Upper case letters (A-Z)</span>
              </p>
            )}
          </div>
          {/* ----------validation 4------------ */}
          <div>
            {/^(?=.*\d).*$/.test(passwordValue) ? (
              <p className="text-green-400 flex items-center gap-2">
                <FaRegCircleCheck /> <span>Numbers (0-9)</span>
              </p>
            ) : (
              <p className="text-red-400 flex items-center gap-2">
                <FaRegCircleXmark /> <span>Numbers (0-9)</span>
              </p>
            )}
          </div>
          {/* -------------validation 5------------- */}
          <div>
            {/^(?=.*[!@#$%^&*]).*$/.test(passwordValue) ? (
              <p className="text-green-400 flex items-center gap-2">
                <FaRegCircleCheck /> <span>Special characters (!@#$%^&*)</span>
              </p>
            ) : (
              <p className="text-red-400 flex items-center gap-2">
                <FaRegCircleXmark /> <span>Special characters (!@#$%^&*)</span>
              </p>
            )}
          </div>
        </div>
      )}
      {/* ===============Password validation ends here============== */}
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
        />
      </div>
      <button type="submit" className="button-solid-red w-full">
        Sign Up
      </button>
    </form>
  );
};

export default SignUpPageForm;
