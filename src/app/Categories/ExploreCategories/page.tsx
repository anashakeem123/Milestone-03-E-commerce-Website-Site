import Link from "next/link";
import Navbar from "@/app/component/Navbar";
import Footer from "@/app/component/Footer";
import Electronics1 from "../Electronic1/page";
import Fashion1 from "../Fashion1/page";
import HomeAppliances1 from "../HomeAppliances1/page";
import SportAndFitness1 from "../Sports1/page";
import Toys1 from "../Toys1/page";
import HealthAndBeauty1 from "../Health1/page";
import BooksAndStationery1 from "../Books1/page";
import FoodAndBeverages1 from "../Food1/page";
import Furniture1 from "../Furniture1/page";
import Pets1 from "../Pet1/page";
import Tech1 from "../Tech1/page";
import BooksAndLearning1 from "../BooksLearning1/page";
import Main1 from "../Main1/page";

export default function Categories() {
  const categories = [
    { name: "Electronics", image: "/assets/Laptop.webp", link: "/Categories/Electronics" },
    { name: "Fashion", image: "/assets/Aper5.webp", link: "/Categories/Fashion" },
    { name: "Home Appliances", image: "/assets/Cofe.webp", link: "/Categories/HomeAppliances" },
    { name: "Sports & Fitness", image: "/assets/Sport.webp", link: "/Categories/Sports&Fitness" },
    { name: "Toys & Games", image: "/assets/toys.webp", link: "/Categories/Toys&Games" },
    { name: "Health & Beauty", image: "/assets/Health & Beauty.webp", link: "/Categories/Health&Beauty" },
    { name: "Books & Stationery", image: "/assets/Books & Stationery.webp", link: "/Categories/Books&Stationery" },
    { name: "Food & Beverages", image: "/assets/Food & Beverages.webp", link: "/Categories/Food&Beverages" },
    { name: "Furniture", image: "/assets/Furniture0.webp", link: "/Categories/Furniture" },
    { name: "Pet Supplies", image: "/assets/Pet Supplies.webp", link: "/Categories/Pet&Supplies" },
    { name: "Tech Gadgets", image: "/assets/Tech Gadgets.webp", link: "/Categories/Tech&Gadgets" },
    { name: "Books & Learning", image: "/assets/Books & Learning.webp", link: "/Categories/Books&Learning" },
  ];

  return (
    <>
  <Navbar/>
  <div>
  <div>
  {/* Image for Desktop */}
  <img
    src="/assets/Explore Categories4.webp"
    alt="Fashion"
    className="hidden lg:block xl:hidden w-full h-[350px] object-cover "
  />

  {/* Image for Large Laptop */}
  <img
    src="/assets/Explore Categories4.webp"
    alt="Fashion"
    className="hidden xl:block w-full h-[350px] object-cover "
  />

  {/* Image for Small Laptop */}
  <img
    src="/assets/Explore Categories4.webp"
    alt="Fashion"
    className="hidden md:block lg:hidden w-full h-[370px] object-cover"
  />

  {/* Image for Mobile */}
  <img
    src="/assets/Explore Categories4.webp"
    alt="Fashion"
    className="block md:hidden w-full h-80 object-cover "
  />
</div>


      <div className="categories-section py-16  bg-gradient-to-r from-blue-400 to-purple-500">
        <h2 className="text-center text-4xl font-extrabold mb-12">Explore Categories</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {categories.map((category, index) => (
            <div
              key={index}
              className="category-card bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 ease-in-out"
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-64 h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-bold text-center">{category.name}</h3>
              <Link href={category.link}>
                <button className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300">
                  Shop Now
                </button>
              </Link>
            </div>
          ))}
        </div>
         <Main1/>
      <Electronics1/>
      <Fashion1/>
      <HomeAppliances1/>
      <SportAndFitness1/><br /><br />
      <Toys1/>
      <HealthAndBeauty1/>
      <BooksAndStationery1/>
      <FoodAndBeverages1/>
      <Furniture1/>
      <Pets1/>
      <Tech1/>
      <BooksAndLearning1/>
      </div>
      <Footer/>
    </div>
    </>
  );
}
