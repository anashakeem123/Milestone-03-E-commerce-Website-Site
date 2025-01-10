import React from 'react';
import Navbar from '@/app/component/Navbar';
import Footer from '@/app/component/Footer';

export default function FoodAndBeverages() {
  
  // Array for products with unique details

   {/*ALlitems Row*/}
  const  ALlitems = [
    {
      image: '/assets/FB1.webp',
      title: 'Cabbage (Band Gobi)',
      description: 'A Healthy and Versatile Vegetable',
      price: '$199.99',
      rating: 4.5,
      link:'/Checkout/Food1'
    },
    {
      image: '/assets//FB11.webp',
      title: ' Patti Fry Masala ',
      description: 'A Perfect Spice Mix for Flavorful',
      price: '$249.99',
      rating: 3.5,
      link:'/Checkout/Food2'
    },
    {
      image: '/assets/FB20.webp',
      title: 'Maggi Noodles - Meri Masala',
      description: 'Quick and Tasty Noodles with a Deliciou',
      price: '$299.99',
      rating: 5,
      link:'/Checkout/Food3'
    },
    {
      image: '/assets/FB21.webp',
      title: 'NATIONAL MURGHI MASALA',
      description: 'A Flavorful Spice Mix for Delicious',
      price: '$179.99',
      rating: 4,
      link:'/Checkout/Food4'
    },
    {
        image: '/assets/FB5.webp',
        title: 'White Beet (Gogroo)',
        description: 'Fresh and Nutritious White Beets',
        price: '$199.99',
        rating: 4.5,
        link:'/Checkout/Food5'
      },
      {
        image: '/assets/FB16.webp',
        title: 'Dry Dates | Chuwara',
        description: 'Premium Quality Dried Dates for a Healthy Snack',
        price: '$249.99',
        rating: 3.5,
        link:'/Checkout/Food6'
      },
      {
        image: '/assets/FB7.webp',
        title: 'Cheese Paratha',
        description: 'Delicious and Cheesy Paratha for a Perfect',
        price: '$299.99',
        rating: 5,
        link:'/Checkout/Food7'
      },
      {
        image: '/assets/FB8.webp',
        title: 'Plain Paratha',
        description: 'Soft and Flaky Paratha for Every Meal',
        price: '$179.99',
        rating: 4,
        link:'/Checkout/Food8'
      },
      {
        image: '/assets/FB9.webp',
        title: 'Polac Pineapple Slices',
        description: 'Sweet and Tangy Pineapple Slices',
        price: '$299.99',
        rating: 5,
        link:'/Checkout/Food9'
      },
      {
        image: '/assets/FB15.webp',
        title: 'Miilee Vermicelli',
        description: 'Delicious, Soft, and High-Quality Vermicelli',
        price: '$179.99',
        rating: 4,
        link:'/Checkout/Food10'
      },
      {
        image: '/assets/FB19.webp',
        title: ' Breakfast Foods Day Right',
        description: 'Delicious and Nutritious Breakfast Options ',
        price: '$299.99',
        rating: 5,
        link:'/Checkout/Food11'
      },
      {
        image: '/assets/FB2.webp',
        title: 'Cauliflower (Gul Gobi)',
        description: 'Fresh, Healthy, and Nutritious Cauliflower ',
        price: '$179.99',
        rating: 4,
        link:'/Checkout/Food12'
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
                 <div className=' bg-gradient-to-r from-blue-400 to-purple-500'>
                   <img
                     src=" /assets/Food && Beverages2.webp"
                     alt="Books"
                     className="w-full h-80 object-cover"
                   />
                   <h2 className="text-center mt-10 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-800 mb-20 underline hover:text-red-600">
                   Food && Beverages
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
           