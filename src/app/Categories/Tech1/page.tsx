import React from 'react';
export default function Tech1() {
  
  // Array for products with unique details

   {/*ALlitems Row*/}
  const  ALlitems = [

    {
        image: '/assets/Tech20.webp',
        title: 'Blade Hawks ',
        description: 'Surround Sound PC Gaming Headset',
        price: '$70',
        rating: 5,
         link:'/Checkout/Tech9'
      },
      {
        image: '/assets/Tech18.webp',
        title: 'Razer BlackShark',
        description: 'V2 X Headset: 50mm drivers,PC, Switch.',
        price: '$50',
        rating: 4,
       link:'/Checkout/Tech10'
      },
      {
        image: '/assets/Tech11.webp',
        title: 'Laptop Charger AC',
        description: 'Dell 90W 19.5V 4.62A Laptop Charger AC',
        price: '$48',
        rating: 5,
       link:'/Checkout/Tech11'
      },
      {
        image: '/assets/Tech12.webp',
        title: 'Gaming Mouse ',
        description: 'FANTECH Blake X17 Gaming Mouse Black',
        price: '$56',
        rating: 4,
        link:'/Checkout/Tech12'
      },
    {
      image: '/assets/Tech15.webp',
      title: 'Upgrow Type-C to USB',
      description: '2-pack, for iPhone, Samsung, Pixel,than more',
      price: '$78',
      rating: 4.5,
      link:'/Checkout/Tech1'
    },
    {
      image: '/assets/Tech14.webp',
      title: ' Silicone Dust Plug Covers',
      description: 'HP laptops (G4, G3, Envy, Omen, and more).',
      price: '$0.78',
      rating: 3.5,
       link:'/Checkout/Tech2'
    },
    {
      image: '/assets/Tech13.webp',
      title: 'Cable For CPU',
      description: 'VGA Cable For CPU/Laptop',
      price: '$0.89',
      rating: 5,
      link:'/Checkout/Tech3'
    },
    {
      image: '/assets/Tech4.webp',
      title: 'Trace chip',
      description: 'hight quality trace chip more than pixcel perfect',
      price: '$59',
      rating: 4,
     link:'/Checkout/Tech4'
    },
    {
      image: '/assets/Tech5.webp',
      title: 'Portable Smart Player ',
      description: '10.36-inch Screen Carplay Supports',
      price: '$99',
      rating: 4.5,
    link:'/Checkout/Tech5'
    },
    {
      image: '/assets//Tech6.webp',
      title: 'Silicone Car Phone Holder',
      description: 'Silicone Car Anti-slip mount for Opel models.',
      price: '$33',
      rating: 3.5,
      link:'/Checkout/Tech6'
    },
    {
      image: '/assets/Tech7.webp',
      title: 'Kokoon Sleep Earbuds',
      description: 'Bluetooth, noise masking, for sleep aid.',
      price: '$55',
      rating: 5,
      link:'/Checkout/Tech7'
    },
    {
      image: '/assets/Tech16.webp',
      title: 'Charger Cable',
      description: '6A 120W 3-in-1 Micro USB, LED, for Android.',
      price: '$0.77',
      rating: 4,
       link:'/Checkout/Tech8'
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
