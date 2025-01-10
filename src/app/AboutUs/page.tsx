import React from 'react';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';
import Head from 'next/head';

const AboutUs = () => {
  return (
    <>
    <Head>
        <title>Anas Ecommerce Website</title>
        <meta name="description" content="This is a Ecommerce Website Store" />
      </Head>
      <Navbar />
      <section className="py-12 sm:py-20 bg-gradient-to-r from-blue-400 to-purple-500">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            {/* Text Section */}
            <div className="space-y-4 sm:space-y-6">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-800">
                About Us
              </h2>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                Welcome to <span className="font-semibold text-blue-600">ShopEase</span>, your trusted online destination for the latest in technology, fashion, and lifestyle products. Our mission is to bring you high-quality products at competitive prices, paired with an exceptional shopping experience.
              </p>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                We are dedicated to ensuring customer satisfaction through a curated selection of top-tier products, fast shipping, and responsive support. With a focus on innovation and trust, ShopEase aims to become your go-to platform for all your shopping needs.
              </p>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                Our team is committed to making shopping easy and enjoyable, whether youre upgrading your tech, refreshing your wardrobe, or finding the perfect gift.
              </p>
              <a
                href="/ContactUs"
                className="inline-block px-6 sm:px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition duration-300"
              >
                Contact Us
              </a>
            </div>

            {/* Image Section */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full sm:w-3/4 lg:w-full">
                <img
                  src="/assets/Anas Hakeem (1).webp" // Replace with your eCommerce team or product image URL
                  alt="Our Team"
                  className="rounded-lg shadow-xl object-cover w-full h-64 sm:h-80 lg:h-96"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-gray-900 rounded-lg opacity-60"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default AboutUs;
