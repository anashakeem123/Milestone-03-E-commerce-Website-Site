
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
        image: '/assets/S5.webp',
        title: 'Bazi Rally Pull Rope Yoga Fitness Chest Expansion Training Open Back Shoulders Eatop',
        subtitle: 'Resistance Pull Rope for Chest Expansion, Shoulder Strengthening, and Flexibility Training',
        about: [
          "🏋️‍♂️💪 **Effective Chest Expansion**: This pull rope is designed to help expand and strengthen the chest muscles, promoting better posture and muscle growth. Ideal for enhancing upper body strength.",
          "🏋️‍♂️💪 **Shoulder & Back Strengthening**: The resistance rope is perfect for targeting the shoulders and upper back, improving flexibility, strength, and endurance through various stretching and strengthening exercises.",
          "🏋️‍♂️💪 **Durable & High-Quality Material**: Made from strong, durable latex, this pull rope is designed to withstand frequent use while maintaining its elasticity and performance, ensuring long-lasting results.",
          "🏋️‍♂️💪 **Portable & Lightweight**: Its lightweight design makes it easy to take anywhere, whether you're working out at home, the gym, or traveling. A convenient accessory for on-the-go fitness routines.",
          "🏋️‍♂️💪 **Perfect for Yoga & Pilates**: Ideal for yoga and Pilates enthusiasts, the pull rope is great for stretching and enhancing flexibility while supporting shoulder and chest expansion during poses.",
          "🏋️‍♂️💪 **Multi-Purpose Use**: Not only great for yoga and Pilates, but this resistance rope is also perfect for general fitness training, rehabilitation exercises, and strengthening routines for the upper body.",
          "🏋️‍♂️💪 **Improves Posture & Flexibility**: Regular use of this pull rope helps improve posture by targeting the chest, shoulders, and back muscles, while also increasing flexibility and range of motion.",
          "🏋️‍♂️💪 **Great for All Fitness Levels**: Whether you're a beginner or advanced athlete, this pull rope is designed to fit any fitness level, allowing for progressive resistance training and flexibility improvement.",
        ],
        Price:"$12",
        dimensions: "Dimensions: 9 x 5 x 2 inches (L x W x H)",
        dateAvailable: "Available Now",
        manufacturer: "Eatop",
        asin: "B08Z3R8L5T",
        rating: 4.7,
        reviews: "4.7 ⭐⭐⭐⭐⭐ (900+ Reviews)",
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
