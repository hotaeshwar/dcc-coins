import React, { useState, useEffect, useRef } from 'react';
import {
  Crown,
  Sparkles,
  Award,
  Star,
  Users,
  Camera,
  Music,
  Tv,
  MapPin,
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  Volume2,
  VolumeX,
  CheckCircle2,
  Phone,
  Mail,
  Heart,
  Calendar,
  Layers,
  Flame,
  Radio,
  FileText,
  Gift,
  Trophy,
  ArrowRight,
  ShieldCheck,
  Check,
  X,
  Home,
  Target,
  BarChart3,
  CheckCircle,
  Building2,
  Coins
} from 'lucide-react';
import RegistrationModal from './RegistrationModal';
import beStarLogo from '../assets/images/BeStar.png';

const StarOfIndiaPageant = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [deliverableSubSlide, setDeliverableSubSlide] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isMuted, setIsMuted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true); // Auto-play enabled by default
  const [childAutoPlaying, setChildAutoPlaying] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isChildAnimationComplete, setIsChildAnimationComplete] = useState(true);
  const [showRegModal, setShowRegModal] = useState(false);
  const [showSponsorModal, setShowSponsorModal] = useState(false);
  const [selectedSponsorTier, setSelectedSponsorTier] = useState('Presenting Sponsor');

  const audioRef = useRef(null);
  const autoPlayTimerRef = useRef(null);
  const deliverableTimerRef = useRef(null);

  // Responsive check
  useEffect(() => {
    const checkResponsive = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768);
      setIsTablet(width >= 768 && width < 1024);
    };

    checkResponsive();
    window.addEventListener('resize', checkResponsive);
    return () => window.removeEventListener('resize', checkResponsive);
  }, []);

  const slides = [
    { id: 0, name: 'Intro', icon: Home },
    { id: 1, name: 'Vision', icon: Sparkles },
    { id: 2, name: 'Categories', icon: Heart },
    { id: 3, name: 'Judges', icon: Star },
    { id: 4, name: 'Overview', icon: BarChart3 },
    { id: 5, name: 'Auditions', icon: MapPin },
    { id: 6, name: 'Deliverables', icon: Target, hasChildNav: true, childCount: 5 },
    { id: 7, name: 'Partner', icon: ShieldCheck },
    { id: 8, name: 'Sponsorship', icon: Trophy },
    { id: 9, name: 'Contact', icon: CheckCircle }
  ];

  const deliverables = [
    {
      tabId: 'semi',
      title: '🌟 SEMI-FINALE DELIVERABLES',
      badge: 'Step 1: Grooming & Catwalk',
      color: 'bg-amber-50/90',
      borderColor: 'border-amber-300',
      autoPlayTime: 5000,
      items: [
        { title: 'Professional Grooming Classes', desc: 'Confidence, personality, posture & stage etiquette training.' },
        { title: 'Makeup Masterclass', desc: 'Editorial & stage makeup techniques by celebrity makeup artists.' },
        { title: 'Ramp Walk & Catwalk Training', desc: 'Signature ramp walks, posture correction & runway choreography.' },
        { title: 'Professional Photoshoot', desc: 'High-res portfolio photoshoot by top fashion photographers.' },
        { title: 'Pageant Choreography', desc: 'Synchronized group routines & solo ramp coordination.' },
        { title: 'Contestant Certificate', desc: 'Official signed contestant certificate from Be Star Entertainment.' }
      ]
    },
    {
      tabId: 'finale',
      title: '👑 GRAND FINALE DELIVERABLES',
      badge: 'Step 2: The Big Stage',
      color: 'bg-purple-50/90',
      borderColor: 'border-purple-300',
      autoPlayTime: 5000,
      items: [
        { title: 'Professional Makeup & Hair', desc: 'Dedicated celebrity vanity team for grand finale looks.' },
        { title: 'Finale Dresses & Couture', desc: 'Custom designer gowns and couture ensembles for the ramp.' },
        { title: 'Grand Finale Ramp Walk', desc: 'Marquee spotlight walk before Bollywood jury & VIP audience.' },
        { title: 'Professional Photography & Videography', desc: 'Full broadcast quality 4K video clips & portfolio media kit.' },
        { title: 'Finale Sash', desc: 'Custom luxury satin sash with golden embroidery.' },
        { title: 'Finalist Certificate', desc: 'Prestigious finalist certification for professional modelling.' },
        { title: 'Grand Trophy', desc: 'Custom recognition trophy for all qualified finalists.' }
      ]
    },
    {
      tabId: 'media',
      title: '📸 MEDIA & FASHION EXPOSURE',
      badge: 'Step 3: Stardom & PR',
      color: 'bg-cyan-50/90',
      borderColor: 'border-cyan-300',
      autoPlayTime: 5000,
      items: [
        { title: 'Magazine Feature / Photoshoot', desc: 'Editorial double-spread feature in national lifestyle magazines.' },
        { title: 'Media & PR Coverage', desc: 'Press releases in leading English & Hindi national newspapers.' },
        { title: 'Social Media Promotion', desc: 'Viral reels, interviews, and brand tag campaigns to 500K+ reach.' },
        { title: 'Modelling & Advertisement Opportunities', desc: 'Direct casting calls for leading jewellery & apparel brands.' },
        { title: 'Music Video / Album Opportunities', desc: 'Casting consideration for upcoming mainstream music videos.' }
      ]
    },
    {
      tabId: 'winner',
      title: '👑 WINNER GRAND PRIZES',
      badge: 'Step 4: The Ultimate Crown',
      color: 'bg-amber-100',
      borderColor: 'border-amber-400',
      autoPlayTime: 6000,
      items: [
        { title: 'Winner Diamond Crown 👑', desc: 'Bespoke hand-crafted diamond-studded winner crown.' },
        { title: 'Winner Sash', desc: 'Gold embroidered "MISS / MRS / CURVY STAR OF INDIA" crown sash.' },
        { title: 'Winner Trophy', desc: 'Signature gold trophy presented by celebrity Bollywood jury.' },
        { title: 'Grand Cash Prize', desc: 'Exclusive cash award for category winners.' },
        { title: 'Winner Certificate', desc: 'Official prestigious title certificate with international recognition.' },
        { title: 'Magazine Feature & Cover', desc: 'Solo front cover and editorial story in national fashion magazine.' },
        { title: 'Winner Photoshoot', desc: 'Celebrity-grade portfolio shoot styled by top stylists.' },
        { title: 'Lead Opportunity in Music Video / Album', desc: 'Featured lead appearance in official record label music video.' }
      ]
    },
    {
      tabId: 'runner',
      title: '🥇 RUNNER-UP DELIVERABLES',
      badge: 'Step 5: Distinction & Awards',
      color: 'bg-rose-50/90',
      borderColor: 'border-rose-300',
      autoPlayTime: 5000,
      items: [
        { title: 'Crown / Sash', desc: 'Hand-crafted runner-up crown and distinction sash.' },
        { title: 'Runner-Up Trophy', desc: 'Custom silver & crystal recognition trophy.' },
        { title: 'Distinction Certificate', desc: 'Certified runner-up credential for agency submissions.' },
        { title: 'Cash Prize', desc: 'Monetary reward for top runner-ups.' },
        { title: 'Magazine / Photoshoot Feature', desc: 'High-fashion editorial feature and professional photoshoot.' },
        { title: 'Advertisement / Modelling Opportunities', desc: 'Priority recommendation for brand ambassador shoots.' }
      ]
    }
  ];

  // Next & Prev Slide Logic
  const nextSlide = () => {
    setCurrentSlide((prev) => {
      const next = (prev + 1) % slides.length;
      if (next === 6) {
        setDeliverableSubSlide(0);
      }
      setIsChildAnimationComplete(true);
      return next;
    });
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => {
      const prevNum = (prev - 1 + slides.length) % slides.length;
      if (prevNum === 6) {
        setDeliverableSubSlide(0);
      }
      setIsChildAnimationComplete(true);
      return prevNum;
    });
  };

  const goToSlide = (slideIndex) => {
    setCurrentSlide(slideIndex);
    if (slideIndex === 6) {
      setDeliverableSubSlide(0);
    }
    setIsChildAnimationComplete(true);
  };

  const nextDeliverableSub = () => {
    setDeliverableSubSlide((prev) => {
      const next = (prev + 1) % deliverables.length;
      if (next === 0) {
        setIsChildAnimationComplete(true);
      }
      return next;
    });
  };

  const prevDeliverableSub = () => {
    setDeliverableSubSlide((prev) => (prev - 1 + deliverables.length) % deliverables.length);
  };

  // Audio control
  const toggleMute = () => {
    const newMutedState = !isMuted;
    setIsMuted(newMutedState);

    if (audioRef.current) {
      if (newMutedState) {
        audioRef.current.pause();
      } else {
        const playPromise = audioRef.current.play();
        if (playPromise !== undefined) {
          playPromise.catch((err) => {
            console.log('Audio play failed:', err);
            setIsMuted(true);
          });
        }
      }
    }
  };

  const toggleAutoPlay = () => {
    const newPlayingState = !isPlaying;
    setIsPlaying(newPlayingState);
    if (!newPlayingState) {
      setChildAutoPlaying(false);
      setIsChildAnimationComplete(true);
    }
  };

  const toggleChildAutoPlay = () => {
    const newChildState = !childAutoPlaying;
    setChildAutoPlaying(newChildState);
    if (newChildState) {
      setIsChildAnimationComplete(false);
    }
  };

  // Main slide auto-play timer (12 seconds)
  useEffect(() => {
    if (isPlaying) {
      autoPlayTimerRef.current = setInterval(() => {
        const currentSlideData = slides[currentSlide];
        if (currentSlideData.hasChildNav) {
          if (childAutoPlaying) {
            if (isChildAnimationComplete) {
              nextSlide();
            }
          } else {
            nextSlide();
          }
        } else {
          nextSlide();
        }
      }, 12000);
    } else if (autoPlayTimerRef.current) {
      clearInterval(autoPlayTimerRef.current);
    }

    return () => {
      if (autoPlayTimerRef.current) {
        clearInterval(autoPlayTimerRef.current);
      }
    };
  }, [isPlaying, currentSlide, childAutoPlaying, isChildAnimationComplete]);

  // Child sub-slide auto-play for Deliverables
  useEffect(() => {
    const currentSlideData = slides[currentSlide];
    if (currentSlideData.hasChildNav && isPlaying) {
      setIsChildAnimationComplete(false);
      const timeout = setTimeout(() => {
        setChildAutoPlaying(true);
      }, 1000);
      return () => clearTimeout(timeout);
    } else {
      setChildAutoPlaying(false);
    }
  }, [currentSlide, isPlaying]);

  useEffect(() => {
    if (childAutoPlaying && currentSlide === 6) {
      if (deliverableTimerRef.current) {
        clearTimeout(deliverableTimerRef.current);
      }
      const currentDeliverable = deliverables[deliverableSubSlide];
      deliverableTimerRef.current = setTimeout(() => {
        nextDeliverableSub();
      }, currentDeliverable.autoPlayTime);

      return () => {
        if (deliverableTimerRef.current) {
          clearTimeout(deliverableTimerRef.current);
        }
      };
    }
  }, [childAutoPlaying, currentSlide, deliverableSubSlide]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        prevSlide();
      } else if (e.key === 'Home') {
        goToSlide(0);
      } else if (e.key === 'End') {
        goToSlide(slides.length - 1);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen bg-[#f8f7f2] text-slate-900 overflow-hidden relative font-sans select-none">
      {/* Pageant Grand Runway Video Background with Haute Couture Luxury Tint */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {/* Autoplaying Plus Size Queen Fashion Runway Video */}
        <video
          src="/videos/pageant-runway-bg.mp4"
          poster="/images/pageant-bg.jpg"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover object-center filter brightness-[0.96] contrast-[1.03]"
        />

        {/* Sophisticated Luxury Champagne & Ivory Tint Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#fbf9f5]/85 via-[#fcfaf5]/75 to-[#f7f4ea]/88 backdrop-blur-[1px]" />

        {/* Warm Golden & Rose Light Diffusion Orbs for Depth */}
        <div className="absolute top-10 left-10 w-96 h-96 bg-amber-300/30 rounded-full mix-blend-color-dodge filter blur-[130px] opacity-70"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-rose-200/25 rounded-full mix-blend-color-dodge filter blur-[130px] opacity-60"></div>
        <div className="absolute bottom-20 left-1/3 w-96 h-96 bg-yellow-200/30 rounded-full mix-blend-color-dodge filter blur-[130px] opacity-60"></div>
        <div className="absolute inset-0 bg-[radial-gradient(#d97706_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.035]" />
      </div>



      {/* TOP FLOATING LUXURY BRAND HEADER BAR (Out of the box positioning) */}
      <header className="fixed top-0 inset-x-0 z-40 px-2.5 sm:px-6 lg:px-8 pt-2.5 sm:pt-4 pointer-events-none">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2 sm:gap-3">
          
          {/* Out-of-the-Box Luxury Floating Presenter Insignia Badge */}
          <div 
            onClick={() => goToSlide(0)}
            className="pointer-events-auto flex items-center gap-1.5 sm:gap-3 px-2.5 sm:px-4 py-1 sm:py-2 rounded-full bg-white/95 backdrop-blur-md border border-amber-300/90 shadow-[0_8px_30px_rgba(217,119,6,0.18)] luxury-brand-badge cursor-pointer group"
            title="Be Star Entertainment - Official Pageant Presenter"
          >
            {/* Logo Emblem with Luxury Shield */}
            <div className="relative flex items-center justify-center bg-gradient-to-br from-amber-50 to-white rounded-lg px-1 sm:px-1.5 py-0.5 border border-amber-200 shadow-inner group-hover:scale-105 transition-transform">
              <img
                src={beStarLogo}
                alt="Be Star Entertainment"
                className="h-4 sm:h-6 md:h-7 w-auto max-w-[70px] sm:max-w-[120px] object-contain"
              />
            </div>

            <div className="h-3.5 sm:h-5 w-px bg-gradient-to-b from-transparent via-amber-400 to-transparent" />

            <div className="flex flex-col text-left">
              <span className="text-[8px] sm:text-[10px] font-black uppercase tracking-wider text-slate-950 font-serif-luxury group-hover:text-amber-800 transition-colors">
                Be Star Entertainment
              </span>
              <span className="text-[7px] sm:text-[8.5px] font-black uppercase tracking-widest text-amber-700 flex items-center gap-0.5 sm:gap-1">
                <Crown className="w-2.5 h-2.5 text-amber-600 inline" /> Official Presenter
              </span>
            </div>
          </div>

          {/* Right Top Quick Navigation / CTAs */}
          <div className="pointer-events-auto flex items-center gap-1.5 sm:gap-2">
            <button
              onClick={() => setShowRegModal(true)}
              className="px-2.5 sm:px-4 py-1 sm:py-2 rounded-full bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500 text-black font-black text-[9px] sm:text-xs uppercase tracking-wider shadow-[0_4px_15px_rgba(245,158,11,0.3)] hover:scale-105 transition-all flex items-center gap-1 sm:gap-1.5 border border-amber-300"
            >
              <Sparkles className="w-3 sm:w-3.5 h-3 sm:h-3.5" />
              <span className="hidden sm:inline">Apply For</span> Auditions
            </button>
            <a
              href="https://wa.me/918146304161?text=Hi%2C%20I%20am%20interested%20in%20Miss%20%26%20Mrs%20Curvy%20Star%20of%20India%20Season%201"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-1.5 px-3.5 py-1.5 sm:py-2 rounded-full bg-white/95 backdrop-blur-md border border-amber-300 text-slate-900 font-black text-[10px] sm:text-xs uppercase tracking-wider hover:bg-amber-50 hover:scale-105 transition-all shadow-sm"
            >
              <Phone className="w-3 h-3 text-amber-600" />
              <span>Inquiries</span>
            </a>
          </div>

        </div>
      </header>

      {/* Main Slide Carousel Container */}
      <div className="relative z-10 h-screen overflow-hidden pb-16 sm:pb-20 md:pb-24">
        <div
          className="flex h-full transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {/* SLIDE 0: INTRO / TITLE */}
          <div className="min-w-full h-full flex flex-col justify-start items-center px-3 sm:px-6 lg:px-8 pt-24 sm:pt-24 md:pt-20 lg:pt-22 pb-24 md:pb-28 overflow-y-auto">
            <div className="w-full max-w-4xl relative z-10 text-center space-y-2 sm:space-y-3 mt-1 sm:mt-2 mb-auto">
              
              {/* Regal Presenter Kicker */}
              <div className="flex items-center justify-center gap-2 sm:gap-3">
                <div className="h-px w-6 sm:w-12 bg-gradient-to-r from-transparent via-amber-400 to-amber-600" />
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-400/40 text-[9.5px] sm:text-xs font-black uppercase tracking-[0.25em] text-amber-900 shadow-sm">
                  <Crown className="w-3 h-3 text-amber-600 animate-pulse" />
                  BE STAR ENTERTAINMENT PRESENTS
                  <Crown className="w-3 h-3 text-amber-600 animate-pulse" />
                </div>
                <div className="h-px w-6 sm:w-12 bg-gradient-to-l from-transparent via-amber-400 to-amber-600" />
              </div>

              <div>
                <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black font-serif-luxury tracking-tight leading-tight text-slate-950">
                  MISS • MRS • CURVY <br />
                  <span className="text-gold-gradient">STAR OF INDIA</span>
                </h1>
                <div className="mt-0.5 text-xs sm:text-sm font-black uppercase tracking-[0.25em] text-amber-800">
                  Season 1 — 2026
                </div>
              </div>

              <div className="max-w-xl mx-auto border-l-3 sm:border-l-4 border-amber-500 pl-3 py-0.5 text-left sm:text-center">
                <p className="text-base sm:text-xl font-editorial italic font-bold text-slate-800">
                  "Beauty Has No Size, No Age, No Limits."
                </p>
              </div>

              {/* Cardless Grand Runway Hero Image */}
              <div 
                onMouseEnter={() => setHoveredCard('hero-runway')}
                onMouseLeave={() => setHoveredCard(null)}
                className="w-full max-w-xl sm:max-w-2xl md:max-w-3xl mx-auto rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.2)] hover:shadow-[0_25px_65px_rgba(217,119,6,0.35)] transition-all duration-500 ease-out group cursor-pointer relative"
              >
                <img
                  src="/images/runway-hero.jpg"
                  alt="Star of India Runway"
                  className="w-full h-44 sm:h-56 md:h-64 lg:h-72 object-cover rounded-3xl transform group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none rounded-3xl" />
                <div className="absolute bottom-2.5 inset-x-4 flex items-center justify-between text-white/95 text-[10px] sm:text-xs font-bold tracking-wider uppercase px-2 pointer-events-none">
                  <span className="flex items-center gap-1.5"><Sparkles className="w-3.5 h-3.5 text-amber-400" /> Grand National Runway</span>
                  <span className="text-amber-300 font-serif-luxury font-black">Season 1 — 2026</span>
                </div>
              </div>

              {/* Interactive Stats Bar (100% Scale in on hover, Zoom out on remove) */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 max-w-3xl mx-auto pt-0.5">
                {[
                  { id: 'stat-1', num: '10+ Cities', label: 'Audition Tour' },
                  { id: 'stat-2', num: '1000+', label: 'Participants' },
                  { id: 'stat-3', num: '3 Categories', label: 'Miss • Mrs • Curvy' },
                  { id: 'stat-4', num: '₹25L+', label: 'Brand Value' }
                ].map((st) => (
                  <div 
                    key={st.id}
                    className="p-2.5 sm:p-3 rounded-xl bg-white border border-amber-200/90 text-center shadow-sm zoom-card cursor-pointer"
                  >
                    <div className="text-base sm:text-lg font-black text-amber-700">{st.num}</div>
                    <div className="text-[10px] sm:text-xs text-slate-800 uppercase font-black tracking-wide">{st.label}</div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap justify-center gap-2.5 pt-1">
                <button
                  onClick={() => setShowRegModal(true)}
                  className="px-5 sm:px-6 py-2 sm:py-2.5 rounded-full bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500 text-black font-black text-xs sm:text-sm uppercase tracking-wider shadow-lg shadow-amber-500/20 hover:scale-105 transition-all flex items-center gap-2"
                >
                  <Sparkles className="w-4 h-4" /> Apply For Auditions
                </button>
                <button
                  onClick={nextSlide}
                  className="px-5 sm:px-6 py-2 sm:py-2.5 rounded-full bg-slate-900 text-white font-black text-xs sm:text-sm hover:bg-slate-800 transition-all flex items-center gap-2 shadow-md"
                >
                  <span>Explore Presentation</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* SLIDE 1: VISION 2026 */}
          <div className="min-w-full h-full flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 pt-4 pb-24 md:pb-28 relative overflow-y-auto">
            <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-12 gap-6 items-center my-auto">
              <div className="lg:col-span-7 space-y-4 text-left">
                <div className="text-xs uppercase tracking-widest text-amber-800 font-black">
                  MISS • MRS • CURVY STAR OF INDIA
                </div>

                <div className="relative">
                  <h2 className="text-3xl sm:text-5xl font-black font-serif-luxury text-slate-950">
                    THE <span className="text-gold-gradient">2026</span> REVOLUTION
                  </h2>
                </div>

                <blockquote className="text-lg sm:text-xl font-editorial italic font-bold text-amber-900 border-l-3 border-amber-500 pl-4 py-1">
                  "Beauty Has No Size, No Age, No Limits."
                </blockquote>

                <p className="text-xs sm:text-sm font-bold text-slate-800 leading-relaxed">
                  Miss • Mrs • Curvy Star of India Season 1 is a premier national beauty and empowerment platform celebrating confidence, intellect, elegance, and diverse silhouettes.
                </p>

                {/* Cards with 100% Scale in on Hover and Zoom out on Remove */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-2">
                  {[
                    { id: 'vis-1', title: 'Inclusivity', icon: Heart, iconColor: 'text-rose-600', text: 'Body positive categories welcoming all sizes.' },
                    { id: 'vis-2', title: 'Empowerment', icon: Sparkles, iconColor: 'text-amber-600', text: 'Fostering poise, leadership and career growth.' },
                    { id: 'vis-3', title: 'Stardom', icon: Tv, iconColor: 'text-amber-600', text: 'Media, PR, music videos, and fashion deals.' }
                  ].map((v) => (
                    <div 
                      key={v.id}
                      onMouseEnter={() => setHoveredCard(v.id)}
                      onMouseLeave={() => setHoveredCard(null)}
                      className={`p-3.5 rounded-xl bg-white border transition-all duration-300 ease-out cursor-pointer ${
                        hoveredCard === v.id 
                          ? 'scale-110 z-30 shadow-2xl border-amber-500 bg-amber-50/40' 
                          : 'scale-100 z-10 border-amber-200/90 shadow-sm'
                      }`}
                    >
                      <div className="text-amber-800 font-black text-xs mb-1 flex items-center gap-1.5 uppercase">
                        <v.icon className={`w-3.5 h-3.5 ${v.iconColor}`} /> {v.title}
                      </div>
                      <p className="text-xs font-bold text-slate-700 leading-snug">{v.text}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-5 flex justify-center">
                {/* Cardless Grand Queen Portrait */}
                <div 
                  className="w-full max-w-sm sm:max-w-md lg:max-w-lg rounded-3xl overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.22)] hover:shadow-[0_30px_70px_rgba(217,119,6,0.35)] transition-all duration-500 ease-out group cursor-pointer relative"
                  onMouseEnter={() => setHoveredCard('queen-photo')}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <img
                    src="/images/queen-portrait.jpg"
                    alt="Star of India Curvy Queen"
                    className="w-full h-80 sm:h-96 md:h-[420px] object-cover object-top rounded-3xl transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none rounded-3xl" />
                  <div className="absolute bottom-3 inset-x-3 text-center p-3 rounded-2xl bg-black/40 backdrop-blur-md border border-white/20">
                    <div className="text-xs sm:text-sm font-black text-amber-300 uppercase tracking-wider font-serif-luxury">
                      Celebrating Plus Size & Body Positive Royalty
                    </div>
                    <div className="text-[10px] font-bold text-slate-200 mt-0.5">
                      Miss • Mrs • Curvy Star of India Season 1
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* SLIDE 2: CATEGORIES (AGE 18+ ABOVE) */}
          <div className="min-w-full h-full flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 pt-4 pb-24 md:pb-28 relative overflow-y-auto">
            <div className="w-full max-w-5xl space-y-4 md:space-y-6 text-center my-auto">
              <div>
                <span className="text-xs uppercase tracking-widest text-amber-800 font-black">Eligibility & Divisions</span>
                <h2 className="text-2xl sm:text-4xl font-black font-serif-luxury text-slate-950">
                  PAGEANT <span className="text-gold-gradient">CATEGORIES</span>
                </h2>
                <div className="mt-1 inline-block px-3.5 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs font-black">
                  AGE: 18 YEARS & ABOVE
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
                {/* Miss Card */}
                <div 
                  onMouseEnter={() => setHoveredCard('cat-miss')}
                  onMouseLeave={() => setHoveredCard(null)}
                  className={`p-5 rounded-2xl bg-white border transition-all duration-300 ease-out cursor-pointer space-y-2 ${
                    hoveredCard === 'cat-miss' 
                      ? 'scale-110 z-30 shadow-2xl border-amber-500 bg-amber-50/30' 
                      : 'scale-100 z-10 border-amber-200 shadow-md'
                  }`}
                >
                  <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center text-amber-700">
                    <Star className="w-5 h-5" />
                  </div>
                  <h3 className="text-base sm:text-lg font-black text-slate-950 font-serif-luxury">MISS STAR OF INDIA</h3>
                  <div className="text-xs font-black text-amber-700 uppercase tracking-wide">Unmarried Divas (18+)</div>
                  <p className="text-xs font-bold text-slate-700 leading-relaxed">For young women aspiring to launch dynamic careers in high fashion, media, and cinema.</p>
                  <ul className="text-xs font-bold text-slate-800 space-y-1.5 pt-1">
                    <li className="flex items-center gap-1.5"><Check className="w-4 h-4 text-amber-600 shrink-0" /> Ramp Walk Training</li>
                    <li className="flex items-center gap-1.5"><Check className="w-4 h-4 text-amber-600 shrink-0" /> Professional Portfolio</li>
                  </ul>
                </div>

                {/* Mrs Card */}
                <div 
                  onMouseEnter={() => setHoveredCard('cat-mrs')}
                  onMouseLeave={() => setHoveredCard(null)}
                  className={`p-5 rounded-2xl bg-white border transition-all duration-300 ease-out cursor-pointer space-y-2 ${
                    hoveredCard === 'cat-mrs' 
                      ? 'scale-110 z-30 shadow-2xl border-rose-500 bg-rose-50/30' 
                      : 'scale-100 z-10 border-rose-200 shadow-md'
                  }`}
                >
                  <div className="w-10 h-10 rounded-xl bg-rose-100 flex items-center justify-center text-rose-700">
                    <Crown className="w-5 h-5" />
                  </div>
                  <h3 className="text-base sm:text-lg font-black text-slate-950 font-serif-luxury">MRS STAR OF INDIA</h3>
                  <div className="text-xs font-black text-rose-700 uppercase tracking-wide">Married / Dynamic Achievers</div>
                  <p className="text-xs font-bold text-slate-700 leading-relaxed">Honoring the grace and brilliance of modern married women balancing family, career, and ambition.</p>
                  <ul className="text-xs font-bold text-slate-800 space-y-1.5 pt-1">
                    <li className="flex items-center gap-1.5"><Check className="w-4 h-4 text-rose-600 shrink-0" /> Public Speaking & Poise</li>
                    <li className="flex items-center gap-1.5"><Check className="w-4 h-4 text-rose-600 shrink-0" /> Brand Ambassador Launch</li>
                  </ul>
                </div>

                {/* Curvy Card */}
                <div 
                  onMouseEnter={() => setHoveredCard('cat-curvy')}
                  onMouseLeave={() => setHoveredCard(null)}
                  className={`p-5 rounded-2xl bg-gradient-to-b from-amber-50 to-white border-2 border-amber-400 shadow-lg transition-all duration-300 ease-out cursor-pointer space-y-2 relative ${
                    hoveredCard === 'cat-curvy' 
                      ? 'scale-110 z-30 shadow-2xl border-amber-500 bg-amber-100/60' 
                      : 'scale-100 z-10'
                  }`}
                >
                  <div className="absolute top-2 right-2 px-2 py-0.5 rounded-full bg-amber-400 text-black text-[9px] font-black uppercase">
                    Flagship
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-amber-400 text-black flex items-center justify-center">
                    <Heart className="w-5 h-5 fill-black text-black" />
                  </div>
                  <h3 className="text-base sm:text-lg font-black text-slate-950 font-serif-luxury">CURVY STAR OF INDIA</h3>
                  <div className="text-xs font-black text-amber-800 uppercase tracking-wide">Plus Size & Body Positive</div>
                  <p className="text-xs font-black text-slate-900 leading-relaxed">"WE PROUDLY WELCOME PLUS SIZE BEAUTIES" — Championing body positivity and pure glamour!</p>
                  <ul className="text-xs font-bold text-slate-800 space-y-1.5 pt-1">
                    <li className="flex items-center gap-1.5"><Check className="w-4 h-4 text-amber-600 shrink-0" /> Plus-Size Couture Styling</li>
                    <li className="flex items-center gap-1.5"><Check className="w-4 h-4 text-amber-600 shrink-0" /> Magazine Cover Spotlight</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* SLIDE 3: CELEBRITY JUDGES */}
          <div className="min-w-full h-full flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 pt-4 pb-24 md:pb-28 relative overflow-y-auto">
            <div className="w-full max-w-5xl space-y-3 md:space-y-4 text-center my-auto">
              <div>
                <span className="text-xs uppercase tracking-widest text-amber-800 font-black">Star Power & Jury</span>
                <h2 className="text-2xl sm:text-3xl font-black font-serif-luxury text-slate-950">
                  TENTATIVE <span className="text-gold-gradient">CELEBRITY JUDGES</span>
                </h2>
                <div className="text-xs font-bold text-slate-600 italic">
                  Be Star Entertainment Presents — One of Them / Miss India & Star Jury
                </div>
              </div>

              {/* Grand Judges Panoramic Display (Full Natural Aspect Ratio, No Crop/Zoom) */}
              <div 
                onMouseEnter={() => setHoveredCard('judge-triptych')}
                onMouseLeave={() => setHoveredCard(null)}
                className="w-full max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.18)] hover:shadow-[0_25px_65px_rgba(217,119,6,0.3)] transition-all duration-500 ease-out group cursor-pointer relative"
              >
                <img
                  src="/images/judges-triptych.png"
                  alt="Malaika Arora, Sushmita Sen, Ameesha Patel"
                  className="w-full h-auto max-h-[280px] sm:max-h-[340px] md:max-h-[390px] object-contain mx-auto rounded-3xl transition-transform duration-500 ease-out"
                />
              </div>

              {/* Judge Cards with 100% Scale in on Hover */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 max-w-3xl mx-auto text-center">
                {[
                  { id: 'judge-1', name: 'MALAIKA ARORA', tag: 'Style Icon & Mentor' },
                  { id: 'judge-2', name: 'SUSHMITA SEN', tag: 'Miss Universe & Trailblazer' },
                  { id: 'judge-3', name: 'AMEESHA PATEL', tag: 'Bollywood Diva' }
                ].map((j) => (
                  <div 
                    key={j.id}
                    onMouseEnter={() => setHoveredCard(j.id)}
                    onMouseLeave={() => setHoveredCard(null)}
                    className={`p-2.5 rounded-xl bg-white border transition-all duration-300 ease-out cursor-pointer ${
                      hoveredCard === j.id 
                        ? 'scale-110 z-30 shadow-2xl border-amber-500 bg-amber-50/50' 
                        : 'scale-100 z-10 border-amber-200 shadow-sm'
                    }`}
                  >
                    <div className="text-xs font-black text-slate-900 uppercase">{j.name}</div>
                    <div className="text-[11px] font-bold text-amber-800 uppercase">{j.tag}</div>
                  </div>
                ))}
              </div>

              <div className="p-2.5 rounded-xl bg-amber-100/80 border border-amber-300 max-w-2xl mx-auto text-center">
                <span className="text-xs font-black uppercase tracking-widest text-amber-900">
                  JUDGES UPDATE SOON — Final Celebrity Panel Announcement In Progress
                </span>
              </div>
            </div>
          </div>

          {/* SLIDE 4: EVENT OVERVIEW & 4 PILLARS */}
          <div className="min-w-full h-full flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 pt-4 pb-24 md:pb-28 relative overflow-y-auto">
            <div className="w-full max-w-5xl space-y-4 md:space-y-6 text-center my-auto">
              <div>
                <span className="text-xs uppercase tracking-widest text-amber-800 font-black">Concept & Vision</span>
                <h2 className="text-2xl sm:text-4xl font-black font-serif-luxury text-slate-950">
                  EVENT <span className="text-gold-gradient">OVERVIEW</span>
                </h2>
                <p className="text-xs sm:text-sm font-bold text-slate-700 max-w-2xl mx-auto mt-1 leading-relaxed">
                  A storytelling and visibility platform built on Recognition, Inspiration, Influence, and Community Impact.
                </p>
              </div>

              {/* 4 Pillars with 100% Scale in on Hover */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 text-center">
                {[
                  { id: 'pil-1', title: 'Recognition', icon: Crown, text: 'Honoring authentic beauty and real stories.' },
                  { id: 'pil-2', title: 'Inspiration', icon: Sparkles, text: 'Inspiring women across all walks of life.' },
                  { id: 'pil-3', title: 'Influence', icon: Tv, text: 'Pan-India media and digital outreach.' },
                  { id: 'pil-4', title: 'Community Impact', icon: Heart, text: 'Fostering female leadership & growth.' }
                ].map((p) => (
                  <div 
                    key={p.id}
                    onMouseEnter={() => setHoveredCard(p.id)}
                    onMouseLeave={() => setHoveredCard(null)}
                    className={`p-3.5 rounded-xl bg-white border transition-all duration-300 ease-out cursor-pointer ${
                      hoveredCard === p.id 
                        ? 'scale-110 z-30 shadow-2xl border-amber-500 bg-amber-50/50' 
                        : 'scale-100 z-10 border-amber-200 shadow-sm'
                    }`}
                  >
                    <p.icon className="w-6 h-6 text-amber-600 mx-auto mb-1.5" />
                    <div className="text-xs font-black text-slate-950 uppercase">{p.title}</div>
                    <div className="text-xs font-bold text-slate-600 mt-1">{p.text}</div>
                  </div>
                ))}
              </div>

              {/* Highlights & Target Audience */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                <div 
                  onMouseEnter={() => setHoveredCard('card-highlights')}
                  onMouseLeave={() => setHoveredCard(null)}
                  className={`p-4 rounded-xl bg-white border transition-all duration-300 ease-out cursor-pointer space-y-2 ${
                    hoveredCard === 'card-highlights' 
                      ? 'scale-105 z-30 shadow-2xl border-amber-500 bg-amber-50/20' 
                      : 'scale-100 z-10 border-amber-200 shadow-sm'
                  }`}
                >
                  <div className="text-xs font-black text-amber-800 uppercase tracking-wider flex items-center gap-1.5">
                    <Award className="w-4 h-4 text-amber-600" /> Event Highlights
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs font-bold">
                    <div className="p-2 rounded bg-amber-50 text-slate-900 border border-amber-200"><strong className="text-amber-800">200+</strong> Shortlisted</div>
                    <div className="p-2 rounded bg-amber-50 text-slate-900 border border-amber-200"><strong className="text-amber-800">300+</strong> Elite Audience</div>
                    <div className="p-2 rounded bg-amber-50 text-slate-900 border border-amber-200"><strong className="text-amber-800">Premium</strong> Experience</div>
                    <div className="p-2 rounded bg-amber-50 text-slate-900 border border-amber-200"><strong className="text-amber-800">High Quality</strong> Media</div>
                  </div>
                </div>

                <div 
                  onMouseEnter={() => setHoveredCard('card-target')}
                  onMouseLeave={() => setHoveredCard(null)}
                  className={`p-4 rounded-xl bg-white border transition-all duration-300 ease-out cursor-pointer space-y-2 ${
                    hoveredCard === 'card-target' 
                      ? 'scale-105 z-30 shadow-2xl border-amber-500 bg-amber-50/20' 
                      : 'scale-100 z-10 border-amber-200 shadow-sm'
                  }`}
                >
                  <div className="text-xs font-black text-amber-800 uppercase tracking-wider flex items-center gap-1.5">
                    <Users className="w-4 h-4 text-amber-600" /> Target Audience Profile
                  </div>
                  <div className="space-y-1.5 text-xs font-bold text-slate-800">
                    <div className="flex items-center gap-1.5"><Check className="w-4 h-4 text-amber-600 shrink-0" /> Premium Brand Consumers & High Class Women</div>
                    <div className="flex items-center gap-1.5"><Check className="w-4 h-4 text-amber-600 shrink-0" /> Women Decision Makers & Business Leaders</div>
                    <div className="flex items-center gap-1.5"><Check className="w-4 h-4 text-amber-600 shrink-0" /> Elite Families & High-Net-Worth Individuals (HNIs)</div>
                    <div className="flex items-center gap-1.5"><Check className="w-4 h-4 text-amber-600 shrink-0" /> Luxury Lifestyle & Fashion Enthusiasts</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* SLIDE 5: AUDITION PROCESS & 10 CITIES */}
          <div className="min-w-full h-full flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 pt-4 pb-24 md:pb-28 relative overflow-y-auto">
            <div className="w-full max-w-5xl space-y-4 md:space-y-6 text-center my-auto">
              <div>
                <span className="text-xs uppercase tracking-widest text-amber-800 font-black">Auditions & Tour</span>
                <h2 className="text-2xl sm:text-4xl font-black font-serif-luxury text-slate-950">
                  AUDITION <span className="text-gold-gradient">PROCESS</span> (1000+ Aspirants)
                </h2>
                <div className="text-xs font-bold text-slate-600 mt-1">Colleges • Universities • Societies • Open Auditions</div>
              </div>

              {/* 3 Step Audition Cards with 100% Scale in on Hover */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 text-center">
                {[
                  { id: 'aud-1', num: 1, title: 'Self Introduction', sub: 'Ramp Walk & Poise', desc: 'First impression, confidence, posture, and initial catwalk.' },
                  { id: 'aud-2', num: 2, title: 'Talent Showcase', sub: 'Dance • Acting • Singing • Speaking', desc: 'Showcasing individual artistic expression and creative skill.' },
                  { id: 'aud-3', num: 3, title: 'Interaction Round', sub: 'Self Interview & Assessment', desc: 'Personality evaluation, intellect, and grooming potential.' }
                ].map((a) => (
                  <div 
                    key={a.id}
                    onMouseEnter={() => setHoveredCard(a.id)}
                    onMouseLeave={() => setHoveredCard(null)}
                    className={`p-4 rounded-xl bg-white border transition-all duration-300 ease-out cursor-pointer ${
                      hoveredCard === a.id 
                        ? 'scale-110 z-30 shadow-2xl border-amber-500 bg-amber-50/50' 
                        : 'scale-100 z-10 border-amber-200 shadow-sm'
                    }`}
                  >
                    <div className="w-10 h-10 rounded-full bg-amber-100 text-amber-900 font-serif-luxury font-black text-lg flex items-center justify-center mx-auto mb-2 border border-amber-300">
                      {a.num}
                    </div>
                    <div className="text-xs font-black text-slate-950 uppercase tracking-wide">{a.title}</div>
                    <div className="text-xs text-amber-800 font-black mb-1">{a.sub}</div>
                    <p className="text-xs font-bold text-slate-600 leading-snug">{a.desc}</p>
                  </div>
                ))}
              </div>

              <div 
                onMouseEnter={() => setHoveredCard('beachwear-round')}
                onMouseLeave={() => setHoveredCard(null)}
                className={`p-3 rounded-xl bg-amber-100/90 border border-amber-300 flex items-center justify-between max-w-2xl mx-auto transition-all duration-300 ease-out cursor-pointer shadow-sm ${
                  hoveredCard === 'beachwear-round' ? 'scale-105 shadow-xl border-amber-500' : 'scale-100'
                }`}
              >
                <span className="text-xs font-black uppercase tracking-wider text-amber-900 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-amber-700" /> Beachwear Glam Round
                </span>
                <span className="text-xs font-bold text-slate-800">Resort Glamour • Confidence • Elegance</span>
              </div>

              <div className="space-y-1.5 text-center">
                <div className="text-xs font-black text-slate-800 uppercase tracking-wider">Top 10 Audition Cities:</div>
                <div className="flex flex-wrap justify-center gap-2 max-w-3xl mx-auto">
                  {['Chandigarh', 'Punjab', 'Delhi NCR', 'Haryana', 'Uttarakhand', 'Himachal', 'Uttar Pradesh', 'Rajasthan', '& More'].map((c, i) => (
                    <span 
                      key={i} 
                      onMouseEnter={() => setHoveredCard(`city-${i}`)}
                      onMouseLeave={() => setHoveredCard(null)}
                      className={`px-3 py-1 rounded-lg bg-white border text-xs font-bold text-slate-800 flex items-center gap-1 transition-all duration-300 ease-out cursor-pointer shadow-sm ${
                        hoveredCard === `city-${i}` ? 'scale-110 border-amber-500 bg-amber-50 shadow-md' : 'scale-100 border-amber-200'
                      }`}
                    >
                      <MapPin className="w-3.5 h-3.5 text-amber-600" /> {c}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* SLIDE 6: CONTESTANT DELIVERABLES (WITH CHILD SUB-SLIDES & AUTO-PLAY) */}
          <div className="min-w-full h-full flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 pt-4 pb-24 md:pb-28 relative overflow-y-auto">
            <div className="w-full max-w-5xl space-y-3 md:space-y-4 my-auto">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-amber-300 pb-2">
                <div>
                  <span className="text-xs uppercase tracking-widest text-amber-800 font-black">Contestant Package</span>
                  <h2 className="text-xl sm:text-3xl font-black font-serif-luxury text-slate-950">
                    CONTESTANT <span className="text-gold-gradient">DELIVERABLES</span>
                  </h2>
                </div>
                {/* Child Sub-Slide Auto Controller */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={prevDeliverableSub}
                    className="p-1.5 rounded-lg bg-white hover:bg-amber-100 text-slate-800 border border-amber-200 shadow-sm transform transition-transform hover:scale-110"
                    title="Previous Deliverable Tab"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={toggleChildAutoPlay}
                    className={`px-3 py-1 rounded-full text-xs font-black border flex items-center gap-1.5 transition-all ${
                      childAutoPlaying
                        ? 'bg-amber-500 text-black border-amber-600'
                        : 'bg-white text-slate-800 border-amber-300'
                    }`}
                  >
                    {childAutoPlaying ? <Pause className="w-3 h-3 text-black" /> : <Play className="w-3 h-3 text-amber-600" />}
                    <span>{childAutoPlaying ? 'Auto Sub' : 'Manual'}</span>
                  </button>
                  <button
                    onClick={nextDeliverableSub}
                    className="p-1.5 rounded-lg bg-white hover:bg-amber-100 text-slate-800 border border-amber-200 shadow-sm transform transition-transform hover:scale-110"
                    title="Next Deliverable Tab"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Deliverables Sub-Navigation Pills */}
              <div className="flex flex-wrap gap-2">
                {deliverables.map((del, idx) => (
                  <button
                    key={del.tabId}
                    onClick={() => {
                      setDeliverableSubSlide(idx);
                      setIsChildAnimationComplete(false);
                    }}
                    className={`px-3.5 py-1.5 rounded-lg text-xs font-black uppercase tracking-wider transition-all transform hover:scale-105 shadow-sm ${
                      deliverableSubSlide === idx
                        ? 'bg-gradient-to-r from-amber-500 to-yellow-400 text-black shadow-md border border-amber-600 scale-105'
                        : 'bg-white text-slate-800 border border-amber-200 hover:bg-amber-50'
                    }`}
                  >
                    {del.title.split(' ')[0]} {del.title.split(' ')[1]}
                  </button>
                ))}
              </div>

              {/* Active Deliverable Content Container */}
              {deliverables[deliverableSubSlide] && (
                <div className={`p-4 sm:p-5 rounded-2xl ${deliverables[deliverableSubSlide].color} border-2 ${deliverables[deliverableSubSlide].borderColor} space-y-3 shadow-md animate-fade-in`}>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <h3 className="text-base sm:text-lg font-black font-serif-luxury text-slate-950">
                      {deliverables[deliverableSubSlide].title}
                    </h3>
                    <span className="text-xs text-amber-900 font-black uppercase tracking-wider">
                      {deliverables[deliverableSubSlide].badge}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                    {deliverables[deliverableSubSlide].items.map((item, i) => (
                      <div 
                        key={i} 
                        onMouseEnter={() => setHoveredCard(`del-item-${i}`)}
                        onMouseLeave={() => setHoveredCard(null)}
                        className={`p-3 rounded-xl bg-white border transition-all duration-300 ease-out cursor-pointer space-y-1 ${
                          hoveredCard === `del-item-${i}` 
                            ? 'scale-110 z-30 shadow-2xl border-amber-500 bg-amber-50/50' 
                            : 'scale-100 z-10 border-amber-200/90 shadow-sm'
                        }`}
                      >
                        <div className="text-xs font-black text-slate-950 flex items-center gap-1.5">
                          <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                          {item.title}
                        </div>
                        <p className="text-xs font-bold text-slate-700 pl-5.5 leading-snug">
                          {item.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* SLIDE 7: WHY PARTNER WITH US & BRAND ROI */}
          <div className="min-w-full h-full flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 pt-4 pb-24 md:pb-28 relative overflow-y-auto">
            <div className="w-full max-w-5xl space-y-4 md:space-y-6 text-center my-auto">
              <div>
                <span className="text-xs uppercase tracking-widest text-amber-800 font-black">Brand Association</span>
                <h2 className="text-2xl sm:text-4xl font-black font-serif-luxury text-slate-950">
                  WHY PARTNER WITH <span className="text-gold-gradient">STAR OF INDIA</span>
                </h2>
              </div>

              {/* Partner Cards with 100% Scale in on Hover */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 text-left">
                {[
                  { id: 'part-1', icon: ShieldCheck, title: 'High-Trust Audience', desc: 'Women in most trusted and respectable professions & decision makers.' },
                  { id: 'part-2', icon: Flame, title: 'High Purchasing Power', desc: 'Premium lifestyle & primary decision-making household segment.' },
                  { id: 'part-3', icon: Radio, title: 'Multi-Platform Reach', desc: 'Event + Exclusive Podcast + Digital Media + PR Blitz.' },
                  { id: 'part-4', icon: Star, title: 'Brand Credibility', desc: 'Direct association with women empowerment builds long-term loyalty.' }
                ].map((pt) => (
                  <div 
                    key={pt.id}
                    onMouseEnter={() => setHoveredCard(pt.id)}
                    onMouseLeave={() => setHoveredCard(null)}
                    className={`p-4 rounded-xl bg-white border transition-all duration-300 ease-out cursor-pointer space-y-1.5 ${
                      hoveredCard === pt.id 
                        ? 'scale-110 z-30 shadow-2xl border-amber-500 bg-amber-50/40' 
                        : 'scale-100 z-10 border-amber-200 shadow-sm'
                    }`}
                  >
                    <pt.icon className="w-7 h-7 text-amber-600" />
                    <h3 className="text-xs font-black text-slate-950 uppercase">{pt.title}</h3>
                    <p className="text-xs font-bold text-slate-700 leading-snug">{pt.desc}</p>
                  </div>
                ))}
              </div>

              {/* Callout Cards with 100% Scale in on Hover */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2">
                {[
                  { id: 'call-1', title: 'PRESS RELEASE', desc: 'Features in leading news portals and print dailies.' },
                  { id: 'call-2', title: 'SOCIAL MEDIA BUZZ', desc: 'Influencer collaborations and viral campaign reach.' },
                  { id: 'call-3', title: 'GUEST OF HONOR', desc: 'VIP stage presence and grand felicitation.' }
                ].map((cl) => (
                  <div 
                    key={cl.id}
                    onMouseEnter={() => setHoveredCard(cl.id)}
                    onMouseLeave={() => setHoveredCard(null)}
                    className={`p-3.5 rounded-xl bg-amber-100/90 border transition-all duration-300 ease-out cursor-pointer text-center shadow-sm ${
                      hoveredCard === cl.id 
                        ? 'scale-110 z-30 shadow-2xl border-amber-500 bg-amber-200/80' 
                        : 'scale-100 z-10 border-amber-300'
                    }`}
                  >
                    <div className="text-amber-950 text-sm font-black uppercase">{cl.title}</div>
                    <p className="text-xs font-bold text-slate-800 mt-0.5">{cl.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* SLIDE 8: SPONSORSHIP PLANS */}
          <div className="min-w-full h-full flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 pt-4 pb-24 md:pb-28 relative overflow-y-auto">
            <div className="w-full max-w-5xl space-y-4 md:space-y-6 text-center my-auto">
              <div>
                <span className="text-xs uppercase tracking-widest text-amber-800 font-black">Investment Packages</span>
                <h2 className="text-2xl sm:text-4xl font-black font-serif-luxury text-slate-950">
                  SPONSORSHIP <span className="text-gold-gradient">PLANS</span>
                </h2>
              </div>

              {/* Sponsorship Cards with 100% Scale in on Hover */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 text-left">
                {/* Presenting */}
                <div 
                  onMouseEnter={() => setHoveredCard('spon-pres')}
                  onMouseLeave={() => setHoveredCard(null)}
                  className={`p-4 rounded-2xl bg-gradient-to-b from-amber-100 via-amber-50 to-white border-2 border-amber-400 shadow-md flex flex-col justify-between transition-all duration-300 ease-out cursor-pointer ${
                    hoveredCard === 'spon-pres' 
                      ? 'scale-110 z-30 shadow-2xl border-amber-600 bg-amber-100/90' 
                      : 'scale-100 z-10'
                  }`}
                >
                  <div>
                    <div className="text-[10px] uppercase font-black text-amber-800">Presenting Sponsor</div>
                    <div className="text-xl font-black text-slate-950 font-serif-luxury mt-0.5 mb-1">₹25,00,000</div>
                    <p className="text-xs font-bold text-slate-700 mb-2">Or ₹15,00,000 custom option</p>
                    <ul className="text-xs font-bold text-slate-800 space-y-1.5 border-t border-amber-200 pt-2">
                      <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-amber-600 shrink-0" /> Title Naming Rights</li>
                      <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-amber-600 shrink-0" /> Celebrity Jury Table Seat</li>
                      <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-amber-600 shrink-0" /> Crown Handover Moment</li>
                      <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-amber-600 shrink-0" /> 10 VIP Passes</li>
                    </ul>
                  </div>
                  <button
                    onClick={() => {
                      setSelectedSponsorTier('Presenting Sponsor (₹25,00,000)');
                      setShowSponsorModal(true);
                    }}
                    className="w-full mt-3 py-2 rounded-lg bg-amber-500 text-black font-black text-xs uppercase tracking-wider hover:bg-amber-400 transition-colors shadow-md"
                  >
                    Inquire Now
                  </button>
                </div>

                {/* Co-Powered */}
                <div 
                  onMouseEnter={() => setHoveredCard('spon-co')}
                  onMouseLeave={() => setHoveredCard(null)}
                  className={`p-4 rounded-2xl bg-white border shadow-md flex flex-col justify-between transition-all duration-300 ease-out cursor-pointer ${
                    hoveredCard === 'spon-co' 
                      ? 'scale-110 z-30 shadow-2xl border-amber-500 bg-amber-50/40' 
                      : 'scale-100 z-10 border-amber-200'
                  }`}
                >
                  <div>
                    <div className="text-[10px] uppercase font-black text-slate-700">Co-Powered By</div>
                    <div className="text-xl font-black text-slate-950 font-serif-luxury mt-0.5 mb-1">₹15,00,000</div>
                    <p className="text-xs font-bold text-slate-600 mb-2">Or ₹8,00,000 tailored package</p>
                    <ul className="text-xs font-bold text-slate-800 space-y-1.5 border-t border-amber-200 pt-2">
                      <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-amber-600 shrink-0" /> Co-Branded Visuals</li>
                      <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-amber-600 shrink-0" /> 5 VIP Passes</li>
                      <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-amber-600 shrink-0" /> Stage Announcement</li>
                    </ul>
                  </div>
                  <button
                    onClick={() => {
                      setSelectedSponsorTier('Co-Powered By (₹15,00,000)');
                      setShowSponsorModal(true);
                    }}
                    className="w-full mt-3 py-2 rounded-lg bg-slate-900 text-white font-bold text-xs hover:bg-slate-800 transition-colors"
                  >
                    Inquire Now
                  </button>
                </div>

                {/* Partner */}
                <div 
                  onMouseEnter={() => setHoveredCard('spon-part')}
                  onMouseLeave={() => setHoveredCard(null)}
                  className={`p-4 rounded-2xl bg-white border shadow-md flex flex-col justify-between transition-all duration-300 ease-out cursor-pointer ${
                    hoveredCard === 'spon-part' 
                      ? 'scale-110 z-30 shadow-2xl border-amber-500 bg-amber-50/40' 
                      : 'scale-100 z-10 border-amber-200'
                  }`}
                >
                  <div>
                    <div className="text-[10px] uppercase font-black text-slate-700">Official Partner</div>
                    <div className="text-xl font-black text-slate-950 font-serif-luxury mt-0.5 mb-1">₹8,00,000</div>
                    <p className="text-xs font-bold text-slate-600 mb-2">Or ₹5,00,000 segment sponsor</p>
                    <ul className="text-xs font-bold text-slate-800 space-y-1.5 border-t border-amber-200 pt-2">
                      <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-amber-600 shrink-0" /> Category Exclusive</li>
                      <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-amber-600 shrink-0" /> Stage Display Board</li>
                      <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-amber-600 shrink-0" /> 3 VIP Passes</li>
                    </ul>
                  </div>
                  <button
                    onClick={() => {
                      setSelectedSponsorTier('Official Partner (₹8,00,000)');
                      setShowSponsorModal(true);
                    }}
                    className="w-full mt-3 py-2 rounded-lg bg-slate-900 text-white font-bold text-xs hover:bg-slate-800 transition-colors"
                  >
                    Inquire Now
                  </button>
                </div>

                {/* Gift Partner */}
                <div 
                  onMouseEnter={() => setHoveredCard('spon-gift')}
                  onMouseLeave={() => setHoveredCard(null)}
                  className={`p-4 rounded-2xl bg-white border shadow-md flex flex-col justify-between transition-all duration-300 ease-out cursor-pointer ${
                    hoveredCard === 'spon-gift' 
                      ? 'scale-110 z-30 shadow-2xl border-amber-500 bg-amber-50/40' 
                      : 'scale-100 z-10 border-amber-200'
                  }`}
                >
                  <div>
                    <div className="text-[10px] uppercase font-black text-slate-700">Gift Partner</div>
                    <div className="text-xl font-black text-slate-950 font-serif-luxury mt-0.5 mb-1">₹5,00,000</div>
                    <p className="text-xs font-bold text-slate-600 mb-2">₹2,00,000 or In-Kind Hampers</p>
                    <ul className="text-xs font-bold text-slate-800 space-y-1.5 border-t border-amber-200 pt-2">
                      <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-amber-600 shrink-0" /> Hampers for 200 Finalists</li>
                      <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-amber-600 shrink-0" /> Winner Special Gifts</li>
                      <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-amber-600 shrink-0" /> Logo Inclusion</li>
                    </ul>
                  </div>
                  <button
                    onClick={() => {
                      setSelectedSponsorTier('Gift Partner (₹5,00,000 / In-Kind)');
                      setShowSponsorModal(true);
                    }}
                    className="w-full mt-3 py-2 rounded-lg bg-slate-900 text-white font-bold text-xs hover:bg-slate-800 transition-colors"
                  >
                    Inquire Now
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* SLIDE 9: THANK YOU & CONTACT INFORMATION */}
          <div className="min-w-full h-full flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 pt-4 pb-24 md:pb-28 relative overflow-y-auto">
            <div className="w-full max-w-4xl text-center space-y-4 md:space-y-5 my-auto">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs font-black uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-amber-600" /> Join The Grand Movement
              </div>

              <h2 className="text-4xl sm:text-6xl font-black font-editorial italic text-slate-950 leading-none">
                THANK <span className="text-gold-gradient font-serif-luxury not-italic">YOU</span>
              </h2>

              <p className="text-xs sm:text-sm font-bold text-slate-700 max-w-xl mx-auto leading-relaxed">
                Organized by Be Star Entertainment — Join India's most prestigious and empowering beauty pageant.
              </p>

              {/* Cardless Grand Crown & Trophy Image */}
              <div 
                onMouseEnter={() => setHoveredCard('crown-photo')}
                onMouseLeave={() => setHoveredCard(null)}
                className="w-full max-w-sm sm:max-w-md mx-auto rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.2)] hover:shadow-[0_25px_65px_rgba(217,119,6,0.35)] transition-all duration-500 ease-out group cursor-pointer relative"
              >
                <img
                  src="/images/crown-trophy.jpg"
                  alt="Star of India Crown & Trophy"
                  className="w-full h-48 sm:h-56 md:h-64 object-cover rounded-3xl transform group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none rounded-3xl" />
                <div className="absolute bottom-2.5 inset-x-3 text-center text-amber-300 text-[11px] sm:text-xs font-black uppercase tracking-wider pointer-events-none">
                  <span className="flex items-center justify-center gap-1.5"><Crown className="w-4 h-4 text-amber-400" /> Crown & Royal Trophy</span>
                </div>
              </div>

              {/* Be Star Entertainment Box with Official Wide Logo */}
              <div 
                onMouseEnter={() => setHoveredCard('org-box')}
                onMouseLeave={() => setHoveredCard(null)}
                className={`p-4 rounded-2xl bg-white border-2 border-amber-300 max-w-lg mx-auto space-y-2 shadow-md transition-all duration-300 ease-out cursor-pointer ${
                  hoveredCard === 'org-box' ? 'scale-105 z-30 shadow-2xl border-amber-500 bg-amber-50/40' : 'scale-100 z-10'
                }`}
              >
                <div className="flex justify-center mb-1">
                  <img
                    src={beStarLogo}
                    alt="Be Star Entertainment Logo"
                    className="h-9 w-auto max-w-[160px] object-contain mx-auto"
                  />
                </div>
                <div className="text-xs font-black text-amber-900 uppercase tracking-widest">ORGANIZING COMMITTEE</div>
                <div className="flex flex-wrap justify-center gap-4 text-xs font-mono font-black text-slate-900 pt-1">
                  <a href="tel:8146304161" className="hover:text-amber-700 flex items-center gap-1">
                    <Phone className="w-3.5 h-3.5 text-amber-600" /> +91 81463-04161
                  </a>
                  <a href="tel:9872114161" className="hover:text-amber-700 flex items-center gap-1">
                    <Phone className="w-3.5 h-3.5 text-amber-600" /> +91 98721-14161
                  </a>
                </div>
              </div>

              <div className="flex flex-wrap justify-center gap-3 pt-1">
                <button
                  onClick={() => setShowRegModal(true)}
                  className="px-6 py-2.5 rounded-full bg-gradient-to-r from-amber-500 to-yellow-400 text-black font-black text-xs sm:text-sm uppercase tracking-wider shadow-lg hover:scale-105 transition-all flex items-center gap-2"
                >
                  <Sparkles className="w-4 h-4" /> Contestant Registration
                </button>
                <a
                  href="https://wa.me/918146304161?text=Hi%2C%20I%20am%20interested%20in%20Miss%20%26%20Mrs%20Curvy%20Star%20of%20India%20Season%201"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2.5 rounded-full bg-[#25D366] text-black font-black text-xs sm:text-sm hover:bg-[#22bf5b] transition-all flex items-center gap-2 shadow-md"
                >
                  <Phone className="w-4 h-4" /> WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM PERSISTENT CONTROL BAR (OFF-WHITE LUXURY THEME) */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#f5f3ee]/95 backdrop-blur-md border-t border-amber-300 shadow-xl px-2 sm:px-4 md:px-6 py-1.5 sm:py-2 md:py-2.5">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-1.5 sm:gap-2 md:gap-4">
          {/* Left - Slide Navigation & AutoPlay */}
          <div className="flex items-center space-x-1 sm:space-x-1.5 md:space-x-2 shrink-0">
            <button
              onClick={prevSlide}
              className="bg-white hover:bg-amber-100 text-slate-800 border border-amber-200 rounded-lg p-1.5 sm:p-2 md:p-2.5 shadow-sm transition-all"
              title="Previous Slide"
            >
              <ChevronLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-amber-700" />
            </button>

            <button
              onClick={nextSlide}
              className="bg-white hover:bg-amber-100 text-slate-800 border border-amber-200 rounded-lg p-1.5 sm:p-2 md:p-2.5 shadow-sm transition-all"
              title="Next Slide"
            >
              <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-amber-700" />
            </button>

            <button
              onClick={toggleAutoPlay}
              className={`rounded-lg p-1.5 sm:p-2 md:p-2.5 shadow-sm transition-all ${
                isPlaying
                  ? 'bg-amber-500 text-black font-bold'
                  : 'bg-white hover:bg-amber-100 text-slate-800 border border-amber-200'
              }`}
              title={isPlaying ? 'Pause AutoPlay' : 'Start AutoPlay'}
            >
              {isPlaying ? (
                <Pause className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5" />
              ) : (
                <Play className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-amber-700" />
              )}
            </button>
          </div>

          {/* Center - Slide Pill Indicators */}
          <div className="flex items-center space-x-1 sm:space-x-1.5 overflow-x-auto py-0.5 scrollbar-none px-1">
            {slides.map((slide, index) => (
              <button
                key={slide.id}
                onClick={() => goToSlide(index)}
                className={`flex items-center space-x-1 px-1.5 py-1 sm:px-2.5 sm:py-1.5 rounded-lg transition-all flex-shrink-0 text-[10px] sm:text-xs font-bold ${
                  currentSlide === index
                    ? 'bg-amber-500 text-black shadow-md border border-amber-600'
                    : 'bg-white hover:bg-amber-50 border border-amber-200 text-slate-700'
                }`}
              >
                <slide.icon className={`w-3 h-3 sm:w-3.5 sm:h-3.5 ${currentSlide === index ? 'text-black' : 'text-amber-700'}`} />
                <span className="hidden md:inline">{slide.name}</span>
                {currentSlide === index && (
                  <div className="w-1.5 h-1.5 rounded-full bg-black animate-pulse" />
                )}
              </button>
            ))}
          </div>

          {/* Right - Slide Counter & Audio Mute Button */}
          <div className="flex items-center space-x-1.5 sm:space-x-2 md:space-x-3 shrink-0">
            <div className="text-[10px] sm:text-xs md:text-sm text-slate-700 font-black">
              <span className="text-amber-800">{currentSlide + 1}</span>
              <span className="mx-0.5 sm:mx-1">/</span>
              <span>{slides.length}</span>
            </div>

            <div className="h-4 sm:h-5 w-px bg-amber-300 hidden sm:block" />

            <button
              onClick={toggleMute}
              className={`rounded-lg p-1.5 sm:p-2 md:p-2.5 shadow-sm transition-all ${
                isMuted
                  ? 'bg-white hover:bg-slate-100 text-slate-400 border border-slate-200'
                  : 'bg-amber-500 text-black font-bold'
              }`}
              title={isMuted ? 'Unmute Audio (Fashion Theme)' : 'Mute Audio'}
            >
              {isMuted ? (
                <VolumeX className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5" />
              ) : (
                <Volume2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Bottom Progress Bar */}
        <div className="mt-1">
          <div className="h-1 bg-amber-200/80 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-amber-600 to-yellow-500 rounded-full transition-all duration-300"
              style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
            />
          </div>
        </div>
      </div>

      {/* Audio Element with Fashion - Theme Of Fashion.mp3 */}
      <audio
        ref={audioRef}
        src="/audio/fashion-theme.mp3"
        loop
        preload="auto"
        muted={isMuted}
        autoPlay={!isMuted}
      />

      {/* REGISTRATION MODAL WITH FORMSUBMIT (Opens only on click, off-white background) */}
      <RegistrationModal 
        externalOpen={showRegModal} 
        onExternalClose={() => setShowRegModal(false)} 
      />

      {/* SPONSOR MODAL */}
      {showSponsorModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="relative w-full max-w-md rounded-3xl bg-[#fbf9f5] border-2 border-amber-400 p-6 shadow-2xl space-y-4 text-left text-slate-900 font-sans">
            <button
              onClick={() => setShowSponsorModal(false)}
              className="absolute top-4 right-4 p-2 rounded-full bg-amber-100 text-slate-700 hover:bg-amber-200 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="space-y-1">
              <span className="text-[10px] font-black uppercase tracking-widest text-amber-800">Sponsorship Inquiry</span>
              <h3 className="text-xl font-black font-serif-luxury text-slate-950">
                {selectedSponsorTier}
              </h3>
            </div>

            <p className="text-xs font-bold text-slate-700 leading-relaxed">
              Connect directly with Be Star Entertainment for custom branding, stage presence, booth allocations, and VIP passes.
            </p>

            <div className="p-3.5 rounded-xl bg-amber-100/90 border border-amber-300 space-y-1">
              <div className="text-xs font-black text-amber-900">Direct Contact Hotlines:</div>
              <div className="text-xs font-mono font-black text-slate-950 flex items-center gap-2">
                <a href="tel:8146304161" className="hover:text-amber-800 flex items-center gap-1">
                  <Phone className="w-3.5 h-3.5 text-amber-700" /> 81463-04161
                </a>
                <span>/</span>
                <a href="tel:9872114161" className="hover:text-amber-800 flex items-center gap-1">
                  <Phone className="w-3.5 h-3.5 text-amber-700" /> 98721-14161
                </a>
              </div>
            </div>

            <div className="flex gap-2 pt-2">
              <a
                href={`https://wa.me/918146304161?text=Hi%2C%20we%20are%20interested%20in%20sponsoring%20${encodeURIComponent(selectedSponsorTier)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2.5 rounded-xl bg-[#25D366] text-black font-black text-xs uppercase tracking-wider text-center flex items-center justify-center gap-1.5 shadow-md"
              >
                <Phone className="w-3.5 h-3.5" /> WhatsApp Desk
              </a>
              <button
                onClick={() => setShowSponsorModal(false)}
                className="px-4 py-2.5 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-800 font-bold text-xs"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StarOfIndiaPageant;
