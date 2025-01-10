"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";


export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  // Show sidebar on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowSidebar(true);
      } else {
        setShowSidebar(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <header className="shadow-md  bg-gradient-to-r from-blue-400 to-purple-500 text-white">
        {/* Top Bar */}
        <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-2">
          <div className="overflow-hidden whitespace-nowrap">
            <div className="font-semibold text-sm animate-slide">
              <span className="mx-6">
                🚚 FREE DELIVERY ON ORDERS ABOVE RS.1500/- OTHERWISE RS.125 DELIVERY CHARGES
              </span>
              <span className="mx-6">🎉 SHOP NOW TO AVAIL EXCITING OFFERS AND DISCOUNTS!</span>
              <span className="mx-6">🛒 DONT MISS OUT ON OUR NEW ARRIVALS AVAILABLE NOW!</span>
            </div>
          </div>
        </div>

        {/* Main Navbar */}
        <div className="container mx-auto flex items-center justify-between p-4">
          {/* Logo */}
          <Link href={"/"}>
            <div className="text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:text-green-600">
              🚀Anas Hakeem🌟
            </div>
          </Link>
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
  <nav className="flex space-x-6 text-base">
    <Link href="/" className="hover:text-blue-500 transition duration-200">
      Home
    </Link>
    <Link href="/Categories/Product1" className="hover:text-blue-500 transition duration-200">
      Products
    </Link>
   
      <div className="relative group">
  <button className="hover:text-blue-500 transition duration-200">
    Categories
  </button>
  <div className="absolute hidden group-hover:flex flex-col shadow-md mt-2 py-2 bg-gradient-to-r from-blue-400 to-purple-500 text-white rounded-lg w-56">
    <Link href="/Categories/Electronics" className="block px-4 py-2 hover:bg-white hover:text-black rounded">
      Electronics
    </Link>
    <Link href="/Categories/Fashion" className="block px-4 py-2 hover:bg-white hover:text-black rounded">
      Fashion
    </Link>
    <Link href="/Categories/HomeAppliances" className="block px-4 py-2 hover:bg-white hover:text-black rounded">
      Home Appliances
    </Link>
    <Link href="/Categories/Sports&Fitness" className="block px-4 py-2 hover:bg-white hover:text-black rounded">
      Sports & Fitness
    </Link>
    <Link href="/Categories/Toys&Games" className="block px-4 py-2 hover:bg-white hover:text-black rounded">
      Toys & Games
    </Link>
    <Link href="/Categories/Health&Beauty" className="block px-4 py-2 hover:bg-white hover:text-black rounded">
      Health & Beauty
    </Link>
    <Link href="/Categories/Books&Stationery" className="block px-4 py-2 hover:bg-white hover:text-black rounded">
      Books & Stationery
    </Link>
    <Link href="/Categories/Food&Beverages" className="block px-4 py-2 hover:bg-white hover:text-black rounded">
      Food & Beverages
    </Link>
    <Link href="/Categories/Furniture" className="block px-4 py-2 hover:bg-white hover:text-black rounded">
      Furniture
    </Link>
    <Link href="/Categories/Pet&Supplies" className="block px-4 py-2 hover:bg-white hover:text-black rounded">
      Pet Supplies
    </Link>
    <Link href="/Categories/Tech&Gadgets" className="block px-4 py-2 hover:bg-white hover:text-black rounded">
      Tech & Gadgets
    </Link>
    <Link href="/Categories/Books&Learning" className="block px-4 py-2 hover:bg-white hover:text-black rounded">
      Books & Learning
    </Link>
  </div>
</div>

    <Link href="/blog" className="hover:text-blue-500 transition duration-200">
      Blog
    </Link>
    <Link href="/AboutUs" className="hover:text-blue-500 transition duration-200">
      About Us
    </Link>
    <Link href="/ContactUs" className="hover:text-blue-500 transition duration-200">
      Contact Us
    </Link>
  </nav>

            {/* Sign In and Sign Up Buttons */}
            <div className="flex space-x-4">
              <Link
                href="/Auth/signin"
                className="px-4 py-2 border border-blue-500 text-blue-500 rounded-full hover:bg-blue-500 hover:text-white transition duration-300"
              >
                Sign In
              </Link>
              <Link
                href="/Auth/Signup"
                className="px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-full hover:opacity-90 transition duration-300"
              >
                Sign Up
              </Link>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={toggleMenu}
            className="lg:hidden flex items-center justify-center p-2 rounded bg-blue-500 text-white hover:bg-blue-600"
          >
            <span className="material-icons">menu</span>
          </button>
        </div>

        {/* Mobile Navigation */}
        {menuOpen && (
          <div className="bg-gradient-to-r from-green-200 to-purple-500 text-white lg:hidden transition-transform duration-300">
            <nav className="flex flex-col space-y-4 p-4">
              <Link href="/" className="hover:text-blue-500 transition duration-200">
                Home
              </Link>
              <Link href="/Categories/Product1" className="hover:text-blue-500 transition duration-200">
                Products
              </Link>
              <Link href="/blog" className="hover:text-blue-500 transition duration-200">
                Blog
              </Link>
              <Link href="/AboutUs" className="hover:text-blue-500 transition duration-200">
                About Us
              </Link>
              <Link href="/ContactUs" className="hover:text-blue-500 transition duration-200">
                Contact Us
              </Link>
              {/* Mobile Sign In and Sign Up Buttons */}
              <Link
                href="/Auth/signin"
                className="mt-4 px-4 py-2 border border-blue-500 text-blue-500 rounded-full hover:bg-blue-500 hover:text-white transition duration-300"
              >
                Sign In
              </Link>
              <Link
                href="/Auth/Signup"
                className="mt-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-full hover:opacity-90 transition duration-300"
              >
                Sign Up
              </Link>
            </nav>
          </div>
        )}
      </header>

      {/* Sidebar */}
      {showSidebar && (
        <aside className="fixed top-16 left-4 w-16 h-auto  shadow-lg rounded-lg p-2 space-y-4 z-50">
          {/* Scroll to Top */}
          <button
            onClick={scrollToTop}
            className="w-full p-2 rounded bg-blue-500 text-white hover:bg-blue-600"
            title="Scroll to Top"
          >
            ⬆️
          </button>

          {/* Categories */}
          <Link
            href="/Categories/ExploreCategories"
            className="flex items-center justify-center w-full p-2 rounded bg-gradient-to-r from-green-500 to-teal-600 text-white hover:opacity-90"
            title="Categories"
          >
            📂
          </Link>

          {/* Flash Sale */}
          <Link
            href="/Categories/Main2"
            className="flex items-center justify-center w-full p-2 rounded bg-gradient-to-r from-yellow-500 to-orange-500 text-white hover:opacity-90"
            title="Flash Sale"
          >
            ⚡
          </Link>

          {/* User Icon */}
          <Link
            href="/Auth/Signup"
            className="flex items-center justify-center w-full p-2 rounded bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:opacity-90"
            title="User"
          >
            👤
          </Link>
        </aside>
      )}
    </>
  );
}
