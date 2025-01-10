
import React from 'react';
import Navbar from '../../component/Navbar';
import Footer from '../../component/Footer';
import Fashion1 from '@/app/Categories/Fashion1/page';
import Main1 from '../../Categories/Main1/page';
import { FaUniversity, FaCcPaypal, FaCreditCard } from "react-icons/fa"; // Import bank, PayPal, credit card icons
import { FaMobileAlt } from "react-icons/fa";
import Link from 'next/link';

export default function Flash() {
  const product = {
    image: '/assets/fr8.webp',
    title: 'QALLY Polarized Sunglasses for Men',
    subtitle: 'Lightweight, Portable, and UV Protected for Outdoor Adventures',
    about: [
      "🕶️❤️ **Lightweight Design**: Crafted with a lightweight frame, these sunglasses are easy to wear for extended periods, offering comfort without weighing you down, making them perfect for long outdoor activities.",
      "🕶️❤️ **Portable and Easy to Carry**: With their sleek and compact design, these sunglasses are easy to carry in a bag or pocket, ideal for travel, hiking, fishing, or any outdoor pursuit.",
      "🕶️❤️ **Polarized Lenses for Clear Vision**: The high-quality polarized lenses reduce glare and provide clearer vision, making outdoor activities like driving and fishing more enjoyable and safe.",
      "🕶️❤️ **UV Protection**: Offering 100% UVA and UVB protection, these sunglasses safeguard your eyes from harmful sun exposure, ensuring safety and comfort on bright sunny days.",
      "🕶️❤️ **Stylish and Functional**: A modern, stylish design that looks great with any outfit while also serving the practical function of protecting your eyes during outdoor adventures.",
      "🕶️❤️ **Durable Construction**: Made with high-quality materials, these sunglasses are designed to last, providing long-term use without compromising on comfort or style.",
      "🕶️❤️ **Perfect for Outdoor Activities**: Whether you're fishing, hiking, golfing, or just relaxing outdoors, these sunglasses are the perfect companion for both eye protection and style.",
      "🕶️❤️ **Great Gift for Men**: An excellent gift for men who appreciate both fashion and functionality in their outdoor gear."
    ],
    Price:"$22",
    dimensions: "Lens Width: 58mm, Bridge Width: 16mm, Arm Length: 135mm",
    dateAvailable: "Available Now",
    manufacturer: "QALLY",
    asin: "B0F9XYZ789",
    rating: 4.7,
    reviews: "4.7 ⭐⭐⭐⭐⭐ (850+ Reviews)",
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
      <Fashion1 /><br /><br />
      <Footer />
    </div>
  );
}
