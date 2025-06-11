'use client'
import autoprefixer from 'autoprefixer'
import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white backdrop-blur-md shadow-md">
      <nav className="max-w-6/8 mx-auto py-3 flex items-center justify-between text-sky-800">
        {/* Logo */}
        <Link href="/" className="cursor-pointer">
          <Image
            src="/img/wiqt-vertical-logo.png"
            alt="WaterIQ Technologies Logo"
            width={200}
            height={200}
            className="h-auto w-auto"
          />
        </Link>
        
        {/* Navigation links */}
        <div className="space-x-10 text-md md:text-base font-semibold">
          <Link href="/products" className="hover:text-sky-600 transition">
            Products
          </Link>
          <Link href="#technology" className="hover:text-sky-600 transition">
            Technology
          </Link>
          <Link href="#applications" className="hover:text-sky-600 transition">
            Applications
          </Link>
          <Link href="#contact" className="hover:text-sky-600 transition">
            Contact
          </Link>
          <Link href="#about" className="hover:text-sky-600 transition">
            About
          </Link>
        </div>
      </nav>
    </header>
  )
}
