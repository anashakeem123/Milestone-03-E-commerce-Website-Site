
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
        image: '/assets/S1.webp',
        title: 'Acozycoo Mens Running Headband, 5 Pack, Mens Sweatband Sports Headband for Running, Cycling, Basketball, Yoga, Fitness Workout Stretchy Unisex Hairband',
        subtitle: 'Stretchy & Comfortable Sweatbands for Sports and Fitness Activities, Perfect for Running, Cycling, Yoga, and More',
        about: [
          "🏃‍♂️💪 **5-Pack Variety**: This set includes 5 high-quality sweatbands, offering multiple color options to match your workout gear. Perfect for daily use and easy rotation.",
          "🏃‍♂️💪 **Breathable & Stretchy Material**: Made with a blend of breathable and stretchy fabric, these headbands provide a comfortable and secure fit for all head sizes, ensuring no slipping during intense activities.",
          "🏃‍♂️💪 **Absorbs Sweat Effectively**: Designed to absorb sweat, these headbands keep sweat out of your eyes and off your face, helping you stay focused during workouts, running, or cycling.",
          "🏃‍♂️💪 **Versatile for Multiple Activities**: Whether you're running, cycling, playing basketball, practicing yoga, or hitting the gym, these headbands are perfect for any sport or fitness activity.",
          "🏃‍♂️💪 **Unisex Design**: With a unisex design, these headbands are suitable for both men and women. The stylish and sleek look makes them a great accessory for any workout.",
          "🏃‍♂️💪 **Durable & Easy to Maintain**: Made from durable materials, these headbands are designed to last, even with frequent use. They are also machine washable for easy cleaning and maintenance.",
          "🏃‍♂️💪 **Comfortable and Lightweight**: Soft and lightweight, these headbands won’t weigh you down during workouts. They provide a snug, comfortable fit without being too tight or uncomfortable.",
          "🏃‍♂️💪 **Great Gift for Fitness Enthusiasts**: These headbands make a practical gift for anyone who enjoys fitness, running, cycling, or any other active lifestyle.",
        ],
        Price:"$9.1",
        dimensions: "Dimensions: 8 x 2 x 0.5 inches (L x W x H)",
        dateAvailable: "Available Now",
        manufacturer: "Acozycoo",
        asin: "B08Z5Q9B2H",
        rating: 4.7,
        reviews: "4.7 ⭐⭐⭐⭐⭐ (1,000+ Reviews)",
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
