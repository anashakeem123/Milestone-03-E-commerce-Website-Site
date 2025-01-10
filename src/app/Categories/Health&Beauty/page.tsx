import React from 'react';
import Navbar from '@/app/component/Navbar';
import Footer from '@/app/component/Footer';
export default function HealthAndBeauty() {
  
  // Array for products with unique details

   {/*ALlitems Row*/}
  const  ALlitems = [
    {
      image: '/assets/Ti6.webp',
      title: 'PARFUM POUR',
      description: 'EAU DE PARFUM POUR HOMME',
      price: '$54',
      rating: 4.5,
      link:'/Checkout/Health1'
    },
    {
      image: '/assets/Ti3.webp',
      title: 'Dettol Antiseptic Liquid',
      description: 'Dettol Antiseptic Liquid Solution',
      price: '$38',
      rating: 3.5,
      link:'/Checkout/Health2'
    },
    {
      image: '/assets/Ti5.webp',
      title: 'Panadol',
      description: 'Panadol Extra (Paracetamol) 100',
      price: '$2',
      rating: 5,
      link:'/Checkout/Health3'
    },
    {
      image: '/assets/Ti4.webp',
      title: 'Plastic Facial Mask',
      description: 'Mask : 6pcs, for skincare DIY mixing.',
      price: '$0.39',
      rating: 4,
      link:'/Checkout/Health4'
    },
  ];


   {/*Second Row*/}
  const products = [
    {
      image: '/assets/hb8.webp',
      title: 'Daily Multivitamin ',
      description: 'Women Ironvegan capsules whole food',
      price: '$17',
      rating: 4.5,
      link:'/Checkout/HealthS1'
    },
    {
      image: '/assets/hi10.webp',
      title: 'Fast Relief Joint-Ritis',
      description: '| Fast Relief Joint-Ritis | All-Natural',
      price: '$30',
      rating: 3.5,
      link:'/Checkout/HealthS2'
    },
    {
      image: '/assets/hi15.webp',
      title: 'Powerful Caldiu',
      description: 'Powerful Caldium C Effervescent Tablets',
      price: '$13',
      rating: 5,
      link:'/Checkout/HealthS3'
    },
    {
      image: '/assets/hi4.webp',
      title: 'Joshanda',
      description: 'Hamdard - Instant Joshanda - 5 Sachet',
      price: '$0.77',
      rating: 4,
      link:'/Checkout/HealthS4'
    },
    {
      image: '/assets/hi6.webp',
      title: 'Finger Tip',
      description: 'Finger Tip Oximeter Meter SpO2 Oxygen',
      price: '$42',
      rating: 4,
      link:'/Checkout/HealthS5'
    },
    {
      image: '/assets/hi7.webp',
      title: 'Advanced Digital',
      description: 'Advanced Digital Thermometer Adults',
      price: '$15',
      rating: 4,
      link:'/Checkout/HealthS6'
    },
    {
      image: '/assets/hi18.webp',
      title: 'ENSURE GOLD',
      description: 'ENSURE GOLD S’BERRY 400 GM',
      price: '$179.99',
      rating: 4,
      link:'/Checkout/HealthS7'
    },
    {
      image: '/assets/hi8.webp',
      title: 'BASIC MODEL 24',
      description: 'BASIC Liquid Droppers Kids Crafts',
      price: '$12',
      rating: 4,
      link:'/Checkout/HealthS8'
    },
  ];
   


{/*Third Row*/}
const products1 = [
  {
    image: '/assets/S1.webp',
    title: 'Hand cap',
    description: 'High performance for all your needs.',
    price: '$14',
    rating: 4.5,
     link:'/Checkout/HealthTH1'
  },
  {
    image: '/assets/S17.webp',
    title: 'Lotion Pond',
    description: 'Sleek design with long-lasting battery.',
    price: '$13',
    rating: 3.5,
     link:'/Checkout/HealthTH2'
  },
  {
    image: '/assets/S12.webp',
    title: 'Shampoo Liquid',
    description: 'Advanced features for professionals.',
    price: '$16',
    rating: 5,
     link:'/Checkout/HealthTH3'
  },
  {
    image: '/assets/S13.webp',
    title: 'Black Shampoo Liquid ',
    description: 'Lightweight and portable.',
    price: '$15',
    rating: 4,
     link:'/Checkout/HealthTH4'
  },
  {
    image: '/assets/S18.webp',
    title: 'Face Wash Tea',
    description: 'High performance for all your needs.',
    price: '$2',
    rating: 4.5,
    link:'/Checkout/HealthTH5'
  },
  {
    image: '/assets/S25.webp',
    title: 'Perfume Liquid Pack',
    description: 'Sleek design with long-lasting battery.',
    price: '$29',
    rating: 3.5,
    link:'/Checkout/HealthTH6'
  },
  {
    image: '/assets/S22.webp',
    title: 'Makcup Women',
    description: 'Advanced features for professionals.',
    price: '$22',
    rating: 5,
    link:'/Checkout/HealthTH7'
  },
  {
    image: '/assets/S21.webp',
    title: 'Face Wash women',
    description: 'Lightweight and portable.',
    price: '$17',
    rating: 4,
    link:'/Checkout/HealthTH8'
  },

  {
    image: '/assets/S24.webp',
    title: 'Makcup Women kit',
    description: 'High performance for all your needs.',
    price: '$33',
    rating: 4.5,
    link:'/Checkout/HealthTH9'
  },
  {
    image: '/assets/S26.webp',
    title: 'Perfume Liquid',
    description: 'Sleek design with long-lasting battery.',
    price: '$22',
    rating: 3.5,
    link:'/Checkout/HealthTH10'
  },
  {
    image: '/assets/S23.webp',
    title: 'Makcup Women land kit',
    description: 'Advanced features for professionals.',
    price: '$29',
    rating: 5,
    link:'/Checkout/HealthTH11'
  },
  {
    image: '/assets/S25.webp',
    title: 'Perfume Liquid pack',
    description: 'Lightweight and portable.',
    price: '$29',
    rating: 4,
    link:'/Checkout/HealthTH12'
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
    src="/assets/HB1.webp"
    alt="Fashion"
    className="hidden md:block w-full h-80 object-cover"
  />
  
  {/* Image for Mobile */}
  <img
    src="/assets/HB2.webp"
    alt="Fashion"
    className="block md:hidden w-full h-80 object-cover"
  />
</div>
              <h2 className="text-center mt-10 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-800 mb-20 underline hover:text-red-600">
              Health && Beauty
              </h2>
      
      
      
             {/*All items Row*/}
             <div className="text-center bg-green-500 text-yellow-50 py-2 text-2xl sm:text-3xl md:text-4xl font-extrabold  hover:bg-black">
                All ITEMS
              </div>
              <div className="flex flex-wrap justify-center gap-8 mt-10">
                {ALlitems.map((ALlitems, index) => (
                  <div
                    key={index}
                    className="bg-white p-6 rounded-lg shadow-md text-center max-w-xs sm:max-w-sm md:max-w-md"
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
                    <div className="mb-2">{renderStars(ALlitems.rating)}</div>
                    <a
                      href={ALlitems.link}
                      className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                    >
                      Add to Cart
                    </a>
                  </div>
                ))}
              </div>
      
             
     {/*Second Row*/}
     <div className="mt-6">
          <h2 className="flex items-center justify-center pt-4 bg-green-500 text-yellow-50 pb-2 text-3xl sm:text-4xl font-extrabold hover:bg-black">
          Health
          </h2>
        </div>
        <div className="flex flex-wrap justify-center gap-8 mt-10">
          {products.map((products, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md text-center max-w-xs sm:max-w-sm md:max-w-md"
            >
              <img
                src={products.image}
                alt={products.title}
                className="w-60 h-50 object-cover rounded-md mx-auto"
              />
              <h3 className="mt-4 text-xl font-bold text-gray-700">
                {products.title}
              </h3>
              <p className="mt-2 text-gray-600 text-sm">{products.description}</p>
              <p className="mt-2 text-lg font-bold text-green-500">
                {products.price}
              </p>
              <div className="mb-2">{renderStars(products.rating)}</div>
              <a
                      href={products.link}
                      className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                    >
                      Add to Cart
                    </a>
            </div>
          ))}
        </div>
      


        {/*Third Row*/}
      <div className="mt-6">
          <h2 className="flex items-center justify-center pt-4 bg-green-500 text-yellow-50 pb-2 text-3xl sm:text-4xl font-extrabold hover:bg-black">
          Beauty Men && Women
          </h2>
        </div>
        <div className="flex flex-wrap justify-center gap-8 mt-10">
          {products1.map((products1, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md text-center max-w-xs sm:max-w-sm md:max-w-md"
            >
              <img
                src={products1.image}
                alt={products1.title}
                className="w-60 h-50 object-cover rounded-md mx-auto"
              />
              <h3 className="mt-4 text-xl font-bold text-gray-700">
                { products1.title}
              </h3>
              <p className="mt-2 text-gray-600 text-sm">{products1.description}</p>
              <p className="mt-2 text-lg font-bold text-green-500">
                { products1.price}
              </p>
              <div className="mb-2">{renderStars(products1.rating)}</div>
              <a
                      href={products1.link}
                      className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                    >
                      Add to Cart
                    </a>
            </div>
          ))}
        </div><br /><br />
    <Footer/>
        </div>
    </>

  );
}
