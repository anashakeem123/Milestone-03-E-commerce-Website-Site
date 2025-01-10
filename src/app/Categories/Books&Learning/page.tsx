import React from 'react';
import Navbar from '@/app/component/Navbar';
import Footer from '@/app/component/Footer';

export default function BooksAndLearning() {
  
  // Array for products with unique details

   {/*ALlitems Row*/}
  const  ALlitems = [
    {
      image: '/assets/L1.webp',
      title: 'Kids Board Books',
      description: 'ABC, 123, animals, fruits, veggies, and more',
      price: '$0.45',
      rating: 4.5,
      link:'/Checkout/BookL1'
    },
    {
      image: '/assets/L13.webp',
      title: 'Children Stories Books',
      description: 'Children Stories Books Pack (Large Size Books)',
      price: '$0.30',
      rating: 3.5,
      link:'/Checkout/BookL2'
    },
    {
      image: '/assets/L14.webp',
      title: 'Stories Books',
      description: 'Children Stories Books buitefull story',
      price: '$0.99',
      rating: 5,
      link:'/Checkout/BookL3'
    },
    {
      image: '/assets/L3.webp',
      title: 'History of Europe',
      description: 'yourself prepared for the History of Europe.',
      price: '$5',
      rating: 4,
      link:'/Checkout/BookL4'
    },
    {
      image: '/assets/L03.webp',
      title: 'CSS History ',
      description: 'CSS History of Pakistan & India',
      price: '$4',
      rating: 4.5,
      link:'/Checkout/BookL5'
    },
    {
      image: '/assets/L4.webp',
      title: 'Pet Sematary',
      description: 'An audiobook Pet Sematary by Michael Hall.',
      price: '$0.55',
      rating: 3.5,
      link:'/Checkout/BookL6'
    },
    {
      image: '/assets/L5.webp',
      title: 'A Personal History',
      description: 'man set become Pakistans new Prime Minister.',
      price: '$00.99',
      rating: 5,
      link:'/Checkout/BookL7'
    },
    {
      image: '/assets/L41.webp',
      title: 'Allama Iqbal Book',
      description: 'Allama Iqbal Best Book Baang e Dara',
      price: '$6',
      rating: 4,
      link:'/Checkout/BookL8'
    },
    
      
      {
        image: '/assets/ii2.webp',
        title: 'Names of Allah ',
        description: '99 Names of Allah - English & Arabic ',
        price: '$2',
        rating: 4,
         link:'/Checkout/BookL9'
      },
      {
        image: '/assets/L6.webp',
        title: 'Alishan Wehmay',
        description: 'Alishan Wehmay by Husain Haqqani',
        price: '$00.99',
        rating: 4,
         link:'/Checkout/BookL10'
      },
      {
        image: '/assets/L2.webp',
        title: '1965 Stories',
        description: '1965 Stories Indo-Pakistan War Softcover',
        price: '$13',
        rating: 4,
         link:'/Checkout/BookL11'
      },
      {
        image: '/assets/L02.webp',
        title: 'History of Pakistan',
        description: 'History of Pakistan & India Book for CSS ',
        price: '$179.99',
        rating: 4,
         link:'/Checkout/BookL12'
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
  src="/assets/Lt1.webp"
  alt="Books"
  className="w-full max-h-[80vh] object-cover"
/>

                             <h2 className="text-center mt-10 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-800 mb-20 underline hover:text-red-600">
                             Books && Learning
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
                             </div><br /><br />
                       <Footer />
                             </div>
                         </>
                       );
                     }
                     