import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faLinkedinIn, faGithub, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import Link from "next/link";

export default function Footer() {
  return (
    <div className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 lg:px-16 py-12">
        {/* Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h4 className="text-lg font-semibold mb-4 hover:font-extrabold hover:text-yellow-50">About Us</h4>
            <p className="text-gray-400 leading-relaxed text-sm hover:font-extrabold hover:text-yellow-50">
              We strive to deliver top-quality products that meet your everyday needs. Trusted by thousands worldwide, we are committed to excellence.
            </p>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-lg font-semibold mb-4 hover:font-extrabold hover:text-yellow-50">Categories</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/Categories/Electronics" className="text-gray-400  text-sm transition hover:font-extrabold hover:text-yellow-50">
                  Electronics
                </Link>
              </li>
              <li>
                <Link href="/Categories/Fashion" className="text-gray-400 text-sm transition hover:font-extrabold hover:text-yellow-50">
                  Fashion
                </Link>
              </li>
              <li>
                <Link href="/Categories/HomeAppliances" className="text-gray-400  text-sm transition hover:font-extrabold hover:text-yellow-50">
                  Home Appliances
                </Link>
              </li>
              <li>
                <Link href="/Categories/Sports&Fitness" className="text-gray-400 text-sm transition hover:font-extrabold hover:text-yellow-50">
                  Sports & Fitness
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Support */}
          <div>
            <h4 className="text-lg font-semibold mb-4 hover:font-extrabold hover:text-yellow-50">Customer Support</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="https://api.whatsapp.com/send/?phone=923280611677&text&type=phone_number&app_absent=0"
                  className="text-gray-400  text-sm transition hover:font-extrabold hover:text-yellow-50"
                >
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400  text-sm transition hover:font-extrabold hover:text-yellow-50">
                  Order Tracking
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 text-sm transition hover:font-extrabold hover:text-yellow-50">
                  Shipping Info
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400  text-sm transition hover:font-extrabold hover:text-yellow-50">
                  Returns & Refunds
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h4 className="text-lg font-semibold mb-4 hover:font-extrabold hover:text-yellow-50">Contact Us</h4>
            <p className="text-gray-400 text-sm leading-relaxed hover:font-extrabold hover:text-yellow-50">
              Email:{" "}
              <a href="mailto:anashakeem05@gmail.com" className=" hover:font-extrabold hover:text-blue-400">
                anashakeem05@gmail.com
              </a>
            </p>
            <p className="text-gray-400 text-sm leading-relaxed hover:font-extrabold hover:text-yellow-50">
              Phone:{" "}
              <a href="tel:+923442427898" className=" hover:font-extrabold hover:text-red-600">
                +92 3442427898
              </a>
            </p>

            <div className="flex justify-center space-x-6 mt-8">
              <Link
                href="https://www.facebook.com/profile.php?id=100080006837787"
                className="text-gray-300 hover:text-orange-500 transition duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faFacebookF} className="text-3xl" />
              </Link>
              <Link
                href="https://www.instagram.com/abdulhakeem5335/"
                className="text-gray-300 hover:text-orange-500 transition duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faInstagram} className="text-3xl" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/anas-hakeem-235348274/"
                className="text-gray-300 hover:text-orange-500 transition duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedinIn} className="text-3xl" />
              </Link>
              <Link
                href="https://github.com/anashakeem123"
                className="text-gray-300 hover:text-orange-500 transition duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} className="text-3xl" />
              </Link>
              <Link
                href="https://wa.me/923280611677"
                className="text-gray-300 hover:text-orange-500 transition duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faWhatsapp} className="text-3xl" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-10 border-t border-white pt-6 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} <span className="font-extrabold text-white hover:text-red-700">Anas Hakeem</span> All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
