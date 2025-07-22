"use client";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center sticky top-0 z-50">
      <div className="text-2xl font-bold text-blue-600">MediConnect</div>
      <ul className="flex gap-6 text-gray-700 font-medium">
        <li><Link href="/">Home</Link></li>
        <li><Link href="#doctors">Doctors</Link></li>
        <li><Link href="#contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
