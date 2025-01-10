// src/app/Signup/page.tsx
"use client";

import { useRouter } from "next/navigation"; // Correct import for App Router
import React from "react";
import { AiOutlineClose } from "react-icons/ai";

const Signup = () => {
  const router = useRouter();

  // Handle close action
  const handleClose = () => {
    router.push("/"); // Redirect to home page
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-green-400 via-blue-500 to-purple-600">
      {/* Close Icon */}
      <button
        type="button"
        title="close"
        onClick={handleClose}
        className="absolute top-4 right-4 text-white text-2xl hover:text-gray-300"
      >
        <AiOutlineClose />
      </button>
      <div className="bg-white bg-opacity-90 p-8 rounded-lg shadow-xl w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-4">Create an Account</h2>
        <p className="text-sm text-gray-600 text-center mb-6">
          Join us today and enjoy exclusive benefits!
        </p>

        {/* Sign Up Form */}
        <form className="space-y-4">
          {/* Full Name */}
          <div>
            <label className="block text-gray-700 mb-1">Full Name</label>
            <input
              type="text"
              name="fullname"
              placeholder="Enter your full name"
              className="block w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 mb-1">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="block w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-700 mb-1">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Create a password"
              className="block w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-gray-700 mb-1">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm your password"
              className="block w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Sign Up Button */}
          <button
            type="submit"
            className="w-full py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Sign Up
          </button>
        </form>

        {/* Already have an account */}
        <p className="mt-6 text-sm text-center">
          Already have an account?{" "}
          <a
            href="/Auth/signin"
            className="text-blue-500 font-semibold hover:underline"
          >
            Sign In
          </a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
