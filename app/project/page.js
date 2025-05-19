'use client';
import Image from 'next/image';
import Particles from 'react-tsparticles';
import Part from '../ParticlesBackground/Page';
export default function Projects() {
  return (
    <div className="bg-black text-white min-h-screen px-6 py-10">
      <Part/>
      <h1 className="text-4xl font-bold mb-10 text-center">Projects</h1>
      <div className="grid md:grid-cols-2 gap-10">
        {/* Glamify */}
        <div className="bg-black-50 p-6 rounded-2xl shadow-md">
          <img src="glam.png" alt="Glamify" className="rounded-lg mb-4 w-full" />
          <h2 className="text-2xl font-semibold mb-2">
            <a href="https://glamify-beta.vercel.app" className="text-pink-400 hover:underline">Glamify</a>
          </h2>
          <ul className="list-disc list-inside text-gray-300">
            <li>Interactive, responsive website for a fictional makeup brand</li>
            <li>Built with HTML, CSS, JavaScript, modern UI/UX</li>
            <li>Integrated firewall; deployed on Vercel</li>
          </ul>
        </div>

        {/* Adidas Clone */}
        <div className="bg-black-50 p-6 rounded-2xl shadow-md">
          <img src="adi.png" alt="Adidas Clone" className="rounded-lg mb-4 w-full" />
          <h2 className="text-2xl font-semibold mb-2">
            <a href="https://adicom.vercel.app" className="text-blue-400 hover:underline">Adidas Clone E-Commerce</a>
          </h2>
          <ul className="list-disc list-inside text-gray-300">
            <li>Frontend using React, Firebase, OpenAI API</li>
            <li>AI-powered features, user enhancements</li>
            <li>Deployed on Vercel for global reach</li>
          </ul>
        </div>

        {/* RentX */}
        <div className="bg-black-50 p-6 rounded-2xl shadow-md">
          <img src="rent.png" alt="RentX" className="rounded-lg mb-4 w-full" />
          <h2 className="text-2xl font-semibold mb-2">
            <a href="https://github.com/ridhisureka5/car-rental" className="text-green-400 hover:underline">RentX – Decentralized Car Rental DApp</a>
          </h2>
          <ul className="list-disc list-inside text-gray-300">
            <li>Next.js, Flask, Vyper, Web3.py, Tailwind CSS</li>
            <li>MetaMask auth, renter/owner roles, MongoDB backend</li>
            <li>Time-locked payments for secure rentals</li>
          </ul>
        </div>

        {/* Smart AutoML Analyst */}
        <div className="bg-black-50 p-6 rounded-2xl shadow-md">
          <img src="analyst.png" alt="Smart AutoML Analyst" className="rounded-lg mb-4 w-full" />
          <h2 className="text-2xl font-semibold mb-2">
            <a href="https://github.com/ridhisureka5/automl" className="text-yellow-400 hover:underline">Smart AutoML Analyst</a>
          </h2>
          <ul className="list-disc list-inside text-gray-300">
            <li>Streamlit app with LLM analytics (PandasAI + Ollama)</li>
            <li>Upload CSVs and ask questions in natural language</li>
            <li>Uses LazyPredict and LLaMA3 for smart insights</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
