import React from 'react';
import Link from 'next/link';
import {  FaCcPaypal } from "react-icons/fa"; // Import bank, PayPal, credit card icons

export default function PayPalPayment() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gradient-to-r from-blue-400 to-purple-500">
      <h1 className="font-bold text-blue-600 mb-6 text-center flex items-center justify-center gap-2 text-3xl md:text-4xl">
        PayPal Payment
     <FaCcPaypal size={40} className="text-blue-900" title="PayPal" />
      </h1>
      <form className="w-full max-w-md bg-white shadow-lg rounded-lg p-6 md:p-8">
        {/* Email Address */}
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            PayPal Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
            id="email"
            type="email"
            placeholder="Enter your PayPal email address"
          />
        </div>
        {/* Amount */}
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="amount">
            Amount
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
            id="amount"
            type="number"
            placeholder="Enter the amount to pay"
          />
        </div>
        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out"
        >
          Pay with PayPal
        </button>
      </form>
      {/* Back Link */}
      <Link href="/Categories/ExploreCategories">
        <Link className="mt-4 text-black hover:text-blue-700 font-semibold underline" href={'/Categories/ExploreCategories'}>
        Go back to products
        </Link>
      </Link>
    </div>
  );
}
