import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#151515] text-white">
      <div className="max-w-7xl mx-auto py-8 md:py-16 px-4 lg:py-32 grid grid-cols-2 lg:grid-cols-4 gap-6 place-items-start lg:place-items-center">
        <div className="">
          <Image
            src={"/assets/logo/logo.svg"}
            height={"107"}
            width={"80"}
            alt="logo"
          ></Image>
          <p className="font-extralight my-4 ">
            Edwin Diaz is a software and web technologies engineer, a life coach
            trainer who is also a serial .
          </p>
          <div className="flex justify-between max-w-40">
            <FaFacebook className="cursor-pointer text-xl" />
            <FaLinkedin className="cursor-pointer text-xl" />
            <FaInstagram className="cursor-pointer text-xl" />
            <FaXTwitter className="cursor-pointer text-xl" />
          </div>
        </div>

        <div className="">
          <h1 className="font-bold">About</h1>
          <div className="flex flex-col gap-3 mt-9">
            <Link href={"/"} className="font-extralight">
              Home
            </Link>
            <Link href={"/services"} className="font-extralight">
              Services
            </Link>
            <Link href={"/contact"} className="font-extralight">
              Contact
            </Link>
          </div>
        </div>

        <div className="">
          <h1 className="font-bold">Company</h1>
          <div className="flex flex-col gap-3 mt-9">
            <Link href={"/"} className="font-extralight">
              Why car doctor?
            </Link>
            <Link href={"/about"} className="font-extralight">
              About
            </Link>
          </div>
        </div>

        <div className="">
          <h1 className="font-bold">Support</h1>
          <div className="flex flex-col gap-3 mt-9">
            <Link href={"/"} className="font-extralight">
              Support Center
            </Link>
            <Link href={"/"} className="font-extralight">
              Feedback
            </Link>
            <Link href={"/"} className="font-extralight">
              Accessibility
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
