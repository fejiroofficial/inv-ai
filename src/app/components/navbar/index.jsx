"use client";
import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import Logo from "../../asset/svg/INV.AI (1).svg";
import menu from "../../asset/svg/menu.svg";
import Image from "next/image";
import Button from "../button";
import Link from "next/link";

const NavBar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <nav className="relative ">
      <div className=" w-[85%] flex flex-row items-center justify-between rounded-[12px] border-[0.5px] border-[#AAAAAA] fixed top-8 left-1/2 -translate-x-1/2 z-50  bg-[#E2E2E2] md:hidden px-2  py-4 ">
        <Link href="/" className="cursor-pointer">
          <Image src={Logo} alt="Logo" height={20} />
        </Link>
        <button
          className=" lg:hidden"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          <Image src={menu} alt="menu-icon" width={30} height={30} />
        </button>
      </div>

      {isMenuOpen && (
        <div className="fixed inset-0 bg-[#E2E2E2] bg-opacity-80 flex justify-center z-50">
          <div className="flex flex-col justify-between items-center relative top-0 rounded-lg shadow-lg w-full h-1/2 p-6">
            <button
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
              onClick={toggleMenu}
              aria-label="Close Menu"
            >
              <AiOutlineClose size={24} />
            </button>
            <ul className="space-y-6 text-center ">
              <li>
                <a
                  href="#features"
                  className="text-[#2B2B2B] normal"
                  onClick={toggleMenu}
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#howItWorks"
                  className="block text-[#2B2B2B] normal"
                  onClick={toggleMenu}
                >
                  How it Works
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="block text-[#2B2B2B] normal"
                  onClick={toggleMenu}
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="block text-[#2B2B2B] normal"
                  onClick={toggleMenu}
                >
                  FAQ
                </a>
              </li>
              <div className="block lg:hidden">
                <Button className="bg-gradient-to-b from-[#000000] to-[#444444] border border-[#666666] text-[#F9F9F9] normal px-3 py-3 lg:py-4 max-w-[170px] rounded-lg cursor-pointer">
                  Start Free Trial
                </Button>
              </div>
            </ul>
          </div>
        </div>
      )}
      <div className="hidden md:flex md:flex-row md:items-center md:justify-between md:w-[85%] xl:md:w-[60%] rounded-[20px] md:border-[0.5px] md:border-[#AAAAAA] bg-[#E2E2E2] md:fixed md:top-8 md:left-1/2 -translate-x-1/2 z-50 md:px-6 py-8 lg:py-10 max-h-[42px]">
        <Link href="/" className="cursor-pointer">
          <Image src={Logo} alt="Logo" />
        </Link>
        <ul className="flex flex-row items-center justify-center gap-6 lg:gap-8">
          <li>
            <a
              href="#features"
              className=" text-[#2B2B2B] normal hover:text-[#] text-base font-medium"
            >
              Features
            </a>
          </li>
          <li>
            <a
              href="#howItWorks"
              className=" text-[#2B2B2B] normal hover:text-[#] text-base font-medium"
            >
              How it Works
            </a>
          </li>
          <li>
            <a
              href="#pricing"
              className=" text-[#2B2B2B] normal hover:text-[#] text-base font-medium"
            >
              Pricing
            </a>
          </li>
          <li>
            <a
              href="#faq"
              className=" text-[#2B2B2B] normal hover:text-[#] text-base font-medium"
            >
              FAQ
            </a>
          </li>
        </ul>

        <Button className="bg-gradient-to-b from-[#000000] to-[#444444] border border-[#666666] text-[#F9F9F9] normal px-3 py-3 lg:py-4 max-w-[170px] rounded-lg cursor-pointer">
          Start Free Trial
        </Button>
      </div>
    </nav>
  );
};

export default NavBar;
