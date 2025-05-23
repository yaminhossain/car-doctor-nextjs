"use client";
import { signOut } from "next-auth/react";

const SignOutButton = () => {
  return (
    <button className="button-outline-red w-full" onClick={() => signOut()}>
      Log out
    </button>
  );
};

export default SignOutButton;
