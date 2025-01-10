import React from 'react';
import Link from 'next/link';
import { FaMobileAlt } from "react-icons/fa";
export default function EasyPaisaPayment() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center  p-4 bg-gradient-to-r from-blue-400 to-purple-500">
       <h1 className="flex items-center justify-center gap-2 text-3xl md:text-4xl font-bold text-green-600 mb-6">
       EasyPaisa Payment
              <FaMobileAlt size={32} className="text-green-600" title="EasyPaisa" />
            </h1>
      <form className="w-full max-w-md bg-white shadow-lg rounded-lg p-6 md:p-8">
        {/* Mobile Number */}
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="mobileNumber"
          >
            Mobile Number
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
            id="mobileNumber"
            type="text"
            placeholder="Enter your EasyPaisa mobile number"
          />
        </div>
        {/* CNIC */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cnic">
            CNIC (without dashes)
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
            id="cnic"
            type="text"
            placeholder="Enter your CNIC number"
          />
        </div>
        {/* Amount */}
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="amount">
            Amount
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
            id="amount"
            type="number"
            placeholder="Enter the amount to pay"
          />
        </div>
        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out"
        >
          Pay Now
        </button>
      </form>
      {/* Back Link */}
      <Link href="/Categories/ExploreCategories">
        <Link className="mt-4 text-black hover:text-green-700 font-semibold underline" href={'/Categories/ExploreCategories'}>
        Go back to products
        </Link>
      </Link>
    </div>
  );
}
