'use client';

export default function Footer() {
  return (
    <footer className=" bg-gradient-to-r from-black to-gray-500 text-gray-400 text-center text-sm py-4 w-full">
      &copy; {new Date().getFullYear()} Ridhi Sureka. All rights reserved.
    </footer>
  );
}
