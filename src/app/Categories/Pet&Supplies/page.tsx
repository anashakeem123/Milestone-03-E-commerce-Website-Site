import React from 'react';
import Navbar from '@/app/component/Navbar';
import Footer from '@/app/component/Footer';
export default function Pets() {
  
  // Array for products with unique details

   {/*ALlitems Row*/}
  const  ALlitems = [
    {
      image: '/assets/Pet17.webp',
      title: 'Dog & Cat Medicine',
      description: 'Sneezing relief,respiratory made in USA.',
      price: '$00.99',
      rating: 4.5,
      link:'/Checkout/Pet1'
    },
    {
      image: '/assets/Pet6.webp',
      title: 'Feline Cat Food',
      description: 'Feline Cat Food provides top-tier nutrition',
      price: '$0.48',
      rating: 3.5,
      link:'/Checkout/Pet2'
    },
    {
      image: '/assets/Pet15.webp',
      title: 'NexGard® for Dogs',
      description: 'Trusted protection fleas & ticks for your dog.',
      price: '$0.78',
      rating: 5,
      link:'/Checkout/Pet3'
    },
    {
      image: '/assets/Pet16.webp',
      title: 'CAT DEWORMING TABLET',
      description: 'What Are The Benefits Drontal Tablets For Cats',
      price: '$0.50',
      rating: 4,
      link:'/Checkout/Pet4'
    },
    {
      image: '/assets/Pet14.webp',
      title: 'cocker spaniel',
      description: 'Beautiful cocker spaniel with brush, isolated',
      price: '$30',
      rating: 4.5,
      link:'/Checkout/Pet5'
    },
    {
      image: '/assets//Pet4.webp',
      title: 'Stand For Parrots',
      description: 'T Stand For Parrots ( Solid Wood)',
      price: '$44',
      rating: 3.5,
      link:'/Checkout/Pet6'
    },
    {
      image: '/assets/Pet2.webp',
      title: 'Premium Adjustable Dog',
      description: ' Harnes Soft, Durable Comfort & Security.',
      price: '$00.78',
      rating: 5,
      link:'/Checkout/Pet7'
    },
    {
      image: '/assets/Pet01.webp',
      title: 'Organic Coconut Fiber',
      description: 'Bird Nest | Handmade | Ideal for Small Birds',
      price: '$00.47',
      rating: 4,
      link:'/Checkout/Pet8'
    },
    
      {
        image: '/assets/Pet8.webp',
        title: 'cat slicker brush',
        description: 'cat slicker brush, cat slicker brush Suppliers',
        price: '$32',
        rating: 5,
        link:'/Checkout/Pet9'
      },
      {
        image: '/assets/Pet9.webp',
        title: 'Pet Hair Remover',
        description: 'Chom Chom Roller Reusable Lint Roller',
        price: '$13.71',
        rating: 5,
        link:'/Checkout/Pet10'
      },
      {
        image: '/assets/Pet10.webp',
        title: 'Pet Feeding Mat',
        description: 'Pet Feeding Mat - Absorbent Dog Food Mat ',
        price: '$66',
        rating: 5,
        link:'/Checkout/Pet11'
      },
      {
        image: '/assets/Pet11.webp',
        title: 'Pet Feeding food',
        description: 'Pet Feeding Mat - Absorbent Dog Food Mat',
        price: '$67',
        rating: 4,
        link:'/Checkout/Pet12'
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
                               src=" /assets/Pet&&Shop.webp"
                               alt=" Pet && Supplies"
                               className="w-full h-80 object-cover"
                             />
                             <h2 className="text-center mt-10 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-800 mb-20 underline hover:text-red-600">
                             Pet && Supplies
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
                     