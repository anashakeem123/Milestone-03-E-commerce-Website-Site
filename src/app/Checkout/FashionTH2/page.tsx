
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
    image: '/assets/fr4.webp',
    title: 'HIMI Slim Wallet for Men RFID Blocking Money Clip Wallet',
    subtitle: 'Minimalist, Durable, and Secure, Perfect for Everyday Use',
    about: [
      "💳❤️ **Slim and Minimalist Design**: The compact, slim design allows for easy carrying in your front or back pocket, providing a sleek look without the bulk.",
      "💳❤️ **RFID Blocking Technology**: Equipped with advanced RFID blocking technology to protect your personal information from unauthorized scans, ensuring security on the go.",
      "💳❤️ **Money Clip Feature**: Includes a built-in money clip for easy access to your cash, keeping your money securely in place without the need for bulky wallets.",
      "💳❤️ **Multiple Card Slots**: Designed with multiple slots for credit cards, ID cards, and other essentials, offering convenient storage in a minimalist form.",
      "💳❤️ **Premium Material**: Made from high-quality, durable leather that ages well over time, maintaining its stylish appearance and lasting durability.",
      "💳❤️ **Lightweight and Portable**: Lightweight construction makes it easy to carry around every day, whether you’re heading to work, the gym, or on a trip.",
      "💳❤️ **Easy to Use and Maintain**: The wallet is easy to use with its simple layout, and the leather material is easy to maintain with minimal cleaning required.",
      "💳❤️ **Ideal Gift for Men**: A perfect gift for men who prefer minimalist, functional, and stylish accessories that combine practicality with security.",
    ],
    Price:"$29",
    dimensions: "3.5 x 4.5 inches (when closed)",
    dateAvailable: "Available Now",
    manufacturer: "HIMI",
    asin: "B0F9XYZ987",
    rating: 4.8,
    reviews: "4.8 ⭐⭐⭐⭐⭐ (1,000+ Reviews)",
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
