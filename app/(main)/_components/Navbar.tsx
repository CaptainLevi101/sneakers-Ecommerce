"use client";
import React, { useState } from "react";
import { GiRunningShoe } from "react-icons/gi";
import { CiHeart } from "react-icons/ci";
import { IoBagOutline } from "react-icons/io5";
import { HiOutlineBars3, HiXMark } from "react-icons/hi2";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Navbar = () => {
  return (
    <>
      <DesktopView />
      <MobileView />
    </>
  );
};

const DesktopView = () => {
  const router = useRouter();
  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50 lg:px-12 hidden md:block">
      <div className="w-full flex items-center justify-between py-4 px-6">
        <div className="text-red-500 text-2xl flex items-center">
          <GiRunningShoe className="mr-2" />
          <span className="font-bold">Sneakzy</span>
        </div>

        <div className="hidden md:flex space-x-4 lg:space-x-8">
          <Link
            href="#"
            className="text-gray-600 hover:text-red-500 font-medium"
          >
            Men
          </Link>
          <Link
            href="#"
            className="text-gray-600 hover:text-red-500 font-medium"
          >
            Women
          </Link>
          <Link
            href="#"
            className="text-gray-600 hover:text-red-500 font-medium"
          >
            Kids
          </Link>
        </div>

        <div className="hidden md:block">
          <input
            type="text"
            placeholder="Search..."
            className="px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-red-400"
          />
        </div>

        <div className="flex items-center space-x-4">
          <button className="p-2 rounded-full hover:bg-gray-100">
            <CiHeart className="text-2xl text-gray-800 font-medium" />
          </button>
          <button className="p-2 rounded-full hover:bg-gray-100">
            <IoBagOutline className="text-2xl text-gray-600 font-medium" />
          </button>
          <button
            className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600"
            onClick={() => router.push("/login")}
          >
            Sign In
          </button>
        </div>
      </div>
    </nav>
  );
};
const MobileView = () => {
  const [openSideBar, setOpenSideBar] = useState(false);

  const handleSideMenu = () => {
    setOpenSideBar((prev) => !prev);
  };

  const router = useRouter();

  return (
    <>
      {/* Mobile Navbar */}
      <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50 md:hidden">
        <div className="w-full flex items-center justify-between py-4 px-6">
          {/* Logo */}
          <div className="text-red-500 text-2xl flex items-center">
            <GiRunningShoe className="mr-2" />
            <span className="font-bold">Sneakzy</span>
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-full hover:bg-gray-100">
              <CiHeart className="text-2xl text-gray-800" />
            </button>
            <button className="p-2 rounded-full hover:bg-gray-100">
              <IoBagOutline className="text-2xl text-gray-800" />
            </button>
            <button
              className="p-2 rounded-full hover:bg-gray-100"
              onClick={handleSideMenu}
            >
              {openSideBar ? (
                <HiXMark className="text-2xl" />
              ) : (
                <HiOutlineBars3 className="text-2xl" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Sidebar Menu */}
      <div
        className={`md:hidden fixed top-0 right-0 h-full w-64 bg-white shadow-md z-40 transform ${
          openSideBar ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="flex flex-col h-full p-6">
          <h2 className="text-xl font-bold mb-6">Menu</h2>
          <a
            href="#"
            className="py-3 text-gray-700 hover:text-red-500 font-medium"
          >
            Men
          </a>
          <a
            href="#"
            className="py-3 text-gray-700 hover:text-red-500 font-medium"
          >
            Women
          </a>
          <a
            href="#"
            className="py-3 text-gray-700 hover:text-red-500 font-medium"
          >
            Kids
          </a>

          <button
            className=" bg-red-500 mt-4
           text-white px-6 py-2
            rounded-lg hover:bg-red-600"
            onClick={() => router.push("/login")}
          >
            Sign In
          </button>
        </div>
      </div>

      {/* Background Overlay */}
      {openSideBar && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={handleSideMenu}
        />
      )}
    </>
  );
};

export default Navbar;
