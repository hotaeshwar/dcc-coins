import React, { useState, useEffect } from 'react';
import { 
  TrendingUp, 
  Coins,
  Sparkles,
  Shield,
  Zap,
  Globe,
  DollarSign,
  Gem,
  Database,
  Activity,
  Lock,
  Network,
  ChevronLeft,
  ChevronRight,
  Volume2,
  VolumeX,
  ArrowRight,
  Building2,
  Heart
} from 'lucide-react';

const CCACoins = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [strategySlide, setStrategySlide] = useState(0);
  const [techSlide, setTechSlide] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isMuted, setIsMuted] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const audioRef = React.useRef(null);

  const directLevels = [
    { percentage: '1%', value: '$1000' },
    { percentage: '2%', value: '$1000' },
    { percentage: '3%', value: '$1000' },
    { percentage: '4%', value: '$1000' }
  ];

  const strategies = [
    { 
      icon: TrendingUp, 
      title: 'DCA', 
      subtitle: '(Dollar Cost Averaging)',
      color: 'from-amber-400 to-yellow-600'
    },
    { 
      icon: Coins, 
      title: 'CCA', 
      subtitle: '(Coin Cost Averaging)',
      color: 'from-yellow-500 to-amber-700'
    },
    { 
      icon: Shield, 
      title: 'FSC', 
      subtitle: '(Fundamental Strong Coin)',
      color: 'from-amber-500 to-orange-600'
    },
    { 
      icon: Sparkles, 
      title: 'SIP', 
      subtitle: '(Smart Investment Plan)',
      color: 'from-yellow-400 to-amber-600'
    },
    { 
      icon: Activity, 
      title: 'News & Update', 
      subtitle: '',
      color: 'from-amber-400 to-yellow-500'
    },
    { 
      icon: Zap, 
      title: 'Events', 
      subtitle: '',
      color: 'from-yellow-500 to-amber-600'
    },
    { 
      icon: Database, 
      title: 'Halving', 
      subtitle: '',
      color: 'from-amber-500 to-yellow-700'
    }
  ];

  const technologies = [
    {
      icon: Network,
      name: 'Blockchain Technology',
      coins: 'ADA Coin, TRX Coin, BNB',
      gradient: 'from-amber-500 to-yellow-600'
    },
    {
      icon: Globe,
      name: 'Metaverse Technology',
      coins: 'MANA Coin, GALA Coin',
      gradient: 'from-yellow-500 to-amber-700'
    },
    {
      icon: Gem,
      name: 'NFT (Non-Fungible Token)',
      coins: 'GMT, APT, Baby Doge',
      gradient: 'from-amber-400 to-orange-600'
    },
    {
      icon: Lock,
      name: 'DeFi (Decentralized Coin)',
      coins: 'BIT, SUSHI, UNI',
      gradient: 'from-yellow-600 to-amber-700'
    },
    {
      icon: Shield,
      name: 'CeFi (Centralized Coin)',
      coins: 'NEXO, VISION, SWISSBORG',
      gradient: 'from-amber-500 to-yellow-600'
    },
    {
      icon: Sparkles,
      name: 'Web 3 + Gaming',
      coins: 'THETA, DOGE, SOL, DOT',
      gradient: 'from-yellow-400 to-amber-600'
    },
    {
      icon: Coins,
      name: 'Meme Coin',
      coins: 'DOGE, PEPE, BabyDoll',
      gradient: 'from-amber-400 to-yellow-500'
    },
    {
      icon: DollarSign,
      name: 'DEX Coin',
      coins: 'SUSHI, UNI, BIT Coin',
      gradient: 'from-yellow-500 to-orange-600'
    },
    {
      icon: Database,
      name: 'BRC 20',
      coins: 'PEPE, MULTIBIT, ORDI',
      gradient: 'from-amber-500 to-yellow-700'
    },
    {
      icon: Zap,
      name: 'AI Technology',
      coins: 'AI Coin, RENDER, NEAR, FET, FIL, GRT',
      gradient: 'from-yellow-600 to-amber-700'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % 5);
    setStrategySlide(0);
    setTechSlide(0);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + 5) % 5);
    setStrategySlide(0);
    setTechSlide(0);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setStrategySlide(0);
    setTechSlide(0);
  };

  const nextStrategy = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setStrategySlide((prev) => (prev + 1) % strategies.length);
      setIsTransitioning(false);
    }, 300);
  };

  const prevStrategy = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setStrategySlide((prev) => (prev - 1 + strategies.length) % strategies.length);
      setIsTransitioning(false);
    }, 300);
  };

  const nextTech = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setTechSlide((prev) => (prev + 1) % technologies.length);
      setIsTransitioning(false);
    }, 300);
  };

  const prevTech = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setTechSlide((prev) => (prev - 1 + technologies.length) % technologies.length);
      setIsTransitioning(false);
    }, 300);
  };

  const toggleMute = () => {
    const newMutedState = !isMuted;
    setIsMuted(newMutedState);
    
    if (audioRef.current) {
      if (newMutedState) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(err => console.log('Audio play failed:', err));
      }
    }
  };

  React.useEffect(() => {
    if (audioRef.current && !isMuted) {
      audioRef.current.play().catch(err => console.log('Audio play failed:', err));
    }
  }, []);

  const audioFile = '/audio/Inspiring and Uplifting Background Music For Videos & Presentations.mp3';
  const logoPath = '/audio/logo.jpeg';

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900 text-white overflow-hidden relative">
      {/* Animated Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-amber-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute top-40 right-10 w-64 h-64 bg-blue-900 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-64 h-64 bg-yellow-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
      </div>

      {/* Slide Container */}
      <div className="relative z-10 h-screen overflow-hidden">
        <div 
          className="flex h-full transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {/* INTRO SLIDE */}
          <div className="min-w-full h-full flex items-center justify-center px-6 py-4 relative overflow-y-auto">
            <div className="w-full max-w-5xl relative z-10">
              {/* Floating Icons Background */}
              <div className="absolute inset-0 pointer-events-none opacity-30">
                <Building2 className="absolute top-5 left-5 md:top-8 md:left-8 w-8 h-8 md:w-12 md:h-12 text-amber-500/40 animate-float" />
                <DollarSign className="absolute top-8 right-8 md:top-12 md:right-12 w-10 h-10 md:w-16 md:h-16 text-yellow-500/40 animate-float-delayed" />
                <Coins className="absolute bottom-8 left-8 md:bottom-12 md:left-12 w-12 h-12 md:w-20 md:h-20 text-amber-600/40 animate-float-slow" />
                <Sparkles className="absolute bottom-5 right-5 md:bottom-8 md:right-8 w-6 h-6 md:w-10 md:h-10 text-yellow-400/40 animate-float" />
              </div>

              {/* Main Content */}
              <div className="text-center relative">
                {/* Logo - Fixed, no floating */}
                <div className="mb-3 md:mb-4 relative">
                  <div className="inline-block relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 rounded-full blur-xl md:blur-2xl opacity-30"></div>
                    <img 
                      src={logoPath} 
                      alt="Arbimeta Logo" 
                      className="relative w-16 h-16 md:w-24 md:h-24 lg:w-28 lg:h-28 mx-auto object-contain drop-shadow-2xl"
                    />
                  </div>
                </div>

                {/* Welcome Text */}
                <div className="mb-3 md:mb-4 overflow-hidden">
                  <h1 className="text-2xl md:text-4xl lg:text-5xl font-black mb-1 md:mb-2 animate-slide-up leading-tight">
                    <span className="bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 bg-clip-text text-transparent inline-block animate-gradient-x">
                      Welcome to
                    </span>
                  </h1>
                  
                  <div className="relative inline-block">
                    <h2 className="text-3xl md:text-6xl lg:text-7xl xl:text-8xl font-black bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-600 bg-clip-text text-transparent animate-slide-up animation-delay-300 tracking-tight leading-none">
                      CCA COINS
                    </h2>
                    <div className="absolute -bottom-1 left-0 right-0 h-0.5 md:h-1 bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 animate-expand"></div>
                  </div>
                </div>

                {/* Tagline */}
                <p className="text-sm md:text-xl lg:text-2xl text-gray-300 font-semibold mb-4 md:mb-6 animate-fade-in animation-delay-600 px-4">
                  <span className="bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">
                    Your Gateway to Smart Crypto Investments
                  </span>
                </p>

                {/* Feature Pills */}
                <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-4 md:mb-6 animate-fade-in animation-delay-900 px-4">
                  <div className="group bg-gradient-to-r from-amber-600/20 to-yellow-600/20 backdrop-blur-sm border border-amber-500/30 rounded-full px-3 md:px-5 py-1.5 md:py-2 hover:scale-110 transition-all duration-300 hover:shadow-amber-500/50 hover:shadow-lg">
                    <span className="text-xs md:text-sm font-semibold text-amber-300 flex items-center gap-1 md:gap-2">
                      <TrendingUp className="w-3 h-3 md:w-4 md:h-4" />
                      <span>Smart Strategies</span>
                    </span>
                  </div>
                  
                  <div className="group bg-gradient-to-r from-yellow-600/20 to-amber-600/20 backdrop-blur-sm border border-yellow-500/30 rounded-full px-3 md:px-5 py-1.5 md:py-2 hover:scale-110 transition-all duration-300 hover:shadow-yellow-500/50 hover:shadow-lg">
                    <span className="text-xs md:text-sm font-semibold text-yellow-300 flex items-center gap-1 md:gap-2">
                      <Shield className="w-3 h-3 md:w-4 md:h-4" />
                      <span>Secure Platform</span>
                    </span>
                  </div>
                  
                  <div className="group bg-gradient-to-r from-amber-600/20 to-yellow-500/20 backdrop-blur-sm border border-amber-500/30 rounded-full px-3 md:px-5 py-1.5 md:py-2 hover:scale-110 transition-all duration-300 hover:shadow-amber-500/50 hover:shadow-lg">
                    <span className="text-xs md:text-sm font-semibold text-amber-300 flex items-center gap-1 md:gap-2">
                      <Sparkles className="w-3 h-3 md:w-4 md:h-4" />
                      <span>High Returns</span>
                    </span>
                  </div>
                </div>

                {/* CTA Button */}
                <button
                  onClick={nextSlide}
                  className="group relative inline-flex items-center gap-2 bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-500 hover:to-yellow-500 text-slate-900 text-sm md:text-lg font-bold px-5 md:px-8 py-2.5 md:py-4 rounded-full shadow-2xl hover:shadow-amber-500/50 transition-all duration-500 hover:scale-110 animate-bounce-slow animation-delay-1200"
                >
                  <span>Start Your Journey</span>
                  <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-2 transition-transform duration-300" />
                  
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-amber-400 rounded-full blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
                </button>

                {/* Stats Counter */}
                <AnimatedStats />
              </div>
            </div>
          </div>

          {/* Slide 1 - Header & Investment Flow - COMPACT */}
          <div className="min-w-full h-full flex items-center justify-center px-4 py-4">
            <div className="w-full max-w-5xl">
              <div className="text-center animate-fade-in">
                {/* Logo at top - Fixed */}
                <div className="flex items-center justify-center gap-3 md:gap-4 mb-4">
                  <img 
                    src={logoPath} 
                    alt="Logo" 
                    className="w-14 h-14 md:w-20 md:h-20 object-contain drop-shadow-lg"
                  />
                  <h1 className="text-4xl md:text-6xl lg:text-7xl font-black bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 bg-clip-text text-transparent tracking-tight">
                    CCA COINS
                  </h1>
                </div>
                
                <div className="inline-block bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-sm border border-amber-500/30 rounded-full px-6 md:px-8 py-2.5 md:py-3.5 mb-8 md:mb-12 shadow-2xl hover:shadow-amber-500/30 transition-all duration-500 hover:scale-105">
                  <span className="text-base md:text-xl lg:text-2xl font-semibold">
                    <span className="text-gray-300">Self ID should be of Minimum</span>{' '}
                    <span className="text-amber-400 font-bold text-lg md:text-2xl lg:text-3xl">$1000</span>
                  </span>
                </div>

                <div className="max-w-4xl mx-auto">
                  <div className="flex items-center justify-center gap-4 md:gap-6 flex-wrap relative">
                    <div className="bg-gradient-to-br from-amber-600 to-yellow-600 rounded-xl px-4 md:px-6 py-2 md:py-3 shadow-lg z-0 flex-shrink-0">
                      <span className="text-sm md:text-base lg:text-lg font-semibold text-slate-900">DIRECT</span>
                    </div>
                    {directLevels.map((level, index) => (
                      <React.Fragment key={index}>
                        <div 
                          className="relative group cursor-pointer flex-shrink-0"
                          style={{ zIndex: hoveredCard === index ? 50 : 1 }}
                          onMouseEnter={() => setHoveredCard(index)}
                          onMouseLeave={() => setHoveredCard(null)}
                        >
                          <div className={`absolute inset-0 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full blur-lg transition-opacity duration-500 ${
                            hoveredCard === index ? 'opacity-100' : 'opacity-50'
                          }`}></div>
                          <div className={`relative bg-white rounded-full w-16 h-16 md:w-24 md:h-24 flex items-center justify-center border-3 md:border-4 shadow-xl transition-all duration-500 ${
                            hoveredCard === index 
                              ? 'scale-150 border-yellow-400 shadow-2xl shadow-amber-500/60 border-amber-500' 
                              : 'scale-100 border-amber-500'
                          }`}>
                            <div className="text-center">
                              <div className={`font-bold text-slate-900 transition-all duration-500 ${
                                hoveredCard === index ? 'text-2xl md:text-3xl' : 'text-base md:text-xl'
                              }`}>
                                {level.percentage}
                              </div>
                            </div>
                          </div>
                        </div>
                        {index < directLevels.length - 1 && (
                          <div className="w-4 md:w-8 h-1 md:h-2 bg-gradient-to-r from-amber-400 to-yellow-500 flex-shrink-0 z-0"></div>
                        )}
                      </React.Fragment>
                    ))}
                    <div 
                      className="bg-gradient-to-br from-yellow-500 to-amber-600 rounded-xl px-5 md:px-8 py-3 md:py-5 shadow-2xl animate-pulse cursor-pointer transition-all duration-500 flex-shrink-0"
                      style={{ zIndex: hoveredCard === 'final' ? 50 : 1 }}
                      onMouseEnter={() => setHoveredCard('final')}
                      onMouseLeave={() => setHoveredCard(null)}
                    >
                      <span className={`font-black text-slate-900 transition-all duration-500 block ${
                        hoveredCard === 'final' ? 'text-4xl md:text-5xl scale-150' : 'text-2xl md:text-3xl'
                      }`}>5%</span>
                      <span className={`font-semibold text-slate-900 transition-all duration-500 block ${
                        hoveredCard === 'final' ? 'text-base md:text-lg' : 'text-xs md:text-sm'
                      }`}>CCA coins</span>
                    </div>
                  </div>
                  <div className="text-amber-400 font-bold text-xl md:text-3xl mt-6 md:mt-8 animate-bounce">
                    You $1000
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Slide 2 - Strategy with 3D Flip Carousel */}
          <div className="min-w-full h-full flex items-center justify-center px-4 py-8">
            <div className="w-full max-w-4xl">
              {/* Logo at top - Fixed */}
              <div className="flex items-center justify-center gap-4 mb-12">
                <img 
                  src={logoPath} 
                  alt="Logo" 
                  className="w-12 h-12 md:w-16 md:h-16 object-contain drop-shadow-lg"
                />
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-center bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">
                  Strategy
                </h2>
              </div>
              
              {/* Single Strategy Card Display with 3D Flip */}
              <div className="relative flex items-center justify-center perspective-container">
                {/* Previous Button */}
                <button
                  onClick={prevStrategy}
                  className="absolute left-0 z-10 bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-500 hover:to-yellow-500 text-slate-900 rounded-full p-3 md:p-4 shadow-2xl hover:shadow-amber-500/50 transition-all duration-300 hover:scale-110"
                >
                  <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
                </button>

                {/* Strategy Card */}
                <div className="w-full max-w-xl mx-16 md:mx-20">
                  {(() => {
                    const strategy = strategies[strategySlide];
                    const Icon = strategy.icon;
                    return (
                      <div className={`group relative strategy-card ${isTransitioning ? 'flipping' : ''}`}>
                        <div className={`absolute inset-0 bg-gradient-to-r ${strategy.color} rounded-3xl blur-2xl opacity-70 animate-pulse-slow`}></div>
                        
                        <div className="relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-md border-2 border-amber-500/50 rounded-3xl p-12 md:p-16 shadow-2xl transform hover:scale-105 transition-all duration-500">
                          <div className={`w-24 h-24 md:w-32 md:h-32 bg-gradient-to-r ${strategy.color} rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-2xl icon-bounce`}>
                            <Icon className="w-12 h-12 md:w-16 md:h-16 text-slate-900" />
                          </div>
                          
                          <h3 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4 text-center text-amber-400">
                            {strategy.title}
                          </h3>
                          
                          {strategy.subtitle && (
                            <p className="text-lg md:text-xl lg:text-2xl text-gray-300 font-semibold text-center">
                              {strategy.subtitle}
                            </p>
                          )}
                        </div>
                      </div>
                    );
                  })()}
                </div>

                {/* Next Button */}
                <button
                  onClick={nextStrategy}
                  className="absolute right-0 z-10 bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-500 hover:to-yellow-500 text-slate-900 rounded-full p-3 md:p-4 shadow-2xl hover:shadow-amber-500/50 transition-all duration-300 hover:scale-110"
                >
                  <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
                </button>
              </div>

              {/* Strategy Indicators */}
              <div className="flex justify-center gap-3 mt-12">
                {strategies.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setStrategySlide(index)}
                    className={`transition-all duration-300 rounded-full ${
                      strategySlide === index
                        ? 'bg-gradient-to-r from-amber-500 to-yellow-500 w-12 h-3'
                        : 'bg-white/30 hover:bg-amber-400/50 w-3 h-3'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Slide 3 - Technologies with Slide & Rotate Transition */}
          <div className="min-w-full h-full flex items-center justify-center px-4 py-8">
            <div className="w-full max-w-6xl">
              {/* Logo at top - Fixed */}
              <div className="flex items-center justify-center gap-4 mb-12">
                <img 
                  src={logoPath} 
                  alt="Logo" 
                  className="w-12 h-12 md:w-16 md:h-16 object-contain drop-shadow-lg"
                />
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-center bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">
                  Technologies Used
                </h2>
              </div>
              
              {/* Two Card Display with Slide Transition */}
              <div className="relative flex items-center justify-center">
                {/* Previous Button */}
                <button
                  onClick={prevTech}
                  className="absolute left-0 z-10 bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-500 hover:to-yellow-500 text-slate-900 rounded-full p-3 md:p-4 shadow-2xl hover:shadow-amber-500/50 transition-all duration-300 hover:scale-110"
                >
                  <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
                </button>

                {/* Technology Cards */}
                <div className="w-full max-w-5xl mx-16 md:mx-20 overflow-hidden">
                  <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 tech-cards ${isTransitioning ? 'sliding' : ''}`}>
                    {/* Left Card - Technology Name */}
                    {(() => {
                      const tech = technologies[techSlide];
                      const Icon = tech.icon;
                      return (
                        <div className="group relative tech-card-left">
                          <div className={`absolute inset-0 bg-gradient-to-r ${tech.gradient} rounded-3xl blur-xl opacity-50 group-hover:opacity-70 transition-all duration-500`}></div>
                          
                          <div className="relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-md border-2 border-amber-500/50 rounded-3xl p-8 md:p-12 shadow-2xl hover:scale-105 transition-all duration-500 h-full flex flex-col items-center justify-center">
                            <div className={`w-20 h-20 md:w-28 md:h-28 bg-gradient-to-r ${tech.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-2xl icon-spin`}>
                              <Icon className="w-10 h-10 md:w-14 md:h-14 text-slate-900" />
                            </div>
                            
                            <h3 className="text-2xl md:text-3xl lg:text-4xl font-black text-center text-amber-400">
                              {tech.name}
                            </h3>
                          </div>
                        </div>
                      );
                    })()}

                    {/* Right Card - Coins List */}
                    {(() => {
                      const tech = technologies[techSlide];
                      return (
                        <div className="group relative tech-card-right">
                          <div className={`absolute inset-0 bg-gradient-to-r ${tech.gradient} rounded-3xl blur-xl opacity-50 group-hover:opacity-70 transition-all duration-500`}></div>
                          
                          <div className="relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-md border-2 border-amber-500/50 rounded-3xl p-8 md:p-12 shadow-2xl hover:scale-105 transition-all duration-500 h-full flex flex-col items-center justify-center">
                            <div className="mb-6">
                              <div className={`w-16 h-16 md:w-20 md:h-20 bg-gradient-to-r ${tech.gradient} rounded-xl flex items-center justify-center mx-auto shadow-xl icon-pulse`}>
                                <Coins className="w-8 h-8 md:w-10 md:h-10 text-slate-900" />
                              </div>
                            </div>
                            
                            <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 font-semibold text-center leading-relaxed">
                              {tech.coins}
                            </p>
                          </div>
                        </div>
                      );
                    })()}
                  </div>
                </div>

                {/* Next Button */}
                <button
                  onClick={nextTech}
                  className="absolute right-0 z-10 bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-500 hover:to-yellow-500 text-slate-900 rounded-full p-3 md:p-4 shadow-2xl hover:shadow-amber-500/50 transition-all duration-300 hover:scale-110"
                >
                  <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
                </button>
              </div>

              {/* Technology Indicators */}
              <div className="flex justify-center gap-3 mt-12">
                {technologies.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setTechSlide(index)}
                    className={`transition-all duration-300 rounded-full ${
                      techSlide === index
                        ? 'bg-gradient-to-r from-amber-500 to-yellow-500 w-12 h-3'
                        : 'bg-white/30 hover:bg-amber-400/50 w-3 h-3'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Slide 4 - Thank You Page */}
          <div className="min-w-full h-full flex items-center justify-center px-6 py-8 relative overflow-y-auto">
            <div className="w-full max-w-3xl relative z-10">
              {/* Floating Icons Background */}
              <div className="absolute inset-0 pointer-events-none opacity-20">
                <Sparkles className="absolute top-10 left-10 w-12 h-12 text-amber-500/40 animate-float" />
                <Heart className="absolute top-20 right-20 w-16 h-16 text-yellow-500/40 animate-float-delayed" />
                <Coins className="absolute bottom-20 left-20 w-20 h-20 text-amber-600/40 animate-float-slow" />
                <Shield className="absolute bottom-10 right-10 w-10 h-10 text-yellow-400/40 animate-float" />
              </div>

              {/* Main Content */}
              <div className="text-center relative">
                {/* Logo - Fixed */}
                <div className="mb-6 md:mb-8 relative animate-fade-in">
                  <div className="inline-block relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 rounded-full blur-2xl opacity-40"></div>
                    <img 
                      src={logoPath} 
                      alt="CCA Coins Logo" 
                      className="relative w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 mx-auto object-contain drop-shadow-2xl"
                    />
                  </div>
                </div>

                {/* Thank You Text */}
                <div className="mb-6 md:mb-8 animate-slide-up animation-delay-300">
                  <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-3 md:mb-4">
                    <span className="bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 bg-clip-text text-transparent animate-gradient-x">
                      Thank You!
                    </span>
                  </h1>
                  
                  <div className="w-24 md:w-32 h-1 bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 mx-auto rounded-full animate-expand"></div>
                </div>

                {/* Subtext */}
                <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 font-semibold mb-6 md:mb-8 animate-fade-in animation-delay-600 px-4">
                  <span className="bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">
                    For Choosing CCA Coins
                  </span>
                </p>

                {/* Additional Message */}
                <div className="animate-fade-in animation-delay-900">
                  <p className="text-sm md:text-base lg:text-lg text-gray-400 font-medium mb-6 px-4 leading-relaxed">
                    Your journey to smart crypto investments starts here
                  </p>
                  
                  {/* Decorative Elements */}
                  <div className="flex justify-center items-center gap-3 md:gap-4 mb-6">
                    <div className="w-12 md:w-16 h-1 bg-gradient-to-r from-transparent to-amber-500 rounded-full"></div>
                    <Heart className="w-6 h-6 md:w-8 md:h-8 text-amber-400 animate-pulse" />
                    <div className="w-12 md:w-16 h-1 bg-gradient-to-l from-transparent to-amber-500 rounded-full"></div>
                  </div>
                </div>

                {/* Contact Info or CTA */}
                <div className="animate-fade-in animation-delay-1200">
                  <div className="inline-block bg-gradient-to-r from-amber-600/20 to-yellow-600/20 backdrop-blur-sm border border-amber-500/30 rounded-2xl px-6 md:px-10 py-3 md:py-5 shadow-2xl hover:shadow-amber-500/30 transition-all duration-500 hover:scale-105">
                    <p className="text-base md:text-xl font-bold text-amber-400 mb-1">
                      Stay Connected
                    </p>
                    <p className="text-xs md:text-sm text-gray-400">
                      Join thousands of successful investors
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="fixed left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-500 hover:to-yellow-500 text-slate-900 rounded-full p-3 md:p-4 shadow-2xl hover:shadow-amber-500/50 transition-all duration-300 hover:scale-110"
      >
        <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
      </button>

      <button
        onClick={nextSlide}
        className="fixed right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-500 hover:to-yellow-500 text-slate-900 rounded-full p-3 md:p-4 shadow-2xl hover:shadow-amber-500/50 transition-all duration-300 hover:scale-110"
      >
        <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
      </button>

      {/* Slide Indicators */}
      <div className="fixed bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 z-20 flex gap-3 md:gap-4">
        {[0, 1, 2, 3, 4].map((index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              currentSlide === index
                ? 'bg-gradient-to-r from-amber-500 to-yellow-500 w-12 md:w-16 h-3 md:h-4'
                : 'bg-white/30 hover:bg-amber-400/50 w-3 md:w-4 h-3 md:h-4'
            }`}
          />
        ))}
      </div>

      {/* Mute/Unmute Button */}
      <button
        onClick={toggleMute}
        className="fixed top-6 md:top-10 right-4 md:right-8 z-20 bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-500 hover:to-yellow-500 text-slate-900 rounded-full p-3 md:p-4 shadow-2xl hover:shadow-amber-500/50 transition-all duration-300 hover:scale-110"
        title={isMuted ? "Unmute" : "Mute"}
      >
        {isMuted ? (
          <VolumeX className="w-5 h-5 md:w-6 md:h-6" />
        ) : (
          <Volume2 className="w-5 h-5 md:w-6 md:h-6" />
        )}
      </button>

      {/* Audio Element */}
      <audio
        ref={audioRef}
        src={audioFile}
        loop
        preload="auto"
      />

      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(20px, -20px) scale(1.1); }
          50% { transform: translate(-20px, 20px) scale(0.9); }
          75% { transform: translate(20px, 20px) scale(1.05); }
        }

        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes pulse-slow {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(10deg); }
        }

        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(-10deg); }
        }

        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(5deg); }
        }

        @keyframes slide-up {
          from { opacity: 0; transform: translateY(50px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes expand {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }

        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        @keyframes count-up {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes flip-3d {
          0% { transform: rotateY(0deg) scale(1); }
          50% { transform: rotateY(90deg) scale(0.8); }
          100% { transform: rotateY(0deg) scale(1); }
        }

        @keyframes slide-rotate-left {
          0% { transform: translateX(0) rotate(0deg); opacity: 1; }
          50% { transform: translateX(-100px) rotate(-15deg); opacity: 0; }
          51% { transform: translateX(100px) rotate(15deg); opacity: 0; }
          100% { transform: translateX(0) rotate(0deg); opacity: 1; }
        }

        @keyframes slide-rotate-right {
          0% { transform: translateX(0) rotate(0deg); opacity: 1; }
          50% { transform: translateX(100px) rotate(15deg); opacity: 0; }
          51% { transform: translateX(-100px) rotate(-15deg); opacity: 0; }
          100% { transform: translateX(0) rotate(0deg); opacity: 1; }
        }

        @keyframes icon-bounce {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-10px) scale(1.1); }
        }

        @keyframes icon-spin {
          0% { transform: rotate(0deg) scale(1); }
          50% { transform: rotate(180deg) scale(1.1); }
          100% { transform: rotate(360deg) scale(1); }
        }

        @keyframes icon-pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.15); }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }

        .animation-delay-300 {
          animation-delay: 0.3s;
        }

        .animation-delay-600 {
          animation-delay: 0.6s;
        }

        .animation-delay-900 {
          animation-delay: 0.9s;
        }

        .animation-delay-1200 {
          animation-delay: 1.2s;
        }

        .animation-delay-1500 {
          animation-delay: 1.5s;
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }

        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }

        .animate-float-slow {
          animation: float-slow 10s ease-in-out infinite;
        }

        .animate-slide-up {
          animation: slide-up 1s ease-out forwards;
        }

        .animate-expand {
          animation: expand 1s ease-out forwards;
        }

        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
        }

        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }

        .animate-count-up {
          animation: count-up 0.3s ease-out forwards;
        }

        .perspective-container {
          perspective: 1500px;
        }

        .strategy-card.flipping {
          animation: flip-3d 0.6s ease-in-out;
        }

        .tech-cards.sliding .tech-card-left {
          animation: slide-rotate-left 0.6s ease-in-out;
        }

        .tech-cards.sliding .tech-card-right {
          animation: slide-rotate-right 0.6s ease-in-out;
        }

        .icon-bounce {
          animation: icon-bounce 2s ease-in-out infinite;
        }

        .icon-spin {
          animation: icon-spin 3s ease-in-out infinite;
        }

        .icon-pulse {
          animation: icon-pulse 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

// Animated Stats Component
const AnimatedStats = () => {
  const [users, setUsers] = useState(0);
  const [volume, setVolume] = useState(0);
  const [uptime, setUptime] = useState(0);

  useEffect(() => {
    const usersInterval = setInterval(() => {
      setUsers(prev => {
        if (prev >= 10000) {
          clearInterval(usersInterval);
          return 10000;
        }
        return prev + 200;
      });
    }, 15);

    const volumeInterval = setInterval(() => {
      setVolume(prev => {
        if (prev >= 50) {
          clearInterval(volumeInterval);
          return 50;
        }
        return prev + 1;
      });
    }, 30);

    const uptimeInterval = setInterval(() => {
      setUptime(prev => {
        if (prev >= 99.9) {
          clearInterval(uptimeInterval);
          return 99.9;
        }
        return prev + 2;
      });
    }, 30);

    return () => {
      clearInterval(usersInterval);
      clearInterval(volumeInterval);
      clearInterval(uptimeInterval);
    };
  }, []);

  const formatNumber = (num) => {
    if (num >= 1000) {
      return (num / 1000).toFixed(0) + 'K';
    }
    return num;
  };

  return (
    <div className="grid grid-cols-3 gap-3 md:gap-6 mt-5 md:mt-8 animate-fade-in animation-delay-1500 px-4">
      <div className="text-center">
        <div className="text-xl md:text-3xl lg:text-4xl font-black bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent mb-1 animate-count-up">
          {formatNumber(users)}+
        </div>
        <div className="text-xs md:text-sm text-gray-400 font-semibold">
          Active Users
        </div>
      </div>
      
      <div className="text-center">
        <div className="text-xl md:text-3xl lg:text-4xl font-black bg-gradient-to-r from-yellow-400 to-amber-600 bg-clip-text text-transparent mb-1 animate-count-up">
          ${volume}M+
        </div>
        <div className="text-xs md:text-sm text-gray-400 font-semibold">
          Trading Volume
        </div>
      </div>
      
      <div className="text-center">
        <div className="text-xl md:text-3xl lg:text-4xl font-black bg-gradient-to-r from-amber-500 to-yellow-500 bg-clip-text text-transparent mb-1 animate-count-up">
          {uptime.toFixed(1)}%
        </div>
        <div className="text-xs md:text-sm text-gray-400 font-semibold">
          Uptime
        </div>
      </div>
    </div>
  );
};

export default CCACoins;