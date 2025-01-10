// src/app/signin/page.tsx
"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { AiOutlineClose } from "react-icons/ai"; // Import close icon
import Link from "next/link";
const Signin = () => {
  const router = useRouter();

  // Handle close action
  const handleClose = () => {
    router.push("/"); // Redirect to home page
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 relative">
      {/* Close Icon */}
      <button
      type="button"
      title="close"
        onClick={handleClose}
        className="absolute top-4 right-4 text-white text-2xl hover:text-gray-300"
      >
        <AiOutlineClose />
      </button>

      {/* Sign In Form */}
      <div className="bg-white bg-opacity-80 p-8 rounded-md shadow-lg w-96">
        <h2 className="text-xl font-bold mb-4 text-center">Sign In</h2>
        <form>
          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            className="block w-full mb-4 p-2 border border-gray-300 rounded-md"
          />
          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            className="block w-full mb-4 p-2 border border-gray-300 rounded-md"
          />
          <button
            type="submit"
            className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Login
          </button>
        </form>

        {/* Forgot Password */}
        <p className="mt-4 text-center">
          <Link
            href="/"
            className="text-blue-500 hover:underline"
          >
            Forgot Password?
          </Link>
          <div className="mt-3">
          <p>Create an Account
            <Link href="/Auth/Signup">  
            <button 
            type="button"
           className="bg-blue-500 text-white rounded-md hover:bg-blue-600 ml-2 p-1 text-sm"
          
          >Sign Up</button>
          </Link>
          </p>
         </div>
        </p>
      </div>
    </div>
  );
};

export default Signin;
