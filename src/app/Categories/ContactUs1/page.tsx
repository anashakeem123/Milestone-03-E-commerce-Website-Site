import React from 'react';

const ContactUs1 = () => {
  return (
    <>
    <section className="py-20  bg-gradient-to-r from-blue-400 to-purple-500">
      <div className="max-w-screen-xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-extrabold text-gray-800">Contact Us</h2>
          <p className="text-lg text-gray-600 mt-4">
            Have questions? Were here to help! Reach out to us through the form below or contact us directly via email or phone.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <form action="#" method="POST" className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">Full Name</label>
                <input
                  type="text"
                  name="name"
                  className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email Address</label>
                <input
                  type="email"
                  name="email"
                  className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="you@example.com"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  name="message"
                  rows={5}
                  className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Write your message here..."
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-blue-100 p-6 rounded-lg shadow-lg flex items-center">
              <div className="flex-shrink-0">
                <i className="fas fa-phone-alt text-blue-600 text-3xl"></i>
              </div>
              <div className="ml-6">
                <h3 className="text-xl font-bold text-gray-800">Phone</h3>
                <p className="text-gray-600">+92 (021) 3442427898 </p>
              </div>
            </div>

            <div className="bg-blue-100 p-6 rounded-lg shadow-lg flex items-center">
              <div className="flex-shrink-0">
                <i className="fas fa-envelope text-blue-600 text-3xl"></i>
              </div>
              <div className="ml-6">
                <h3 className="text-xl font-bold text-gray-800">Email</h3>
                <p className="text-gray-600">anashakeem05@gmail.com.com</p>
              </div>
            </div>

            <div className="bg-blue-100 p-6 rounded-lg shadow-lg flex items-center">
              <div className="flex-shrink-0">
                <i className="fas fa-map-marker-alt text-blue-600 text-3xl"></i>
              </div>
              <div className="ml-6">
                <h3 className="text-xl font-bold text-gray-800">Location</h3>
                <p className="text-gray-600">123 North Nazimabad Karachi</p>
              </div>
            </div>
          </div>
        </div>

        {/* Embedded Map */}
        <div className="mt-12">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28938.514548915155!2d67.04087082106493!3d24.955418431279398!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33f8014fe5943%3A0x11df7a65effb1ef6!2sNorth%20Nazimabad%20Town%2C%20Karachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1734458566412!5m2!1sen!2s"
            width="100%"
            height="400"
            className="rounded-lg shadow-lg"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
    </>
  );
};

export default ContactUs1;
