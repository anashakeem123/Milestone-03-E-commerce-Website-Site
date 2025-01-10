
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
        image: '/assets/T9.webp',
        title: "Pad, 26cm x 19cm, with Wooden Stick",
        subtitle: "Durable Practice Pad with Wooden Stick for Kids, Perfect for Developing Hand-Eye Coordination and Sports Skills",
        about: [
          "🏓 **Ideal for Practice & Skill Development**: This practice pad, combined with a wooden stick, is designed for kids to improve their hand-eye coordination and develop sports skills, offering a fun way to practice with precision.",
          "🏓 **Durable & High-Quality Materials**: Made from sturdy, child-safe materials, this pad is designed for long-lasting use, ensuring durability even during intense practice sessions.",
          "🏓 **Perfect Size for Kids**: With dimensions of 26cm x 19cm, the pad is perfectly sized for children to practice their skills comfortably and efficiently, making it ideal for both beginners and experienced young athletes.",
          "🏓 **Includes Wooden Stick**: The set comes with a high-quality wooden stick, providing a traditional feel and reliable performance for kids to practice their swings, hitting skills, or coordination exercises.",
          "🏓 **Encourages Physical Activity**: Helps children stay active and engaged while practicing their aim, coordination, and focus, promoting physical fitness in a fun and safe way.",
          "🏓 **Portable & Easy to Use**: Lightweight and compact, this pad can be easily transported for outdoor play, making it ideal for practice at home, in the park, or even at a picnic.",
          "🏓 **Great for Sports Practice**: Suitable for various sports, including cricket, baseball, and more, helping kids develop a broad range of athletic skills through active play.",
          "🏓 **Perfect Gift Idea**: This pad and wooden stick set makes a wonderful gift for children who enjoy sports and want to improve their athletic abilities, providing both fun and skill-building in one package.",
        ],
        Price:"$0.49",
        dimensions: "Dimensions: 26 x 19 cm (L x W)",
        dateAvailable: "Available Now",
        manufacturer: "Sports Gear",
        asin: "B08X9K5F2S",
        rating: 4.7,
        reviews: "4.7 ⭐⭐⭐⭐⭐ (1,300+ Reviews)",
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
