"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center sticky top-0 z-50">
      {/* Brand Name */}
      <div className="text-2xl font-bold text-blue-600">MediConnect</div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-6 text-gray-700 font-medium">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>

      {/* Mobile Menu (Hamburger) */}
      <div className="block md:hidden">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <button aria-label="Open menu">
              <Menu className="h-6 w-6 text-blue-600" />
            </button>
          </SheetTrigger>

          <SheetContent side="right" className="bg-white">
            <ul className="flex flex-col gap-4 ml-4 text-gray-800 font-medium mt-8">
              <li>
                <Link
                  href="/"
                  className="hover:text-blue-400"
                  onClick={() => setOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-blue-400"
                  onClick={() => setOpen(false)}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-blue-400"
                  onClick={() => setOpen(false)}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navbar;

