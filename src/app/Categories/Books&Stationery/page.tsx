import React from 'react';
import Navbar from '@/app/component/Navbar';
import Footer from '@/app/component/Footer';
export default function BooksAndStationery() {
  
  // Array for products with unique details

   {/*ALlitems Row*/}
  const  ALlitems = [
    {
      image: '/assets/B1.webp',
      title: 'Little Board Book of ABC ',
      description: 'A Pocket-Sized, Premium Quality Book',
      price: '$199.99',
      rating: 4.5,
      link:'/Checkout/Books1'
    },
    {
      image: '/assets/B2.webp',
      title: 'Ikhlaqi Kahaniyan ',
      description: 'A Collection Inspiring and Engaging Moral Stories',
      price: '$249.99',
      rating: 3.5,
      link:'/Checkout/Books2'
    },
    {
      image: '/assets/B9.webp',
      title: 'Signature BSS Ball Pen',
      description: 'Smooth Writing, Durable Build',
      price: '$299.99',
      rating: 5,
      link:'/Checkout/Books3'
    },
    {
      image: '/assets/B10.webp',
      title: 'Double Headed Highlighters',
      description: 'Erasable, Bright, and Soft Highlighters',
      price: '$179.99',
      rating: 4,
      link:'/Checkout/Books4'
    },
    {
        image: '/assets/B11.webp',
        title: 'Fancy Pouch for Kids',
        description: 'A Stylish and Durable Stationery Pouch',
        price: '$199.99',
        rating: 4.5,
        link:'/Checkout/Books5'
      },
      {
        image: '/assets/B6.webp',
        title: 'Super Excel Pollywood Pencil ',
        description: 'Premium Quality Pollywood Pencils for Writing',
        price: '$249.99',
        rating: 3.5,
        link:'/Checkout/Books6'
      },
      {
        image: '/assets/B7.webp',
        title: 'Metal Stationery Set ',
        description: 'Durable and Stylish Stationery Essentials',
        price: '$299.99',
        rating: 5,
        link:'/Checkout/Books7'
      },
      {
        image: '/assets/B8.webp',
        title: 'Children Pencil Holder',
        description: 'Pen Grip for Preschool Learning',
        price: '$179.99',
        rating: 4,
        link:'/Checkout/Books8'
      },
      {
        image: '/assets/B22.webp',
        title: 'Love Stories from Quran',
        description: 'Love Stories from the Quran Spiritual Personal Growth',
        price: '$299.99',
        rating: 5,
        link:'/Checkout/Books9'
      },
      {
        image: '/assets/B20.webp',
        title: 'Bhoot Nagri Urdu Fairy',
        description: 'An Exciting and Fun Urdu Story Book',
        price: '$179.99',
        rating: 4,
        link:'/Checkout/Books10'
      },
      {
        image: '/assets/B19.webp',
        title: 'Umroo Ka Bhoot ',
        description: 'An Exciting Urdu Fairy Tale for Kids',
        price: '$299.99',
        rating: 5,
        link:'/Checkout/Books11'
      },
      {
        image: '/assets/B15.webp',
        title: 'The Battle for Pakistan US Friendship',
        description: 'An Insightful Analysis of Pakistan’s',
        price: '$179.99',
        rating: 4,
        link:'/Checkout/Books12'
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
              {/* <img
                src="/assets/Books13.webp"
                alt="Books"
                className="w-full h-80 object-cover"
              /> */}
               <div>
  {/* Image for Desktop */}
  <img
    src="/assets/Books13.webp"
    alt="Books & Stationery"
    className="hidden md:block w-full h-80 object-cover"
  />
  
  {/* Image for Mobile */}
  <img
    src="/assets/Books14.webp"
    alt="Books & Stationery"
    className="block md:hidden w-full h-80 object-cover"
  />
</div >
              <h2 className="text-center mt-10 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-800 mb-20 underline hover:text-red-600">
              Books && Stationery
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
      