import React from 'react';

export default function FoodAndBeverages1() {
  
  // Array for products with unique details

   {/*ALlitems Row*/}
  const  ALlitems = [
    {
      image: '/assets/FB1.webp',
      title: 'Cabbage / بند گوبھی',
      description: 'Cabbage / بند گوبھی',
      price: '$5',
      rating: 4.5,
       link:'/Checkout/Food1'
    },
    {
      image: '/assets//FB11.webp',
      title: 'Patti Fry Masala ',
      description: 'Winner Foods-Patti Fry Masala (Pack OF 12)',
      price: '$2',
      rating: 3.5,
      link:'/Checkout/Food2'
    },
    {
      image: '/assets/FB20.webp',
      title: 'Maggi Special Masala ',
      description: 'Noodles:70g pack, vegetarian.',
      price: '$14',
      rating: 5,
       link:'/Checkout/Food3'
    },
    {
      image: '/assets/FB21.webp',
      title: 'MURGHI MASALA',
      description: 'NATIONAL MURGHI MASALA MIX 50G',
      price: '$0.56',
      rating: 4,
      link:'/Checkout/Food4'
    },
    {
        image: '/assets/FB5.webp',
        title: 'Turnips',
        description: 'Turnips - Fresh Vegetables Organic Turnip',
        price: '$4',
        rating: 4.5,
        link:'/Checkout/Food5'
      },
      {
        image: '/assets/FB16.webp',
        title: 'Red Raisins',
        description: 'Red Raisins (Lal Meva)',
        price: '$8',
        rating: 3.5,
        link:'/Checkout/Food6'
      },
      {
        image: '/assets/FB7.webp',
        title: 'CHEESE PARATHA',
        description: 'Rubber CHEESE PARATHA Set with Track Tree',
        price: '$15',
        rating: 5,
         link:'/Checkout/Food7'
      },
      {
        image: '/assets/FB8.webp',
        title: 'PLAIN PARATHA',
        description: 'PLAIN PARATHA CHEESE DRY',
        price: '$17',
        rating: 4,
        link:'/Checkout/Food8'
      },
      {
        image: '/assets/FB9.webp',
        title: 'PINEAPPLE',
        description: 'POLAC PINEAPPLE BROKEN SLICES IN HEAVY',
        price: '$15',
        rating: 5,
        link:'/Checkout/Food9'
      },
      {
        image: '/assets/FB15.webp',
        title: 'Miilee Vermicelli',
        description: 'Buy Miilee Vermicelli – Sawaiyan At Best Price',
        price: '$0.64',
        rating: 4,
         link:'/Checkout/Food10'
      },
      {
        image: '/assets/FB19.webp',
        title: 'breakfast cereals',
        description: 'Different types of breakfast cereals on a light ',
        price: '$16',
        rating: 5,
         link:'/Checkout/Food11'
      },
      {
        image: '/assets/FB2.webp',
        title: 'Phool Gobi',
        description: 'Phool Gobi (1 kg) leading corporations',
        price: '$2',
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
