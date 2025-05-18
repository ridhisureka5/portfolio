'use client';
import Header from './Headers/page';
import Image from 'next/image';
import Particles from 'react-tsparticles';
import Part from './ParticlesBackground/Page';
import { motion } from 'framer-motion';
import Skills from './skill/page';
import Contact from './contact/Page';
import Footer  from './Footer/page';

export default function Home() {
  const text = `I'm a passionate and versatile developer driven by curiosity and a desire to build solutions that make a real-world impact. With experience spanning web development, blockchain technology, and AI-powered applications, I enjoy transforming complex ideas into functional, user-friendly products. Whether it's crafting sleek interfaces, writing smart contracts, or deploying intelligent systems, I thrive at the intersection of innovation and execution. I believe in continuous learning, collaboration, and leveraging technology to solve meaningful problems.`;

  const words = text.split(' ');

  return (
    <div className="bg-black text-white ">
      <Part />
      <Header />
      <main className="flex flex-col md:flex-row items-center justify-center max-w-7xl mx-auto px-4 py-8 gap-8">
        <div className="md:w-1/2 w-full flex justify-center">
          <Image
            src="/port3.png"
            alt="astronaut"
            width={900}
            height={900}
            className="rounded-xl w-full max-w-[1000px] h-auto  animate-float"
          />
        </div>
        <div className="md:w-1/2 w-full text-center md:text-left">
          <h2 className="text-4xl font-bold mb-4">Ridhi Sureka</h2>
          <p className="text-xl italic text-gray-400 mt-2">
  "Transforming Code Into Possibility."
</p>
          <p className="text-lg flex flex-wrap">
            {words.map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.10 }}
                className="mr-1"
              >
                {word}
              </motion.span>
            ))}
          </p>
        </div>
     
      </main>
       <section id="skills" className="pt-15">
         <Skills/>
         </section>
         <section id="contact" className="pt-5">
         <Contact/>
         </section>
          <section id="footer" className="pt-5">
         <Footer/>
         </section>
         
    </div>

  );
}
