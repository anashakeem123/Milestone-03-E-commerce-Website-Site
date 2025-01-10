
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
        image: '/assets/H16.webp',
        title: 'DASH Everyday Ice Cream Maker for Gelato, Sorbet, Frozen Yogurt + Ice Pops, with Mixing Bowl & Ice Pop Molds + Recipe Book, 1 Quart - Aqua',
        subtitle: 'Versatile Ice Cream Maker for Gelato, Sorbet, Frozen Yogurt, and Ice Pops, Perfect for Homemade Desserts',
        about: [
          "🍦❤️ **1 Quart Capacity**: The DASH Everyday Ice Cream Maker has a 1 Quart capacity, perfect for making small batches of your favorite frozen treats like gelato, sorbet, frozen yogurt, and ice pops.",
          "🍦❤️ **Multiple Treats in One Machine**: Not just for ice cream, this versatile machine allows you to make gelato, sorbet, frozen yogurt, and ice pops, offering endless possibilities for creating refreshing desserts.",
          "🍦❤️ **Quick and Easy to Use**: With its user-friendly design, this ice cream maker lets you create your favorite frozen desserts in as little as 20 minutes. Simply add your ingredients and let the machine do the rest.",
          "🍦❤️ **Includes Mixing Bowl & Ice Pop Molds**: Comes with a mixing bowl for easy preparation and ice pop molds for making delicious frozen pops, perfect for warm days or family fun.",
          "🍦❤️ **Recipe Book Included**: The included recipe book provides a variety of creative and tasty recipes, giving you ideas for making classic and unique frozen treats at home.",
          "🍦❤️ **Compact and Stylish Design**: Featuring a sleek aqua color, this ice cream maker is compact and takes up minimal space on your countertop, making it ideal for any kitchen size.",
          "🍦❤️ **Healthy Homemade Treats**: Create healthier versions of your favorite frozen desserts by controlling the ingredients, making it easy to enjoy guilt-free indulgence.",
          "🍦❤️ **Perfect Gift for Dessert Lovers**: This ice cream maker makes an excellent gift for anyone who loves making homemade desserts or enjoys experimenting with new frozen treat recipes.",
        ],
        Price:"$33",
        dimensions: "Dimensions: 9 x 6 x 9 inches (L x W x H)",
        dateAvailable: "Available Now",
        manufacturer: "DASH",
        asin: "B07Y5QF1QF",
        rating: 4.7,
        reviews: "4.7 ⭐⭐⭐⭐⭐ (1,200+ Reviews)",
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
      <Link href="/Payment/ElectronicBank1" title="Payment">
          <FaUniversity size={24} className="text-gray-700" title="Bank" />
          <span className="text-sm text-gray-600">Bank</span>
          </Link>
        </div>
        
        <div className="flex flex-col items-center">
        <Link href="/Payment/ElectronicEasyPaisa1" title="Payment">
  <FaMobileAlt size={24} className="text-green-600 ml-3" title="EasyPaisa" />
  <span className="text-sm text-gray-600">EasyPaisa</span>
  </Link>
</div>

        <div className="flex flex-col items-center">
        <Link href="/Payment/ElectronicPaypal1" title="Payment">
          <FaCcPaypal size={24} className="text-blue-500" title="PayPal" />
          <span className="text-sm text-gray-600">PayPal</span>
          </Link>
        </div>
        <div className="flex flex-col items-center">
        <Link href="/Payment/ElectronicCerdit1" title="Payment">
          <FaCreditCard size={24} className="text-purple-600" title="Credit Card" />
          <span className="text-sm text-gray-600">Card</span>
          </Link>
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
      <HomeAppliances1 /><br /><br />
      <Footer />
    </div>
  );
}
