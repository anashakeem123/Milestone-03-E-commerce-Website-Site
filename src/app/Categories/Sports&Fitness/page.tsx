import React from 'react';
import Navbar from '@/app/component/Navbar';
import Footer from '@/app/component/Footer';
export default function SportAndFitness() {
  // Array for products with unique details

   {/*ALlitems Row*/}
  const  ALlitems = [
    {
      image: '/assets/S1.webp',
      title: 'Sports Elastic',
      description: 'Sports Elastic,absorbent,for men/women.',
      price: '$9.1',
      rating: 4.5,
      link:'/Checkout/Sport1'
    },
    {
      image: '/assets/S11.webp',
      title: 'Sports Kneepad',
      description: '2pcs Elastic, thick sponge, for men.',
      price: '$15.9',
      rating: 3.5,
      link:'/Checkout/Sport2'
    },
    {
      image: '/assets/S10.webp',
      title: 'Resistance Band Set',
      description: '5-in-1,pieces,door anchor ankle straps.',
      price: '$18',
      rating: 5,
      link:'/Checkout/Sport3'
    },
    {
      image: '/assets/S5.webp',
      title: 'Figure 8 Resistance Band',
      description: 'Elastic, pink, for arms and legs.',
      price: '$12',
      rating: 4,
      link:'/Checkout/Sport4'
    },
  ];


   {/*Second Row*/}
  const products = [
    {
      image: '/assets/S4.webp',
      title: 'Men Performance',
      description: 'Running Sports Shorts Fitness Football',
      price: '$4',
      rating: 4.5,
      link:'/Checkout/SportS1'
    },
    {
      image: '/assets/S6.webp',
      title: 'Everlast Handwraps',
      description: 'Thumb strap ensures of use with a hook ',
      price: '$17',
      rating: 3.5,
      link:'/Checkout/SportS2'
    },
    {
      image: '/assets/S8.webp',
      title: 'Generic Grippy Boy',
      description: 'Hand Resistance Band Set, Adjustable',
      price: '$24',
      rating: 5,
      link:'/Checkout/SportS3'
    },
    {
      image: '/assets/S7.webp',
      title: 'Mens Performance',
      description: 'Sports Shorts Gym Fitness Football',
      price: '$13',
      rating: 4,
      link:'/Checkout/SportS4'
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
             <img
               src="/assets/SF2.webp"
               alt="Sport && Fitness"
               className="w-full h-80 object-cover"
             />
             <h2 className="text-center mt-10 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-800 mb-20 underline hover:text-red-600">
             Sport && Fitness
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
     