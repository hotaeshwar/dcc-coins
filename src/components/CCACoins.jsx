import React, { useState, useEffect, useRef } from 'react';
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
  Heart,
  Cpu,
  Brain,
  Cloud,
  Server,
  Code,
  Terminal,
  Laptop,
  Cctv,
  Users,
  BarChart3,
  Smartphone,
  Router,
  Globe2,
  Wallet
} from 'lucide-react';

const CCACoins = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [strategySlide, setStrategySlide] = useState(0);
  const [techSlide, setTechSlide] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isMuted, setIsMuted] = useState(true); // Start muted to avoid autoplay issues
  const [isTransitioning, setIsTransitioning] = useState(false);
  const audioRef = useRef(null);

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
      icon: Cpu,
      name: 'AI Technology',
      coins: 'TAO, NEAR Protocol, XAI, WLD, ICP (Internet Computer), Ocean Protocol, GRT, INT, ENN',
      gradient: 'from-amber-400 to-yellow-600'
    },
    {
      icon: Network,
      name: 'Blockchain Technology',
      coins: 'TRX, ADA, SOLO, WALKER (5GOLD), ETH, BTRC, ETHERMAL, A+B+COIN, ARB COIN, SOLO COIN, XAIT, AXS, GOLD, MOND, SAND, CROW',
      gradient: 'from-amber-400 to-yellow-600'
    },
    {
      icon: Brain,
      name: 'Centralized Tech (CeFi)',
      coins: 'Vision Real, Real, Swiss bro, Momentum, Race Tewrace',
      gradient: 'from-amber-400 to-yellow-600'
    },
    {
      icon: Globe2,
      name: 'Web 3 Technology',
      coins: 'Theta, Doge, Osiim Protocol, File, Coinos, SOL, Polka dot, ICP (Internet Computer), ENS, GRT',
      gradient: 'from-amber-400 to-yellow-600'
    },
    {
      icon: Gem,
      name: 'NFT Technology',
      coins: 'GMT coin, APT coin, APE coin, Near Protocol, AXS coin, CHZ coin, ZORA coin, Baby Dog coin',
      gradient: 'from-amber-400 to-yellow-600'
    },
    {
      icon: Lock,
      name: 'DeFi Technology',
      coins: 'BIT coin, TWT coin (Trust wallet), Sushi coin (Sushi swipe), Uni coin (uni swipe), Cake coin (Pan cake swipe), 1 inch coin, Dodo coin, DYOX coin',
      gradient: 'from-amber-400 to-yellow-600'
    },
    {
      icon: Sparkles,
      name: 'Meme Coin Technology',
      coins: 'Doge, Shib, Pepe, Baby Dole, Akita, Ploti, kishu inu',
      gradient: 'from-amber-400 to-yellow-600'
    },
    {
      icon: DollarSign,
      name: 'DEX Technology',
      coins: 'Decentralized Exchange (DEX) Game coins and platforms',
      gradient: 'from-amber-400 to-yellow-600'
    },
    {
      icon: Database,
      name: 'BRC 20 Technology',
      coins: 'Pepe, Diorydi, Saints, Rats, MultiBit, ORD',
      gradient: 'from-amber-400 to-yellow-600'
    },
    {
      icon: Server,
      name: 'High-Tech Infrastructure',
      coins: 'Various infrastructure and protocol coins',
      gradient: 'from-amber-400 to-yellow-600'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % 5); // 5 slides now
    setStrategySlide(0);
    setTechSlide(0);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + 5) % 5); // 5 slides now
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
        // Create a promise chain to handle autoplay
        const playPromise = audioRef.current.play();
        if (playPromise !== undefined) {
          playPromise.catch(err => {
            console.log('Audio play failed:', err);
            // Auto-mute if play fails
            setIsMuted(true);
          });
        }
      }
    }
  };

  const audioFile = '/audio/Inspiring and Uplifting Background Music For Videos & Presentations.mp3';
  const logoPath = '/audio/logo.png';

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900 text-white overflow-hidden relative">
      {/* Animated Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 sm:top-16 md:top-20 left-5 sm:left-8 md:left-10 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-amber-600 rounded-full mix-blend-multiply filter blur-2xl sm:blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute top-20 sm:top-32 md:top-40 right-5 sm:right-8 md:right-10 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-blue-900 rounded-full mix-blend-multiply filter blur-2xl sm:blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-10 sm:bottom-16 md:bottom-20 left-1/2 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-yellow-600 rounded-full mix-blend-multiply filter blur-2xl sm:blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
      </div>

      {/* Slide Container */}
      <div className="relative z-10 h-screen overflow-hidden">
        <div 
          className="flex h-full transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {/* INTRO SLIDE */}
          <div className="min-w-full h-full flex items-center justify-center px-4 sm:px-6 lg:px-8 py-4 sm:py-6 relative overflow-y-auto">
            <div className="w-full max-w-xs sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-6xl relative z-10">
              {/* Floating Icons Background */}
              <div className="absolute inset-0 pointer-events-none opacity-30">
                <Building2 className="absolute top-2 left-2 sm:top-5 sm:left-5 md:top-8 md:left-8 w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-amber-500/40 animate-float" />
                <DollarSign className="absolute top-4 right-4 sm:top-8 sm:right-8 md:top-12 md:right-12 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 text-yellow-500/40 animate-float-delayed" />
                <Coins className="absolute bottom-4 left-4 sm:bottom-8 sm:left-8 md:bottom-12 md:left-12 w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 text-amber-600/40 animate-float-slow" />
                <Sparkles className="absolute bottom-2 right-2 sm:bottom-5 sm:right-5 md:bottom-8 md:right-8 w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 text-yellow-400/40 animate-float" />
              </div>

              {/* Main Content */}
              <div className="text-center relative">
                {/* Logo */}
                <div className="mb-2 sm:mb-3 md:mb-4 relative">
                  <div className="inline-block relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 rounded-full blur-lg sm:blur-xl md:blur-2xl opacity-30"></div>
                    <img 
                      src={logoPath} 
                      alt="CCA Logo" 
                      className="relative w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 xl:w-28 xl:h-28 mx-auto object-contain drop-shadow-2xl"
                    />
                  </div>
                </div>

                {/* Welcome Text */}
                <div className="mb-2 sm:mb-3 md:mb-4 overflow-hidden">
                  <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black mb-1 sm:mb-1.5 md:mb-2 animate-slide-up leading-tight px-2">
                    <span className="bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 bg-clip-text text-transparent inline-block animate-gradient-x">
                      Welcome to
                    </span>
                  </h1>
                  
                  <div className="relative inline-block">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-black bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-600 bg-clip-text text-transparent animate-slide-up animation-delay-300 tracking-tight leading-none px-2">
                      CCA COINS
                    </h2>
                    <div className="absolute -bottom-0.5 sm:-bottom-1 left-0 right-0 h-0.5 sm:h-0.5 md:h-1 bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 animate-expand"></div>
                  </div>
                </div>

                {/* Tagline */}
                <p className="text-xs sm:text-sm md:text-base lg:text-xl xl:text-2xl text-gray-300 font-semibold mb-3 sm:mb-4 md:mb-6 animate-fade-in animation-delay-600 px-4 sm:px-6">
                  <span className="bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">
                    Your Gateway to Smart Crypto Investments
                  </span>
                </p>

                {/* Feature Pills */}
                <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2 md:gap-3 mb-3 sm:mb-4 md:mb-6 animate-fade-in animation-delay-900 px-2 sm:px-4">
                  <div className="group bg-gradient-to-r from-amber-600/20 to-yellow-600/20 backdrop-blur-sm border border-amber-500/30 rounded-full px-2.5 sm:px-3 md:px-4 lg:px-5 py-1 sm:py-1.5 md:py-2 hover:scale-105 sm:hover:scale-110 transition-all duration-300 hover:shadow-amber-500/50 hover:shadow-lg">
                    <span className="text-xs sm:text-xs md:text-sm font-semibold text-amber-300 flex items-center gap-1 sm:gap-1.5 md:gap-2">
                      <TrendingUp className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4" />
                      <span>Smart Strategies</span>
                    </span>
                  </div>
                  
                  <div className="group bg-gradient-to-r from-yellow-600/20 to-amber-600/20 backdrop-blur-sm border border-yellow-500/30 rounded-full px-2.5 sm:px-3 md:px-4 lg:px-5 py-1 sm:py-1.5 md:py-2 hover:scale-105 sm:hover:scale-110 transition-all duration-300 hover:shadow-yellow-500/50 hover:shadow-lg">
                    <span className="text-xs sm:text-xs md:text-sm font-semibold text-yellow-300 flex items-center gap-1 sm:gap-1.5 md:gap-2">
                      <Shield className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4" />
                      <span>Secure Platform</span>
                    </span>
                  </div>
                  
                  <div className="group bg-gradient-to-r from-amber-600/20 to-yellow-500/20 backdrop-blur-sm border border-amber-500/30 rounded-full px-2.5 sm:px-3 md:px-4 lg:px-5 py-1 sm:py-1.5 md:py-2 hover:scale-105 sm:hover:scale-110 transition-all duration-300 hover:shadow-amber-500/50 hover:shadow-lg">
                    <span className="text-xs sm:text-xs md:text-sm font-semibold text-amber-300 flex items-center gap-1 sm:gap-1.5 md:gap-2">
                      <Sparkles className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4" />
                      <span>High Returns</span>
                    </span>
                  </div>
                </div>

                {/* CTA Button */}
                <button
                  onClick={nextSlide}
                  className="group relative inline-flex items-center gap-1.5 sm:gap-2 bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-500 hover:to-yellow-500 text-slate-900 text-xs sm:text-sm md:text-base lg:text-lg font-bold px-4 sm:px-5 md:px-6 lg:px-8 py-2 sm:py-2.5 md:py-3 lg:py-4 rounded-full shadow-2xl hover:shadow-amber-500/50 transition-all duration-500 hover:scale-105 sm:hover:scale-110 animate-bounce-slow animation-delay-1200"
                >
                  <span>Start Your Journey</span>
                  <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 group-hover:translate-x-2 transition-transform duration-300" />
                  
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-amber-400 rounded-full blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
                </button>

                {/* Stats Counter */}
                <AnimatedStats />
              </div>
            </div>
          </div>

          {/* Slide 1 - Investment Flow */}
          <div className="min-w-full h-full flex items-center justify-center px-3 sm:px-4 md:px-6 lg:px-8 py-4 sm:py-6">
            <div className="w-full max-w-xs sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl">
              <div className="text-center animate-fade-in">
                {/* Logo at top */}
                <div className="flex items-center justify-center gap-2 sm:gap-3 md:gap-4 mb-3 sm:mb-4 md:mb-6">
                  <img 
                    src={logoPath} 
                    alt="Logo" 
                    className="w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 object-contain drop-shadow-lg"
                  />
                  <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 bg-clip-text text-transparent tracking-tight">
                    CCA COINS
                  </h1>
                </div>
                
                <div className="inline-block bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-sm border border-amber-500/30 rounded-full px-4 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 lg:py-3.5 mb-6 sm:mb-8 md:mb-10 lg:mb-12 shadow-2xl hover:shadow-amber-500/30 transition-all duration-500 hover:scale-105">
                  <span className="text-xs sm:text-base md:text-lg lg:text-xl xl:text-2xl font-semibold">
                    <span className="text-gray-300">Self ID should be of Minimum</span>{' '}
                    <span className="text-amber-400 font-bold text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">$1000</span>
                  </span>
                </div>

                <div className="max-w-full sm:max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto px-2">
                  <div className="flex items-center justify-center gap-2 sm:gap-3 md:gap-4 lg:gap-6 flex-wrap relative">
                    <div className="bg-gradient-to-br from-amber-600 to-yellow-600 rounded-lg sm:rounded-xl px-2.5 sm:px-4 md:px-6 py-1.5 sm:py-2 md:py-3 shadow-lg z-0 flex-shrink-0">
                      <span className="text-xs sm:text-sm md:text-base lg:text-lg font-semibold text-slate-900">DIRECT</span>
                    </div>
                    {directLevels.map((level, index) => (
                      <React.Fragment key={index}>
                        <div 
                          className="relative group cursor-pointer flex-shrink-0"
                          style={{ zIndex: hoveredCard === index ? 50 : 1 }}
                          onMouseEnter={() => setHoveredCard(index)}
                          onMouseLeave={() => setHoveredCard(null)}
                        >
                          <div className={`absolute inset-0 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full blur-md sm:blur-lg transition-opacity duration-500 ${
                            hoveredCard === index ? 'opacity-100' : 'opacity-50'
                          }`}></div>
                          <div className={`relative bg-white rounded-full w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 flex items-center justify-center border-2 sm:border-3 md:border-4 shadow-xl transition-all duration-500 ${
                            hoveredCard === index 
                              ? 'scale-125 sm:scale-150 border-yellow-400 shadow-2xl shadow-amber-500/60 border-amber-500' 
                              : 'scale-100 border-amber-500'
                          }`}>
                            <div className="text-center">
                              <div className={`font-bold text-slate-900 transition-all duration-500 ${
                                hoveredCard === index ? 'text-lg sm:text-2xl md:text-3xl' : 'text-sm sm:text-base md:text-xl'
                              }`}>
                                {level.percentage}
                              </div>
                            </div>
                          </div>
                        </div>
                        {index < directLevels.length - 1 && (
                          <div className="w-3 sm:w-4 md:w-6 lg:w-8 h-0.5 sm:h-1 md:h-2 bg-gradient-to-r from-amber-400 to-yellow-500 flex-shrink-0 z-0"></div>
                        )}
                      </React.Fragment>
                    ))}
                    <div 
                      className="bg-gradient-to-br from-yellow-500 to-amber-600 rounded-lg sm:rounded-xl px-3 sm:px-5 md:px-6 lg:px-8 py-2 sm:py-3 md:py-4 lg:py-5 shadow-2xl animate-pulse cursor-pointer transition-all duration-500 flex-shrink-0"
                      style={{ zIndex: hoveredCard === 'final' ? 50 : 1 }}
                      onMouseEnter={() => setHoveredCard('final')}
                      onMouseLeave={() => setHoveredCard(null)}
                    >
                      <span className={`font-black text-slate-900 transition-all duration-500 block ${
                        hoveredCard === 'final' ? 'text-2xl sm:text-4xl md:text-5xl scale-125 sm:scale-150' : 'text-lg sm:text-2xl md:text-3xl'
                      }`}>5%</span>
                      <span className={`font-semibold text-slate-900 transition-all duration-500 block ${
                        hoveredCard === 'final' ? 'text-xs sm:text-base md:text-lg' : 'text-xs sm:text-xs md:text-sm'
                      }`}>CCA coins</span>
                    </div>
                  </div>
                  <div className="text-amber-400 font-bold text-base sm:text-xl md:text-2xl lg:text-3xl mt-4 sm:mt-6 md:mt-8 animate-bounce">
                    You $1000
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Slide 2 - Strategy */}
          <div className="min-w-full h-full flex items-center justify-center px-3 sm:px-4 md:px-6 lg:px-8 py-6 sm:py-8">
            <div className="w-full max-w-xs sm:max-w-2xl md:max-w-3xl lg:max-w-4xl">
              {/* Logo at top */}
              <div className="flex items-center justify-center gap-2 sm:gap-3 md:gap-4 mb-6 sm:mb-8 md:mb-10">
                <img 
                  src={logoPath} 
                  alt="Logo" 
                  className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 object-contain drop-shadow-lg"
                />
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-center bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">
                  Strategy
                </h2>
              </div>
              
              {/* Strategy Card Display */}
              <div className="perspective-container mb-6 sm:mb-8">
                <div className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl mx-auto">
                  {(() => {
                    const strategy = strategies[strategySlide];
                    const Icon = strategy.icon;
                    return (
                      <div className={`group relative strategy-card ${isTransitioning ? 'flipping' : ''}`}>
                        <div className={`absolute inset-0 bg-gradient-to-r ${strategy.color} rounded-2xl sm:rounded-3xl blur-xl sm:blur-2xl opacity-70 animate-pulse-slow`}></div>
                        
                        <div className="relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-md border-2 border-amber-500/50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 lg:p-16 shadow-2xl transform transition-all duration-500 hover:scale-105 active:scale-105">
                          <div className={`w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 bg-gradient-to-r ${strategy.color} rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 md:mb-8 shadow-2xl icon-bounce`}>
                            <Icon className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 text-slate-900" />
                          </div>
                          
                          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black mb-2 sm:mb-3 md:mb-4 text-center text-amber-400">
                            {strategy.title}
                          </h3>
                          
                          {strategy.subtitle && (
                            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-300 font-semibold text-center">
                              {strategy.subtitle}
                            </p>
                          )}
                        </div>
                      </div>
                    );
                  })()}
                </div>
              </div>

              {/* Inner Navigation Buttons - Below Content */}
              <div className="flex items-center justify-center gap-4 mb-6">
                <button
                  onClick={prevStrategy}
                  className="bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-500 hover:to-yellow-500 text-slate-900 rounded-full p-2 sm:p-3 md:p-4 shadow-2xl hover:shadow-amber-500/50 transition-all duration-300 hover:scale-110"
                >
                  <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8" />
                </button>

                <button
                  onClick={nextStrategy}
                  className="bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-500 hover:to-yellow-500 text-slate-900 rounded-full p-2 sm:p-3 md:p-4 shadow-2xl hover:shadow-amber-500/50 transition-all duration-300 hover:scale-110"
                >
                  <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8" />
                </button>
              </div>

              {/* Strategy Indicators */}
              <div className="flex justify-center gap-2 sm:gap-3">
                {strategies.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setStrategySlide(index)}
                    className={`transition-all duration-300 rounded-full ${
                      strategySlide === index
                        ? 'bg-gradient-to-r from-amber-500 to-yellow-500 w-8 sm:w-10 md:w-12 h-2 sm:h-2.5 md:h-3'
                        : 'bg-white/30 hover:bg-amber-400/50 w-2 sm:w-2.5 md:w-3 h-2 sm:h-2.5 md:h-3'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Slide 3 - Technologies */}
          <div className="min-w-full h-full flex items-center justify-center px-3 sm:px-4 md:px-6 lg:px-8 py-6 sm:py-8">
            <div className="w-full max-w-xs sm:max-w-3xl md:max-w-4xl lg:max-w-5xl xl:max-w-6xl">
              {/* Logo at top */}
              <div className="flex items-center justify-center gap-2 sm:gap-3 md:gap-4 mb-6 sm:mb-8 md:mb-10">
                <img 
                  src={logoPath} 
                  alt="Logo" 
                  className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 object-contain drop-shadow-lg"
                />
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-center bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">
                  Technologies Used
                </h2>
              </div>
              
              {/* Technology Cards */}
              <div className="w-full max-w-sm sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto mb-6 sm:mb-8">
                <div className={`grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 tech-cards ${isTransitioning ? 'sliding' : ''}`}>
                  {/* Left Card - Technology Name */}
                  {(() => {
                    const tech = technologies[techSlide];
                    const Icon = tech.icon;
                    return (
                      <div className="group relative tech-card-left">
                        <div className={`absolute inset-0 bg-gradient-to-r ${tech.gradient} rounded-2xl sm:rounded-3xl blur-lg sm:blur-xl opacity-50 group-hover:opacity-70 group-active:opacity-70 transition-all duration-500`}></div>
                        
                        <div className="relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-md border-2 border-amber-500/50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 shadow-2xl transition-all duration-500 hover:scale-105 active:scale-105 h-full flex flex-col items-center justify-center">
                          <div className={`w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 bg-gradient-to-r ${tech.gradient} rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 shadow-2xl icon-spin`}>
                            <Icon className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 text-amber-300" />
                          </div>
                          
                          <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-center text-amber-400">
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
                        <div className={`absolute inset-0 bg-gradient-to-r ${tech.gradient} rounded-2xl sm:rounded-3xl blur-lg sm:blur-xl opacity-50 group-hover:opacity-70 group-active:opacity-70 transition-all duration-500`}></div>
                        
                        <div className="relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-md border-2 border-amber-500/50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 shadow-2xl transition-all duration-500 hover:scale-105 active:scale-105 h-full flex flex-col items-center justify-center">
                          <div className="mb-4 sm:mb-6">
                            <div className={`w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-gradient-to-r ${tech.gradient} rounded-lg sm:rounded-xl flex items-center justify-center mx-auto shadow-xl icon-pulse`}>
                              <Coins className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 text-amber-300" />
                            </div>
                          </div>
                          
                          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-amber-300 font-semibold text-center leading-relaxed">
                            {tech.coins}
                          </p>
                        </div>
                      </div>
                    );
                  })()}
                </div>
              </div>

              {/* Inner Navigation Buttons - Below Content */}
              <div className="flex items-center justify-center gap-4 mb-6">
                <button
                  onClick={prevTech}
                  className="bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-500 hover:to-yellow-500 text-slate-900 rounded-full p-2 sm:p-3 md:p-4 shadow-2xl hover:shadow-amber-500/50 transition-all duration-300 hover:scale-110"
                >
                  <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8" />
                </button>

                <button
                  onClick={nextTech}
                  className="bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-500 hover:to-yellow-500 text-slate-900 rounded-full p-2 sm:p-3 md:p-4 shadow-2xl hover:shadow-amber-500/50 transition-all duration-300 hover:scale-110"
                >
                  <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8" />
                </button>
              </div>

              {/* Technology Indicators */}
              <div className="flex justify-center gap-2 sm:gap-3">
                {technologies.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setTechSlide(index)}
                    className={`transition-all duration-300 rounded-full ${
                      techSlide === index
                        ? 'bg-gradient-to-r from-amber-500 to-yellow-500 w-8 sm:w-10 md:w-12 h-2 sm:h-2.5 md:h-3'
                        : 'bg-white/30 hover:bg-amber-400/50 w-2 sm:w-2.5 md:w-3 h-2 sm:h-2.5 md:h-3'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Slide 4 - Thank You Page */}
          <div className="min-w-full h-full flex items-center justify-center px-4 sm:px-6 lg:px-8 py-6 sm:py-8 relative overflow-y-auto">
            <div className="w-full max-w-xs sm:max-w-2xl md:max-w-3xl relative z-10">
              {/* Floating Icons Background */}
              <div className="absolute inset-0 pointer-events-none opacity-20">
                <Sparkles className="absolute top-6 left-6 sm:top-10 sm:left-10 w-8 h-8 sm:w-12 sm:h-12 text-amber-500/40 animate-float" />
                <Heart className="absolute top-12 right-12 sm:top-20 sm:right-20 w-10 h-10 sm:w-16 sm:h-16 text-yellow-500/40 animate-float-delayed" />
                <Coins className="absolute bottom-12 left-12 sm:bottom-20 sm:left-20 w-12 h-12 sm:w-20 sm:h-20 text-amber-600/40 animate-float-slow" />
                <Shield className="absolute bottom-6 right-6 sm:bottom-10 sm:right-10 w-7 h-7 sm:w-10 sm:h-10 text-yellow-400/40 animate-float" />
              </div>

              {/* Main Content */}
              <div className="text-center relative">
                {/* Logo */}
                <div className="mb-4 sm:mb-6 md:mb-8 relative animate-fade-in">
                  <div className="inline-block relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 rounded-full blur-xl sm:blur-2xl opacity-40"></div>
                    <img 
                      src={logoPath} 
                      alt="CCA Coins Logo" 
                      className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 mx-auto object-contain drop-shadow-2xl"
                    />
                  </div>
                </div>

                {/* Thank You Text */}
                <div className="mb-4 sm:mb-6 md:mb-8 animate-slide-up animation-delay-300">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-2 sm:mb-3 md:mb-4">
                    <span className="bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 bg-clip-text text-transparent animate-gradient-x">
                      Thank You!
                    </span>
                  </h1>
                  
                  <div className="w-20 sm:w-24 md:w-32 h-0.5 sm:h-1 bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 mx-auto rounded-full animate-expand"></div>
                </div>

                {/* Subtext */}
                <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300 font-semibold mb-4 sm:mb-6 md:mb-8 animate-fade-in animation-delay-600 px-4">
                  <span className="bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">
                    For Choosing CCA Coins
                  </span>
                </p>

                {/* Additional Message */}
                <div className="animate-fade-in animation-delay-900">
                  <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-400 font-medium mb-4 sm:mb-6 px-4 leading-relaxed">
                    Your journey to smart crypto investments starts here
                  </p>
                  
                  {/* Decorative Elements */}
                  <div className="flex justify-center items-center gap-2 sm:gap-3 md:gap-4 mb-4 sm:mb-6">
                    <div className="w-10 sm:w-12 md:w-16 h-0.5 sm:h-1 bg-gradient-to-r from-transparent to-amber-500 rounded-full"></div>
                    <Heart className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-amber-400 animate-pulse" />
                    <div className="w-10 sm:w-12 md:w-16 h-0.5 sm:h-1 bg-gradient-to-l from-transparent to-amber-500 rounded-full"></div>
                  </div>
                </div>

                {/* Contact Info or CTA */}
                <div className="animate-fade-in animation-delay-1200">
                  <div className="inline-block bg-gradient-to-r from-amber-600/20 to-yellow-600/20 backdrop-blur-sm border border-amber-500/30 rounded-xl sm:rounded-2xl px-5 sm:px-6 md:px-10 py-2.5 sm:py-3 md:py-5 shadow-2xl hover:shadow-amber-500/30 transition-all duration-500 hover:scale-105">
                    <p className="text-sm sm:text-base md:text-xl font-bold text-amber-400 mb-0.5 sm:mb-1">
                      Stay Connected
                    </p>
                    <p className="text-xs sm:text-xs md:text-sm text-gray-400">
                      Join thousands of successful investors
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Parent Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="fixed left-2 sm:left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-500 hover:to-yellow-500 text-slate-900 rounded-full p-2 sm:p-3 md:p-4 shadow-2xl hover:shadow-amber-500/50 transition-all duration-300 hover:scale-110"
      >
        <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8" />
      </button>

      <button
        onClick={nextSlide}
        className="fixed right-2 sm:right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-500 hover:to-yellow-500 text-slate-900 rounded-full p-2 sm:p-3 md:p-4 shadow-2xl hover:shadow-amber-500/50 transition-all duration-300 hover:scale-110"
      >
        <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8" />
      </button>

      {/* Mute/Unmute Button */}
      <button
        onClick={toggleMute}
        className="fixed top-4 sm:top-6 md:top-10 right-2 sm:right-4 md:right-8 z-20 bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-500 hover:to-yellow-500 text-slate-900 rounded-full p-2 sm:p-3 md:p-4 shadow-2xl hover:shadow-amber-500/50 transition-all duration-300 hover:scale-110"
        title={isMuted ? "Unmute" : "Mute"}
      >
        {isMuted ? (
          <VolumeX className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
        ) : (
          <Volume2 className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
        )}
      </button>

      {/* Audio Element */}
      <audio
        ref={audioRef}
        src={audioFile}
        loop
        preload="auto"
        muted={isMuted}
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
    <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-6 mt-4 sm:mt-5 md:mt-8 animate-fade-in animation-delay-1500 px-2 sm:px-4">
      <div className="text-center">
        <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-black bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent mb-0.5 sm:mb-1 animate-count-up">
          {formatNumber(users)}+
        </div>
        <div className="text-xs sm:text-xs md:text-sm text-gray-400 font-semibold">
          Active Users
        </div>
      </div>
      
      <div className="text-center">
        <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-black bg-gradient-to-r from-yellow-400 to-amber-600 bg-clip-text text-transparent mb-0.5 sm:mb-1 animate-count-up">
          ${volume}M+
        </div>
        <div className="text-xs sm:text-xs md:text-sm text-gray-400 font-semibold">
          Trading Volume
        </div>
      </div>
      
      <div className="text-center">
        <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-black bg-gradient-to-r from-amber-500 to-yellow-500 bg-clip-text text-transparent mb-0.5 sm:mb-1 animate-count-up">
          {uptime.toFixed(1)}%
        </div>
        <div className="text-xs sm:text-xs md:text-sm text-gray-400 font-semibold">
          Uptime
        </div>
      </div>
    </div>
  );
};

export default CCACoins;