import React, { useEffect, useState, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion, AnimatePresence, useInView, useScroll, useTransform } from "motion/react";
import { ArrowLeft, ArrowUpRight, ChevronDown, ArrowDown, X, Play } from "lucide-react";
import { FooterFountain } from "./components/FooterFountain";
import { Footer } from "./components/Footer";

import Lenis from 'lenis';
import 'lenis/dist/lenis.css';

import tháng1 from '../SOURCE/LỊCH VISA 2026/THÁNG 1.webp';
import tháng2 from '../SOURCE/LỊCH VISA 2026/THÁNG 2.webp';
import tháng3 from '../SOURCE/LỊCH VISA 2026/THÁNG 3.webp';
import tháng4 from '../SOURCE/LỊCH VISA 2026/THÁNG 4.webp';
import tháng5 from '../SOURCE/LỊCH VISA 2026/THÁNG 5.webp';
import tháng6 from '../SOURCE/LỊCH VISA 2026/THÁNG 6.webp';
import tháng7 from '../SOURCE/LỊCH VISA 2026/THÁNG 7.webp';
import tháng8 from '../SOURCE/LỊCH VISA 2026/THÁNG 8.webp';
import tháng9 from '../SOURCE/LỊCH VISA 2026/THÁNG 9.webp';
import tháng10 from '../SOURCE/LỊCH VISA 2026/THÁNG 10.webp';
import tháng11 from '../SOURCE/LỊCH VISA 2026/THÁNG 11.webp';
import tháng12 from '../SOURCE/LỊCH VISA 2026/THÁNG 12.webp';

import up1 from '../SOURCE/7 UP/7up deck 1.webp';
import up2 from '../SOURCE/7 UP/7up deck 2.webp';
import visa1 from '../SOURCE/VISA/Visa japan.webp';
import visa2 from '../SOURCE/VISA/Visa 711.webp';
import visa3 from '../SOURCE/VISA/Visa Business.webp';
import visa4 from '../SOURCE/VISA/VISA GRAB METRO+BUS.webp';

import visaLM2 from '../SOURCE/VISA/Last minute 2.webp';
import visaLM3 from '../SOURCE/VISA/Last minute 3.webp';
import visaLM4 from '../SOURCE/VISA/Last minute 4.webp';
import visaLM5 from '../SOURCE/VISA/Last minute 5.webp';
import visaLM6 from '../SOURCE/VISA/Last minute 6.webp';
import visaTrip1 from '../SOURCE/VISA/Visa trip 1.webp';

import visaRecap1 from '../SOURCE/VISA/VISA RECAP 2025 1.webp';
import visaRecap2 from '../SOURCE/VISA/VISA RECAP 2025 2.webp';
import visaRecap3 from '../SOURCE/VISA/VISA RECAP 2025 3.webp';
import visaRecap4 from '../SOURCE/VISA/VISA RECAP 2025 4.webp';
import visaRecap5 from '../SOURCE/VISA/VISA RECAP 2025 5.webp';
import visaRecap6 from '../SOURCE/VISA/VISA RECAP 2025 6.webp';
import visaRecap7 from '../SOURCE/VISA/VISA RECAP 2025 7.webp';
import visaRecap8 from '../SOURCE/VISA/VISA RECAP 2025 8.webp';

import oliv1 from '../SOURCE/Ôliv/oliv 1.webp';
import oliv2 from '../SOURCE/Ôliv/oliv 2.webp';
import oliv3 from '../SOURCE/Ôliv/oliv 3.webp';
import oliv4 from '../SOURCE/Ôliv/oliv 4.webp';
import oliv5 from '../SOURCE/Ôliv/oliv 5.webp';
import oliv6 from '../SOURCE/Ôliv/oliv 6.webp';
import oliv7 from '../SOURCE/Ôliv/oliv 7.webp';

import ssEuro1 from '../SOURCE/SAMSUNG/SS TV/SS EURO 1.webp';
import ssEuro2 from '../SOURCE/SAMSUNG/SS TV/SS EURO 2.webp';
import ssEuro3 from '../SOURCE/SAMSUNG/SS TV/SS EURO 3.webp';
import ssEuro4 from '../SOURCE/SAMSUNG/SS TV/SS EURO 4.webp';
import ssEuro5 from '../SOURCE/SAMSUNG/SS TV/SS EURO 5.webp';
import ssEuro6 from '../SOURCE/SAMSUNG/SS TV/SS EURO 6.webp';
import ssEuro7 from '../SOURCE/SAMSUNG/SS TV/SS EURO 7.webp';
import ssAc1 from '../SOURCE/SAMSUNG/SS AC/Thang 11 - 3.webp';
import ssAc2 from '../SOURCE/SAMSUNG/SS AC/Thang 12 - 2.webp';
import ssAc3 from '../SOURCE/SAMSUNG/SS AC/Thang 12 - 3.webp';
import ssAc4 from '../SOURCE/SAMSUNG/SS AC/Thang 12 - 4 copy.webp';
import ssAc5 from '../SOURCE/SAMSUNG/SS AC/Thang 5 - 2.webp';
import ssAc6 from '../SOURCE/SAMSUNG/SS AC/Thang 7 - 1.webp';
import ssAc7 from '../SOURCE/SAMSUNG/SS AC/Thang 7 - 2.webp';
import ssAc8 from '../SOURCE/SAMSUNG/SS AC/Thang 7 - 3.webp';
import ssAc9 from '../SOURCE/SAMSUNG/SS AC/Thang 7 - 4.webp';
import ssAc10 from '../SOURCE/SAMSUNG/SS AC/Thang 9.webp';
import ssAc11 from '../SOURCE/SAMSUNG/SS AC/Tháng 11 - 2.webp';
import ssTheFrame1 from '../SOURCE/SAMSUNG/SS The Frame/DECK SS THE FRAME 1.webp';
import ssTheFrame2 from '../SOURCE/SAMSUNG/SS The Frame/DECK SS THE FRAME 2.webp';
import ssTheFrame3 from '../SOURCE/SAMSUNG/SS The Frame/DECK SS THE FRAME 3.webp';
import caltexHavoline1 from '../SOURCE/CALTEX HAVOLINE/Caltex Havoline 1.webp';
import caltexHavoline2 from '../SOURCE/CALTEX HAVOLINE/Caltex Havoline 2.webp';
import caltexHavoline3 from '../SOURCE/CALTEX HAVOLINE/Caltex Havoline 3.webp';
import tikiPost2 from '../SOURCE/TIKI/TIKI POST 2.webp';
import ponnie1 from '../SOURCE/PONNIE/Ponnie 1.webp';
import ponnie2 from '../SOURCE/PONNIE/Ponnie 2.webp';
import ponnie3 from '../SOURCE/PONNIE/Ponnie 3.webp';
import ponnie4 from '../SOURCE/PONNIE/Ponnie 4.webp';
import ponnie5 from '../SOURCE/PONNIE/Ponnie 5.webp';
import ponnie6 from '../SOURCE/PONNIE/Ponnie 6.webp';
import ponnie7 from '../SOURCE/PONNIE/Ponnie 7.webp';
import ponnie8 from '../SOURCE/PONNIE/Ponnie 8.webp';
import ponnie9 from '../SOURCE/PONNIE/Ponnie 9.webp';
import ngtt1 from '../SOURCE/PONNIE/Nhập gia tuỳ tiệc 1.webp';
import ngtt2 from '../SOURCE/PONNIE/Nhập gia tuỳ tiệc 2.webp';
import ngtt3 from '../SOURCE/PONNIE/Nhập gia tuỳ tiệc 3.webp';
import ngtt4 from '../SOURCE/PONNIE/Nhập gia tuỳ tiệc 4.webp';
import diathan1 from '../SOURCE/PONNIE/DIA THAN 1.webp';
import diathan2 from '../SOURCE/PONNIE/DIA THAN 2.webp';
import diathan3 from '../SOURCE/PONNIE/DIA THAN 3.webp';
import diathan4 from '../SOURCE/PONNIE/DIA THAN 4.webp';
import ponnietv1 from '../SOURCE/PONNIE/PONNIE TV 1.webp';
import ponnietv2 from '../SOURCE/PONNIE/PONNIE TV 2.webp';
import ponnietv3 from '../SOURCE/PONNIE/PONNIE TV 3.webp';
import ponnietv4 from '../SOURCE/PONNIE/PONNIE TV 4.webp';
import ponnietv5 from '../SOURCE/PONNIE/PONNIE TV 5.webp';
import ponnietv6 from '../SOURCE/PONNIE/PONNIE TV 6.webp';
import ntmj1 from '../SOURCE/PONNIE/NHẬP TIỆC MANG J 1.webp';
import ntmj2 from '../SOURCE/PONNIE/NHẬP TIỆC MANG J 2.webp';
import ntmj3 from '../SOURCE/PONNIE/NHẬP TIỆC MANG J 3.webp';
import ntmj4 from '../SOURCE/PONNIE/NHẬP TIỆC MANG J 4.webp';
import ntmj5 from '../SOURCE/PONNIE/NHẬP TIỆC MANG J 5.webp';
import ntmj6 from '../SOURCE/PONNIE/NHẬP TIỆC MANG J 6.webp';

const monthImages = [
  tháng1,
  tháng2,
  tháng3,
  tháng4,
  tháng5,
  tháng6,
  tháng7,
  tháng8,
  tháng9,
  tháng10,
  tháng11,
  tháng12
];

const projects = [
  { id: 0, src: "https://i.postimg.cc/d1f7QFsJ/Screenshot-2026-04-18-at-18-02-38.png", title: "Presentation Design", category: "Creative Direction", year: "2024" },
  { id: 1, src: "https://i.postimg.cc/d1f7QFsJ/Screenshot-2026-04-18-at-18-02-38.png", title: "Social Media Design", category: "Visual Strategy", year: "2024" },
  { id: 2, src: monthImages[0], title: "Merchandise", category: "Art Direction", year: "2023" },
  { id: 3, src: "https://i.postimg.cc/d1f7QFsJ/Screenshot-2026-04-18-at-18-02-38.png", title: "Key Visuals", category: "Art Direction", year: "2024" },
  { id: 4, src: "https://i.postimg.cc/d1f7QFsJ/Screenshot-2026-04-18-at-18-02-38.png", title: "Brand Identity", category: "Digital Curation", year: "2023" }
];

const socialBrands = [
  { name: "Pönnie", year: "2025-2026", logoUrl: "", artUrl: ngtt2, isAI: true },
  { name: "Samsung", year: "2023", logoUrl: "https://logo.clearbit.com/samsung.com", artUrl: ssEuro2, isAI: false },
  { name: "Visa", year: "2023-2026", logoUrl: "https://logo.clearbit.com/visa.com", artUrl: "https://i.postimg.cc/d1f7QFsJ/Screenshot-2026-04-18-at-18-02-38.png", isAI: false },
  { name: "Tiger", year: "2026", logoUrl: "https://logo.clearbit.com/tigerbeer.com", artUrl: "https://i.postimg.cc/d1f7QFsJ/Screenshot-2026-04-18-at-18-02-38.png", isAI: true },
  { name: "7UP", year: "2026", logoUrl: "https://logo.clearbit.com/7up.com", artUrl: "https://i.postimg.cc/d1f7QFsJ/Screenshot-2026-04-18-at-18-02-38.png", isAI: true },
  { name: "Lazada", year: "2026", logoUrl: "https://logo.clearbit.com/lazada.com", artUrl: "https://i.postimg.cc/d1f7QFsJ/Screenshot-2026-04-18-at-18-02-38.png", isAI: true },
  { name: "Ôliv", year: "2023", logoUrl: "", artUrl: oliv1, isAI: false },
  { name: "Caltex Havoline", year: "2024", logoUrl: "", artUrl: caltexHavoline1, isAI: false },
  { name: "Tiki", year: "2020", logoUrl: "https://logo.clearbit.com/tiki.vn", artUrl: tikiPost2, isAI: false },
  { name: "HDBank", year: "2020", logoUrl: "https://logo.clearbit.com/hdbank.com.vn", artUrl: "https://i.postimg.cc/d1f7QFsJ/Screenshot-2026-04-18-at-18-02-38.png", isAI: false },
];

const HorizontalScrollRow = ({ images, heightClass = "h-[50vh] md:h-[65vh]", widthClass = "w-[50vh] md:w-[65vh]", loop = true }: { images: string[], heightClass?: string, widthClass?: string, loop?: boolean }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    let animationFrameId: number;
    let prevTime = performance.now();

    const scrollStep = (time: number) => {
      const deltaTime = time - prevTime;
      prevTime = time;

      if (!isHovered && scrollRef.current && scrollRef.current.dataset.isDragging !== 'true') {
        scrollRef.current.scrollLeft += deltaTime * 0.1;
      }
      animationFrameId = requestAnimationFrame(scrollStep);
    };

    animationFrameId = requestAnimationFrame(scrollStep);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isHovered]);

  return (
    <div 
      ref={scrollRef}
      onMouseEnter={(e) => { setIsHovered(true); e.currentTarget.dataset.isHovering = 'true'; }}
      onMouseLeave={(e) => { setIsHovered(false); e.currentTarget.dataset.isHovering = 'false'; }}
      onTouchStart={() => setIsHovered(true)}
      onTouchEnd={() => setIsHovered(false)}
      onMouseDown={(e) => {
        const slider = e.currentTarget;
        slider.dataset.isDragging = 'true';
        let isDown = true;
        let startX = e.pageX - slider.offsetLeft;
        let scrollLeft = slider.scrollLeft;

        const onMouseMove = (e: MouseEvent) => {
          if (!isDown) return;
          e.preventDefault();
          const x = e.pageX - slider.offsetLeft;
          const walk = (x - startX) * 2;
          slider.scrollLeft = scrollLeft - walk;
        };

        const onMouseUp = () => {
          isDown = false;
          slider.dataset.isDragging = 'false';
          window.removeEventListener('mousemove', onMouseMove);
          window.removeEventListener('mouseup', onMouseUp);
        };

        window.addEventListener('mousemove', onMouseMove);
        window.addEventListener('mouseup', onMouseUp);
      }}
      className="w-full shrink-0 overflow-x-auto overflow-y-hidden flex items-center gap-6 px-6 md:px-12 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] cursor-grab active:cursor-grabbing pb-2"
    >
      {loop ? (
        [...Array(3)].map((_, groupIdx) => (
          <React.Fragment key={groupIdx}>
            {images.map((src, i) => (
              <div key={`c${groupIdx}-${i}`} className={`flex-shrink-0 ${widthClass} ${heightClass} bg-white/5 overflow-hidden group border border-white/10 relative`}>
                <img src={src} className={`${widthClass === 'w-auto' ? 'w-auto block' : 'w-full'} h-full object-cover transform transition-transform duration-[1.5s] ease-out group-hover:scale-105`} alt="" />
              </div>
            ))}
          </React.Fragment>
        ))
      ) : (
        images.map((src, i) => (
          <div key={`c-${i}`} className={`flex-shrink-0 ${widthClass} ${heightClass} bg-white/5 overflow-hidden group border border-white/10 relative`}>
            <img src={src} className={`${widthClass === 'w-auto' ? 'w-auto block' : 'w-full'} h-full object-cover transform transition-transform duration-[1.5s] ease-out group-hover:scale-105`} alt="" />
          </div>
        ))
      )}
    </div>
  );
};

const VideoPlayerBlock = ({ videoUrl, posterUrl }: { videoUrl: string, posterUrl?: string }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  // Derive poster from Cloudinary URL if not provided - use so_0 to grab first frame reliably
  const derivedPoster = posterUrl || (videoUrl.includes('cloudinary.com') ? videoUrl.replace('/upload/', '/upload/so_0/').replace(/\.[^/.]+$/, ".jpg") : undefined);

  // Add #t=0.001 to force iOS/Safari to preload the first frame as the poster natively
  const videoSrcWithTime = videoUrl.includes('#t=') ? videoUrl : `${videoUrl}#t=0.001`;

  return (
    <div className="h-full aspect-[4/5] bg-black/80 overflow-hidden group border border-white/10 relative shrink-0 cursor-pointer" onClick={togglePlay}>
      <video 
        ref={videoRef}
        src={videoSrcWithTime} 
        poster={derivedPoster}
        className="w-full h-full object-cover transform transition-transform duration-[1.5s] ease-out group-hover:scale-105" 
        playsInline
        loop
      />
      {!isPlaying && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/30 group-hover:bg-black/40 transition-colors">
          <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/40 shadow-xl z-10 transition-transform group-hover:scale-110">
            <Play className="w-8 h-8 text-white ml-1" fill="currentColor" />
          </div>
          <div 
            className="mt-4 px-4 py-2 bg-black/60 backdrop-blur-md rounded-full text-white group-hover:text-[#e4ff40] transition-colors duration-300 tracking-[0.2em] uppercase border border-white/10 whitespace-nowrap"
            style={{ fontFamily: "'RobotoMono', monospace", fontSize: '12px', fontWeight: 300 }}
          >
            Click to play
          </div>
        </div>
      )}
    </div>
  );
};

const ExpandedModal = ({ brandIndex, onClose }: { brandIndex: number, onClose: () => void }) => {
  const brand = socialBrands[brandIndex];

  const images = brand.name === "Ôliv"
    ? [
        oliv1,
        oliv2,
        oliv3,
        oliv4,
        oliv5,
        oliv6,
        oliv7
      ]
    : brand.name === "Caltex Havoline"
    ? [
        caltexHavoline1,
        caltexHavoline2,
        caltexHavoline3
      ]
    : brand.name === "Pönnie"
    ? [
        ponnie1,
        ponnie2,
        ponnie3,
        ponnie4,
        ponnie5,
        ponnie6,
        ponnie7,
        ponnie8,
        ponnie9
      ]
    : brand.name === "Visa"
    ? [
        visa4,
        visa1,
        visa2,
        visa3
      ]
    : [
        brand.artUrl, 
        "https://i.postimg.cc/d1f7QFsJ/Screenshot-2026-04-18-at-18-02-38.png", 
        "https://i.postimg.cc/d1f7QFsJ/Screenshot-2026-04-18-at-18-02-38.png", 
        "https://i.postimg.cc/d1f7QFsJ/Screenshot-2026-04-18-at-18-02-38.png", 
        "https://i.postimg.cc/d1f7QFsJ/Screenshot-2026-04-18-at-18-02-38.png",
        "https://i.postimg.cc/d1f7QFsJ/Screenshot-2026-04-18-at-18-02-38.png",
        brand.artUrl,
        "https://i.postimg.cc/d1f7QFsJ/Screenshot-2026-04-18-at-18-02-38.png"
      ];
  
  const ssAcImages = [
    ssAc1, ssAc2, ssAc3, ssAc4, ssAc5, ssAc6, ssAc7, ssAc8, ssAc9, ssAc10, ssAc11
  ];

  const ssTvImages = [
    ssEuro1, ssEuro2, ssEuro3, ssEuro4, ssEuro5, ssEuro6, ssEuro7
  ];

  const tvRef = useRef<HTMLDivElement>(null);
  const ponnieSection2Ref = useRef<HTMLDivElement>(null);
  const visaSection2Ref = useRef<HTMLDivElement>(null);
  
  const scrollToTV = () => {
    if (tvRef.current) {
      tvRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToPonnieSection2 = () => {
    if (ponnieSection2Ref.current) {
      ponnieSection2Ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToVisaSection2 = () => {
    if (visaSection2Ref.current) {
      visaSection2Ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-[100] flex flex-col justify-end p-0 md:px-12 md:pt-24 cursor-pointer bg-black/90 backdrop-blur-md"
    >
      {/* Header - Fixed to top outside the modal tab to keep it completely unchanged */}
      <div className="absolute top-0 left-0 right-0 h-24 md:h-24 w-full flex items-center justify-between px-6 md:px-12 pointer-events-none z-[110]">
        {/* Left: Info */}
        <div 
          className="pointer-events-auto flex items-center gap-3 text-[12px] uppercase tracking-[0.2em] text-[#888888] cursor-default" 
          style={{ fontFamily: "'RobotoMono', monospace" }}
          onClick={(e) => e.stopPropagation()}
        >
          <span>{brand.name}</span>
          <span className="text-white/30">/</span>
          <span>{brand.year}</span>
          {brand.name === "Pönnie" && (
            <>
              <span className="text-white/30 ml-2">|</span>
              <span className="normal-case tracking-normal text-[#888888]" style={{ fontFamily: 'RobotoMono', fontSize: '12px' }}>All visuals, from talents to backgrounds, were fully AI-generated.</span>
            </>
          )}
        </div>
        
        {/* Right: Close Button */}
        <button 
          onClick={onClose}
          className="pointer-events-auto flex items-center gap-2 text-[12px] uppercase tracking-[0.4em] transition-colors hover:text-[#e4ff40] text-[#888888] group cursor-pointer"
          style={{ fontFamily: "'RobotoMono', monospace" }}
        >
          <X size={14} className="group-hover:rotate-90 transition-transform duration-300" /> CLOSE
        </button>
      </div>

      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        exit={{ y: "100%" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-7xl mx-auto h-[88vh] md:h-[88vh] mb-[40px] md:mb-[56px] bg-[#0a0a0a] rounded-t-3xl md:rounded-3xl shadow-2xl border border-white/10 cursor-default flex flex-col overflow-hidden"
      >
        {/* Scrollable Content Area */}
        <div className="flex-1 w-full h-full overflow-y-auto overflow-x-hidden no-scrollbar snap-y snap-mandatory relative">
          {brand.name === "Samsung" ? (
            <div className="flex flex-col w-full relative">
              {/* Section 1: Samsung AC */}
              <div className="w-full shrink-0 min-h-full flex flex-col justify-start snap-start relative pt-8 md:pt-12 pb-10">
                <div className="px-6 md:px-12 pb-6 shrink-0 flex items-center justify-between w-full">
                  <h3 className="text-[16px] text-white uppercase" style={{ fontFamily: "'HalenoirExpanded', 'Helvetica', sans-serif" }}>1 / Samsung AC</h3>
                  
                  {/* Scroll Down Indicator */}
                  <div 
                     onClick={(e) => {
                       e.stopPropagation();
                       scrollToTV();
                     }}
                     className="group flex flex-col items-end cursor-pointer pr-2 pointer-events-auto"
                  >
                    <div className="flex items-center gap-2 text-[#888888] group-hover:text-[#e4ff40] transition-colors duration-300">
                      <span className="text-[12px] tracking-[0.4em] uppercase" style={{ fontFamily: 'RobotoMono', fontSize: '12px' }}>Scroll down for more</span>
                      <span className="relative flex items-center overflow-hidden w-4 h-4">
                        <ArrowDown className="w-4 h-4 absolute opacity-0 -translate-y-full group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500" />
                      </span>
                    </div>
                  </div>
                </div>
                <div className="w-full shrink-0 flex flex-col justify-start">
                   <HorizontalScrollRow images={ssAcImages} loop={false} />
                </div>
              </div>

              {/* Section 2: Samsung TV */}
              <div ref={tvRef} className="w-full shrink-0 min-h-full flex flex-col justify-start snap-start relative pt-8 md:pt-12 pb-10">
                <div className="px-6 md:px-12 pb-6 shrink-0">
                  <h3 className="text-[16px] text-white uppercase" style={{ fontFamily: "'HalenoirExpanded', 'Helvetica', sans-serif" }}>2 / Samsung TV</h3>
                </div>
                <div className="w-full shrink-0 flex flex-col justify-start">
                   {/* Samsung TV images */}
                   <HorizontalScrollRow images={ssTvImages} loop={false} />
                </div>
              </div>
            </div>
          ) : brand.name === "Pönnie" ? (
            <div className="flex flex-col w-full relative">
              {/* Section 1: Social Content */}
              <div className="w-full shrink-0 min-h-full flex flex-col justify-start snap-start relative pt-8 md:pt-12 pb-10">
                <div className="px-6 md:px-12 pb-6 shrink-0 flex items-center justify-between w-full">
                  <h3 className="text-[16px] text-white uppercase" style={{ fontFamily: "'HalenoirExpanded', 'Helvetica', sans-serif" }}>1 / Social Content</h3>
                  
                  {/* Scroll Down Indicator */}
                  <div 
                     onClick={(e) => {
                       e.stopPropagation();
                       scrollToPonnieSection2();
                     }}
                     className="group flex flex-col items-end cursor-pointer pr-2 pointer-events-auto"
                  >
                    <div className="flex items-center gap-2 text-[#888888] group-hover:text-[#e4ff40] transition-colors duration-300">
                      <span className="text-[12px] tracking-[0.4em] uppercase" style={{ fontFamily: 'RobotoMono', fontSize: '12px' }}>Scroll down for more</span>
                      <span className="relative flex items-center overflow-hidden w-4 h-4">
                        <ArrowDown className="w-4 h-4 absolute opacity-0 -translate-y-full group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500" />
                      </span>
                    </div>
                  </div>
                </div>
                <div className="w-full shrink-0 flex flex-col justify-start">
                   <HorizontalScrollRow images={images} loop={false} widthClass="w-auto" heightClass="h-[50vh] md:h-[65vh]" />
                </div>
              </div>

              {/* Section 2: Playlist Video Blocks (stacked vertically) */}
              {[0, 1, 2, 3].map((idx) => (
                <div key={idx} ref={idx === 0 ? ponnieSection2Ref : null} className="w-full shrink-0 min-h-full flex flex-col justify-start snap-start relative pt-8 md:pt-12 pb-10">
                  <div className="px-6 md:px-12 pb-6 shrink-0 flex items-center justify-between w-full">
                    <h3 className="text-[16px] text-white uppercase" style={{ fontFamily: "'HalenoirExpanded', 'Helvetica', sans-serif" }}>2 / Playlist</h3>
                    
                    {/* Add Scroll Down Indicator for all but the last item */}
                    {idx < 3 && (
                      <div 
                        className="group flex flex-col items-end pl-2 md:pr-2 cursor-pointer pointer-events-auto"
                        onClick={(e) => {
                          e.stopPropagation();
                          const currentEl = e.currentTarget;
                          const nextSection = currentEl.closest('.snap-start')?.nextElementSibling;
                          if (nextSection) {
                            nextSection.scrollIntoView({ behavior: 'smooth' });
                          }
                        }}
                      >
                        <div className="flex items-center gap-2 text-[#888888] group-hover:text-[#e4ff40] transition-colors duration-300">
                          <span className="text-[12px] tracking-[0.4em] uppercase" style={{ fontFamily: 'RobotoMono', fontSize: '12px' }}>Scroll down for more</span>
                          <span className="relative flex items-center overflow-hidden w-4 h-4">
                            <ArrowDown className="w-4 h-4 absolute opacity-0 -translate-y-full group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500" />
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="w-full shrink-0 flex justify-center items-center px-4 md:px-8 xl:px-12 h-[45vh] md:h-[55vh] xl:h-[65vh]">
                     <div className="flex w-full gap-8 md:gap-8 lg:gap-12 xl:gap-24 h-full mx-auto justify-center items-center">
                         <div className="flex flex-col gap-4 md:gap-6 h-full shrink-0 justify-center">
                             <div className="h-[75%] md:h-[80%] grid grid-rows-2 grid-flow-col gap-2 md:gap-4 shrink-0 w-max">
                                 <div className="h-full aspect-[4/5] bg-white/5 overflow-hidden group border border-white/10 relative"><img src={idx === 3 ? diathan1 : idx === 2 ? ntmj1 : idx === 1 ? ponnietv1 : ngtt1} className="w-full h-full object-cover transform transition-transform duration-[1.5s] ease-out group-hover:scale-105" alt="" /></div>
                                 <div className="h-full aspect-[4/5] bg-white/5 overflow-hidden group border border-white/10 relative"><img src={idx === 3 ? diathan2 : idx === 2 ? ntmj2 : idx === 1 ? ponnietv2 : ngtt2} className="w-full h-full object-cover transform transition-transform duration-[1.5s] ease-out group-hover:scale-105" alt="" /></div>
                                 {(idx === 1 || idx === 2) && (
                                   <div className="h-full aspect-[4/5] bg-white/5 overflow-hidden group border border-white/10 relative"><img src={idx === 2 ? ntmj5 : ponnietv5} className="w-full h-full object-cover transform transition-transform duration-[1.5s] ease-out group-hover:scale-105" alt="" /></div>
                                 )}
                                 <div className="h-full aspect-[4/5] bg-white/5 overflow-hidden group border border-white/10 relative"><img src={idx === 3 ? diathan3 : idx === 2 ? ntmj3 : idx === 1 ? ponnietv3 : ngtt3} className="w-full h-full object-cover transform transition-transform duration-[1.5s] ease-out group-hover:scale-105" alt="" /></div>
                                 <div className="h-full aspect-[4/5] bg-white/5 overflow-hidden group border border-white/10 relative"><img src={idx === 3 ? diathan4 : idx === 2 ? ntmj4 : idx === 1 ? ponnietv4 : ngtt4} className="w-full h-full object-cover transform transition-transform duration-[1.5s] ease-out group-hover:scale-105" alt="" /></div>
                                 {(idx === 1 || idx === 2) && (
                                   <div className="h-full aspect-[4/5] bg-white/5 overflow-hidden group border border-white/10 relative"><img src={idx === 2 ? ntmj6 : ponnietv6} className="w-full h-full object-cover transform transition-transform duration-[1.5s] ease-out group-hover:scale-105" alt="" /></div>
                                 )}
                             </div>
                             <div className="text-[10px] md:text-sm text-white/50 font-sans">
                                 <p className="text-white/80 font-medium">I designed still frame visuals.</p>
                                 <p>Video was produced by the Circus team.</p>
                             </div>
                         </div>
                         <VideoPlayerBlock videoUrl={
                           idx === 0 ? "https://res.cloudinary.com/dz154pwxa/video/upload/v1777142334/PONNIE_VIDEO_1_tycrey.mp4" :
                           idx === 1 ? "https://res.cloudinary.com/dz154pwxa/video/upload/v1777142349/PONNIE_VIDEO_2_bwahhd.mp4" :
                           idx === 2 ? "https://res.cloudinary.com/dz154pwxa/video/upload/v1777143136/PONNIE_VIDEO_3_y68sch.mp4" :
                           "https://res.cloudinary.com/dz154pwxa/video/upload/v1777142339/PONNIE_VIDEO_4_m009p4.mp4"
                         } />
                     </div>
                  </div>
                </div>
              ))}
            </div>
          ) : brand.name === "Visa" ? (
            <div className="flex flex-col w-full relative">
              {/* Section 1: Social Content */}
              <div className="w-full shrink-0 min-h-full flex flex-col justify-start snap-start relative pt-8 md:pt-12 pb-10">
                <div className="px-6 md:px-12 pb-6 shrink-0 flex items-center justify-between w-full">
                  <h3 className="text-[16px] text-white uppercase" style={{ fontFamily: "'HalenoirExpanded', 'Helvetica', sans-serif" }}>1 / Social Content</h3>
                  
                  {/* Scroll Down Indicator */}
                  <div 
                     onClick={(e) => {
                       e.stopPropagation();
                       scrollToVisaSection2();
                     }}
                     className="group flex flex-col items-end cursor-pointer pr-2 pointer-events-auto"
                  >
                    <div className="flex items-center gap-2 text-[#888888] group-hover:text-[#e4ff40] transition-colors duration-300">
                      <span className="text-[12px] tracking-[0.4em] uppercase" style={{ fontFamily: 'RobotoMono', fontSize: '12px' }}>Scroll down for more</span>
                      <span className="relative flex items-center overflow-hidden w-4 h-4">
                        <ArrowDown className="w-4 h-4 absolute opacity-0 -translate-y-full group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500" />
                      </span>
                    </div>
                  </div>
                </div>
                <div className="w-full shrink-0 flex flex-col justify-start">
                   <HorizontalScrollRow images={images} loop={false} widthClass="w-auto" heightClass="h-[50vh] md:h-[65vh]" />
                </div>
              </div>

              {/* Section 2: Playlist Video Block */}
              {[0, 1].map((idx) => (
                <div key={`visa-${idx}`} ref={idx === 0 ? visaSection2Ref : null} className="w-full shrink-0 min-h-full flex flex-col justify-start snap-start relative pt-8 md:pt-12 pb-10">
                  <div className="px-6 md:px-12 pb-6 shrink-0 flex items-center justify-between w-full">
                    <h3 className="text-[16px] text-white uppercase" style={{ fontFamily: "'HalenoirExpanded', 'Helvetica', sans-serif" }}>2 / Playlist</h3>
                    {idx === 0 && (
                      <div 
                        className="group flex flex-col items-end pl-2 md:pr-2 cursor-pointer pointer-events-auto"
                        onClick={(e) => {
                          e.stopPropagation();
                          const currentEl = e.currentTarget;
                          const nextSection = currentEl.closest('.snap-start')?.nextElementSibling;
                          if (nextSection) {
                            nextSection.scrollIntoView({ behavior: 'smooth' });
                          }
                        }}
                      >
                        <div className="flex items-center gap-2 text-[#888888] group-hover:text-[#e4ff40] transition-colors duration-300">
                          <span className="text-[12px] tracking-[0.4em] uppercase" style={{ fontFamily: 'RobotoMono', fontSize: '12px' }}>Scroll down for more</span>
                          <span className="relative flex items-center overflow-hidden w-4 h-4">
                            <ArrowDown className="w-4 h-4 absolute opacity-0 -translate-y-full group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500" />
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="w-full shrink-0 flex justify-center items-center px-4 md:px-8 xl:px-12 h-[45vh] md:h-[55vh] xl:h-[65vh]">
                     <div className="flex w-full gap-8 md:gap-8 lg:gap-12 xl:gap-24 h-full mx-auto justify-center items-center">
                         <div className="flex flex-col gap-4 md:gap-6 h-full shrink-0 justify-center">
                             <div className="h-[75%] md:h-[80%] grid grid-rows-2 grid-flow-col gap-2 md:gap-4 shrink-0 w-max">
                                 {idx === 0 ? (
                                   <>
                                     <div className="h-full aspect-[4/5] bg-white/5 overflow-hidden group border border-white/10 relative"><img src={visaLM2} className="w-full h-full object-cover transform transition-transform duration-[1.5s] ease-out group-hover:scale-105" alt="" /></div>
                                     <div className="h-full aspect-[4/5] bg-white/5 overflow-hidden group border border-white/10 relative"><img src={visaLM3} className="w-full h-full object-cover transform transition-transform duration-[1.5s] ease-out group-hover:scale-105" alt="" /></div>
                                     <div className="h-full aspect-[4/5] bg-white/5 overflow-hidden group border border-white/10 relative"><img src={visaLM4} className="w-full h-full object-cover transform transition-transform duration-[1.5s] ease-out group-hover:scale-105" alt="" /></div>
                                     <div className="h-full aspect-[4/5] bg-white/5 overflow-hidden group border border-white/10 relative"><img src={visaLM5} className="w-full h-full object-cover transform transition-transform duration-[1.5s] ease-out group-hover:scale-105" alt="" /></div>
                                     <div className="h-full aspect-[4/5] bg-white/5 overflow-hidden group border border-white/10 relative"><img src={visaLM6} className="w-full h-full object-cover transform transition-transform duration-[1.5s] ease-out group-hover:scale-105" alt="" /></div>
                                     <div className="h-full aspect-[4/5] bg-white/5 overflow-hidden group border border-white/10 relative"><img src={visaTrip1} className="w-full h-full object-cover transform transition-transform duration-[1.5s] ease-out group-hover:scale-105" alt="" /></div>
                                   </>
                                 ) : (
                                   <>
                                     <div className="h-full aspect-[4/5] bg-white/5 overflow-hidden group border border-white/10 relative"><img src={visaRecap1} className="w-full h-full object-cover transform transition-transform duration-[1.5s] ease-out group-hover:scale-105" alt="" /></div>
                                     <div className="h-full aspect-[4/5] bg-white/5 overflow-hidden group border border-white/10 relative"><img src={visaRecap2} className="w-full h-full object-cover transform transition-transform duration-[1.5s] ease-out group-hover:scale-105" alt="" /></div>
                                     <div className="h-full aspect-[4/5] bg-white/5 overflow-hidden group border border-white/10 relative"><img src={visaRecap3} className="w-full h-full object-cover transform transition-transform duration-[1.5s] ease-out group-hover:scale-105" alt="" /></div>
                                     <div className="h-full aspect-[4/5] bg-white/5 overflow-hidden group border border-white/10 relative"><img src={visaRecap4} className="w-full h-full object-cover transform transition-transform duration-[1.5s] ease-out group-hover:scale-105" alt="" /></div>
                                     <div className="h-full aspect-[4/5] bg-white/5 overflow-hidden group border border-white/10 relative"><img src={visaRecap5} className="w-full h-full object-cover transform transition-transform duration-[1.5s] ease-out group-hover:scale-105" alt="" /></div>
                                     <div className="h-full aspect-[4/5] bg-white/5 overflow-hidden group border border-white/10 relative"><img src={visaRecap6} className="w-full h-full object-cover transform transition-transform duration-[1.5s] ease-out group-hover:scale-105" alt="" /></div>
                                     <div className="h-full aspect-[4/5] bg-white/5 overflow-hidden group border border-white/10 relative"><img src={visaRecap7} className="w-full h-full object-cover transform transition-transform duration-[1.5s] ease-out group-hover:scale-105" alt="" /></div>
                                     <div className="h-full aspect-[4/5] bg-white/5 overflow-hidden group border border-white/10 relative"><img src={visaRecap8} className="w-full h-full object-cover transform transition-transform duration-[1.5s] ease-out group-hover:scale-105" alt="" /></div>
                                   </>
                                 )}
                             </div>
                             <div className="text-[10px] md:text-sm text-white/50 font-sans">
                                 <p className="text-white/80 font-medium">
                                   {idx === 0 
                                     ? "Designed still frames, animation briefs." 
                                     : "Designed still frames, animation briefs, and Midjourney Vee 3D motion footage."}
                                 </p>
                                 <p>Video was produced by the Circus team.</p>
                             </div>
                         </div>
                         <VideoPlayerBlock 
                          videoUrl={idx === 0 ? "https://res.cloudinary.com/dz154pwxa/video/upload/v1777141112/20260422_Visa_AO_Video_post_last_minute_mbja0n.mp4" : "https://res.cloudinary.com/dz154pwxa/video/upload/v1777142345/VISA_RECAP_2025_pmu0om.mp4"} 
                          posterUrl={idx === 1 ? "https://res.cloudinary.com/dz154pwxa/video/upload/so_0/v1777141112/20260422_Visa_AO_Video_post_last_minute_mbja0n.jpg" : undefined}
                        />
                     </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="w-full shrink-0 min-h-full snap-start flex flex-col justify-center pb-20 md:pb-24 pt-8 md:pt-10" >
               <HorizontalScrollRow 
                 images={images} 
                 loop={brand.name !== "Ôliv" && brand.name !== "Caltex Havoline"} 
               />
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

const PresentationSection = ({ project }: { project: any }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = [
    { brand: "7UP", title: "7UP Presentation", description: "Elevating corporate storytelling through meticulously crafted presentation design. We transformed strategic messaging into a compelling visual narrative that feels as refreshing as the brand itself.", src: up1 },
    { brand: "7UP", title: "7UP Presentation", description: "Elevating corporate storytelling through meticulously crafted presentation design. We transformed strategic messaging into a compelling visual narrative that feels as refreshing as the brand itself.", src: up2 },
    { brand: "Visa", title: "Visa Network", description: "Utilizing a seamless 16:9 layout format designed for maximum audience engagement. Complex data was distilled into clear, impactful slides to communicate global scale and connectivity.", src: visa1 },
    { brand: "Visa", title: "Visa Network", description: "Utilizing a seamless 16:9 layout format designed for maximum audience engagement. Complex data was distilled into clear, impactful slides to communicate global scale and connectivity.", src: visa2 },
    { brand: "Visa", title: "Visa Network", description: "Utilizing a seamless 16:9 layout format designed for maximum audience engagement. Complex data was distilled into clear, impactful slides to communicate global scale and connectivity.", src: visa3 },
    { brand: "Samsung", title: "Samsung The Frame", description: "Highlighting the fusion of art and technology with The Frame. We developed a visual language that seamlessly integrates modern displays into diverse living spaces.", src: ssTheFrame1 },
    { brand: "Samsung", title: "Samsung The Frame", description: "Highlighting the fusion of art and technology with The Frame. We developed a visual language that seamlessly integrates modern displays into diverse living spaces.", src: ssTheFrame2 },
    { brand: "Samsung", title: "Samsung The Frame", description: "Highlighting the fusion of art and technology with The Frame. We developed a visual language that seamlessly integrates modern displays into diverse living spaces.", src: ssTheFrame3 }
  ];

  return (
    <section className="relative w-full flex flex-col md:flex-row items-start snap-start">
      {/* Sticky Left Content */}
      <div className="w-full md:w-4/12 md:sticky top-0 h-[40vh] md:h-screen flex flex-col justify-end md:justify-center pb-8 md:pb-0 px-6 md:px-12 z-20 shrink-0 bg-gradient-to-t from-[#0a0a0a] to-transparent md:bg-transparent pointer-events-none">
        <div className="pointer-events-auto w-full max-w-sm mt-auto md:mt-0 md:-translate-y-12">
          <h3 className="text-xl md:text-3xl font-light mb-2 text-white/90">{slides[activeIndex].brand}</h3>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white/60 mb-8 md:mb-12" style={{ fontFamily: "'HalenoirCompactText', sans-serif" }}>
            {slides[activeIndex].title}
          </h2>
          <p className="text-sm md:text-base text-white/60 leading-relaxed font-light transition-opacity duration-300">
            {slides[activeIndex].description}
          </p>
        </div>
      </div>

      {/* Scrolling Right Content */}
      <div className="w-full md:w-8/12 flex flex-col gap-0 md:gap-0 relative z-10 px-6 md:px-12 pb-32 pt-[40vh] md:pt-[25vh] md:pb-[25vh]">
        {slides.map((slide, idx) => (
          <div key={idx} className=" w-full flex items-center justify-center">
            <motion.div
              onViewportEnter={() => setActiveIndex(idx)}
              viewport={{ amount: 0.5, margin: "-40% 0px -40% 0px" }}
              initial={{ filter: "brightness(0.2) grayscale(0.2)" }}
              whileInView={{ filter: "brightness(1) grayscale(0)" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="w-full aspect-video mx-auto overflow-hidden relative shrink-0 group"
            >
              <img 
                src={slide.src} 
                alt={`${slide.brand} Slide ${idx + 1}`} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const projectIndex = parseInt(id || "0");
  const project = projects[projectIndex] || projects[0];
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [hoveredBrandIndex, setHoveredBrandIndex] = useState<number | null>(null);
  const [selectedBrandIndex, setSelectedBrandIndex] = useState<number | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTo(0, 0);
    }
  }, [id]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedBrandIndex(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div ref={containerRef} className="h-[100dvh] w-full overflow-y-auto overflow-x-hidden snap-y snap-mandatory bg-[#0a0a0a] text-white selection:bg-white/20">
      {/* Navigation Bar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/10 backdrop-blur-md border-b border-white/5">
        <nav className="relative mx-auto flex max-w-[1800px] items-center justify-between px-6 py-6 md:px-12">
          <div 
            className="text-2xl tracking-tight text-white z-50 cursor-pointer hover-hologram"
            style={{ fontFamily: "'HalenoirExpanded', sans-serif" }}
            onClick={() => navigate("/")}
          >
            Ngan Pham<sup className="text-[10px]">®</sup>
          </div>

          <div className="flex items-center gap-8">
            <button 
              onClick={() => navigate("/")}
              className="flex items-center gap-2 text-[12px] uppercase tracking-[0.4em] text-[#888888] transition-colors hover:text-[#e4ff40] cursor-pointer"
              style={{ fontFamily: "'RobotoMono', monospace" }}
            >
              <ArrowLeft size={14} /> Back
            </button>
            <div className="relative hidden md:block" ref={dropdownRef}>
              <div 
                className="flex items-center gap-2 text-[12px] uppercase tracking-[0.4em] opacity-70 cursor-pointer hover:opacity-100 hover:text-[#e4ff40] transition-colors"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                style={{ fontFamily: "'RobotoMono', monospace" }}
              >
                Project {projectIndex + 1} / {projects.length}
                <ChevronDown size={14} className={`transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </div>
              
              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute right-0 top-full mt-4 w-64 bg-[#0a0a0a] border border-white/10 rounded-xl overflow-hidden py-2 z-50 flex flex-col shadow-2xl"
                  >
                    {projects.map((p, idx) => (
                      <button
                        key={p.id}
                        onClick={() => {
                          setIsDropdownOpen(false);
                          navigate(`/project/${idx}`);
                        }}
                        className={`cursor-pointer text-left px-5 py-4 text-[10px] uppercase tracking-[0.2em] transition-colors ${
                          idx === projectIndex 
                            ? 'bg-white/20 text-[#888888]' 
                            : 'text-[#888888] hover:bg-[#e4ff40]/10 hover:text-[#e4ff40]'
                        }`}
                        style={{ fontFamily: "'RobotoMono', monospace" }}
                      >
                        {idx + 1}. {p.title}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden shrink-0 snap-start">
        <motion.img 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          src={project.src} 
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
        
        <div className="absolute bottom-0 left-0 w-full p-6 md:p-12">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
          >
            <span className="text-[10px] tracking-[0.6em] uppercase text-white/40 mb-4 block">{project.category}</span>
            <h1 
              className="text-7xl md:text-[12vw] font-medium tracking-tighter leading-[0.85] mb-8"
              style={{ fontFamily: "'HalenoirExpanded', sans-serif" }}
            >
              {project.title}
            </h1>
          </motion.div>
        </div>
      </section>

      {projectIndex === 2 ? (
        <div className="flex flex-col w-full">
          {/* Section 1: Intro Text - snapped */}
          <section className="relative w-full min-h-[60vh] shrink-0 snap-start flex flex-col justify-end pb-12 pt-[15vh] px-6 md:px-12">
            <div className="w-full md:w-5/12">
              <h3 className="text-xl md:text-3xl font-light mb-2 text-white/90">Our work</h3>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white/60 mb-6" style={{ fontFamily: "'HalenoirCompactText', sans-serif" }}>
                {project.title}
              </h2>
              <p className="text-sm md:text-base text-white/60 leading-relaxed font-light mb-8 max-w-sm">
                A curation of premium branded merchandise featuring an exclusive 12-month calendar series with distinct graphic treatments, and additional conceptual branding pieces exploring AI-generated patterns.
              </p>
              <div className="flex items-center gap-4 mt-4">
                <div className="text-xs tracking-[0.2em] uppercase font-mono text-[#888888] border border-[#e4ff40]/30 px-5 py-3 rounded-full bg-[#e4ff40]/5">
                  Calendar design generated using AI
                </div>
              </div>
            </div>
          </section>

          {/* Section 2: Horizontal Slider - snapped */}
          <section className="relative w-full min-h-screen shrink-0 snap-center flex flex-col justify-center overflow-hidden">
            <div className="w-full relative z-10">
              <div 
                className="flex overflow-x-auto no-scrollbar flex-nowrap gap-6 md:gap-12 w-full py-8 items-center cursor-grab active:cursor-grabbing px-6 md:px-12 relative"
                ref={(node) => {
                  if (!node) return;
                  
                  const step = () => {
                    if (node.dataset.isHovering !== 'true' && node.dataset.isDragging !== 'true' && node.children.length >= 24) {
                      node.scrollLeft += 1.5;
                      
                      const firstItem = node.children[0] as HTMLElement;
                      const resetItem = node.children[12] as HTMLElement;
                      if (firstItem && resetItem) {
                        const resetDistance = resetItem.offsetLeft - firstItem.offsetLeft;
                        if (node.scrollLeft >= resetDistance) {
                          node.scrollLeft -= resetDistance;
                        }
                      }
                    }
                    requestAnimationFrame(step);
                  };
                  
                  if (!node.dataset.scrolling) {
                    node.dataset.scrolling = "true";
                    requestAnimationFrame(step);
                  }
                }}
                onMouseEnter={(e) => { e.currentTarget.dataset.isHovering = 'true'; }}
                onMouseLeave={(e) => { e.currentTarget.dataset.isHovering = 'false'; }}
                onMouseDown={(e) => {
                  const slider = e.currentTarget;
                  slider.dataset.isDragging = 'true';
                  let isDown = true;
                  let startX = e.pageX - slider.offsetLeft;
                  let scrollLeft = slider.scrollLeft;

                  const onMouseMove = (e: MouseEvent) => {
                    if (!isDown) return;
                    e.preventDefault();
                    const x = e.pageX - slider.offsetLeft;
                    const walk = (x - startX) * 2;
                    slider.scrollLeft = scrollLeft - walk;
                  };

                  const onMouseUp = () => {
                    isDown = false;
                    slider.dataset.isDragging = 'false';
                    window.removeEventListener('mousemove', onMouseMove);
                    window.removeEventListener('mouseup', onMouseUp);
                  };

                  window.addEventListener('mousemove', onMouseMove);
                  window.addEventListener('mouseup', onMouseUp);
                }}
              >
                {[...Array(24)].map((_, idx) => {
                  const dataIdx = idx % 12;
                  const src = monthImages[dataIdx];
                  return (
                    <div key={idx} className="shrink-0 relative group">
                      <div
                        className="h-[60vh] md:h-[75vh] w-auto aspect-[1772/2481] overflow-hidden relative border border-white/5 shadow-2xl bg-[#0a0a0a]"
                      >
                        <img 
                          src={src} 
                          alt={`Merch ${dataIdx + 1}`} 
                          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          onError={(e) => {
                            e.currentTarget.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1772' height='2481' viewBox='0 0 1772 2481'%3E%3Crect width='1772' height='2481' fill='%231a1a1a'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='monospace' font-size='64' fill='%23666'%3E THÁNG ${dataIdx + 1} MISSING %3C/text%3E%3C/svg%3E`;
                          }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="w-full flex justify-center mt-4 pointer-events-none relative z-20">
                {/* Scroll Down Indicator */}
                <div 
                   onClick={(e) => {
                     e.stopPropagation();
                     document.getElementById("other-merch")?.scrollIntoView({ behavior: 'smooth' });
                   }}
                   className="group flex flex-col items-center cursor-pointer pointer-events-auto"
                >
                  <div className="flex items-center gap-2 text-[#888888] group-hover:text-[#e4ff40] transition-colors duration-300">
                    <span className="text-[12px] tracking-[0.4em] uppercase" style={{ fontFamily: 'RobotoMono', fontSize: '12px' }}>Scroll down for more</span>
                    <span className="relative flex items-center overflow-hidden w-4 h-4">
                      <ArrowDown className="w-4 h-4 absolute opacity-0 -translate-y-full group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3: Other Merch - snapped */}
          <section id="other-merch" className="min-h-screen w-full flex flex-col justify-center shrink-0 snap-start px-6 md:px-12 py-16 bg-[#0a0a0a]">
            <div className="mb-16">
              <span className="text-[#888888] text-[10px] tracking-[0.4em] uppercase font-mono mb-4 block">Archive</span>
              <h3 className="text-3xl text-white font-medium" style={{ fontFamily: "'HalenoirCompactText', sans-serif" }}>Additional Merchandise</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {[...Array(4)].map((_, idx) => {
                const srcs = [
                  "https://i.postimg.cc/d1f7QFsJ/Screenshot-2026-04-18-at-18-02-38.png", 
                  "https://i.postimg.cc/d1f7QFsJ/Screenshot-2026-04-18-at-18-02-38.png",
                  "https://i.postimg.cc/d1f7QFsJ/Screenshot-2026-04-18-at-18-02-38.png", 
                  "https://i.postimg.cc/d1f7QFsJ/Screenshot-2026-04-18-at-18-02-38.png", 
                ];
                return (
                  <div key={`other-${idx}`} className="w-full aspect-square overflow-hidden relative group rounded-md shadow-lg border border-white/5">
                    <img src={srcs[idx]} className="absolute inset-0 w-full h-full object-cover filter brightness-[0.6] group-hover:brightness-100 group-hover:scale-105 transition-all duration-700" alt="Other Merch Item" />
                  </div>
                );
              })}
            </div>
          </section>
        </div>
      ) : projectIndex === 0 ? (
        <PresentationSection project={project} />
      ) : projectIndex === 1 ? (
        <section className="relative w-full flex flex-col items-start min-h-[100dvh] pt-32 shrink-0 overflow-hidden snap-start">
          {/* Intro */}
          <div className="w-full px-6 md:px-12 mb-16 md:mb-24 flex flex-col z-20 relative">
            <div className="max-w-2xl">
              <h3 className="text-xl md:text-3xl font-light mb-2 text-white/90">Our work</h3>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white mb-6" style={{ fontFamily: "'HalenoirCompactText', sans-serif" }}>
                {project.title}
              </h2>
              <p className="text-sm md:text-base text-white/60 leading-relaxed font-light">
                A collection of social media campaigns and visual content designed for top-tier brands.
                <br/><br/>
                <span className="flex items-center gap-2 text-xs md:text-sm text-white/40">
                  <span className="px-2 py-0.5 border border-white/20 rounded text-[10px] uppercase font-mono tracking-widest text-[#e4ff40]">AI Tag</span> 
                  indicates artwork generated with the assistance of Artificial Intelligence.
                </span>
              </p>
            </div>
          </div>

          {/* Brand List & Artwork */}
          <div className="w-full flex-grow flex justify-end relative">
            
            {/* Right: Brand List */}
            <div className="w-full md:w-7/12 flex flex-col pb-32 relative z-20">
              {/* Vertical line connecting the list */}
              <div className="absolute left-0 top-0 bottom-0 w-px bg-white/5 hidden md:block" />
              
              {/* Table Headers */}
              <div className="flex items-center justify-between py-6 px-6 md:px-12 border-b border-white/20">
                <span className="text-[12px] tracking-[0.2em] text-[#888888] uppercase" style={{ fontFamily: "'RobotoMono', monospace" }}>Clients</span>
                <span className="text-[12px] tracking-[0.2em] text-[#888888] uppercase" style={{ fontFamily: "'RobotoMono', monospace" }}>Year</span>
              </div>

              {socialBrands.map((brand, idx) => (
                <div 
                  key={idx}
                  onClick={() => setSelectedBrandIndex(idx)}
                  className="group relative w-full flex items-center justify-between py-4 px-6 md:px-12 border-b border-white/5 cursor-pointer transition-colors duration-300 hover:z-50"
                >
                  {/* Highlight Bar spanning to the left */}
                  <div className="absolute top-0 bottom-0 w-[200vw] right-0 bg-[#1a1a1a] opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />

                  {/* Artwork attached to row (Pops up to the left) */}
                  <div className="absolute right-full mr-8 md:mr-24 top-1/2 -translate-y-1/2 w-[200px] md:w-[240px] aspect-square rounded border border-white/5 overflow-hidden opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 pointer-events-none z-30 hidden md:block shadow-2xl">
                    <img src={brand.artUrl} alt={`${brand.name} Artwork`} className="w-full h-full object-cover" />
                  </div>
                  
                  <div className="flex items-center gap-6 relative z-10 w-full justify-between pointer-events-none">
                    <span className="text-lg md:text-xl tracking-wide text-white/50 group-hover:text-[#e4ff40] transition-colors duration-300 flex items-center gap-3" style={{ fontFamily: "'HalenoirExpanded', sans-serif" }}>
                      {brand.name}
                      <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0" />
                    </span>
                    <span className="text-sm md:text-base text-white/40 group-hover:text-[#e4ff40] transition-colors duration-300" style={{ fontFamily: "'HalenoirExpanded', sans-serif" }}>
                      {brand.year}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Expanded Artwork Modal */}
          <AnimatePresence>
            {selectedBrandIndex !== null && (
              <ExpandedModal 
                brandIndex={selectedBrandIndex} 
                onClose={() => setSelectedBrandIndex(null)} 
              />
            )}
          </AnimatePresence>
        </section>
      ) : (
        /* Content Section (Default & Social Media) */
        <section className="px-6 md:px-12 py-32 grid grid-cols-1 md:grid-cols-12 gap-12 min-h-[100dvh] shrink-0 items-center snap-start">
          <div className="md:col-span-4 space-y-12">
            <div>
              <p className="text-[10px] tracking-[0.4em] uppercase text-white/40 mb-4">Year</p>
              <p className="text-xl">{project.year}</p>
            </div>
            <div>
              <p className="text-[10px] tracking-[0.4em] uppercase text-white/40 mb-4">Role</p>
              <p className="text-xl">Lead Designer & Art Director</p>
            </div>
            <div>
              <p className="text-[10px] tracking-[0.4em] uppercase text-white/40 mb-4">Client</p>
              <p className="text-xl">Experimental Lab</p>
            </div>
          </div>

          <div className="md:col-span-8">
            {projectIndex === 1 ? (
              <div className="space-y-16 md:space-y-24">
                <div>
                  <p className="text-lg md:text-xl leading-relaxed tracking-tight text-white/80 font-light mb-6">
                    A curation of high-impact social media campaigns and visual strategies designed for industry-leading brands.
                  </p>
                  <div className="flex items-center gap-3">
                    <span className="px-2 py-1 bg-white text-black text-[10px] font-bold tracking-widest uppercase">AI</span>
                    <p className="text-[12px] md:text-sm text-[#888888] tracking-widest uppercase font-mono">
                      = Images generated using artificial intelligence.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                  {[
                    { name: "Visa", year: "2023-2026" },
                    { name: "Ponnie", year: "2025-2026" },
                    { name: "7UP", year: "2026" },
                    { name: "Lazada", year: "2026" },
                    { name: "Ôliv", year: "2023" },
                    { name: "Samsung", year: "2024" },
                    { name: "Tiger", year: "2026" },
                    { name: "Tiki", year: "2023" },
                    { name: "ACB", year: "2024" },
                    { name: "HDBank", year: "2023" }
                  ].map((brand, idx) => (
                    <div key={idx} className="aspect-square bg-white border border-white/10 text-black p-4 flex flex-col items-center justify-center relative group hover:bg-[#e4ff40] hover:text-black hover:border-[#e4ff40] transition-colors duration-500">
                      <span className="text-xl md:text-2xl font-black tracking-tighter uppercase group-hover:scale-110 transition-transform duration-500">
                        {brand.name}
                      </span>
                      <span className="absolute bottom-3 right-3 text-[10px] font-mono font-bold opacity-30">
                        {brand.year}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <>
                <p className="text-lg md:text-xl leading-relaxed tracking-tight text-white/80 font-light">
                  An exploration into the intersection of light, shadow, and digital emotion. 
                  This project sought to redefine how we perceive cinematic storytelling 
                  within a static digital medium. By leveraging advanced AI-driven 
                  visualization tools, we created a series of immersive environments 
                  that challenge the boundaries of traditional art direction.
                </p>
                
                <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="aspect-[4/5] bg-white/5 overflow-hidden">
                    <img src={project.src} alt="Detail 1" className="w-full h-full object-cover transition-opacity duration-700" />
                  </div>
                  <div className="aspect-[4/5] bg-white/5 overflow-hidden mt-12 md:mt-24">
                    <img src={project.src} alt="Detail 2" className="w-full h-full object-cover transition-opacity duration-700" />
                  </div>
                </div>
              </>
            )}
          </div>
        </section>
      )}

      {/* End Layout */}
      <section className="shrink-0 snap-start w-full flex flex-col pt-32 bg-[#0a0a0a] relative min-h-[100dvh] border-t border-white/5">
        <div className="relative z-10 px-6 md:px-12 flex-1 flex flex-col justify-center items-center text-center pb-24">
          <span className="text-[12px] tracking-[0.6em] uppercase text-[#888888] mb-8 block" style={{ fontFamily: "'RobotoMono', monospace" }}>Next Project</span>
          <div 
            onClick={() => navigate(`/project/${(projectIndex + 1) % projects.length}`)}
            className="group relative cursor-pointer"
          >
            <h2 
              className="text-5xl md:text-9xl font-medium tracking-tighter leading-none transition-opacity hover-hologram"
              style={{ fontFamily: "'HalenoirExpanded', sans-serif" }}
            >
              {projects[(projectIndex + 1) % projects.length].title}
            </h2>
            <ArrowUpRight className="absolute -top-12 -right-12 w-12 h-12 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0" />
          </div>
        </div>

        <div className="">
          <Footer />
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;
