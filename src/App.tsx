import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Music, BookOpen, Video, Play, MessageCircle } from 'lucide-react';

// ═══════════════════════════════════════════════════════
// VALKYRJA REIS — EXPERIÊNCIA DIGITAL CINEMATOGRÁFICA
// Linktree Premium | Guitarra & Violão
// ═══════════════════════════════════════════════════════

function App() {
  const [loaded, setLoaded] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div ref={containerRef} className="relative min-h-screen w-full overflow-hidden bg-void">
      {/* Noise overlay for cinematic texture */}
      <div className="noise-overlay" />

      {/* Video Background */}
      <VideoBackground videoLoaded={videoLoaded} setVideoLoaded={setVideoLoaded} mousePosition={mousePosition} />

      {/* Cinematic Overlays */}
      <div className="video-overlay fixed inset-0 z-10" />
      
      {/* Animated gradient orbs */}
      <GradientOrbs mousePosition={mousePosition} />

      {/* Main Content */}
      <main className="relative z-20 flex min-h-screen flex-col items-center justify-center px-4 py-12 sm:px-6">
        <AnimatePresence>
          {loaded && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="flex w-full max-w-md flex-col items-center"
            >
              {/* Top decorative element */}
              <TopDecoration />

              {/* Artist Name */}
              <ArtistName />

              {/* Subtitle */}
              <ArtistSubtitle />

              {/* Divider */}
              <CinematicDivider />

              {/* Link Tree Buttons */}
              <LinkTreeButtons />

              {/* Bottom text */}
              <BottomText />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* WhatsApp Floating Button */}
      <WhatsAppButton />

      {/* Scan lines effect */}
      <ScanLines />
    </div>
  );
}

// ═══════════════════════════════════════════════════════
// VIDEO BACKGROUND
// ═══════════════════════════════════════════════════════

function VideoBackground({ videoLoaded, setVideoLoaded, mousePosition }: { 
  videoLoaded: boolean; 
  setVideoLoaded: (v: boolean) => void; 
  mousePosition: { x: number; y: number };
}) {
  return (
    <div className="fixed inset-0 z-0">
      <motion.video
        autoPlay
        muted
        loop
        playsInline
        onLoadedData={() => setVideoLoaded(true)}
        animate={{
          x: mousePosition.x * 0.3,
          y: mousePosition.y * 0.3,
          scale: videoLoaded ? 1.05 : 1.1,
        }}
        transition={{ type: 'tween', duration: 2, ease: 'easeOut' }}
        className="h-full w-full object-cover"
        style={{ filter: 'saturate(0.8) contrast(1.1) brightness(0.7)' }}
      >
        <source src="/video01.mp4" type="video/mp4" />
      </motion.video>

      {/* Fallback gradient if video doesn't load */}
      <div className="absolute inset-0 bg-gradient-to-br from-void via-[#0d1025] to-[#1a0a2e]" />
      
      {/* Animated background mesh */}
      <div className="absolute inset-0 opacity-50">
        <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-violet/20 blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 h-80 w-80 rounded-full bg-cyan/10 blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-magenta/10 blur-[80px] animate-pulse" style={{ animationDelay: '2s' }} />
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════
// GRADIENT ORBS
// ═══════════════════════════════════════════════════════

function GradientOrbs({ mousePosition }: { mousePosition: { x: number; y: number } }) {
  return (
    <div className="fixed inset-0 z-[5] pointer-events-none">
      <motion.div
        animate={{ x: mousePosition.x * 2, y: mousePosition.y * 2 }}
        transition={{ type: 'tween', duration: 3, ease: 'easeOut' }}
        className="absolute top-20 right-20 h-72 w-72 rounded-full bg-cyan/5 blur-[60px]"
      />
      <motion.div
        animate={{ x: mousePosition.x * -1.5, y: mousePosition.y * -1.5 }}
        transition={{ type: 'tween', duration: 4, ease: 'easeOut' }}
        className="absolute bottom-32 left-16 h-56 w-56 rounded-full bg-magenta/5 blur-[50px]"
      />
    </div>
  );
}

// ═══════════════════════════════════════════════════════
// TOP DECORATION
// ═══════════════════════════════════════════════════════

function TopDecoration() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.5, duration: 0.8 }}
      className="mb-6 flex items-center gap-3"
    >
      <div className="h-px w-8 bg-gradient-to-r from-transparent to-cyan/60" />
      <div className="flex items-center gap-2">
        <div className="h-1.5 w-1.5 rounded-full bg-cyan animate-pulse" />
        <span className="font-body text-[10px] uppercase tracking-[0.3em] text-cyan/80">
          Guitarra & Violão
        </span>
        <div className="h-1.5 w-1.5 rounded-full bg-cyan animate-pulse" style={{ animationDelay: '0.5s' }} />
      </div>
      <div className="h-px w-8 bg-gradient-to-l from-transparent to-cyan/60" />
    </motion.div>
  );
}

// ═══════════════════════════════════════════════════════
// ARTIST NAME
// ═══════════════════════════════════════════════════════

function ArtistName() {
  return (
    <div className="relative mb-4 text-center">
      {/* Glitch layers */}
      <motion.h1
        initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        transition={{ delay: 0.7, duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="font-display text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl"
        style={{
          background: 'linear-gradient(135deg, #ffffff 0%, #00F0FF 50%, #7000FF 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}
      >
        VALKYRJA
      </motion.h1>
      <motion.h1
        initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        transition={{ delay: 0.9, duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="font-display text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl"
        style={{
          background: 'linear-gradient(135deg, #FF007F 0%, #FFEE00 50%, #00F0FF 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}
      >
        REIS
      </motion.h1>

      {/* Glow behind name */}
      <div className="absolute inset-0 -z-10 blur-2xl opacity-30">
        <div className="h-full w-full bg-gradient-to-r from-cyan via-violet to-magenta rounded-full scale-150" />
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════
// ARTIST SUBTITLE
// ═══════════════════════════════════════════════════════

function ArtistSubtitle() {
  return (
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2, duration: 0.8 }}
      className="mb-8 text-center font-body text-sm font-light tracking-wide text-white/60 sm:text-base"
    >
      Transforme sua musicalidade.
      <br />
      <span className="text-white/40">Aulas online de guitarra e violão.</span>
    </motion.p>
  );
}

// ═══════════════════════════════════════════════════════
// CINEMATIC DIVIDER
// ═══════════════════════════════════════════════════════

function CinematicDivider() {
  return (
    <motion.div
      initial={{ scaleX: 0, opacity: 0 }}
      animate={{ scaleX: 1, opacity: 1 }}
      transition={{ delay: 1.4, duration: 0.8 }}
      className="mb-10 flex w-full max-w-xs items-center justify-center gap-2"
    >
      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-cyan/40 to-transparent" />
      <div className="h-2 w-2 rotate-45 border border-cyan/40" />
      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-magenta/40 to-transparent" />
    </motion.div>
  );
}

// ═══════════════════════════════════════════════════════
// LINK TREE BUTTONS
// ═══════════════════════════════════════════════════════

interface LinkButtonProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  href: string;
  delay: number;
  accentColor: string;
  borderColor: string;
  glowColor: string;
  isExternal?: boolean;
}

function LinkButton({ icon, title, subtitle, href, delay, accentColor, borderColor, glowColor, isExternal = false }: LinkButtonProps) {
  return (
    <motion.a
      href={href}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      initial={{ opacity: 0, x: -30, filter: 'blur(5px)' }}
      animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
      transition={{ delay, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
      whileHover={{ scale: 1.02, x: 4 }}
      whileTap={{ scale: 0.98 }}
      className="btn-glow-cyan group relative mb-3 flex w-full items-center gap-4 rounded-lg border px-5 py-4 backdrop-blur-md transition-all duration-300"
      style={{
        borderColor: borderColor,
        background: 'rgba(8, 10, 20, 0.6)',
      }}
    >
      {/* Hover glow */}
      <div
        className="absolute inset-0 rounded-lg opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `linear-gradient(135deg, ${glowColor}10, transparent)`,
          boxShadow: `0 0 30px ${glowColor}15, inset 0 0 30px ${glowColor}05`,
        }}
      />

      {/* Icon container */}
      <div
        className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-lg transition-all duration-300 group-hover:scale-110"
        style={{
          background: `linear-gradient(135deg, ${accentColor}20, ${accentColor}05)`,
          border: `1px solid ${accentColor}30`,
        }}
      >
        <div style={{ color: accentColor }}>{icon}</div>
      </div>

      {/* Text */}
      <div className="relative flex-1 text-left">
        <span className="block font-display text-sm font-semibold tracking-wide text-white/90 transition-colors group-hover:text-white">
          {title}
        </span>
        <span className="block font-body text-xs text-white/40 transition-colors group-hover:text-white/60">
          {subtitle}
        </span>
      </div>

      {/* Arrow */}
      <div className="relative opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M6 4L10 8L6 12" stroke={accentColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      {/* Animated border on hover */}
      <div
        className="absolute inset-0 rounded-lg opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: `linear-gradient(90deg, transparent, ${accentColor}20, transparent)`,
          backgroundSize: '200% 100%',
          animation: 'shimmer 2s linear infinite',
        }}
      />
    </motion.a>
  );
}

function LinkTreeButtons() {
  const buttons: LinkButtonProps[] = [
    {
      icon: <BookOpen size={18} />,
      title: 'Aulas ao Vivo',
      subtitle: 'Agende sua aula online',
      href: '#aulas',
      delay: 1.6,
      accentColor: '#00F0FF',
      borderColor: 'rgba(0, 240, 255, 0.15)',
      glowColor: '#00F0FF',
    },
    {
      icon: <Music size={18} />,
      title: 'Curso Improviso na Pentatônica',
      subtitle: 'Domine o improviso',
      href: '#curso',
      delay: 1.8,
      accentColor: '#FF007F',
      borderColor: 'rgba(255, 0, 127, 0.15)',
      glowColor: '#FF007F',
    },
    {
      icon: <Video size={18} />,
      title: 'TikTok',
      subtitle: 'Conteúdo diário',
      href: 'https://tiktok.com/@valkyrjareis',
      delay: 2.0,
      accentColor: '#7000FF',
      borderColor: 'rgba(112, 0, 255, 0.15)',
      glowColor: '#7000FF',
      isExternal: true,
    },
    {
      icon: <Play size={18} />,
      title: 'YouTube',
      subtitle: 'Vídeos e tutoriais',
      href: '#youtube',
      delay: 2.2,
      accentColor: '#FFEE00',
      borderColor: 'rgba(255, 238, 0, 0.15)',
      glowColor: '#FFEE00',
      isExternal: true,
    },
  ];

  return (
    <div className="w-full max-w-md">
      {buttons.map((btn, i) => (
        <LinkButton key={i} {...btn} />
      ))}
    </div>
  );
}

// ═══════════════════════════════════════════════════════
// BOTTOM TEXT
// ═══════════════════════════════════════════════════════

function BottomText() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2.5, duration: 1 }}
      className="mt-8 text-center"
    >
      <p className="font-body text-[11px] uppercase tracking-[0.2em] text-white/25">
        © {new Date().getFullYear()} Valkyrja Reis
      </p>
    </motion.div>
  );
}

// ═══════════════════════════════════════════════════════
// WHATSAPP FLOATING BUTTON
// ═══════════════════════════════════════════════════════

function WhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.a
      href="https://wa.me/5534996508397?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20as%20aulas%20de%20guitarra."
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 2.8, duration: 0.6, type: 'spring', stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center"
      aria-label="Contato via WhatsApp"
    >
      {/* Pulse rings */}
      <div className="absolute inset-0 rounded-full bg-[#25D366]/30" style={{ animation: 'pulse-ring 2s ease-out infinite' }} />
      <div className="absolute inset-0 rounded-full bg-[#25D366]/20" style={{ animation: 'pulse-ring 2s ease-out infinite 0.5s' }} />

      {/* Main button */}
      <div
        className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg transition-all duration-300 sm:h-16 sm:w-16"
        style={{
          animation: 'pulse-glow 3s ease-in-out infinite',
        }}
      >
        <MessageCircle size={26} className="text-white" fill="white" />

        {/* Tooltip */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, x: -10, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -10, scale: 0.9 }}
              className="absolute right-full mr-3 whitespace-nowrap rounded-lg bg-white px-3 py-2 text-xs font-medium text-gray-800 shadow-xl"
            >
              Agende sua aula!
              <div className="absolute right-[-4px] top-1/2 h-2 w-2 -translate-y-1/2 rotate-45 bg-white" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.a>
  );
}

// ═══════════════════════════════════════════════════════
// SCAN LINES EFFECT
// ═══════════════════════════════════════════════════════

function ScanLines() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-[90] opacity-[0.02]"
      style={{
        backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 1px, rgba(255,255,255,0.03) 1px, rgba(255,255,255,0.03) 2px)',
        backgroundSize: '100% 2px',
      }}
    />
  );
}

export default App;
