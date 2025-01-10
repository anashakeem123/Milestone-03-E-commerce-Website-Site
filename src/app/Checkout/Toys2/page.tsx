
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
        image: '/assets/T12.webp',
        title: "Arrow and Bow Set for Kids Archery Training Play Set for Children Sports Practice - 6 Pieces",
        subtitle: "Complete Archery Set for Kids with Bow, Arrows, and Accessories for Training, Sports Practice, and Fun",
        about: [
          "🏹🎯 **Perfect for Kids Archery Training**: This arrow and bow set is specially designed for kids to develop their archery skills and practice hand-eye coordination in a fun and safe way.",
          "🏹🎯 **Complete 6-Piece Set**: Includes a bow, arrows, a target, and other accessories, offering everything your child needs to start practicing archery and improving their shooting skills.",
          "🏹🎯 **Safe & Durable Materials**: Made from non-toxic, child-safe materials, this set is durable and built to last, ensuring your child can enjoy hours of practice and fun without worry.",
          "🏹🎯 **Lightweight & Easy to Use**: The bow and arrows are lightweight and easy to handle, making it perfect for children to learn the basics of archery and enjoy a fun outdoor activity.",
          "🏹🎯 **Great for Sports Practice**: Ideal for kids to practice their aim and improve concentration, coordination, and focus, while also being a great outdoor activity for active children.",
          "🏹🎯 **Portable & Convenient**: This archery set is easy to carry, so your child can practice at home, in the park, or anywhere outdoors, making it an ideal outdoor game.",
          "🏹🎯 **Encourages Physical Activity**: Archery promotes physical exercise while helping children improve their strength, balance, and focus, making it a great way for kids to stay active.",
          "🏹🎯 **Fun & Educational Gift**: This archery set makes a perfect gift for children, offering both fun and an opportunity to develop new skills in a safe and engaging way.",
        ],
        Price:"$22",
        dimensions: "Dimensions: 12 x 8 x 3 inches (L x W x H)",
        dateAvailable: "Available Now",
        manufacturer: "Arrow and Bow",
        asin: "B08Y3D4X9J",
        rating: 4.7,
        reviews: "4.7 ⭐⭐⭐⭐⭐ (1,500+ Reviews)",
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
