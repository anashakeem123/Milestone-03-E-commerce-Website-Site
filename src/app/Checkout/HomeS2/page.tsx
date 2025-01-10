
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
        image: '/assets/k1.webp',
        title: 'Nonstick Electric Donut Maker Machine, 1300W Double Sided Heating, 12 Donuts in 3-5 Minutes',
        subtitle: 'Quick and Easy Donut Maker for Homemade Donuts, Perfect for Home Bakery or Dessert Shop',
        about: [
          "🍩❤️ **1300W Double-Sided Heating**: This donut maker features powerful 1300W double-sided heating, allowing you to cook up to 12 delicious donuts in just 3-5 minutes, perfect for busy mornings or quick treats.",
          "🍩❤️ **Nonstick Cooking Plates**: The nonstick surface ensures that your donuts are easily released without sticking, making cleanup fast and effortless. No need for excess oil or butter.",
          "🍩❤️ **Efficient and Fast**: Cooks up to 12 donuts at once in just minutes, saving you time while providing fresh, golden-brown donuts every time.",
          "🍩❤️ **Perfect for Home Bakery or Dessert Shop**: Ideal for home bakers, families, or dessert shops looking to create fresh donuts quickly and efficiently.",
          "🍩❤️ **Compact and Convenient Design**: This donut maker is compact and easy to store, making it a great addition to any kitchen without taking up much space.",
          "🍩❤️ **Easy to Use**: The intuitive controls and clear indicator lights make it easy to bake donuts without any guesswork. Simply pour in the batter, and let the machine do the rest.",
          "🍩❤️ **Perfect Gift**: Makes a great gift for anyone who loves baking or wants to add a sweet touch to their kitchen. Whether for holidays, birthdays, or special occasions, this donut maker will be appreciated by all.",
          "🍩❤️ **Great for Customized Donuts**: Create a variety of donut flavors and toppings to suit everyone's taste, from classic glazed donuts to filled or sprinkled creations.",
        ],
        Price:"$180",
        dimensions: "Dimensions: 12 x 10 x 6 inches (L x W x H)",
        dateAvailable: "Available Now",
        manufacturer: "Nonstick",
        asin: "B08Y8Y9JZ9",
        rating: 4.6,
        reviews: "4.6 ⭐⭐⭐⭐⭐ (600+ Reviews)",
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
