"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const ActiveLink = ({ children, className, href }) => {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className={` ${className} ${
        href === pathname &&
        "underline decoration-2 decoration-red-700 underline-offset-4 font-bold"
      }`}
    >
      {children}
    </Link>
  );
};

export default ActiveLink;
