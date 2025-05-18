import Image from  'next/image';
import { useRouter } from 'next/navigation';
import Link from 'next/link';


export default function Headers() {
  const router = useRouter();
  const handleProjectRoute = () => {
    router.push("/project")
  }
  return (
    <header className="w-full border-b border-gray-400 bg-black text-white px-6 py-4 z-20 relative ">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <Image
        src="/port4.png"
            alt="astronaut"
            width={50}
            height={30}
            className="rounded-xl w-full max-w-[90px] h-20   "
          />

        <nav className="flex gap-4">
          <button className="px-4 py-2 border border-gray-500 hover:border-white rounded transition">Home</button>
          
          <button
          onClick={handleProjectRoute} className="px-4 py-2 border border-gray-500 hover:border-white rounded transition">Projects</button>
         
          <a href="#skills">
 <button className="px-4 py-2 border border-gray-500 hover:border-white rounded transition">Skills</button></a>
 <a href ="#contact">
          <button className="px-4 py-2 border border-gray-500 hover:border-white rounded transition">Contact</button></a>
        </nav>
      </div>
    </header>
  );
}

