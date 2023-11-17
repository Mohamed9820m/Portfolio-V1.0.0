import React, { useState } from 'react';
import video from '../../public/video.mp4';
import image from '../../public/peep-43.svg';
import Image from 'next/image';
import Swal from 'sweetalert2';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Use formData to send a POST request to your API route
    try {
      const response = await fetch('api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // If the email is sent successfully, show a success alert
        Swal.fire({
          icon: 'success',
          title: 'Success!',
          text: 'Your message has been sent.',
        });
        // Clear the form after successful submission
        setFormData({ name: '', email: '', message: '' });
      } else {
        // If there's an error, show an error alert
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong! Please try again later.',
        });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className="relative">
      <div id="contact" className="video-background absolute inset-0 overflow-hidden z-0">
        <video autoPlay muted loop className="video object-cover w-full h-full">
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="lg:flex items-center lg:space-x-10 mx-auto w-full relative z-10">
        <div className="lg:flex items-center lg:space-x-10 mx-auto w-full">
          <div
            className="hidden lg:block rounded-xl md:p-6 w-1/2 text-black"
            style={{ opacity: 1, transform: 'none' }}
          >
            <Image
              src={image}
              className="w-full md:w-[75%] xl:w-[68%] mx-auto text-black dark:opacity-50"
              alt="My cartooned character holding a phone as a means of contact"
            />
          </div>
          <div className="xl:w-1/2 px-4 md:px-6 py-6 md:py-0 lg:p-6 flex-shrink-0">
            <div className="sm:w-[400px] mx-auto lg:mx-0">
              <form onSubmit={handleSubmit} className="dark:text-gray-100 text-black">
                <p className="contact-titre text-lg sm:text-2xl mb-4 font-raleway font-medium dark:text-gray-100 text-white leading-tight">
                  Let's work Together
                </p>
                <div className="mv-2 xs:mb-4">
                  <label
                    htmlFor="name"
                    className="name text-sm font-raleway text-neutral-900 dark:text-neutral-400 text-white"
                  >
                    Full name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    autoComplete="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="text-base font-normal font-raleway border dark:border-neutral-800 dark:focus:border-neutral-700 focus:border-black py-1.5 xs:py-2.5 px-4 w-full rounded-lg focus:outline-none dark:bg-transparent text-neutral-900 focus:text-black dark:text-neutral-400 dark:focus:text-neutral-300"
                  />
                </div>
                <div className="mb-2 xs:mb-4">
                  <label
                    htmlFor="email"
                    className="email text-sm font-raleway text-neutral-900 dark:text-neutral-400 text-white"
                  >
                    Email*
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="text-base font-normal font-raleway border dark:border-neutral-800 focus:border-black py-1.5 xs:py-2.5 px-4 w-full rounded-lg focus:outline-none dark:bg-transparent text-neutral-900 focus:text-black dark:text-neutral-400 dark:focus:text-neutral-300"
                  />
                </div>
                <div className="mb-2 xs:mb-4">
                  <label
                    htmlFor="message"
                    className="message text-sm font-raleway text-neutral-900 dark:text-neutral-400 text-white"
                  >
                    Leave your message here.
                  </label>
                  <textarea
                    type="text"
                    name="message"
                    id="message"
                    rows="3"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="text-base font-normal font-raleway border dark:border-neutral-800 dark:focus:border-neutral-700 focus:border-black py-1.5 xs:py-2.5 px-4 w-full rounded-xl focus:outline-none dark:bg-transparent text-neutral-900 focus:text-black dark:text-neutral-400 dark:focus:text-neutral-300"
                    style={{ height: '173px' }}
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="text-balck bg-white hover:bg-black/80 dark:bg-neutral-800 dark:text-neutral-400 dark:hover:bg-black py-2 xs:py-3 px-12 sm:px-16 md:px-24 w-full rounded-[40px]"
                >
                  <span className="sub font-raleway text-xl leading-normal font-medium">Submit</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
