'use client'

import { useState } from 'react'
import { ChevronDown, Search, Phone, Menu } from 'lucide-react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="bg-white shadow z-50 fixed  top-0 min-w-full overflow-hidden">
        {/* Top Row: Mobile and Desktop shared */}
      <div className="flex items-center justify-between px-4 py-3 md:py-4">
        {/* Left: Logo and Hamburger (mobile only) */}
        <div className="flex items-center space-x-3">
          {/* Hamburger - only on mobile */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
            <Menu className="h-6 w-6 text-gray-800" />
          </button>

          {/* Logo */}
          <img src="/10mslogo.png" alt="Logo" className="h-6 w-auto" />
        </div>

        {/* Center: Search - desktop only */}
        <div className="hidden md:flex flex-1 mx-6 max-w-xl relative">
          <input
            type="text"
            placeholder="ক্লাস কোর্স, কিংবা স্কুল প্রোগ্রাম সার্চ করুন..."
            className="w-full border border-gray-300 rounded-full py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-red-400"
          />
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-500" />
        </div>

        {/* Right: Icons and Login */}
        <div className="flex items-center space-x-4">
          {/* Search and Phone Icons - mobile only */}
          <Search className="h-5 w-5 text-gray-800 md:hidden" />
          <Phone className="h-5 w-5 text-gray-800 md:hidden" />

          {/* Language button - desktop only */}
          <button className="hidden md:block border px-2 py-1 rounded text-sm">
            বাংলা
          </button>

          {/* Call number - desktop only */}
          <div className="hidden md:flex items-center text-green-600 space-x-1">
            <Phone className="h-4 w-4" />
            <span className="font-semibold">16910</span>
          </div>

          {/* Login button */}
          <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-1.5 rounded text-sm">
            লগ-ইন
          </button>
        </div>
      </div>

      {/* Bottom Nav Row: Desktop only */}
      <nav className="flex md:hidden items-center justify-center space-x-8 text-sm text-gray-700 py-2">
        <NavItem label="Class 6–12" />
        <NavItem label="Skills" />
        <NavItem label="Admission" />
        <NavItem label="Online Batch" />
        <NavItem label="English Centre" />
        <NavItem label="More" />
      </nav>

      {/* Mobile Dropdown Navigation */}
      {isOpen && (
        <div className="md:hidden px-4 pb-3 space-y-2 text-sm text-gray-700">
          <MobileNavItem label="ক্লাস ৬–১২" />
          <MobileNavItem label="স্কিলস" />
          <MobileNavItem label="ভর্তি পরীক্ষা" />
          <MobileNavItem label="আরও" />
        </div>
      )}
    </div>
  )
}

// Desktop nav item
function NavItem({ label }: { label: string }) {
  return (
    <div className="flex items-center space-x-1 cursor-pointer hover:text-red-600">
      <span>{label}</span>
      <ChevronDown className="w-4 h-4" />
    </div>
  )
}


function MobileNavItem({ label }: { label: string }) {
  return (
    <div className="flex items-center justify-between border-b py-1">
      <span>{label}</span>
      <ChevronDown className="w-4 h-4" />
    </div>
  )
}
