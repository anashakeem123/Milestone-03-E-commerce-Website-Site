import React from 'react';

export default function Toys1() {
  
  // Array for products with unique details

   {/*ALlitems Row*/}
  const  ALlitems = [
    {
      image: '/assets/T1.webp',
      title: 'Doremon Kids',
      description: 'Doremon Kids Learning Phone Toys',
      price: '$14',
      rating: 4.5,
      link:'/Checkout/Toys1'
    },
    {
      image: '/assets/T12.webp',
      title: 'Arrow & Bow Set',
      description: '6 pieces, for kids archery practice.',
      price: '$22',
      rating: 3.5,
      link:'/Checkout/Toys2'
    },
    {
      image: '/assets/T3.webp',
      title: 'HERSITY Animal Figurines',
      description: 'Large wildlife set, educational toy for kids.',
      price: '$30',
      rating: 5,
      link:'/Checkout/Toys3'
    },
    {
      image: '/assets/T4.webp',
      title: 'Pop and Catch',
      description: 'Use launchers to pop and catch the ball.',
      price: '$46',
      rating: 4,
      link:'/Checkout/Toys4'
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
      <div className='bg-gradient-to-r from-blue-400 to-purple-500'>
      <div className="flex flex-wrap justify-center gap-8">
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
              <h3 className="mt-4 text-xl font-bold text-gray-700">
                {ALlitems.title}
              </h3>
              <p className="mt-2 text-gray-600 text-xs flex">{ALlitems.description}</p>
              <p className="mt-2 text-lg font-bold text-green-500">
                {ALlitems.price}
              </p>
              <div className="mb-3">{renderStars(ALlitems.rating)}</div>
              <a href={ALlitems.link} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                Add to Cart
              </a>
            </div>
          ))}
        </div>
       </div>
    </>

  );
}
