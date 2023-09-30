import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef(); // Add a ref for the form element

  // Handle form submission
  const sendEmail = (e) => {
    e.preventDefault();

    const name = form.current.name.value;
    const user_email = form.current.user_email.value;
    const message = form.current.message.value;

    // Check if any of the fields are empty
    if (!name || !user_email || !message) {
      return;
    }

    emailjs
      .sendForm(
        "service_ba3fdzb",
        "template_xccxeeu", // Replace with your template ID
        form.current, // Use the form ref
        "KodXa13EkmHBWXgIt"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <section id="Contact" className="py-20 dark:bg-indigo-100 dark:text-white">
      <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
        <div className="py-6 text-gray-900 md:py-0 md:px-6">
          <h1 className="text-4xl font-bold">Get in touch</h1>
          <p className="pt-2 pb-4">Fill in the form to start a conversation</p>
          <div className="space-y-4">
            <p className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5 mr-2 sm:mr-6"
              >
                <path
                  fillRule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span>Ahmedabad, Gujarat</span>
            </p>
            <p className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5 mr-2 sm:mr-6"
              >
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
              </svg>
              <span>+91456372859</span>
            </p>
            <p className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5 mr-2 sm:mr-6"
              >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
              </svg>
              <span>contact@heavenhunter.com</span>
            </p>
          </div>
        </div>
        <form
          ref={form}
          onSubmit={sendEmail}
          noValidate=""
          className="flex flex-col py-6 space-y-6 md:py-0 md:px-6"
        >
          <label className="block">
            <input
              required
              type="text"
              placeholder="Full name"
              name="name"
              className="block w-full px-2 py-2 rounded-md shadow-sm focus:ring focus:ring-indigo-600 dark:bg-gray-800"
            />
          </label>
          <label className="block">
            <input
              required
              type="email"
              name="user_email"
              placeholder="Email address"
              className="block w-full px-2 py-2 rounded-md shadow-sm focus:ring focus:ring-indigo-600 dark:bg-gray-800"
            />
          </label>
          <label className="block">
            <textarea
              required
              rows="3"
              name="message"
              placeholder="Message"
              className="block w-full px-2 py-2 rounded-md focus:ring focus:ring-indigo-600 dark:bg-gray-800"
            ></textarea>
          </label>{" "}
          <button type="submit" className="self-center w-25">
            <div className="px-8 py-3 text-lg text-gray-900 bg-yellow-400 rounded focus:ring focus:ring-indigo-600">
              Submit
            </div>
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
