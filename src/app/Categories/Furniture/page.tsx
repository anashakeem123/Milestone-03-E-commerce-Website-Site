import React from 'react';
import Navbar from '@/app/component/Navbar';
import Footer from '@/app/component/Footer';

export default function Furniture() {
  
  // Array for products with unique details

   {/*ALlitems Row*/}
  const  ALlitems = [
    {
      image: '/assets/Furniture1.webp',
      title: 'Laptop Table',
      description: 'Portable Folding Laptop Table: Bed/Study desk',
      price: '$16',
      rating: 4.5,
      link:'/Checkout/Furniture1'
    },
    {
      image: '/assets//Furniture3.webp',
      title: 'Wooden Folding Table',
      description: 'Small, multi-purpose, available in 9 colors.',
      price: '$19',
      rating: 3.5,
      link:'/Checkout/Furniture2'
    },
    {
      image: '/assets/Furniture01.webp',
      title: 'Coffee Table Round',
      description: 'Coffee Table Round top new products kit',
      price: '$39',
      rating: 5,
      link:'/Checkout/Furniture3'
    },
    {
      image: '/assets/Furniture6.webp',
      title: 'H-Shape Office Desk',
      description: 'Space-saving, with shelves and book, 4 colors.',
      price: '$0.88',
      rating: 4,
      link:'/Checkout/Furniture4'
    },
    
    {
        image: '/assets/Furniture7.webp',
        title: 'Nordic Style Bedside',
        description: 'Corner Nightstand | Bedroom Coffee Table.',
        price: '$46',
        rating: 4.5,
        link:'/Checkout/Furniture5'
      },
      {
        image: '/assets/Furniture9.webp',
        title: 'Round Nesting Tables',
        description: 'White/Gold | Modern Accent Tables for Living',
        price: '$70',
        rating: 3.5,
        link:'/Checkout/Furniture6'
      },
      {
        image: '/assets/Furniture10.webp',
        title: 'Artificial green plant',
        description: 'Lifelike Artificial Green Plant to Brighten',
        price: '$00.70',
        rating: 5,
        link:'/Checkout/Furniture7'
      },
      {
        image: '/assets/Furniture11.webp',
        title: 'Set of 4 Wall Mounted',
        description: 'Floating Shelves | Book Shelf & Storage Shelves.',
        price: '$45',
        rating: 4,
        link:'/Checkout/Furniture8'
      },
      {
        image: '/assets/Furniture17.webp',
        title: ' Modern End Table with Storage',
        description: 'Homebliss Decor Rectangle Hollow Nightstand',
        price: '$102',
        rating: 5,
        link:'/Checkout/Furniture9'
      },
      {
        image: '/assets/Furniture14.webp',
        title: 'WISEMAX FURNITURE',
        description: 'WISEMAX Sofa Chair Fabric Armrest Solid Wood',
        price: '$64',
        rating: 4,
        link:'/Checkout/Furniture10'
      },
      {
        image: '/assets/Furniture15.webp',
        title: 'Cojín Decorativo',
        description: 'Cojín Decorativo 50X50 Arena Dream Home',
        price: '$30',
        rating: 5,
        link:'/Checkout/Furniture11'
      },
      {
        image: '/assets/Furniture16.webp',
        title: 'Urban Ladder Grace',
        description: 'Urban Ladder Grace Accent Chair Fabric',
        price: '$45',
        rating: 4,
        link:'/Checkout/Furniture12'
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
                          src="/assets/Furniture2.webp"
                          alt="Books"
                          className="w-full h-80 object-cover"
                        />
                        <h2 className="text-center mt-10 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-800 mb-20 underline hover:text-red-600">
                        Furniture
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
                