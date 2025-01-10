import React from 'react';
import Link from 'next/link';
import { FaUniversity } from 'react-icons/fa';
export default function BankPayment() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gradient-to-r from-blue-400 to-purple-500">
     <h1 className="flex items-center justify-center gap-2 text-3xl md:text-4xl font-bold text-indigo-600 mb-6">
        Bank Payment
        <FaUniversity size={32} className="text-indigo-950" title="Bank" />
      </h1>
      <form className="w-full max-w-md bg-white shadow-lg rounded-lg p-6 md:p-8">
        {/* Account Holder Name */}
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="accountName"
          >
            Account Holder Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent"
            id="accountName"
            type="text"
            placeholder="Enter account holder's name"
          />
        </div>
        {/* Bank Name */}
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="bankName"
          >
            Bank Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent"
            id="bankName"
            type="text"
            placeholder="Enter bank name"
          />
        </div>
        {/* Account Number */}
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="accountNumber"
          >
            Account Number
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent"
            id="accountNumber"
            type="text"
            placeholder="Enter account number"
          />
        </div>
        {/* Amount */}
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="amount"
          >
            Amount
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent"
            id="amount"
            type="number"
            placeholder="Enter the amount to transfer"
          />
        </div>
        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out"
        >
          Pay Now
        </button>
      </form>
      {/* Back Link */}
      <Link href="/Categories/ExploreCategories">
        <Link className="mt-4 text-black hover:text-indigo-700 font-semibold underline" href={'/Categories/ExploreCategories'}>
        Go back to products
        </Link>
      </Link>
    </div>
  );
}
