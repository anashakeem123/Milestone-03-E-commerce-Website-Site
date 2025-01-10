'use client'
import React, { useEffect, useState } from "react";
import "../Main1/main1.css"
export default function Main1() {

    const FlashhSale = [
      { image: "/assets/Flash16.webp", title: "Dreo Heater", description: "Dreo Heater: 3-speed, oscillating, Eco mode.", price: "$150", pricene: "$200", rating: 5,  link:"/Checkout/Flash1"},

        {
          image: "/assets/Flash54.webp",
          title: "Hair Oil",
          description: "Hemani Cactus Hair Oil 200mL, with Lemon",
          price: "$250",
          pricene: "$300",
          rating: 5,
          link:"/Checkout/Flash2"
        },
        {
          image: "/assets/Flash71.webp",
          title: "Lipton Summer Fruits ",
          description: "Lipton Summer Fruits Tea: 20 bags.",
          price: "$20",
          pricene: "$30",
          rating: 5,
          link:"/Checkout/Flash3"
        },
        {
          image: "/assets/Flash74.webp",
          title: "Nestle Hot Cocoa",
          description: "Nestle Hot Cocoa: 27.7 oz can.",
          price: "$16",
          pricene: "$20",
          rating: 5,
          link:"/Checkout/Flash4"
        },
        { image: "/assets/Flash1.webp", title: "Boys Winter Hoodie", description: "Winter Hoodie: Fleece with double strip.", price: "$28", pricene: "$33", rating: 5, link:"/Checkout/Flash5" },

        {
          image: "/assets/Flash85.webp",
          title: " Shose Heart Bad",
          description: "AG-825 Deluxe Shose Badless",
          price: "$250",
          pricene: "$300",
          rating: 5,
          link:"/Checkout/Flash6"
        },
        {
          image: "/assets/Flash68.webp",
          title: "Dry Fruit Baskket",
          description: "Dry Fruit Baskket 4 Portion Wooden Quality",
          price: "$27",
          pricene: "$30",
           rating: 5,
           link:"/Checkout/Flash7"
        },

        { image: "/assets/Flash38.webp", title: "Glow Lotion", description: "Glow & Lovely Lotion: 200ml.", price: "$10", pricene: "$20", rating: 5 , link:"/Checkout/Flash8" },

        
    ]
    // State to hold the current image index
    const [, setCurrentImageIndex] = useState(0);
  
    // Effect to change the image every 3 seconds
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) =>
          prevIndex === Image.length - 1 ? 0 : prevIndex + 1
        );
      }, 3000); // Change image every 3 seconds
  
      return () => clearInterval(interval); // Clean up interval on unmount
    }, []);
  
    // Fallback image in case the source image fails to load
  


  // State to control animation pause
  const [isPaused, setIsPaused] = useState(false);


  return (

<div className="bg-gradient-to-r from-blue-400 to-purple-500"> 
<h2 className="flex items-center justify-center mt-6 text-3xl sm:text-4xl md:text-5xl font-extrabold animate-bounce hover:text-red-600 hover:underline">
  Flash Sale
</h2>
<div className="overflow-hidden mt-10 bg-gradient-to-r from-blue-400 to-purple-500">
        <div
          className={`whitespace-nowrap animate-slide ${isPaused ? "paused" : ""}`}
          onMouseEnter={() => setIsPaused(true)} // Pause animation on hover
          onMouseLeave={() => setIsPaused(false)} // Resume animation on leave
        >
          {FlashhSale.map((FlashhSale, index) => (
            <div
              key={index}
              className="inline-block bg-white p-6 rounded-lg shadow-md text-center mx-4"
              style={{ minWidth: "300px" }}
            >
              <img
                src={FlashhSale.image}
                alt={FlashhSale.title}
                className="w-60 h-43 object-cover rounded-md mx-auto"
              />
              <h3 className="mt-4 text-xl font-bold text-gray-700">{FlashhSale.title}</h3>
              <p className="mt-2 text-gray-600 text-sm">{FlashhSale.description}</p>
              <p className="mt-2 text-lg font-bold text-green-500 ">{FlashhSale.price}</p>
              <p className="mt-2 text-lg font-bold text-red-500 line-through mb-3">{FlashhSale.pricene}</p>
              <a
                href={FlashhSale.link}
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              >
                Add to Cart
              </a>
            </div>
          ))}
        </div>
      </div>
</div>           
  );
}      