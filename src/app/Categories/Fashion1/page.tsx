import React from 'react';

export default function Fashion1() {
  // Array for products with unique details

   {/*ALlitems Row*/}
  const  ALlitems = [
    {
      image: '/assets/f7.webp',
      title: 'Vertical Bar Necklace',
      description: 'Necklace: Black & silver, for men/boys.',
      price: '$5',
      rating: 4.5,
       link:'/Checkout/Fashion1'
    },
    {
      image: '/assets/f6.webp',
      title: 'Vitty Bandanas',
      description: '2pcs, 22 cotton, dust protection.',
      price: '$7',
      rating: 3.5,
       link:'/Checkout/Fashion2'
    },
    {
      image: '/assets/f8.webp',
      title: 'Jewelry Organizer',
      description: '360 Rotatable: 5 layers.',
      price: '$19',
      rating: 5,
      link:'/Checkout/Fashion3'
    },
    {
      image: '/assets/f9.webp',
      title: 'Halima Sultan Cap',
      description: 'Handmade, with jewelry.',
      price: '$179.99',
      rating: 4,
      link:'/Checkout/Fashion4'
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
      <div className=' bg-gradient-to-r from-blue-400 to-purple-500'>
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
              <p className="mt-2 text-gray-600 text-sm">{ALlitems.description}</p>
              <p className="mt-2 text-lg font-bold text-green-500">
                {ALlitems.price}
              </p>
              <div className="mb-3">{renderStars(ALlitems.rating)}</div>
              <a href={ALlitems.link}
               className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                Add to Cart
              </a>
            </div>
          ))}
        </div>
        </div>


);
}
