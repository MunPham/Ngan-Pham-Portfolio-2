/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from "react";
import { Menu, X, ArrowUpRight, ArrowDown, Volume2, VolumeX } from "lucide-react";
import { motion, AnimatePresence, useScroll, useTransform, useSpring, useInView } from "motion/react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import ProjectDetail from "./ProjectDetail";
import { FooterFountain } from "./components/FooterFountain";
import { Footer } from "./components/Footer";

import ssEuro2 from '../SOURCE/SAMSUNG/SS TV/SS EURO 2.webp';
import month1 from '../SOURCE/LỊCH VISA 2026/THÁNG 1.webp';

const ProjectBox = ({ src, title, rotation, yOffset, index, onHover }: { src: string, title: string, rotation: number, yOffset: number, index: number, onHover: (hovering: boolean) => void, key?: React.Key }) => {
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  return (
    <motion.div 
      ref={containerRef}
      onHoverStart={() => { setIsHovered(true); onHover(true); }}
      onHoverEnd={() => { setIsHovered(false); onHover(false); }}
      onClick={() => navigate(`/project/${index % 4}`)}
      className="bg-white/5 overflow-hidden relative group shrink-0 w-[55vw] h-[55vw] sm:w-[45vw] sm:h-[45vw] md:w-[15vw] md:h-[15vw] lg:w-[20vw] lg:h-[20vw] cursor-pointer snap-center md:snap-align-none"
      animate={{ 
        rotate: rotation, 
        y: yOffset, 
        scale: isHovered ? 1.15 : 1,
        zIndex: isHovered ? 50 : 1
      }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <motion.div
        animate={{ 
          scale: isHovered ? 1.1 : 1,
          filter: isHovered ? "contrast(1.1) brightness(1.1)" : "contrast(1) brightness(1)",
        }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="w-full h-full relative"
      >
        <motion.img 
          src={src} 
          alt={title} 
          className="w-full h-full object-cover" 
        />
      </motion.div>

      <div className="absolute bottom-0 right-0 p-8 md:p-8 lg:p-12 pointer-events-none z-10 w-full flex flex-col items-end">
        <div className="flex flex-col gap-4 items-end">
          <div className="flex items-center gap-4 flex-row-reverse">
            <motion.div 
              animate={{ width: isHovered ? 64 : 24, backgroundColor: isHovered ? "#fff" : "rgba(255,255,255,0.6)" }}
              className="h-px" 
            />
            <span className="text-[8px] tracking-[0.6em] text-white/60 uppercase">Project {index + 1}</span>
          </div>
          <motion.h3 
            animate={{ 
              y: isHovered ? 0 : 10,
              opacity: isHovered ? 1 : 0.6
            }}
            className="text-xl md:text-3xl lg:text-5xl font-medium text-white tracking-tight leading-none text-right" 
            style={{ fontFamily: "'HalenoirExpanded', sans-serif" }}
          >
            {title}
          </motion.h3>
        </div>
      </div>
    </motion.div>
  );
};

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
      </Routes>
    </Router>
  );
}

function Home() {
  const [activeTab, setActiveTab] = useState("About");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHoveringProject, setIsHoveringProject] = useState(false);
  const [isHoveringHeader, setIsHoveringHeader] = useState(false);
  const [isAudioMuted, setIsAudioMuted] = useState(true);
  const [hasClickedToPlay, setHasClickedToPlay] = useState(false);
  const videoSectionRef = useRef<HTMLElement>(null);
  const isVideoInView = useInView(videoSectionRef, { amount: 0.1 });
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      if (isVideoInView && !isAudioMuted && hasClickedToPlay) {
        audioRef.current.play().catch(() => {
          // Autoplay might be blocked
          setIsAudioMuted(true);
        });
      } else {
        audioRef.current.pause();
      }
    }
  }, [isVideoInView, isAudioMuted, hasClickedToPlay]);
  
  const mainRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ container: mainRef });
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    
    const handleScroll = () => {
      const sections = ["about", "projects", "expertise", "contact"];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            const label = section === "projects" ? "Projects" : section === "expertise" ? "Expertise" : section.charAt(0).toUpperCase() + section.slice(1);
            setActiveTab(label);
          }
        }
      }
    };
    
    const mainEl = mainRef.current;
    if (mainEl) {
      mainEl.addEventListener("scroll", handleScroll);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (mainEl) {
        mainEl.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="relative h-screen w-full bg-[#0a0a0a] text-foreground selection:bg-white/20 overflow-hidden">
      {/* Global Noise Overlay */}
      <div className="fixed inset-0 opacity-[0.04] pointer-events-none z-[9999] mix-blend-overlay" 
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} 
      />

      {/* Progress Bar */}
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-white/20 z-[100] origin-left" style={{ scaleX }} />

      {/* Cursor Text Follower (Separate to avoid mix-blend-difference turning it dark) */}
      <motion.div
        animate={{ 
          x: mousePos.x - 12,
          y: mousePos.y - 12,
        }}
        transition={{ type: "spring", damping: 30, stiffness: 400, mass: 0.2 }}
        className="fixed top-0 left-0 w-6 h-6 pointer-events-none z-[101] flex items-center justify-center"
      >
        {activeTab === "About" && !hasClickedToPlay && !isHoveringHeader && !isMobileMenuOpen && (
          <div className="absolute left-10 top-1/2 -translate-y-1/2 whitespace-nowrap text-[10px] tracking-[0.2em] uppercase text-white font-bold drop-shadow-lg" style={{ textShadow: "0px 2px 10px rgba(0,0,0,0.5)" }}>
            click to turn on music
          </div>
        )}
      </motion.div>

      {/* Navigation Bar */}
      <header 
        className="fixed top-0 left-0 right-0 z-50 bg-black/10 backdrop-blur-md border-b border-white/5"
        onMouseEnter={() => setIsHoveringHeader(true)}
        onMouseLeave={() => setIsHoveringHeader(false)}
      >
        <nav className="relative mx-auto flex max-w-[1800px] items-center justify-between px-6 py-6 md:px-8 lg:px-12">
          <div 
            className="text-2xl tracking-tight text-foreground z-50 cursor-pointer hover-hologram"
            style={{ fontFamily: "'HalenoirExpanded', sans-serif" }}
            onClick={() => scrollToSection("about")}
          >
            Ngan Pham<sup className="text-[12px]">®</sup>
          </div>

          <div className="hidden items-center gap-6 lg:gap-12 md:flex">
            {["About", "Projects", "Expertise", "Contact"].map((tab) => (
              <div key={tab}>
                <button 
                  onClick={() => scrollToSection(tab.toLowerCase())}
                  className={`text-[12px] uppercase tracking-[0.4em] transition-all cursor-pointer relative py-2 hover-hologram ${activeTab === tab ? "text-foreground font-bold" : "text-[#888888] hover:text-[#e4ff40]"}`}
                  style={{ fontFamily: "'RobotoMono', monospace" }}
                >
                  {tab}
                  {activeTab === tab && (
                    <motion.div layoutId="navUnderline" className="absolute bottom-0 left-0 right-0 h-px bg-white" />
                  )}
                </button>
              </div>
            ))}
          </div>

          <button 
            className="md:hidden z-50 text-foreground p-2 -mr-2 cursor-pointer"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-black backdrop-blur-xl flex flex-col items-center justify-center gap-12"
          >
            {["About", "Projects", "Expertise", "Contact"].map((tab) => (
              <button 
                key={tab}
                onClick={() => scrollToSection(tab.toLowerCase())}
                className="text-4xl tracking-tighter text-white font-medium hover-hologram"
                style={{ fontFamily: "'HalenoirExpanded', sans-serif" }}
              >
                {tab}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <main ref={mainRef} className="h-screen w-full overflow-y-auto overflow-x-hidden snap-y snap-mandatory md:snap-none lg:snap-y lg:snap-mandatory">
        {/* Section: About (Hero) */}
        <section 
          id="about" 
          ref={videoSectionRef} 
          className="snap-start snap-always relative h-screen w-full flex items-center justify-center overflow-hidden cursor-pointer"
          onClick={() => {
            if (!hasClickedToPlay) {
              setHasClickedToPlay(true);
              setIsAudioMuted(false);
            }
          }}
        >
          <motion.video
            autoPlay loop muted playsInline
            style={{ 
              scale: useTransform(scrollYProgress, [0, 0.2], [1, 1.2])
            }}
            className="absolute inset-0 h-full w-full object-cover"
          >
            <source src="/RIMOWA Holiday _ A gift that inspires - (1080p).mp4" type="video/mp4" />
          </motion.video>
          
          <audio ref={audioRef} src="/Music/Main Theme.mp3" loop />

          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsAudioMuted(!isAudioMuted);
              if (!hasClickedToPlay) setHasClickedToPlay(true);
            }}
            className="absolute bottom-8 right-8 z-20 p-4 bg-black/20 backdrop-blur-md border border-white/10 rounded-full text-white hover:bg-[#e4ff40] hover:text-black hover:border-[#e4ff40] transition-all duration-300"
          >
            {isAudioMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
          </button>
          
          <div className="relative z-10 text-center px-6 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: "circOut" }}
            >
              <div className="mt-32 flex flex-col items-center gap-6">
                <div className="h-32 w-px bg-gradient-to-b from-white/60 to-transparent" />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Section: Works (Horizontal Scroll) */}
        <section id="projects" className="snap-start snap-always w-full flex flex-col items-center justify-center bg-[#0a0a0a] min-h-[100dvh] md:min-h-0 lg:min-h-[100dvh] md:h-auto lg:h-screen relative overflow-hidden pt-24 md:pt-32 lg:pt-16 pb-12 md:pb-24 lg:pb-16">
          <div className="w-full max-w-[1800px] flex flex-col gap-6 md:gap-[40px] lg:gap-[80px]">
            <div className="px-6 md:px-8 lg:px-12 flex flex-col md:flex-row md:items-end justify-between gap-6 w-full relative z-30">
              <div className="max-w-2xl">
                <span className="text-[12px] tracking-[0.6em] uppercase text-[#888888] mb-4 block" style={{ fontFamily: "'RobotoMono', monospace" }}>02 / Projects</span>
                <h2 className="text-6xl md:text-6xl lg:text-8xl font-medium tracking-tighter text-white leading-none" style={{ fontFamily: "'HalenoirExpanded', sans-serif" }}>
                  Design Lab
                </h2>
              </div>
              <div className="flex flex-row items-center justify-end w-full md:w-auto gap-6 lg:gap-8 mt-4 md:mt-0">
                <p className="text-white/40 text-[14px] md:text-[15px] lg:text-[18px] max-w-[200px] md:max-w-[250px] lg:max-w-xs leading-relaxed tracking-wide text-right" style={{ fontFamily: "'HalenoirCompactText', sans-serif" }}>
                  Things I Built.<br/>
                  Fueled by coffee.<br/>
                  Driven by passion.
                </p>
                <a 
                  href="https://www.behance.net/mun1210" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="relative w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 flex items-center justify-center group shrink-0"
                >
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0"
                  >
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                      <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="none" />
                      <text className="text-[7.5px] uppercase tracking-[0.15em] fill-white group-hover:fill-[#e4ff40] transition-all duration-300">
                        <textPath xlinkHref="#circlePath" startOffset="50%" textAnchor="middle">
                          <tspan className="tracking-[0em]">───────────────────────────</tspan>
                          <tspan>{"   "}Discover other projects on </tspan>
                          <tspan className="font-bold">Behance</tspan>
                          <tspan>{"   "}</tspan>
                          <tspan className="tracking-[0em]">───────────────────────────</tspan>
                        </textPath>
                      </text>
                    </svg>
                  </motion.div>
                  <div className="w-10 h-10 md:w-10 lg:w-12 md:h-10 lg:h-12 bg-white rounded-full flex items-center justify-center group-hover:scale-[1.25] lg:group-hover:scale-[1.5] group-hover:hologram-bg transition-all duration-500">
                    <span className="text-black font-bold text-xs">Bē</span>
                  </div>
                </a>
              </div>
            </div>

            <div className="flex w-full md:justify-center items-center relative lg:overflow-visible z-20">
              <div className="flex overflow-x-auto md:overflow-visible w-full snap-x snap-mandatory gap-6 md:gap-0 pl-6 md:pl-0 pr-[40vw] md:pr-0 md:-space-x-8 lg:-space-x-12 items-center md:justify-center no-scrollbar py-[20vh] md:py-0 -my-[15vh] md:-my-0">
                {[
                  { src: "https://i.postimg.cc/d1f7QFsJ/Screenshot-2026-04-18-at-18-02-38.png", title: "Presentation Design", rotation: 15, yOffset: 15 },
                  { src: ssEuro2, title: "Social Media Design", rotation: -8, yOffset: -25 },
                  { src: month1, title: "Merchandise", rotation: 6, yOffset: 45 },
                  { src: "https://i.postimg.cc/d1f7QFsJ/Screenshot-2026-04-18-at-18-02-38.png", title: "Key Visuals", rotation: -12, yOffset: 5 }
                ].map((p, i) => (
                  <ProjectBox key={i} index={i} src={p.src} title={p.title} rotation={p.rotation} yOffset={p.yOffset} onHover={setIsHoveringProject} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section: Services (Technical Treatment) */}
        <section id="expertise" className="snap-start snap-always min-h-[100dvh] md:min-h-0 lg:min-h-[100dvh] md:h-auto lg:h-screen w-full flex flex-col justify-center bg-[#0a0a0a] border-t border-white/5 relative overflow-hidden py-32 md:py-24 lg:py-0">
          <div className="px-6 md:px-8 lg:px-12 mb-12 md:mt-16 lg:mt-20">
            <span className="text-[12px] tracking-[0.6em] uppercase text-[#888888] mb-4 block" style={{ fontFamily: "'RobotoMono', monospace" }}>03 / Expertise</span>
            <h2 className="text-6xl md:text-6xl lg:text-8xl font-medium tracking-tighter text-white leading-none" style={{ fontFamily: "'HalenoirExpanded', sans-serif" }}>
              Creative & Design
            </h2>
          </div>

          <div className="px-6 md:px-8 lg:px-12 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-12">
            {[
              { title: "Art Direction", desc: "I develop and execute Art Direction for social/digital content, creating distinct visual styles that resonate with target audiences and effectively convey brand messages." },
              { title: "AI-Driven", desc: "Proficiently leveraging AI tools (Midjourney, Gemini, Sora) to innovate concepts, visualize ideas, and optimize design workflows for rapid, novel aesthetics." },
              { title: "Project Management", desc: "Skilled in efficient timeline, resource, and workflow management. I thrive in collaborative team settings, fostering clear communication to achieve shared creative goals efficiently." }
            ].map((service, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-8 border border-white/5 hover:border-white/20 transition-colors relative overflow-hidden flex flex-col"
              >
                <h3 className="text-[20px] md:text-[20px] lg:text-[25px] font-bold text-white mb-4 tracking-tight uppercase" style={{ fontFamily: "'HalenoirExpanded', sans-serif" }}>{service.title}</h3>
                <p className="text-white/40 text-[16px] md:text-[15px] lg:text-[19px] leading-relaxed text-pretty text-left" style={{ fontFamily: "'HalenoirCompactText', sans-serif" }}>{service.desc}</p>
                <div className="mt-8 h-px w-0 group-hover:w-full bg-white/40 transition-all duration-700" />
              </motion.div>
            ))}
          </div>
        </section>

        {/* Section: Contact */}
        <section id="contact" className="snap-start snap-always w-full flex flex-col pt-32 md:pt-24 lg:pt-32 bg-[#0a0a0a] relative min-h-screen md:min-h-0 lg:min-h-screen">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
          
          <div className="relative z-10 px-6 md:px-8 lg:px-12 flex-1 flex flex-col justify-center pb-24">
            <span className="text-[12px] tracking-[0.6em] uppercase text-[#888888] mb-8 block" style={{ fontFamily: "'RobotoMono', monospace" }}>04 / Contact</span>
            <h2 className="text-6xl md:text-6xl lg:text-8xl font-medium tracking-tighter text-white leading-[0.85]" style={{ fontFamily: "'HalenoirExpanded', sans-serif" }}>
              Create Without<br/>Boundaries.
            </h2>
          </div>

          <div className="snap-end snap-always">
            <Footer />
          </div>
        </section>
      </main>
    </div>
  );
}



