import React from 'react';
import Link from 'next/link';
import { FaCreditCard } from "react-icons/fa"; // Import bank, PayPal, credit card icons

export default function Payment() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gradient-to-r from-blue-400 to-purple-500">
      <h1 className="mb-6 text-green-600 text-center flex items-center justify-center gap-2 text-3xl md:text-4xl font-bold">
        Payment Card               
        <FaCreditCard size={32} className="text-purple-600" title="Credit Card" />
      </h1>
      <form className="w-full max-w-md bg-white shadow-md rounded-lg p-6 md:p-8">
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="cardNumber"
          >
            Card Number
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
            id="cardNumber"
            type="text"
            placeholder="Enter your card number"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="expiryDate"
          >
            Expiry Date
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
            id="expiryDate"
            type="text"
            placeholder="MM/YY"
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cvv">
            CVV
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
            id="cvv"
            type="text"
            placeholder="CVV"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out"
        >
          Pay Now
        </button>
      </form>
      <Link href="/Categories/ExploreCategories">
        <Link className="mt-4 text-black hover:text-green-700 font-semibold underline" href={'/Categories/ExploreCategories'}>
          Go back to products
        </Link>
      </Link>
    </div>
  );
}
