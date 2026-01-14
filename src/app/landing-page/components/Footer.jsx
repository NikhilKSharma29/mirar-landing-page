import React from 'react'
import { FaFacebookF, FaInstagram, FaXTwitter, FaLinkedinIn, FaYoutube } from "react-icons/fa6";
import { useModal } from './ModalContext';
import Image from 'next/image';
import Link from 'next/link';
import { CopyrightIcon } from 'lucide-react';

const Footer = () => {
   const { openModal } = useModal();
  return (
    <footer className="bg-[#191919] text-gray-300 px-4 sm:px-6 py-10">
      <div className="max-w-6xl mx-auto">
        {/* Top Section */}
        <div className="flex flex-col items-center text-center space-y-8 md:flex-row md:justify-between md:items-center md:text-left">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center space-x-2">
            <Image src="/images/Mirar Icon.png" alt="" className="h-4 w-auto" width={1920} height={1080} />
            <Image src="/images/mirar.png" alt="Mirar AI Logo" className="h-4 w-auto" width={1920} height={1080} />
          </div>

          {/* Navigation Links - Stacked on mobile */}
          <nav className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:flex-wrap justify-center gap-x-6 gap-y-2 text-sm font-medium">
            <a onClick={openModal} className="block hover:text-white cursor-pointer">Contact Us</a>
            <a href="#" className="block hover:text-white cursor-pointer">About Us</a>
            <a  className="block hover:text-white cursor-pointer">Help Center</a>
            <a onClick={openModal}  className="block hover:text-white cursor-pointer">Get Started</a>
          </nav>

          {/* Social Icons */}
          <div className="flex gap-5 text-lg">
            <a onClick={() => window.open("https://www.facebook.com/mirariai/", "_blank")} className="hover:text-white transition-colors cursor-pointer"><FaFacebookF /></a>
            <a onClick={()=> window.open("https://www.instagram.com/mirar.aii", "_blank")} className="hover:text-white transition-colors cursor-pointer"><FaInstagram /></a>
            <a onClick={()=> window.open("https://www.linkedin.com/company/mirar-ai/?viewAsMember=true", "_blank")} className="hover:text-white transition-colors cursor-pointer"><FaLinkedinIn /></a>
            <a onClick={()=> window.open("https://www.youtube.com/@Mirarai-123", "_blank")} className="hover:text-white transition-colors cursor-pointer"><FaYoutube /></a>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-gray-700 my-8" />

        {/* Bottom Section - Column on mobile, row on desktop */}
        <div className="flex flex-col-reverse md:flex-row justify-center gap-4 items-center text-xs text-gray-400 space-y-4 md:space-y-0">
          <p className="text-center md:text-right flex items-center"><CopyrightIcon className="w-3 h-3" />&nbsp; 2025 Mirar AI. All rights reserved.</p>
          {/* Policy Links - Column on mobile, row on desktop */}
          <div className="flex flex-col items-center space-y-2 sm:flex-row sm:space-y-0 sm:space-x-6 ">
            <Link href="/privacy-policy" className="hover:text-white transition-colors block underline cursor-pointer">Privacy Policy</Link>
            <a href="#" className="hover:text-white transition-colors block underline cursor-pointer">Terms of Use</a>
            <a href="#" className="hover:text-white transition-colors block underline cursor-pointer">Cookie Policy</a>
          </div>
          
          {/* Copyright - Always at bottom on mobile, right on desktop */}
        </div>
      </div>
    </footer>
  )
}

export default Footer