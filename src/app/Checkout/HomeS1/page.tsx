
import React from 'react';
import Navbar from '../../component/Navbar';
import Footer from '../../component/Footer';
import HomeAppliances1 from '@/app/Categories/HomeAppliances1/page';

import Main1 from '../../Categories/Main1/page';
import { FaUniversity, FaCcPaypal, FaCreditCard } from "react-icons/fa"; // Import bank, PayPal, credit card icons
import { FaMobileAlt } from "react-icons/fa";
import Link from 'next/link';

export default function Flash() {
    const product = {
        image: '/assets/H19.webp',
        title: 'Ninja Pods & Grounds Single-Serve Coffee Brewer, Steam Black',
        subtitle: 'Versatile Single-Serve Coffee Brewer for Pods & Grounds with Customizable Brew Strength',
        about: [
          "☕❤️ **Pods & Grounds Compatibility**: This coffee brewer allows you to brew your favorite coffee using either pods or ground coffee, providing ultimate convenience and flexibility for every coffee lover.",
          "☕❤️ **Customizable Brew Strength**: Choose from multiple brew strength settings to personalize your cup of coffee, from light and mild to strong and bold, catering to all preferences.",
          "☕❤️ **Single-Serve Convenience**: Perfect for busy mornings or individual servings, this coffee maker brews just the right amount for a single cup of coffee, minimizing waste and maximizing flavor.",
          "☕❤️ **Fast Brewing**: Brews your coffee in minutes, ensuring that you never have to wait long to enjoy a fresh, hot cup of coffee to kickstart your day.",
          "☕❤️ **Compact & Stylish Design**: Featuring a sleek and modern steam black finish, this coffee brewer fits easily into any kitchen decor, offering both style and functionality.",
          "☕❤️ **Easy to Use**: With a simple interface and one-touch operation, brewing your perfect cup of coffee has never been easier, even for beginners.",
          "☕❤️ **Reusable Ground Coffee Filter**: Comes with a reusable filter for ground coffee, helping you reduce waste and save money on disposable pods while still enjoying the taste of fresh coffee.",
          "☕❤️ **Energy Efficient**: The coffee maker automatically shuts off after brewing, ensuring energy efficiency and safety for everyday use.",
        ],
        Price:'$55',
        dimensions: "Dimensions: 7.9 x 7.5 x 13.4 inches (L x W x H)",
        dateAvailable: "Available Now",
        manufacturer: "Ninja",
        asin: "B07Y3Y3VG6",
        rating: 4.5,
        reviews: "4.5 ⭐⭐⭐⭐⭐ (1,000+ Reviews)",
      };
                      
  return (
    <div className='bg-gradient-to-r from-blue-400 to-purple-500'>
      <Navbar />
      <h2 className="mt-8 ml-4 md:ml-20 text-3xl md:text-5xl font-bold">{product.title}</h2>
      <p className="ml-4 md:ml-20 text-lg text-gray-600 mt-2">{product.subtitle}</p>
      <div className="flex flex-col md:flex-row items-center mt-7 mx-4 md:mx-20">
        {/* Image Section */}
        <img
          src={product.image}
          alt={product.title}
          title={product.title}
          className="w-full md:w-1/3 rounded shadow-lg transform transition-transform duration-300 hover:scale-110"
        />
        
        {/* Product Details Section */}
        <div className="mt-5 md:mt-0 ml-0 md:ml-8 max-w-full md:max-w-lg">
          <div className="mt-4">
            <h2 className='text-2xl font-extrabold mb-2'>Product details</h2>
            <p className="text-sm text-gray-600 mb-3 font-extrabold ">
              <strong >Price:</strong> {product.Price}
            </p>
            <p className="text-sm text-gray-600 ">
              <strong>Product Dimensions:</strong> {product.dimensions}
            </p>
            <p className="text-sm text-gray-600 mt-2">
              <strong>Date First Available:</strong> {product.dateAvailable}
            </p>
            <p className="text-sm text-gray-600 mt-2">
              <strong>Manufacturer:</strong> {product.manufacturer}
            </p>
            <p className="text-sm text-gray-600 mt-2">
              <strong>ASIN:</strong> {product.asin}
            </p>
            <p className="text-sm text-gray-600 mt-2">
              <strong>Customer Reviews:</strong> {product.reviews}
            </p>
          </div>
          <div className="mt-4">
      <span className="pt-5">
        QUALITY 
        <select title="QUALITY" name="QUALITY" id="QUALITY">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
      </span> 
      <Link href="/Payment/ElectronicBuyNow1" title="Payment">
        <button type="button" className="ml-4 bg-green-500 text-yellow-50 hover:bg-blue-500 hover:text-red-500 w-20">
          Buy Now
        </button>
      </Link>

      {/* Icons Section */}
      <div className="flex justify-start items-center gap-4 mt-4">
        <div className="flex flex-col items-center">
      <a href="/Payment/ElectronicBank1" title="Payment">
          <FaUniversity size={24} className="text-gray-700" title="Bank" />
          <span className="text-sm text-gray-600">Bank</span>
          </a>
        </div>
        
        <div className="flex flex-col items-center">
        <a href="/Payment/ElectronicEasyPaisa1" title="Payment">
  <FaMobileAlt size={24} className="text-green-600 ml-3" title="EasyPaisa" />
  <span className="text-sm text-gray-600">EasyPaisa</span>
  </a>
</div>

        <div className="flex flex-col items-center">
        <a href="/Payment/ElectronicPaypal1" title="Payment">
          <FaCcPaypal size={24} className="text-blue-500" title="PayPal" />
          <span className="text-sm text-gray-600">PayPal</span>
          </a>
        </div>
        <div className="flex flex-col items-center">
        <a href="/Payment/ElectronicCerdit1" title="Payment">
          <FaCreditCard size={24} className="text-purple-600" title="Credit Card" />
          <span className="text-sm text-gray-600">Card</span>
          </a>
        </div>
      </div>
    </div>
  

          <h3 className="text-xl text-gray-800 mb-2 mt-4 font-extrabold ">About this item:</h3>
          <ul className="list-disc list-inside text-gray-700">
            {product.about.map((item, index) => (
              <li key={index} className="mb-2">{item}</li>
            ))}
          </ul>
        </div>
      </div>
      <Main1 />
      <HomeAppliances1/><br /><br />
      <Footer />
    </div>
  );
}
