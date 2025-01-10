
import React from 'react';
import Navbar from '../../component/Navbar';
import Footer from '../../component/Footer';
import Toys1 from '@/app/Categories/Toys1/page';

import Main1 from '../../Categories/Main1/page';
import { FaUniversity, FaCcPaypal, FaCreditCard } from "react-icons/fa"; // Import bank, PayPal, credit card icons
import { FaMobileAlt } from "react-icons/fa";
import Link from 'next/link';

export default function Flash() {
    const product = {
        image: '/assets/T4.webp',
        title: "Use Launchers to Pop and Catch the Ball",
        subtitle: "Fun and Engaging Ball Launcher Toy Set for Kids - Perfect for Outdoor Play and Exercise",
        about: [
          "🎯⚽ **Exciting Ball Launcher Game**: This set includes ball launchers designed for popping and catching balls, providing endless fun and entertainment for kids. Perfect for outdoor play and group activities.",
          "🎯⚽ **Improve Hand-Eye Coordination**: The launcher set encourages children to develop their hand-eye coordination and motor skills while enjoying an active and interactive game.",
          "🎯⚽ **Easy to Use for Kids**: Designed for children of all ages, these launchers are simple to operate and provide an engaging experience. Simply load the ball and pull the trigger to launch it into the air!",
          "🎯⚽ **Perfect for Outdoor Fun**: Ideal for the backyard, parks, or playdates, these ball launchers are a great way to keep kids active and entertained in the fresh air.",
          "🎯⚽ **Durable & Safe Construction**: Made from high-quality, non-toxic materials, these ball launchers are durable enough for extended use while ensuring safety for children during play.",
          "🎯⚽ **Promotes Physical Activity**: Encourage children to move, jump, and run while catching the launched balls. A fun way to stay active and improve physical fitness.",
          "🎯⚽ **Ideal for Group Play**: Great for group activities, parties, and family fun, allowing multiple children to participate and enjoy the game together.",
          "🎯⚽ **Includes Multiple Balls**: The set comes with several balls designed for use with the launcher, offering a variety of ways to play and ensuring long-lasting fun.",
        ],
        Price:"$46",
        dimensions: "Dimensions: Varies by Launcher (Average 8-10 inches in length)",
        dateAvailable: "Available Now",
        manufacturer: "Launchers Fun Toys",
        asin: "B08Y9X4Q1F",
        rating: 4.7,
        reviews: "4.7 ⭐⭐⭐⭐⭐ (800+ Reviews)",
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
      <Main1 /><br /><br />
      <Toys1 /><br /><br />
      <Footer />
    </div>
  );
}
