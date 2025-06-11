'use client'
import autoprefixer from 'autoprefixer'
import Image from 'next/image'
import Link from 'next/link'
import { Mail, Phone, MapPin,} from 'lucide-react'
import { FaLinkedin, FaInstagram} from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

export default function Footer() {
    return (
        <footer className="bg-sky-950 text-white pt-12 px-6 md:px-20">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-sm text-center md:text-left">
                {/* Column 1: Company */}
                <div>
                    <h4 className="font-bold text-xl mb-3">Company</h4>
                    <ul className="space-y-1">
                        <li><a href="#about" className="hover:underline">About Us</a></li>
                        <li><a href="/products" className="hover:underline">Products</a></li>
                        <li><a href="#technology" className="hover:underline">Technology</a></li>
                    </ul>
                </div>

                {/* Column 2: Contact */}
                <div className="flex flex-col items-center gap-2">
                    <h4 className="font-bold text-xl mb-2">Contact</h4>
                    <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>11 Worth Circle, Johnson City, TN 37601</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Mail className="w-4 h-4" />
                        <a href="mailto:wiqt.info@WaterIQTech.com" className="hover:underline">
                            wiqt.info@WaterIQTech.com
                        </a>
                    </div>
                    <div className="flex items-center gap-2">
                        <Phone className="w-4 h-4" />
                        <a href="tel:+18042454630" className="hover:underline">
                            +1 (804) 245-4630
                        </a>
                    </div>
                </div>

                {/* Column 3: Socials */}
                <div>
                    <h4 className="font-bold text-xl mb-3 justify-self-end">Follow Us</h4>
                    <div className="flex justify-end">
                            <a href="#" className="hover:underline">
                                <FaLinkedin className="text-white w-auto h-8" />
                            </a>
                            <a href="#" className="hover:underline">
                                <FaXTwitter className="text-white w-auto h-8" />
                            </a>
                            <a href="#" className="hover:underline">
                                <FaInstagram className="text-white w-auto h-8"/>
                            </a>        
                    </div>                    
                </div>
            </div>

            <div className="mt-8 text-center text-xs text-gray-300">
                © 2025 WaterIQ Technologies. All rights reserved.
            </div>
        </footer>

    )
}