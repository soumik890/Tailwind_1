import React from "react";

function Contact() {
  return (
    <div>
      <div className="flex justify-center">
        <img
          src="https://sheyhiring.netlify.app/images/contact-us.jpg"
          alt=""
        />
      </div>

      <h1 className="text-center text-2xl text-primary font-semibold">
        Get in touch
      </h1>

      <div className="flex gap-10 mt-10 border-2 border-primary p-10 rounded-t-2xl border-b-0 sm:flex-col">
        <div className="flex flex-col gap-5 w-1/2 sm:w-full">
          <div>
            <div className="flex items-center gap-5 ">
              <i class="ri-map-pin-line text-3xl text-primary bg-secondary p-1 rounded"></i>
              <div>
                <h1 className="text-primary text-xl font-semibold">Visit Us</h1>
                <h1 className="text-primary text-sm">
                  Bangalore, India, 560102
                </h1>
              </div>
            </div>
            <div className="flex items-center gap-5">
              <i class="ri-phone-line  text-3xl text-primary bg-secondary p-1 rounded"></i>
              <div>
                <h1 className="text-primary text-xl font-semibold">Call Us</h1>
                <h1 className="text-primary text-sm">9876543210</h1>
              </div>
            </div>
            <div className="flex items-center gap-5">
              <i class="ri-mail-line text-3xl text-primary bg-secondary p-1 rounded"></i>
              <div>
                <h1 className="text-primary text-xl font-semibold">Mail Us</h1>
                <h1 className="text-primary text-sm">soumik890@gmail.com</h1>
              </div>
            </div>
          </div>
        </div>

        <div className="w-1/2 flex flex-col gap-8 sm:w-full">
          <input
            type="Name"
            className="border h-12 rounded border-gray-500 w-full p-2"
            placeholder="Name"
          />
          <input
            type="Name"
            className="border h-12 rounded border-gray-500 w-full p-2"
            placeholder="Email"
          />
          <textarea
            type="Name"
            className="border h-20 rounded border-gray-500 w-full p-2"
            placeholder="Query"
          />
          <div className="flex justify-end">
            <button className="bg-primary px-8 py-3 text-white rounded sm:w-full">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
