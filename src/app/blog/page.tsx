// pages/index.tsx
import React from 'react';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';

const Blog = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-gradient-to-r from-blue-400 to-purple-500">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-center text-gray-900 mb-6 tracking-wide">
          Welcome to Our E-Commerce Blog
        </h1>
        <p className="text-center text-base sm:text-lg md:text-xl text-gray-600 mb-10 leading-relaxed max-w-3xl mx-auto">
          Stay up-to-date with the latest trends, product guides, and expert tips across various categories. 
          Dive deep into expert recommendations and find the perfect items tailored just for you.
        </p>

        {/* Blog Categories */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-12">
          {/* Category Cards */}
          {[
            {
              title: 'Electronics',
              description:
                'Explore the latest in cutting-edge technology. From smartphones to laptops, find everything you need to stay connected and entertained.',
              gradient: 'from-blue-500 to-indigo-600',
              link: '/Categories/Electronics',
              linkColor: 'text-blue-200 hover:text-blue-300',
            },
            {
              title: 'Fashion',
              description:
                'Stay stylish with the latest fashion trends. Whether it\'s casual wear or formal attire, we have the best collections to make you look good.',
              gradient: 'from-pink-500 to-red-500',
              link: '/Categories/Fashion',
              linkColor: 'text-pink-200 hover:text-pink-300',
            },
            {
              title: 'Home Appliances',
              description:
               'Make your life easier with our premium home appliances. From refrigerators to washing machines, we offer high-quality products at great prices.',
              gradient: 'from-pink-500 to-indigo-600',
              link: '/Categories/HomeAppliances',
              linkColor: 'text-pink-200 hover:text-pink-300',
            },
            {
              title: 'Sports & Fitness',
              description:
               '  Reach your fitness goals with our top-of-the-line sports equipment. From yoga mats to dumbbells, weve got all the gear you need for a healthier life.',
              gradient: 'from-blue-500 to-pink-500',
              link: '/Categories/Sports&Fitness',
              linkColor: 'text-pink-200 hover:text-pink-300',
            },
            {
              title: 'Toys & Games',
              description:
               '   Fun for all ages! Explore our vast collection of toys and games that bring joy to children and adults alike.',
              gradient: 'from-blue-500 to-green-600',
              link: '/Categories/Toys&Games',
              linkColor: 'text-pink-200 hover:text-pink-300',
            },
            {
              title: 'Health & Beauty',
              description:
               ' Take care of yourself with our health and beauty products. From skincare to wellness supplements, we provide everything you need for a healthier lifestyle.',
              gradient: 'from-red-500 to-green-400',
              link: '/Categories/Health&Beauty',
              linkColor: 'text-pink-200 hover:text-pink-300',
            },
            {
              title: ' Books & Stationery',
              description:
               '  Whether youre into fiction or non-fiction, our book collection is a great place to start. Plus, shop for quality stationery to keep your creativity flowing.',
              gradient: 'from-pink-500 to-green-200',
              link: '/Categories/Books&Stationery',
              linkColor: 'text-pink-200 hover:text-pink-300',
            },
            {
              title: ' Food & Beverages',
              description:
               '  Discover a range of delicious snacks, beverages, and food items that will keep you satisfied and energized throughout the day.',
              gradient: 'from-blue-500 to-red-700',
              link: '/Categories/Food&Beverages',
              linkColor: 'text-pink-200 hover:text-pink-300',
            },
            {
              title: ' Furniture',
              description:
               '   Elevate your home decor with our wide selection of stylish furniture. From sofas to dining sets, find the perfect pieces to fit your space.',
              gradient: 'from-pink-500 to-red-400',
              link: '/Categories/Furniture',
              linkColor: 'text-pink-200 hover:text-pink-300',
            },
            {
              title: ' Pet Supplies',
              description:
               '  Take care of your furry friends with the best pet supplies. From food to accessories, we have everything your pet needs.',
              gradient: 'from-green-500 to-red-200',
              link: '/Categories/Pet&Supplies',
              linkColor: 'text-pink-200 hover:text-pink-300',
            },
            {
              title: 'Tech Gadgets',
              description:
               'Stay ahead of the curve with the latest tech gadgets. From smartwatches to wireless chargers, weve got all the newest innovations.',
              gradient: 'from-pink-500 to-indigo-600',
              link: '/Categories/Tech&Gadgets',
              linkColor: 'text-pink-200 hover:text-pink-300',
            },
            {
              title: ' Books & Learning',
              description:
               'Expand your knowledge with our vast collection of books. Whether youre looking to learn a new skill or dive into fiction, weve got you covered',
              gradient: 'from-red-500 to-green-400',
              link: '/Categories/Books&Learning',
              linkColor: 'text-pink-200 hover:text-pink-300',
            },
            // Add more categories here...
          ].map((category, index) => (
            <div
              key={index}
              className={`bg-gradient-to-r ${category.gradient} text-white p-6 sm:p-8 rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 duration-300`}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4">
                {category.title}
              </h2>
              <p className="text-sm sm:text-base md:text-lg mb-4">
                {category.description}
              </p>
              <a
                href={category.link}
                className={`${category.linkColor} text-sm md:text-lg font-medium transition-all duration-300`}
              >
                Discover More
              </a>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm sm:text-lg md:text-xl text-gray-700">
            Ready to shop? Explore our wide range of categories and discover exciting products today!
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Blog;
