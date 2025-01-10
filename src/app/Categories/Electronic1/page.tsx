import Link from 'next/link';
import React from 'react';
import Fashion1 from '../Fashion1/page'
import HomeAppliances1 from '../HomeAppliances1/page'
import SportAndFitness1 from '../Sports1/page';
import Toys1 from '../Toys1/page';
import HealthAndBeauty1 from '../Health1/page';
import BooksAndStationery1 from '../Books1/page';
import FoodAndBeverages1 from '../Food1/page';
import Furniture1 from '../Furniture1/page';
import Pets1 from '../Pet1/page';
import Tech1 from '../Tech1/page';
import BooksAndLearning1 from '../BooksLearning1/page';
export default function Electronics1() {
  // Array for products with unique details

   {/*laptop Row*/}
  const  ALlitems = [
    {
      image: '/assets/items1.webp',
      title: 'HR H2 Mini Drone',
      description: 'H2 Mini Drone,palm control,2 batteries.',
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
      link: '/Checkout/Electronic2',
    },
    {
      image: '/assets/item3.webp',
      title: 'AirPods 2nd Gen',
      description: 'AirPods 2nd Gen: Buzzer, 698mAh,',
      price: '$45',
      rating: 5,
      link: '/Checkout/Electronic3',
    },
    {
      image: '/assets/items4.webp',
      title: '2024 Mini Projector',
      description: 'Projector,1080P, WiFi & Bluetooth.',
      price: '$60',
      rating: 4,
      link: '/Checkout/Electronic4',
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
    
        <div className='bg-gradient-to-r from-blue-400 to-purple-500 '>
        <div className="flex flex-wrap justify-center gap-8 mt-10">
            {ALlitems.map((ALlitems, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md text-center max-w-xs"
              > 
            
                <img
                  src={ALlitems.image}
                  alt={ALlitems.title}
                  className="w-60 h-50 object-cover rounded-md mx-auto"
                />
                <h3 className="mt-4 text-xl font-bold text-black">
                  {ALlitems.title}
                </h3>
                <p className="mt-2 text-gray-600 text-sm">{ALlitems.description}</p>
                <p className="mt-2 text-lg font-bold text-green-500">
                  {ALlitems.price}
                </p>
                <div className="mt-2">{renderStars(ALlitems.rating)}</div>
                <Link href={ALlitems.link}>
                <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                  Add to Cart
                </button>
                </Link>
              </div>
            ))}
          </div>
   <Fashion1/>
   <HomeAppliances1/> 
<SportAndFitness1/>
   <br /><br />
      <Toys1/>
      <HealthAndBeauty1/>
      <BooksAndStationery1/>
      <FoodAndBeverages1/>
      <Furniture1/>
      <Pets1/>
      <Tech1/>
      <BooksAndLearning1/>
    </div>
      
      );
    }