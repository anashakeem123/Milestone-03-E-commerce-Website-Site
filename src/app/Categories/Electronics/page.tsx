import React from 'react';
import Navbar from '@/app/component/Navbar';
import Footer from '@/app/component/Footer';

export default function Electronics() {
  const ALlitems = [
    {
      image: '/assets/items1.webp',
      title: 'HR H2 Mini Drone',
      description: 'H2 Mini Drone, palm control, 2 batteries.',
      price: '$130',
      rating: 4.5,
      link: '/Checkout/Electronic1',
    },
    {
      image: '/assets/item2.webp',
      title: 'Fast Charge',
      description: '20W Fast Charger: USB-C, 3x 5ft cables.',
      price: '$8.9',
      rating: 3.5,
      link:'/Checkout/Electronic2'
    },
    {
      image: '/assets/item3.webp',
      title: 'AirPods 2nd Gen',
      description: 'AirPods 2nd Gen: Buzzer, 698mAh.',
      price: '$45',
      rating: 5,
      link:'/Checkout/Electronic3'
    },
    {
      image: '/assets/items4.webp',
      title: '2024 Mini Projector',
      description: 'Projector, 1080P, WiFi & Bluetooth.',
      price: '$60',
      rating: 4,
      link:'/Checkout/Electronic4'
    },
  ];


   {/*Mobile Row*/}

   const products = [
    {
      image: '/assets/Ip1.webp',
      title: 'IVEOPPE Case',
      description: 'Detachable Bluetooth keyboard ',
      price: '$50',
      rating: 4.5,
      link:'/Checkout/ElectronicM1'
    },
    {
      image: '/assets/Ip2.webp',
      title: 'Lenovo Yoga Tab ',
      description: 'PU leather with holder, sleep/wake ',
      price: '$40',
      rating: 3.5,
      link:'/Checkout/ElectronicM2'
      
    },
    {
      image: '/assets/Ip3.webp',
      title: 'Tablet Pro Max',
      description: 'Advanced features for professionals.',
      price: '$299.99',
      rating: 5,
      link:'/Checkout/ElectronicM3'
    },

    {
      image: '/assets/Ip4.webp',
      title: 'Tablet Lite Edition',
      description: 'Lightweight and portable.',
      price: '$179.99',
      rating: 4,
      link:'/Checkout/ElectronicM4',
    },
  ];


{/*Ipad Row*/}

  const products1 = [
    {
      image: '/assets/Tablet1.webp',
      title: 'IVEOPPE Case',
      description: 'Detachable Bluetooth keyboard',
      price: '$50',
      rating: 4.5,
      link:'/Checkout/ElectronicS1'
    },
    {
      image: '/assets/Tablet2.webp',
      title: 'Lenovo Yoga Tab',
      description: 'PU leather with holder, sleep/wake',
      price: '$40',
      rating: 3.5,
     link:'/Checkout/ElectronicS2'
    },
    {
      image: '/assets/Tablet3.webp',
      title: 'Tablet Pro Max',
      description: 'Advanced features for professionals.',
      price: '$299.99',
      rating: 5,
       link:'/Checkout/ElectronicS3'
    },
    {
      image: '/assets/Tablet4.webp',
      title: 'Tablet Lite Edition',
      description: 'Lightweight and portable.',
      price: '$179.99',
      rating: 4,
       link:'/Checkout/ElectronicS4'
    },
  ];

 {/*laptop Row*/}
 const  Product3 = [
  {
    image: '/assets/i1.webp',
    title: 'Laptop i3 11th Gen',
    description: '8GB RAM, 256GB SSD, 15 FHD Display.',
    price: '$199.99',
    rating: 4.5,
    link:'/Checkout/ElectronicTH1'
    
  },
  {
    image: '/assets/i2.webp',
    title: '15.6" Laptop',
    description: '16GB RAM, 512GB SSD, Quad-Core',
    price: '$249.99',
    rating: 3.5,
    link:'/Checkout/ElectronicTH2'
  },
  {
    image: '/assets/i3.webp',
    title: 'HP 2023 Chromebook',
    description: 'Intel N4120, 4GB RAM,64GB Chrome OS.',
    price: '$299.99',
    rating: 5,
    link:'/Checkout/ElectronicTH3'
  },
  {
    image: '/assets/i4.webp',
    title: 'Laptop Core i7',
    description: 'HP 15-FD03 8GB RAM, 512GB SSD',
    price: '$179.99',
    rating: 4,
    link:'/Checkout/ElectronicTH4'
  },
];
 

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
    src="/assets/E1.webp"
    alt="Fashion"
    className="hidden md:block w-full h-80 object-cover"
  />
  
  {/* Image for Mobile */}
  <img
    src="/assets/E2.webp"
    alt="Fashion"
    className="block md:hidden w-full h-80 object-cover"
  />
</div >
        <h2 className="text-center mt-10 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-800 mb-20 underline hover:text-red-600">
          Electronics Products
        </h2>

        {/* All items Row */}
        <div className="text-center bg-green-500 text-yellow-50 py-2 text-2xl sm:text-3xl md:text-4xl font-extrabold  hover:bg-black">
          All ITEMS
        </div>
        <div className="flex flex-wrap justify-center gap-8 mt-10">
          {ALlitems.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md text-center max-w-xs sm:max-w-sm md:max-w-md"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-60 h-50 object-cover rounded-md mx-auto"
              />
              <h3 className="mt-4 text-xl font-bold text-gray-700">
                {item.title}
              </h3>
              <p className="mt-2 text-gray-600 text-sm">{item.description}</p>
              <p className="mt-2 text-lg font-bold text-green-500">
                {item.price}
              </p>
              <div className="mt-2 mb-2">{renderStars(item.rating)}</div>
              <a
                href={item.link}
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              >
                Add to Cart
              </a>
            </div>
          ))}
        </div>


     
        {/* Mobile Row */}
        <div className="mt-6">
          <h2 className="flex items-center justify-center pt-4 bg-green-500 text-yellow-50 pb-2 text-3xl sm:text-4xl font-extrabold hover:bg-black">
            Mobile
          </h2>
        </div>
        <div className="flex flex-wrap justify-center gap-8 mt-10 " >
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
    




        {/* Tablet Row */}
        <div className="mt-6">
          <h2 className="flex items-center justify-center pt-4 bg-green-500 text-yellow-50 pb-2 text-3xl sm:text-4xl font-extrabold hover:bg-black">
          Tablet 
          </h2>
        </div>
        <div className="flex flex-wrap justify-center gap-8 mt-10">
          {products1.map((products1, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md text-center max-w-xs sm:max-w-sm md:max-w-md"
            >
              <img
                src={products1.image}
                alt={products1.title}
                className="w-60 h-50 object-cover rounded-md mx-auto"
              />
              <h3 className="mt-4 text-xl font-bold text-gray-700">
                {products1.title}
              </h3>
              <p className="mt-2 text-gray-600 text-sm">{products1.description}</p>
              <p className="mt-2 text-lg font-bold text-green-500">
                {products1.price}
              </p>
              <div className="mb-3">{renderStars(products1.rating)}</div>
              <a
                href={products1.link}
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              >
                Add to Cart
              </a>
            </div>
          ))}
        </div>

{/* Laptop Row */}
<div className="mt-6">
          <h2 className="flex items-center justify-center pt-4 bg-green-500 text-yellow-50 pb-2 text-3xl sm:text-4xl font-extrabold hover:bg-black">
          Laptop
          </h2>
        </div>
        <div className="flex flex-wrap justify-center gap-8 mt-10">
          {Product3.map((Product3, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md text-center max-w-xs sm:max-w-sm md:max-w-md"
            >
              <img
                src={Product3.image}
                alt={Product3.title}
                className="w-60 h-50 object-cover rounded-md mx-auto"
              />
              <h3 className="mt-4 text-xl font-bold text-gray-700">
                {Product3.title}
              </h3>
              <p className="mt-2 text-gray-600 text-sm">{Product3.description}</p>
              <p className="mt-2 text-lg font-bold text-green-500">
                {Product3.price}
              </p>
              <div className="mb-3">{renderStars(Product3.rating)}</div>
              <a
                href={Product3.link}
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              >
                Add to Cart
              </a>
            </div>
          ))}
      
      <Footer />
        </div>
        </div>

    </>
  );
}
