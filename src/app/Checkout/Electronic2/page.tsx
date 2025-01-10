import React from 'react';
import Navbar from '../../component/Navbar';
import Footer from '../../component/Footer';
import Electronics1 from '../../Categories/Electronic1/page';
import Main1 from '../../Categories/Main1/page';
import { FaUniversity, FaCcPaypal, FaCreditCard } from "react-icons/fa"; // Import bank, PayPal, credit card icons
import { FaMobileAlt } from "react-icons/fa";
import Link from 'next/link';

export default function Flash() {
  const product = {
    image: '/assets/item2.webp',
    title: 'iPhone 15 Charger Fast Charging',
    subtitle: 'The USB C Wall Charger Block, 3-Pack PD Power Delivery Fast Type C Charging Block Plug Adapter and 6ft',
    about: [
      "🎂❤️【20 Watt High-Speed Charging】The USB C Wall Charger Block, 3-Pack PD Power Delivery Fast Type C Charging Block Plug Adapter and 6ft usb c to usb c cable, charge your USB-C devices like iPhone 15 and iPad at up to 20W without sacrificing charging speed, charge your iPhone 15 Pro Max up to 50% in just 30 minutes, fully charge iPad Pro 12.9 in 2.5 hours, which is up to 3X faster than the original 5W charger.",
      "🎂❤️【Safe & Reliable】ETL, FCC, CE, ROHS certificated. The upgraded 20W USB C Fast Charging Block and 6ft Type C to C Cable Cord kit built-in multiple protection systems to avoid over-voltage, over-charge, over-heating; The iPad air charger iPad mini charger can automatically match the current required by your devices to charge your devices quickly, safely and stably.",
      "🎂❤️Easy to Control: With one key takeoff/landing/return and headless mode, it's more convenient to operate when unexpected conditions arise, and not have to worry about orientation, suitable for beginners.",
      "🎂❤️After-Sales: If you have any problem, please contact our store. Honor to serve you.",
    ],
    Price:'$8.9',
    dimensions: "IDiSONCABLE",
    dateAvailable: "USB",
    manufacturer: "	USB Type C",
    asin: "B0B6BRXPWC",
    rating: 1.0,
    reviews: "1.0 ⭐⭐⭐⭐",
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
          className="w-full md:w-1/3 rounded shadow-lg transform transition-transform duration-300 hover:scale-110 "
        />
        
        {/* Product Details Section */}
        <div className="mt-5 md:mt-0 ml-0 md:ml-8 max-w-full md:max-w-lg">
          <div className="mt-4">
            <h2 className='text-2xl font-extrabold mb-2'>Product details</h2>
            <p className="text-sm text-gray-600 mb-3 font-extrabold ">
              <strong >Price:</strong> {product.Price}
            </p>
            <p className="text-sm text-gray-600 ">
              <strong>
              Brand:</strong> {product.dimensions}
            </p>
            <p className="text-sm text-gray-600 mt-2">
              <strong>Connectivity Technology:</strong> {product.dateAvailable}
            </p>
            <p className="text-sm text-gray-600 mt-2">
              <strong>Connector Type:</strong> {product.manufacturer}
            </p>
            <p className="text-sm text-gray-600 mt-2">
              <strong>Compatible Devices:</strong> {product.asin}
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
      <a href="/Payment/ElectronicBank1" title="Payment">
          <FaUniversity size={24} className="text-gray-700" title="Bank" />
          <span className="text-sm text-gray-600">Bank</span>
          </a>
        </div>
        
        <div className="flex flex-col items-center">
        <a href="/Payment/ElectronicEasyPaisa1" title="Payment">
  <FaMobileAlt size={24} className="text-green-600 ml-3" title="EasyPaisa" />
  <span className="text-sm text-gray-600">EasyPaisa</span>
  </a>
</div>

        <div className="flex flex-col items-center">
        <a href="/Payment/ElectronicPaypal1" title="Payment">
          <FaCcPaypal size={24} className="text-blue-500" title="PayPal" />
          <span className="text-sm text-gray-600">PayPal</span>
          </a>
        </div>
        <div className="flex flex-col items-center">
        <a href="/Payment/ElectronicCerdit1" title="Payment">
          <FaCreditCard size={24} className="text-purple-600" title="Credit Card" />
          <span className="text-sm text-gray-600">Card</span>
          </a>
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
      <Electronics1 /><br /><br />
      <Footer />
    </div>
  );
}
