import React from 'react';
import Navbar from '@/app/component/Navbar';
import Footer from '@/app/component/Footer';
export default function Tech() {
  
  // Array for products with unique details

   {/*ALlitems Row*/}
  const  ALlitems = [
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
    }, {
        image: '/assets/Tech17.webp',
        title: 'High-Speed USB Charging',
        description: 'Lightweight and portable OriginalCharging',
        price: '$33',
        rating: 4,
         link:'/Checkout/Tech13'
      },
      {
        image: '/assets/Tech35.webp',
        title: 'Mini HD Camera',
        description: 'Mini 4K HD Camera | WiFi Wireless',
        price: '$56',
        rating: 4,
         link:'/Checkout/Tech14'
      },
      {
        image: '/assets/Tech36.webp',
        title: 'CCTV 1080P HD',
        description: 'CCTV 1080P HD Mini Security Camera 2000t',
        price: '$130',
        rating: 4,
         link:'/Checkout/Tech15'
      },
      {
        image: '/assets/Tech34.webp',
        title: 'Security camera',
        description: 'Security camera system 2mp network camera',
        price: '$79',
        rating: 4,
         link:'/Checkout/Tech16'
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
                           <div>
  {/* Image for Desktop */}
  <img
    src="/assets/Techb1.webp"
    alt="Fashion"
    className="hidden md:block w-full h-80 object-cover"
  />
  
  {/* Image for Mobile */}
  <img
    src="/assets/Techb2.webp"
    alt="Fashion"
    className="block md:hidden w-full h-80 object-cover"
  />
</div>
                             <h2 className="text-center mt-10 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-800 mb-20 underline hover:text-red-600">
                             Tech && Gadgets
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
                     