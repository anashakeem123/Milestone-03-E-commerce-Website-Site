'use client'
import React, { useEffect, useState } from "react";
import Categories from "../Categories/All/page";
// import '../style/globals.css'
import Main1 from "../Categories/Main1/page";
import Sec1 from '../Categories/Main1/page';
import Link from "next/link";
import Typewriter from "typewriter-effect";


export const Main = () => {
    const images = [
        "/assets/fifth-image.webp",
        "/assets/second-image.webp",
        "/assets/M1-image.webp",
        "/assets/four-image.webp",
        "/assets/six-image.webp",
        "/assets/seven-image.webp",
        "/assets/eight-image.webp",
        "/assets/nine-image.webp",
        "/assets/ten-image.webp",
        "/assets/11th-image.webp",
        "/assets/12th-image.webp",
        "/assets/four-image.webp",
        "/assets/third-image.webp",
    ];

    

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <>
         
        <div className="overflow-hidden ">
            {/* Hero Section */}
            <div className="hero bg-gradient-to-r from-blue-400 to-purple-500  text-white p-8 text-center">
                <h1 className="text-3xl sm:text-4xl  text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500 font-extrabold">
              <Typewriter
                options={{
                  strings: ["Welcome to Anas Hakeem Exclusive Shopping Store"],
                  autoStart: true,
                  loop: true,
                }}
              />
                </h1>
                <p className="mt-4 text-lg">Browse Our Extensive Collection of Premium Quality Goods!</p>
                <Link href="#CAT">
                <button className="mt-6 px-6 py-2 bg-white text-blue-500 rounded-md hover:bg-red-500">Shop Now</button>
                </Link>
                {/* Image Slider */}
                <div className="flex justify-center mt-4">
                    <img
                        src={images[currentImageIndex]}
                        alt="Hero Image"
                        className="rounded-lg w-full sm:w-4/5 lg:w-2/3 max-h-96 object-cover transition-all"
                    />
                </div>
            


            <Main1 />
            <Categories />
            <Sec1/>
        </div>
        </div>
        </>
    );
}
export default Main;
