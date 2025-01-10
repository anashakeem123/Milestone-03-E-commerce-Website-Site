
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
        image: '/assets/T5.webp',
        title: "JOY SPOT! 3-in-1 Outdoor Toy Set for Kids",
        subtitle: "Fun and Interactive 3-in-1 Toy Set for Kids, Includes Basketball, Soccer, and Ring Toss for Active Play",
        about: [
          "🏀⚽ **3-in-1 Outdoor Fun**: This multi-functional toy set combines basketball, soccer, and ring toss, offering kids the ultimate outdoor play experience and helping them stay active while having fun.",
          "🏀⚽ **Complete Set for Active Play**: Includes a mini basketball hoop, soccer ball, ring toss game, and all the accessories needed for hours of outdoor entertainment and skill development.",
          "🏀⚽ **Durable & Safe Materials**: Made from high-quality, child-safe materials, this toy set is designed to withstand active play and ensure safety for your child during every game.",
          "🏀⚽ **Perfect for Kids of All Ages**: The set is designed for children to enjoy and develop essential skills, from hand-eye coordination to teamwork and sportsmanship, through fun and engaging outdoor activities.",
          "🏀⚽ **Encourages Physical Activity**: A great way for kids to get exercise while playing basketball, soccer, and ring toss, promoting physical fitness and coordination through active outdoor games.",
          "🏀⚽ **Portable & Easy to Set Up**: This toy set is lightweight and easy to assemble, making it perfect for outdoor play in your backyard, at the park, or even at the beach.",
          "🏀⚽ **Ideal for Group Play**: Perfect for playdates, parties, or family fun, allowing kids to engage in team sports and collaborative activities while having fun together.",
          "🏀⚽ **Great Gift Idea**: This 3-in-1 outdoor toy set makes a fantastic gift for children, offering a combination of sports and games to keep them entertained and active for hours.",
        ],
        Price:"$102",
        dimensions: "Dimensions: 15 x 10 x 4 inches (L x W x H)",
        dateAvailable: "Available Now",
        manufacturer: "JOY SPOT!",
        asin: "B08Y9K5V4R",
        rating: 4.8,
        reviews: "4.8 ⭐⭐⭐⭐⭐ (2,000+ Reviews)",
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
