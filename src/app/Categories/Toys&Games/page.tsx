import React from 'react';
import Navbar from '@/app/component/Navbar';
import Footer from '@/app/component/Footer';
export default function Toys() {
  
  // Array for products with unique details

   {/*ALlitems Row*/}
  const  ALlitems = [
    {
      image: '/assets/T1.webp',
      title: 'Doremon Kids',
      description: 'Doremon Kids Learning Phone Toys',
      price: '$14',
      rating: 4.5,
      link:'/Checkout/Toys1'
    },
    {
      image: '/assets/T12.webp',
      title: 'Arrow & Bow Set',
      description: '6 pieces, for kids archery practice.',
      price: '$22',
      rating: 3.5,
       link:'/Checkout/Toys2'
    },
    {
      image: '/assets/T3.webp',
      title: 'HERSITY Animal Figurines',
      description: 'Large wildlife set, educational toy for kids.',
      price: '$30',
      rating: 5,
       link:'/Checkout/Toys3'
    },
    {
      image: '/assets/T4.webp',
      title: 'Pop and Catch',
      description: 'Use launchers to pop and catch the ball.',
      price: '$46',
      rating: 4,
       link:'/Checkout/Toys4'
    },
  ];


   {/*Second Row*/}
  const products = [
    {
      image: '/assets/T5.webp',
      title: 'JOY SPOT!',
      description: 'JOY SPOT! 3-in-1 Outdoor Toy Set Kids',
      price: '$102',
      rating: 4.5,
       link:'/Checkout/ToysS1'
    },
    {
      image: '/assets/T9.webp',
      title: 'Large Scratch Note',
      description: 'Pad, 26cm x 19cm, with Wooden Stick',
      price: '$0.49',
      rating: 3.5,
       link:'/Checkout/ToysS2'
    },
    {
      image: '/assets/T8.webp',
      title: 'Laser Tag Set of 2',
      description: 'indoor outdoor play. Ideal gift for kids',
      price: '$0.54',
      rating: 5,
       link:'/Checkout/ToysS3'
    },
    {
      image: '/assets/T11.webp',
      title: 'Indoor Basketball',
      description: 'Indoor Basketball Shootout for kids',
      price: '$22',
      rating: 4,
       link:'/Checkout/ToysS4'
    },
  ];
   
  // Render stars function
  const renderStars = (rating: number) => {
    const roundedRating = Math.round(rating);
    const fullStars = roundedRating;
    const emptyStars = 5 - fullStars;

    return (
      <div className="flex justify-center mt-2">
        {[...Array(fullStars)].map((_, index) => (
          <span key={`full-${index}`} className="text-yellow-400 text-xl">
            &#9733;
          </span>
        ))}
        {[...Array(emptyStars)].map((_, index) => (
          <span key={`empty-${index}`} className="text-gray-300 text-xl">
            &#9733;
          </span>
        ))}
      </div>
    );
  };

  return (
    <>
         <Navbar />
        <div className='bg-gradient-to-r from-blue-400 to-purple-500'>
        <div>
  {/* Image for Desktop */}
  <img
    src="/assets/TS1.webp"
    alt="Fashion"
    className="hidden md:block w-full h-80 object-cover"
  />
  
  {/* Image for Mobile */}
  <img
    src="/assets/TS2.webp"
    alt="Fashion"
    className="block md:hidden w-full h-80 object-cover "
  />
</div>
            <h2 className="text-center mt-10 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-800 mb-20 underline hover:text-red-600">
            Toys && Games
            </h2>
    
    
    
           {/*All items Row*/}
           <div className="text-center bg-green-500 text-yellow-50 py-2 text-2xl sm:text-3xl md:text-4xl font-extrabold  hover:bg-black">
              All ITEMS
            </div>
            <div className="flex flex-wrap justify-center gap-8 mt-10">
              {ALlitems.map((ALlitems, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md text-center max-w-xs sm:max-w-sm md:max-w-md"
                >
                  <img
                    src={ALlitems.image}
                    alt={ALlitems.title}
                    className="w-60 h-50 object-cover rounded-md mx-auto"
                  />
                  <h3 className="mt-4 text-xl font-bold text-gray-700">
                    {ALlitems.title}
                  </h3>
                  <p className="mt-2 text-gray-600 text-sm">{ALlitems.description}</p>
                  <p className="mt-2 text-lg font-bold text-green-500">
                    {ALlitems.price}
                  </p>
                  <div className="mt-2 mb-2">{renderStars(ALlitems.rating)}</div>
                  <a
                    href={ALlitems.link}
                    className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                  >
                    Add to Cart
                  </a>
                </div>
              ))}
            </div>
    
    
         {/*Aper Row*/}
            <div className="flex flex-wrap justify-center gap-8 mt-10">
              {products.map((products, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md text-center max-w-xs sm:max-w-sm md:max-w-md"
                >
                  <img
                    src={products.image}
                    alt={products.title}
                    className="w-60 h-50 object-cover rounded-md mx-auto"
                  />
                  <h3 className="mt-4 text-xl font-bold text-gray-700">
                    {products.title}
                  </h3>
                  <p className="mt-2 text-gray-600 text-sm">{products.description}</p>
                  <p className="mt-2 text-lg font-bold text-green-500">
                    {products.price}
                  </p>
                  <div className="mb-3">{renderStars(products.rating)}</div>
                  <a
                    href={products.link}
                    className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                  >
                    Add to Cart
                  </a>
                </div>
              ))}
            </div><br /><br />
        <Footer/>
          </div>
        </>
    
      );
    }
    