'use client';
import Part from '../ParticlesBackground/Page';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
export default function Contacts() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_smd9cqm', 'template_bflv74a', form.current, 'YUH1-BDvoNGEffAiD')
      .then((result) => {
          console.log(result.text);
          alert("Message sent successfully!");
      }, (error) => {
          console.log(error.text);
          alert("Failed to send message. Please try again.");
      });

    e.target.reset(); // reset form after submission
  };

  return (
    <div className="  bg-gradient-to-r from-gray-800 to-black text-white min-h-screen flex justify-between">
      {/* Particle background */}
      <Part />

      {/* Content */}
      <div className=" z-10 w-full max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-30 items-center">
        
        {/* Contact Form - Left */}
        <form ref={form} onSubmit={sendEmail} className="bg-white text-black p-6 rounded-2xl shadow-lg space-y-4 ">
          <h3 className="text-2xl font-semibold">Send a Message</h3>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="4"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black"
            required
          />
          <button
            type="submit"
            className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition"
          >
            Submit
          </button>
        </form>

        {/* Contact Info - Right */}
        <div className="flex flex-col justify-center space-y-4">
          <h2 className="text-3xl font-bold text-white">Contact Me</h2>
          <p className="text-lg">📧 Gmail: <span className="text-gray-300">ridhisureka34@gmail.com</span></p>
          <p className="text-lg">💼 LinkedIn: <a href="https://linkedin.com/in/ridhisureka" target="_blank" className="text-blue-400 hover:underline">linkedin.com/in/ridhisureka</a></p>
          <p className="text-lg">🧠 LeetCode: <a href="https://leetcode.com/ridhi__sureka1" target="_blank" className="text-yellow-400 hover:underline">leetcode.com/ridhi__sureka1</a></p>
        </div>
      </div>
    </div>
  );
}