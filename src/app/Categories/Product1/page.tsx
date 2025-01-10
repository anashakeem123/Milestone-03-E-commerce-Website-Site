import React from "react";
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

export default function Product1() {
  return (
    <div className="bg-gradient-to-r from-blue-400 to-purple-500 min-h-screen flex flex-col">
      <Navbar />
      {/* Images */}
      <div>
        {/* Desktop Image */}
        <img
          src="/assets/Featured products2.webp"
          alt="Fashion"
          className="hidden md:block w-full h-80 object-cover"
        />
        {/* Mobile Image */}
        <img
          src="/assets/Featured products3.webp"
          alt="Fashion"
          className="block md:hidden w-full h-80 object-cover"
        />
      </div>

      {/* Heading */}
      <h2 className="text-center mt-10 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-800 mb-10 underline hover:text-red-600">
        Featured Products
      </h2>

      {/* Product Categories */}
      <div className="flex-1">
        <Electronics1 />
        <Fashion1 />
        <HomeAppliances1 />
        <SportAndFitness1 />
        <Toys1 />
        <HealthAndBeauty1 />
        <BooksAndStationery1 />
        <FoodAndBeverages1 />
        <Furniture1 />
        <Pets1 />
        <Tech1 />
        <BooksAndLearning1 />
      </div>
      <br /><br />
      {/* Footer */}
      <Footer />
    </div>
  );
}
