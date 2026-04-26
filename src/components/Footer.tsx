import React from 'react';
import { FooterFountain } from './FooterFountain';

export const Footer = () => {
  return (
    <div className="relative w-full z-10 bg-[#e4ff40] text-black border-t border-black/10">
      <FooterFountain />
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 lg:gap-12 py-16 md:py-16 lg:py-24 px-6 md:px-8 lg:px-12">
        <div className="relative z-10">
          <p className="text-[10px] md:text-[10px] lg:text-[12px] tracking-[0.4em] uppercase text-[#888888] mb-6" style={{ fontFamily: "'RobotoMono', monospace" }}>Socials</p>
          <div className="flex flex-col gap-4 md:gap-3 lg:gap-4">
            <a href="https://www.instagram.com/mun.1210/" target="_blank" rel="noopener noreferrer" className="text-[17px] md:text-[15px] lg:text-[17px] tracking-wide text-black hover:text-[#666] transition-colors" style={{ fontFamily: "'HalenoirExpanded', sans-serif" }}>Instagram</a>
            <a href="https://www.behance.net/mun1210" target="_blank" rel="noopener noreferrer" className="text-[17px] md:text-[15px] lg:text-[17px] tracking-wide text-black hover:text-[#666] transition-colors" style={{ fontFamily: "'HalenoirExpanded', sans-serif" }}>Behance</a>
            <a href="https://www.linkedin.com/in/mun1210/" target="_blank" rel="noopener noreferrer" className="text-[17px] md:text-[15px] lg:text-[17px] tracking-wide text-black hover:text-[#666] transition-colors" style={{ fontFamily: "'HalenoirExpanded', sans-serif" }}>LinkedIn</a>
          </div>
        </div>
        <div className="relative z-10">
          <p className="text-[10px] md:text-[10px] lg:text-[12px] tracking-[0.4em] uppercase text-[#888888] mb-6" style={{ fontFamily: "'RobotoMono', monospace" }}>Inquiries</p>
          <div className="flex flex-col gap-2">
            <a href="mailto:ptngan163@gmail.com" className="text-[17px] md:text-[15px] lg:text-[17px] tracking-wide text-black hover:text-[#666] transition-colors" style={{ fontFamily: "'HalenoirExpanded', sans-serif" }}>ptngan163@gmail.com</a>
            <p className="text-[16px] md:text-[14px] lg:text-[16px] tracking-wide text-black/60" style={{ fontFamily: "'HalenoirExpanded', sans-serif" }}>0903889145</p>
          </div>
        </div>
        <div className="flex flex-col justify-end items-start md:items-end relative z-10">
          <p className="text-[10px] md:text-[9px] lg:text-[12px] tracking-[0.4em] uppercase text-[#888888]" style={{ fontFamily: "'RobotoMono', monospace" }}>© 2026 Ngan Pham</p>
          <p className="text-[10px] md:text-[9px] lg:text-[12px] tracking-[0.4em] uppercase text-[#888888] mt-2" style={{ fontFamily: "'RobotoMono', monospace" }}>All rights reserved</p>
        </div>
      </div>
    </div>
  );
};
