
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
        image: '/assets/Aper3.webp',
        title: 'Winter Sleeves Zipped Jacket For Men/Contrast Zipper Pocket Style Jacket/Upper For Men/Bomber Jacket For Men',
        subtitle: 'Warm, Stylish, and Functional, Perfect for Cold Weather and Casual Outings',
        about: [
          "❄️❤️ **Winter Sleeves Zipped Jacket**: Designed to keep you warm and stylish during cold weather, with a functional zipper and winter sleeves for extra comfort.",
          "❄️❤️ **Contrast Zipper Pocket Style**: Features a bold contrast zipper pocket design, adding a stylish touch to the jacket while providing convenient storage for your essentials.",
          "❄️❤️ **Bomber Jacket for Men**: A modern twist on the classic bomber jacket, offering a relaxed fit with a trendy, casual style perfect for everyday wear.",
          "❄️❤️ **Durable Fabric**: Made from high-quality, durable fabric that is built to withstand winter conditions while keeping you cozy and comfortable.",
          "❄️❤️ **Warm and Insulated**: The jacket is insulated to provide superior warmth without the bulk, making it ideal for chilly days or layering over other clothes.",
          "❄️❤️ **Comfortable and Adjustable Fit**: Features adjustable cuffs and a cozy collar for a perfect fit, ensuring comfort throughout the day.",
          "❄️❤️ **Versatile Design**: Perfect for casual outings, biking, or outdoor activities, offering both warmth and style in one.",
          "❄️❤️ **Great for Layering**: Ideal for layering with other winter clothing to provide extra warmth and protection against the cold.",
          "❄️❤️ **Ideal Gift for Men**: A great gift for men who appreciate stylish and functional outerwear for the colder months.",
        ],
        Price:"$13",
        dimensions: "Available in Multiple Sizes (S, M, L, XL)",
        dateAvailable: "Available Now",
        manufacturer: "Generic",
        asin: "B0F9XYZ654",
        rating: 4.6,
        reviews: "4.6 ⭐⭐⭐⭐⭐ (900+ Reviews)",
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
