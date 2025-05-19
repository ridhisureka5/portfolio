"use client";
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGithub, FaDocker } from "react-icons/fa";
import Image from'next/image';

import {
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiMongodb,
  SiPostgresql,
  SiGit,
  SiVyper,
  SiPython,
  SiVercel,
  SiAmazonaws,
  SiMetamask,
  
} from "react-icons/si";

// Define the Skill component first
function Skill({ icon, name }) {
  return (
    <div className="flex flex-col items-center hover:scale-110 transition-transform duration-300">
      <div className="mb-2">{icon}</div>
      <span className="text-lg">{name}</span>
    </div>
  );
}

export default function Skills() {
  return (
    <div className="h-[800px] flex flex-col items-center bg-gradient-to-r from-black to-gray-800 text-white ">
      <div className=" relative z-10 flex flex-col items-center justify-center text-center">
        <h1 className="text-6xl md:text-8xl font-bold font-serif italic text-gray-100 underline decoration-gray-500 decoration-4 underline-offset-8 tracking-wider drop-shadow-lg pb-12">
          Skills
        </h1>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 text-white text-center mt-6">
          <Skill icon={<FaHtml5 size={40} color="#e34c26"/>} name="HTML5"/>
          <Skill icon={<FaCss3Alt size={40} color="#264de4"/>} name="CSS3"/>
          <Skill icon={<SiTailwindcss size={40} color="#38bdf8"/>} name="Tailwind"/>
          <Skill icon={<SiJavascript size={40} color="#f0db4f"/>} name="JavaScript"/>
          <Skill icon={<FaReact size={40} color="#61dbfb"/>} name="React.js"/>
          <Skill icon={<SiMongodb size={40} color="#4db33d"/>} name="MongoDB"/>
          <Skill icon={<FaGithub size={40} color="#fff"/>} name="GitHub"/>
          <Skill icon={<SiGit size={40} color="#f05033"/>} name="Git"/>
          <Skill icon={<SiPython size={40} color="#306998"/>} name="Python"/>
         
        
          <Skill icon={<SiVercel size={40} color="#fff"/>} name="Vercel" />
       <Skill
    icon={
      <div className="relative w-10 h-10 sm:w-12 sm:h-12 mx-auto">
        <Image
          src="/port5.jpeg"
          alt="AWS"
          fill
          className="object-contain"
        />
      </div>
    }
    name="AWS"
  />

  <Skill
    icon={
      <div className="relative w-10 h-10 sm:w-12 sm:h-12 mx-auto">
        <Image
          src="/port6.svg"
          alt="Vyper"
          fill
          className="object-contain"
        />
      </div>
    }
    name="Vyper"
  />

  <Skill
    icon={
      <div className="relative w-10 h-10 sm:w-12 sm:h-12 mx-auto">
        <Image
          src="/port7.svg"
          alt="Metamask"
          fill
          className="object-contain"
        />
      </div>
    }
    name="Metamask"
  />

  <Skill
    icon={
      <div className="relative w-10 h-10 sm:w-12 sm:h-12 mx-auto">
        <Image
          src="/port8.svg"
          alt="Next.js"
          fill
          className="object-contain"
        />
      </div>
    }
    name="Next.js"
  />

  <Skill
    icon={
      <div className="relative w-10 h-10 sm:w-12 sm:h-12 mx-auto">
        <Image
          src="/port9.svg"
          alt="SQL"
          fill
          className="object-contain"
        />
      </div>
    }
    name="SQL"
  />

  
</div>
      </div>
    </div>
  );
}