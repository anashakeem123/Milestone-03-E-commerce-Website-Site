import React from 'react';
import Navbar from '@/app/component/Navbar';
import Footer from '@/app/component/Footer';
export default function Home_Appliances() {
  // Array for products with unique details

   {/*ALlitems Row*/}
  const  ALlitems = [
    {
      image: '/assets/H1.webp',
      title: 'Vegetable Chopper',
      description: '12-in-1, 7 blades, slicer/dicer.',
      price: '$22.1',
      rating: 4.5,
      link:"/Checkout/Home1"
    },
    {
      image: '/assets/H11.webp',
      title: 'Cleaner Kit',
      description: 'Dryer,Vent,Vacuum hose, lint brush, blue.',
      price: '$20',
      rating: 3.5,
      link:"/Checkout/Home2"
    },
    {
      image: '/assets/H10.webp',
      title: 'Plus Air Fryer',
      description: 'Instant Vortex: 6QT, 6-in-1, black.',
      price: '$210',
      rating: 5,
      link:"/Checkout/Home3"
    },
    {
      image: '/assets/H5.webp',
      title: 'BELLA Food Steamer',
      description: 'Food Steamer: 7.4QT, dual basket.',
      price: '$58',
      rating: 4,
      link:"/Checkout/Home4"
    },
  ];


   {/*Second Row*/}
  const products = [
    {
      image: '/assets/H19.webp',
      title: 'Pod & Grounds 16oz',
      description: 'K-Cup Coffee Maker Built-in Milk Frother.',
      price: '$55',
      rating: 4.5,
       link:"/Checkout/HomeS1"
    },
    {
      image: '/assets/k1.webp',
      title: 'Electric Non-Stick Donut',
      description: 'Donuts Heating Design (Light Green)',
      price: '$180',
      rating: 3.5,
       link:"/Checkout/HomeS2"
    },
    {
      image: '/assets/H16.webp',
      title: 'Baseball Ice Cream',
      description: '14-Pack 8 Plastic Sundae Cups.',
      price: '$33',
      rating: 5,
       link:"/Checkout/HomeS3"
    },
    {
      image: '/assets/H20.webp',
      title: 'Gravity Electric Salt',
      description: 'Pepper Grinder Set, Battery Powered',
      price: '$120',
      rating: 4,
       link:"/Checkout/HomeS4"
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
    src="/assets/HA1.webp"
    alt="Fashion"
    className="hidden md:block w-full h-80 object-cover"
  />
  
  {/* Image for Mobile */}
  <img
    src="/assets/HA3.webp"
    alt="Fashion"
    className="block md:hidden w-full h-80 object-cover "
  />
</div>
        <h2 className="text-center mt-10 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-800 mb-20 underline hover:text-red-600">
        Home Appliances
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
        </div>
        <br /><br />
    <Footer/>
      </div>
      
    </>

  );
}
