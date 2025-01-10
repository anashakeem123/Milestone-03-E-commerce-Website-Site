
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
        image: '/assets/H11.webp',
        title: 'Flexible Dryer Lint Remover Hose Attachment for V6 V7 V8 V10 V11 V12 V15',
        subtitle: 'Efficient and Easy-to-Use Lint Remover for Dryer Maintenance and Airflow Improvement',
        about: [
          "🧼✨ **Flexible Hose Attachment**: This flexible hose attachment is designed to fit Dyson V6, V7, V8, V10, V11, V12, and V15 models, allowing you to clean hard-to-reach areas of your dryer and improve airflow.",
          "🧼✨ **Efficient Lint Removal**: Helps remove lint, dust, and debris from your dryer vent, preventing blockages that can reduce drying efficiency and pose a fire hazard.",
          "🧼✨ **Easy to Use**: Simply attach the hose to your Dyson vacuum and use the long, flexible design to reach deep into your dryer vent, making cleaning easier and more effective.",
          "🧼✨ **Improves Dryer Efficiency**: Regular lint removal helps maintain optimal airflow, improving drying times and extending the life of your dryer.",
          "🧼✨ **Durable and Long-Lasting**: Made with high-quality materials, ensuring long-lasting use and reliable performance for frequent cleaning sessions.",
          "🧼✨ **Space-Saving Design**: The compact and lightweight design makes it easy to store when not in use, saving space in your home or laundry room.",
          "🧼✨ **Compatible with Multiple Models**: Designed to work with Dyson V6, V7, V8, V10, V11, V12, and V15 vacuum models, offering versatility for different Dyson vacuum owners.",
          "🧼✨ **Prevents Fire Hazards**: By keeping your dryer vent clean and free of lint, this attachment helps reduce the risk of dryer fires caused by lint buildup.",
        ],
        Price:"$20",
        dimensions: "Hose Length: 30 inches; Diameter: Compatible with Dyson V6, V7, V8, V10, V11, V12, V15",
        dateAvailable: "Available Now",
        manufacturer: "SP Dealz",
        asin: "B0F9XYZ789",
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
      <Main1 />
      <HomeAppliances1 /><br /><br />
      <Footer />
    </div>
  );
}
