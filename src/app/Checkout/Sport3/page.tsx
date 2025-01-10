
import React from 'react';
import Navbar from '../../component/Navbar';
import Footer from '../../component/Footer';
import SportAndFitness1 from '@/app/Categories/Sports1/page';

import Main1 from '../../Categories/Main1/page';
import { FaUniversity, FaCcPaypal, FaCreditCard } from "react-icons/fa"; // Import bank, PayPal, credit card icons
import { FaMobileAlt } from "react-icons/fa";
import Link from 'next/link';

export default function Flash() {
    const product = {
        image: '/assets/S10.webp',
        title: '11(PCS) Power Exercise Resistance Band Set 5 in 1 Fitness Band Equipment for Men and Women',
        subtitle: 'Complete Resistance Band Set for Full Body Workout, Strength Training, Flexibility, and Fitness',
        about: [
          "💪🏋️‍♂️ **11-Piece Set**: This set includes 11 high-quality resistance bands, providing a versatile range of resistance levels to cater to different strength training needs for both men and women.",
          "💪🏋️‍♂️ **5 Resistance Levels**: With 5 different resistance levels, from light to heavy, this set allows for a progressive workout experience, enabling you to adjust the intensity based on your fitness level.",
          "💪🏋️‍♂️ **Perfect for Full Body Workouts**: These resistance bands are ideal for working out various muscle groups, including arms, legs, core, and glutes. Great for strength training, flexibility exercises, and rehabilitation.",
          "💪🏋️‍♂️ **Durable & Comfortable Material**: Made from premium latex, these bands are durable, long-lasting, and comfortable to use, ensuring you get a great workout experience without worrying about breakage or discomfort.",
          "💪🏋️‍♂️ **Portable & Lightweight**: The compact design of these bands makes them easy to store and carry. Whether at home, at the gym, or while traveling, you can easily incorporate them into your fitness routine anywhere.",
          "💪🏋️‍♂️ **Versatile & Multi-Purpose**: Suitable for a variety of exercises, including resistance training, stretching, yoga, Pilates, and physical therapy. Perfect for both beginners and advanced users.",
          "💪🏋️‍♂️ **Convenient Carrying Bag**: The set comes with a convenient carrying bag, making it easy to take your bands wherever you go and store them in an organized manner.",
          "💪🏋️‍♂️ **Great for All Fitness Levels**: Whether you are a beginner or an experienced athlete, these bands provide an effective way to improve strength, flexibility, and overall fitness.",
        ],
        Price:"$18",
        dimensions: "Dimensions: 8 x 5 x 2 inches (L x W x H)",
        dateAvailable: "Available Now",
        manufacturer: "Power Exercise",
        asin: "B08Z3Q7D9F",
        rating: 4.8,
        reviews: "4.8 ⭐⭐⭐⭐⭐ (1,200+ Reviews)",
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
      <SportAndFitness1 /><br /><br />
      <Footer />
    </div>
  );
}
