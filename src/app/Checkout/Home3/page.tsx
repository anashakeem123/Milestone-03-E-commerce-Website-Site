
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
        image: '/assets/H10.webp',
        title: 'Instant Pot Vortex Plus 6QT XL Air Fryer',
        subtitle: 'Versatile, Fast, and Convenient Air Fryer for Healthy Cooking with a Large Capacity',
        about: [
          "🍟❤️ **6QT Capacity**: The Instant Pot Vortex Plus comes with a large 6QT capacity, perfect for cooking meals for families or small gatherings, giving you ample space for a variety of dishes.",
          "🍟❤️ **Multiple Cooking Functions**: With 7 pre-programmed cooking functions, including Air Fry, Bake, Roast, Reheat, and Dehydrate, it allows you to prepare a wide range of foods quickly and easily.",
          "🍟❤️ **Air Crisp Technology**: Uses advanced Air Crisp technology to cook your food with less oil, ensuring crispy, golden results while keeping meals healthy and lower in calories.",
          "🍟❤️ **Fast and Efficient Cooking**: Cooks food up to 50% faster than traditional ovens, making it a time-saving addition to your kitchen, perfect for busy lifestyles.",
          "🍟❤️ **Easy to Use**: The intuitive touchscreen controls and simple interface make it easy for anyone to use, even beginners. Set your desired temperature and time with ease.",
          "🍟❤️ **Sleek and Modern Design**: With a sleek black finish and modern design, the Instant Pot Vortex Plus will complement any kitchen decor while being easy to clean with its non-stick, dishwasher-safe basket.",
          "🍟❤️ **Consistent Results**: Delivers consistent, delicious results every time, whether you're frying, roasting, or baking, ensuring evenly cooked food with no guesswork.",
          "🍟❤️ **Ideal for Healthy Eating**: With the ability to air fry with little to no oil, it provides a healthier way to enjoy your favorite fried foods without compromising on taste or texture.",
        ],
        Price:"$210",
        dimensions: "Dimensions: 12.8 x 12.2 x 12.1 inches (L x W x H)",
        dateAvailable: "Available Now",
        manufacturer: "Instant Pot",
        asin: "B08GG6LL9X",
        rating: 4.8,
        reviews: "4.8 ⭐⭐⭐⭐⭐ (1,500+ Reviews)",
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
