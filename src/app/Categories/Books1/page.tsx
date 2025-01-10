import React from 'react';

export default function BooksAndStationery1() {
  
  // Array for products with unique details

   {/*ALlitems Row*/}
  const  ALlitems = [
    
    {
        image: '/assets/B11.webp',
        title: 'Fancy Pouch for Kids',
        description: 'Includes geometry box and stationery items.',
        price: '$0.86',
        rating: 4.5,
         link:'/Checkout/Books5'
      },
      {
        image: '/assets/B6.webp',
        title: 'Pollywood Pencil',
        description: 'Deer Super Excel Jar Pollywood Pencil (48 PCS)',
        price: '$3.4',
        rating: 3.5,
         link:'/Checkout/Books6'
      },
      {
        image: '/assets/B7.webp',
        title: 'METAL STATIONERY',
        description: 'METAL STATIONERY SET WDN9058',
        price: '$5',
        rating: 5,
         link:'/Checkout/Books7'
      },
      {
        image: '/assets/B8.webp',
        title: 'Silicone Pen Holder',
        description: 'Silicone Pen Holder to Help Write - 3 Pieces',
        price: '$6',
        rating: 4,
          link:'/Checkout/Books8'
      },
      {
        image: '/assets/B22.webp',
        title: 'Love stories',
        description: 'Love stories from the quran by yahya ibrahim',
        price: '$8',
        rating: 5,
         link:'/Checkout/Books9'
      },
      {
        image: '/assets/B20.webp',
        title: 'Bhoot Nagri Urdu Fairy ',
        description: 'Tale for Kids Urdu Story Book',
        price: '$13',
        rating: 4,
         link:'/Checkout/Books10'
      },
      {
        image: '/assets/B19.webp',
        title: 'Omar ka Jadu in Urdu',
        description: 'Omar ka Jadu in Urdu Paperba 30-Dec-2000',
        price: '$15',
        rating: 5,
          link:'/Checkout/Books11'
      },
      {
        image: '/assets/B15.webp',
        title: 'The Battle for Pakistan',
        description: 'The Battle for Pakistan by Shuja Nawaz',
        price: '$14',
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
      <div>
      <div className="flex flex-wrap justify-center gap-8 mt-10  bg-gradient-to-r from-blue-400 to-purple-500">
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
};
