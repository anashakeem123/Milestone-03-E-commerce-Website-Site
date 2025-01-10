import React from 'react';
import Navbar from '@/app/component/Navbar';
import Footer from '@/app/component/Footer';
export default function Fashion() {
  // Array for products with unique details

   {/*ALlitems Row*/}
  const ALlitems = [
    {
      image: '/assets/f7.webp',
      title: 'Vertical Bar Necklace',
      description: 'Necklace: Black & silver, for men/boys.',
      price: '$5',
      rating: 4.5,
      link:'/Checkout/Fashion1'
    },
    {
      image: '/assets/f6.webp',
      title: 'Vitty Bandanas',
      description: '2pcs, 22 cotton, dust protection.',
      price: '$7',
      rating: 3.5,
      link:'/Checkout/Fashion2'
    
    },
    {
      image: '/assets/f8.webp',
      title: 'Jewelry Organizer',
      description: '360 Rotatable: 5 layers.',
      price: '$19',
      rating: 5,
      link:'/Checkout/Fashion3'
    },
    {
      image: '/assets/f9.webp',
      title: 'Halima Sultan Cap',
      description: 'Handmade, with jewelry.',
      price: '$179.99',
      rating: 4,
      link:'/Checkout/Fashion4'
    },
  ];


   {/*Second Row*/}
  const products = [
    {
      image: '/assets/Aper5.webp',
      title: 'Stylish Upper',
      description: 'Winter Zipper Bomber Jacket for Men',
      price: '$7',
      rating: 4.5,
      link:'/Checkout/FashionS1'
    },
    {
      image: '/assets/Aper2.webp',
      title: 'Upper Jacket For Men',
      description: 'Dayz - Premium Quality Polyester Bike',
      price: '$15',
      rating: 3.5,
      link:'/Checkout/FashionS2'

    },
    {
      image: '/assets/Aper3.webp',
      title: 'Winter Sleeves Jacket',
      description: 'Winter Sleeves Zipped Jacket',
      price: '$13',
      rating: 5,
      link:'/Checkout/FashionS3'
    },
    {
      image: '/assets/Aper4.webp',
      title: 'Timberland Mens',
      description: 'Timberland Mens Casual Leather Belt',
      price: '$19',
      rating: 4,
      link:'/Checkout/FashionS4'
    },
  ];
    // Array for products with unique details
     {/*Accessories Row*/}
  const  Product2 = [
    {
      image: '/assets/fr1.webp',
      title: 'Timberland Mens',
      description: 'Timberland Mens Casual Leather Belt',
      price: '$28',
      rating: 4.5,
      link:'/Checkout/FashionTH1'
    },
    {
      image: '/assets/i7.webp',
      title: 'CHANEDE Sim RFID Wallet',
      description: 'Men – 12 Slots with ID Window Gift Box.',
      price: '$29',
      rating: 3.5,
      link:'/Checkout/FashionTH2'
    },
    {
      image: '/assets/i18.webp',
      title: 'KALIYADI Classic Aviator',
      description: 'Sunglasses – Polarized Men & Women.',
      price: '$24',
      rating: 5,
      link:'/Checkout/FashionTH3'
    },
    {
      image: '/assets/fr8.webp',
      title: 'Tablet Lite Edition',
      description: 'Lightweight and portable.',
      price: '$22',
      rating: 4,
      link:'/Checkout/FashionTH4'
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
    src="/assets/FN1.webp"
    alt="Fashion"
    className="hidden md:block w-full h-80 object-cover"
  />
  
  {/* Image for Mobile */}
  <img
    src="/assets/FN2.webp"
    alt="Fashion"
    className="block md:hidden w-full h-80 object-cover mt-0"
  />
</div>
        <h2 className="text-center mt-10 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-800 mb-20 underline hover:text-red-600">
          Fashion Products
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
     <div className="mt-6">
          <h2 className="flex items-center justify-center pt-4 bg-green-500 text-yellow-50 pb-2 text-3xl sm:text-4xl font-extrabold hover:bg-black">
            Jacket
          </h2>
        </div>
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
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 mt-6"
              >
                Add to Cart
              </a>
            </div>
          ))}
        </div>
      

     {/*Accessories Row*/}

     <div className="mt-6">
          <h2 className="flex items-center justify-center pt-4 bg-green-500 text-yellow-50 pb-2 text-3xl sm:text-4xl font-extrabold hover:bg-black">
          Mix Categories
          </h2>
        </div>
        <div className="flex flex-wrap justify-center gap-8 mt-10">
          {Product2.map((Product2, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md text-center max-w-xs sm:max-w-sm md:max-w-md"
            >
              <img
                src={Product2.image}
                alt={Product2.title}
                className="w-60 h-50 object-cover rounded-md mx-auto"
              />
              <h3 className="mt-4 text-xl font-bold text-gray-700">
                {Product2.title}
              </h3>
              <p className="mt-2 text-gray-600 text-sm">{Product2.description}</p>
              <p className="mt-2 text-lg font-bold text-green-500">
                {Product2.price}
              </p>
              <div className="mb-2">{renderStars(Product2.rating)}</div>
              <a
                href={Product2.link}
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


