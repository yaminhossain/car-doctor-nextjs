"use client";
import { signIn } from "next-auth/react";
import { FaFacebookF, FaGithub, FaGoogle } from "react-icons/fa";

const SocialLogin = () => {
  const socialLoginHandler = (socialService) => {
    signIn(socialService);
  };
  return (
    <div className="mt-3">
      <p className="text-center text-gray-600">Or, Sign in with</p>
      <div className="flex justify-center mt-5">
        {/* ----------facebook---------- */}
        <div className="relative group">
          <button
            className="rounded-full p-2 border border-gray-300 cursor-pointer hover:bg-[#ff3811] hover:text-white"
            onClick={() => socialLoginHandler("facebook")}
          >
            <FaFacebookF className="text-3xl text-gray-700 hover:text-white" />
          </button>
          {/*-------- tool tips---- */}
          <div className="absolute bottom-full left-1/2 -translate-x-1/2 bg-amber-500 text-white py-1 px-3 mb-2 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            <p>Facebook</p>
          </div>
        </div>
        {/* -----------linkedin---------------- */}
        <div className="relative group">
          <button className="rounded-full p-2 border border-gray-300 cursor-pointer hover:bg-[#ff3811] hover:text-white mx-4">
            <FaGithub className="text-3xl text-gray-700 hover:text-white" />
          </button>
          {/*-------- tool tips---- */}
          <div className="absolute bottom-full left-1/2 -translate-x-1/2 bg-amber-500 text-white py-1 px-3 mb-2 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            <p>Github</p>
          </div>
        </div>
        {/* ------------Google------------- */}
        <div className="relative group">
          <button
            className="rounded-full p-2 border border-gray-300 cursor-pointer hover:bg-[#ff3811] hover:text-white"
            onClick={() => socialLoginHandler("google")}
          >
            <FaGoogle className="text-3xl text-gray-700 hover:text-white" />
          </button>
          {/*-------- tool tips---- */}
          <div className="absolute bottom-full left-1/2 -translate-x-1/2 bg-amber-500 text-white py-1 px-3 mb-2 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            <p>Google</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialLogin;
