import React from 'react';
export default function Pets1() {
  
  // Array for products with unique details

   {/*ALlitems Row*/}
  const  ALlitems = [
    {
      image: '/assets/Pet17.webp',
      title: 'Dog & Cat Medicine',
      description: 'Sneezing relief,respiratory support,made in USA.',
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
      description: 'Absorbent,quick-dry,food and water bowls',
      price: '$25',
      rating: 4,
      link:'/Checkout/Pet11'
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
