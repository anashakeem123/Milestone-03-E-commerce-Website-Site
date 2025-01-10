
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
    image: '/assets/S8.webp',
    title: 'Generic Grippy Boy Hand Grip, Gripbuddy Strength Trainer, Hand Grip Strengthener Set Forearm Adjustable Resistance Hand, Finger Extension Exerciser, Finger Resistance Band (Color : 2PCS)',
    subtitle: 'Adjustable Hand Grip Strengthener Set for Forearm, Finger, and Wrist with Resistance Bands for Improved Strength and Flexibility',
    about: [
      "💪🤲 **Perfect for Hand & Forearm Strength**: This hand grip strengthener set is designed to enhance the strength of your hands, forearms, and wrists, making it perfect for athletes, fitness enthusiasts, and individuals looking to improve hand grip.",
      "💪🤲 **Adjustable Resistance**: The hand grips are adjustable, allowing you to increase or decrease the resistance based on your fitness level. Ideal for progressive training to improve grip strength over time.",
      "💪🤲 **Versatile Finger Extension Exerciser**: Includes a finger resistance band that helps with finger extension exercises, improving finger mobility and flexibility. A great tool for both rehabilitation and strength training.",
      "💪🤲 **Durable & High-Quality Material**: Made from high-quality materials, this hand grip set is built to last, providing long-term use for daily exercises or intense workout routines.",
      "💪🤲 **Compact & Portable Design**: Lightweight and compact, this hand grip set is easy to carry anywhere. You can use it at home, at the gym, or even while traveling to keep up with your hand strength training.",
      "💪🤲 **Improves Finger & Wrist Flexibility**: Perfect for improving the flexibility of your fingers and wrists, the set helps to reduce stiffness and tension while enhancing mobility and strength.",
      "💪🤲 **Great for Rehabilitation**: If you're recovering from an injury, this grip trainer is excellent for rehabilitation purposes. It helps restore strength and flexibility to the fingers, wrists, and forearms.",
      "💪🤲 **Available in Multiple Colors**: This set comes in a variety of colors, including the vibrant 2PCS option, so you can choose a color that suits your style or training gear.",
    ],
    Price:"$24",
    dimensions: "Dimensions: 8 x 4 x 2 inches (L x W x H)",
    dateAvailable: "Available Now",
    manufacturer: "Generic Grippy Boy",
    asin: "B08Y7D2W5Q",
    rating: 4.7,
    reviews: "4.7 ⭐⭐⭐⭐⭐ (2,200+ Reviews)",
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
