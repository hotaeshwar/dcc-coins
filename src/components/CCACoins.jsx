import React, { useState, useEffect, useRef } from 'react';
import { 
  TrendingUp, 
  Coins,
  Sparkles,
  Shield,
  Zap,
  Activity,
  Database,
  ChevronLeft,
  ChevronRight,
  Volume2,
  VolumeX,
  ArrowRight,
  Building2,
  Heart,
  Cpu,
  Network,
  Globe2,
  Gem,
  Lock,
  DollarSign,
  Server
} from 'lucide-react';

const CCACoins = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [strategySlide, setStrategySlide] = useState(0);
  const [techSlide, setTechSlide] = useState(0);
  const [bitcoinSlide, setBitcoinSlide] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [visibleItems, setVisibleItems] = useState(0);
  const [visibleNodes, setVisibleNodes] = useState(0);
  
  // Separate hover states
  const [showParentLeftArrow, setShowParentLeftArrow] = useState(false);
  const [showParentRightArrow, setShowParentRightArrow] = useState(false);
  const [showStrategyNav, setShowStrategyNav] = useState(false);
  const [showTechNav, setShowTechNav] = useState(false);
  const [showHalvingButtons, setShowHalvingButtons] = useState(false);
  
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
      color: 'from-amber-400 to-yellow-600',
      description: 'Systematically invest fixed amounts over time to reduce market timing risk.',
      detailPoints: ['Minimize timing risk', 'Consistent investing', 'Long-term growth']
    },
    { 
      icon: Coins, 
      title: 'CCA', 
      subtitle: '(Coin Cost Averaging)',
      color: 'from-yellow-500 to-amber-700',
      description: 'Optimize coin purchases based on market cycles and technical analysis.',
      detailPoints: ['Market cycle analysis', 'Technical indicators', 'Strategic entry points']
    },
    { 
      icon: Shield, 
      title: 'FSC', 
      subtitle: '(Fundamental Strong Coin)',
      color: 'from-amber-500 to-orange-600',
      description: 'Invest in cryptocurrencies with strong fundamentals and long-term potential.',
      detailPoints: ['Strong fundamentals', 'Quality projects', 'Sustainable growth']
    },
    { 
      icon: Sparkles, 
      title: 'SIP', 
      subtitle: '(Smart Investment Plan)',
      color: 'from-yellow-400 to-amber-600',
      description: 'AI-powered investment strategies tailored to market conditions.',
      detailPoints: ['AI-driven insights', 'Adaptive strategies', 'Market optimization']
    },
    { 
      icon: Activity, 
      title: 'News & Updates', 
      subtitle: '',
      color: 'from-amber-400 to-yellow-500',
      description: 'Real-time market insights and breaking news alerts.',
      detailPoints: ['Real-time alerts', 'Market analysis', 'Breaking news']
    },
    { 
      icon: Zap, 
      title: 'Events', 
      subtitle: '',
      color: 'from-yellow-500 to-amber-600',
      description: 'Major crypto events, conferences, and product launches.',
      detailPoints: ['Global conferences', 'Product launches', 'Industry events']
    },
    { 
      icon: Database, 
      title: 'Halving', 
      subtitle: '',
      color: 'from-amber-500 to-yellow-700',
      description: 'Bitcoin halving cycles analysis and investment opportunities.',
      detailPoints: ['Cycle analysis', 'Historical patterns', 'Investment timing']
    }
  ];

  const technologies = [
    {
      icon: Cpu,
      name: 'AI Technology',
      coins: 'TAO, NEAR Protocol, XAI, WLD, ICP (Internet Computer), Ocean Protocol, GRT, INT, ENN',
      gradient: 'from-violet-500 to-purple-600',
      color: '#8B5CF6'
    },
    {
      icon: Network,
      name: 'Blockchain Technology',
      coins: 'TRX, ADA, SOLO, WALKER (5GOLD), ETH, BTRC, ETHERMAL, A+B+COIN, ARB COIN, SOLO COIN, XAIT, AXS, GOLD, MOND, SAND, CROW',
      gradient: 'from-cyan-400 to-cyan-600',
      color: '#00E5FF'
    },
    {
      icon: Globe2,
      name: 'Web 3 Technology',
      coins: 'Theta, Doge, Osiim Protocol, File, Coinos, SOL, Polka dot, ICP (Internet Computer), ENS, GRT',
      gradient: 'from-blue-500 to-blue-700',
      color: '#3B82F6'
    },
    {
      icon: Gem,
      name: 'NFT Technology',
      coins: 'GMT coin, APT coin, APE coin, Near Protocol, AXS coin, CHZ coin, ZORA coin, Baby Dog coin',
      gradient: 'from-pink-500 to-pink-700',
      color: '#EC4899'
    },
    {
      icon: Lock,
      name: 'DeFi Technology',
      coins: 'BIT coin, TWT coin (Trust wallet), Sushi coin (Sushi swipe), Uni coin (uni swipe), Cake coin (Pan cake swipe), 1 inch coin, Dodo coin, DYOX coin',
      gradient: 'from-green-500 to-green-700',
      color: '#22C55E'
    },
    {
      icon: DollarSign,
      name: 'DEX Technology',
      coins: 'Decentralized Exchange (DEX) Game coins and platforms',
      gradient: 'from-teal-500 to-teal-700',
      color: '#14B8A6'
    },
    {
      icon: Sparkles,
      name: 'Meme Coin Technology',
      coins: 'Doge, Shib, Pepe, Baby Dole, Akita, Ploti, kishu inu',
      gradient: 'from-yellow-400 to-orange-500',
      color: '#FACC15'
    },
    {
      icon: Database,
      name: 'BRC 20 Technology',
      coins: 'Pepe, Diorydi, Saints, Rats, MultiBit, ORD',
      gradient: 'from-orange-500 to-orange-700',
      color: '#F7931A'
    },
    {
      icon: Server,
      name: 'High-Tech Infrastructure',
      coins: 'Various infrastructure and protocol coins',
      gradient: 'from-slate-400 to-slate-600',
      color: '#94A3B8'
    }
  ];

  const halvingData = [
    { year: 2008, btc: '50 BTC' },
    { year: 2012, btc: '25 BTC' },
    { year: 2016, btc: '12.50 BTC' },
    { year: 2020, btc: '6.25 BTC' },
    { year: 2024, btc: '3.125 BTC' }
  ];

  const nodes = [
    { id: 1, year: '2011', price: '$3 to $30', halving: false, x: 18, y: 88 },
    { id: 2, year: '2012', price: '(Halving)', halving: true, x: 40, y: 68 },
    { id: 3, year: '2013', price: '$1000', halving: false, x: 62, y: 32 },
    { id: 4, year: '2015', price: '$220', halving: false, x: 84, y: 86 },
    { id: 5, year: '2016', price: '(Halving)', halving: true, x: 106, y: 62 },
    { id: 6, year: 2017, price: '$19000', halving: false, x: 128, y: 22 },
    { id: 7, year: 2019, price: '$3500', halving: false, x: 150, y: 90 },
    { id: 8, year: 2020, price: '(Halving)', halving: true, x: 172, y: 58 },
    { id: 9, year: 2021, price: '$69000', halving: false, x: 194, y: 15 },
    { id: 10, year: 2023, price: '$17000', halving: false, x: 216, y: 88 },
    { id: 11, year: 2024, price: '(Halving)', halving: true, x: 238, y: 55 },
    { id: 12, year: 2025, price: '$126000', halving: false, x: 252, y: 10 },
    { id: 13, year: 2027, price: '?', halving: false, x: 261, y: 91 }
  ];

  const connections = [
    [1, 2], [2, 3], [3, 4], [4, 5], [5, 6],
    [6, 7], [7, 8], [8, 9], [9, 10], [10, 11],
    [11, 12], [12, 13]
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % 6);
    setStrategySlide(0);
    setTechSlide(0);
    setBitcoinSlide(0);
    setVisibleItems(0);
    setVisibleNodes(0);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + 6) % 6);
    setStrategySlide(0);
    setTechSlide(0);
    setBitcoinSlide(0);
    setVisibleItems(0);
    setVisibleNodes(0);
  };

  const nextStrategy = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setStrategySlide((prev) => (prev + 1) % strategies.length);
      setIsTransitioning(false);
    }, 600);
  };

  const prevStrategy = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setStrategySlide((prev) => (prev - 1 + strategies.length) % strategies.length);
      setIsTransitioning(false);
    }, 600);
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

  const nextBitcoinSlide = () => {
    setBitcoinSlide((prev) => (prev + 1) % 2);
    setVisibleItems(0);
    setVisibleNodes(0);
  };

  const prevBitcoinSlide = () => {
    setBitcoinSlide((prev) => (prev - 1 + 2) % 2);
    setVisibleItems(0);
    setVisibleNodes(0);
  };

  const handleBitcoinNext = () => {
    if (bitcoinSlide === 0) {
      if (visibleItems < halvingData.length) {
        setVisibleItems(prev => prev + 1);
      } else {
        setVisibleItems(0);
      }
    } else if (bitcoinSlide === 1) {
      if (visibleNodes < nodes.length) {
        setVisibleNodes(prev => prev + 1);
      } else {
        setVisibleNodes(0);
      }
    }
  };

  const handleBitcoinReset = () => {
    if (bitcoinSlide === 0) {
      setVisibleItems(0);
    } else if (bitcoinSlide === 1) {
      setVisibleNodes(0);
    }
  };

  const isConnectionVisible = (conn) => {
    return visibleNodes >= conn[1];
  };

  const getNode = (id) => nodes.find(n => n.id === id);

  const toggleMute = () => {
    const newMutedState = !isMuted;
    setIsMuted(newMutedState);
    
    if (audioRef.current) {
      if (newMutedState) {
        audioRef.current.pause();
      } else {
        const playPromise = audioRef.current.play();
        if (playPromise !== undefined) {
          playPromise.catch(err => {
            console.log('Audio play failed:', err);
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
        <div className="absolute top-20 left-10 w-64 h-64 bg-amber-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute top-40 right-10 w-64 h-64 bg-blue-900 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-64 h-64 bg-yellow-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
      </div>

      {/* Main Slide Container */}
      <div className="relative z-10 h-screen overflow-hidden">
        {/* Parent Navigation - Left Arrow (Show on all slides except first) */}
        <div 
          className={`absolute left-0 top-0 bottom-0 w-24 z-30 cursor-pointer transition-all duration-300 ${
            currentSlide === 0 ? 'pointer-events-none opacity-0' : ''
          }`}
          onClick={prevSlide}
          onMouseEnter={() => setShowParentLeftArrow(true)}
          onMouseLeave={() => setShowParentLeftArrow(false)}
        >
          <div className={`absolute left-4 top-1/2 -translate-y-1/2 transition-all duration-300 ${
            showParentLeftArrow ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
          }`}>
            <div className="bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-500 hover:to-yellow-500 text-slate-900 rounded-full p-3 shadow-2xl hover:shadow-amber-500/50 transition-all duration-300 hover:scale-110">
              <ChevronLeft className="w-6 h-6" />
            </div>
          </div>
        </div>

        {/* Parent Navigation - Right Arrow (Show on all slides except last) */}
        <div 
          className={`absolute right-0 top-0 bottom-0 w-24 z-30 cursor-pointer transition-all duration-300 ${
            currentSlide === 5 ? 'pointer-events-none opacity-0' : ''
          }`}
          onClick={nextSlide}
          onMouseEnter={() => setShowParentRightArrow(true)}
          onMouseLeave={() => setShowParentRightArrow(false)}
        >
          <div className={`absolute right-4 top-1/2 -translate-y-1/2 transition-all duration-300 ${
            showParentRightArrow ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
          }`}>
            <div className="bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-500 hover:to-yellow-500 text-slate-900 rounded-full p-3 shadow-2xl hover:shadow-amber-500/50 transition-all duration-300 hover:scale-110">
              <ChevronRight className="w-6 h-6" />
            </div>
          </div>
        </div>

        <div 
          className="flex h-full transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {/* INTRO SLIDE */}
          <div className="min-w-full h-full flex items-center justify-center px-4 sm:px-6 lg:px-8 py-4 sm:py-6 relative overflow-y-auto">
            <div className="w-full max-w-6xl relative z-10">
              <div className="absolute inset-0 pointer-events-none opacity-30">
                <Building2 className="absolute top-8 left-8 w-12 h-12 text-amber-500/40 animate-float" />
                <DollarSign className="absolute top-12 right-12 w-16 h-16 text-yellow-500/40 animate-float-delayed" />
                <Coins className="absolute bottom-12 left-12 w-20 h-20 text-amber-600/40 animate-float-slow" />
                <Sparkles className="absolute bottom-8 right-8 w-10 h-10 text-yellow-400/40 animate-float" />
              </div>

              <div className="text-center relative">
                <div className="mb-4 relative">
                  <div className="inline-block relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 rounded-full blur-2xl opacity-30"></div>
                    <img 
                      src={logoPath} 
                      alt="CCA Logo" 
                      className="relative w-28 h-28 mx-auto object-contain drop-shadow-2xl"
                    />
                  </div>
                </div>

                <div className="mb-2 overflow-hidden">
                  <h1 className="text-5xl font-black mb-2 animate-slide-up leading-tight px-2">
                    <span className="bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 bg-clip-text text-transparent inline-block animate-gradient-x">
                      Welcome to
                    </span>
                  </h1>
                  
                  <div className="relative inline-block">
                    <h2 className="text-8xl font-black bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-600 bg-clip-text text-transparent animate-slide-up animation-delay-300 tracking-tight leading-none px-2">
                      CCA COIN
                    </h2>
                    <div className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 animate-expand"></div>
                  </div>
                </div>

                <p className="text-2xl text-gray-300 font-semibold mb-6 animate-fade-in animation-delay-600 px-6">
                  <span className="bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">
                    Your Gateway to Smart Crypto Investments
                  </span>
                </p>

                <div className="flex flex-wrap justify-center gap-3 mb-6 animate-fade-in animation-delay-900 px-4">
                  <div className="group bg-gradient-to-r from-amber-600/20 to-yellow-600/20 backdrop-blur-sm border border-amber-500/30 rounded-full px-5 py-2 hover:scale-110 transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/50">
                    <span className="text-sm font-semibold text-amber-300 flex items-center gap-2">
                      <TrendingUp className="w-4 h-4" />
                      <span>Smart Strategies</span>
                    </span>
                  </div>
                  
                  <div className="group bg-gradient-to-r from-yellow-600/20 to-amber-600/20 backdrop-blur-sm border border-yellow-500/30 rounded-full px-5 py-2 hover:scale-110 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/50">
                    <span className="text-sm font-semibold text-yellow-300 flex items-center gap-2">
                      <Shield className="w-4 h-4" />
                      <span>Secure Platform</span>
                    </span>
                  </div>
                  
                  <div className="group bg-gradient-to-r from-amber-600/20 to-yellow-500/20 backdrop-blur-sm border border-amber-500/30 rounded-full px-5 py-2 hover:scale-110 transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/50">
                    <span className="text-sm font-semibold text-amber-300 flex items-center gap-2">
                      <Sparkles className="w-4 h-4" />
                      <span>High Returns</span>
                    </span>
                  </div>
                </div>

                <button
                  onClick={nextSlide}
                  className="group relative inline-flex items-center gap-2 bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-500 hover:to-yellow-500 text-slate-900 text-lg font-bold px-8 py-4 rounded-full shadow-2xl hover:shadow-amber-500/50 transition-all duration-500 hover:scale-110 animate-bounce-slow animation-delay-1200"
                >
                  <span>Start Your Journey</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-amber-400 rounded-full blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
                </button>

                <AnimatedStats />
              </div>
            </div>
          </div>

          {/* Slide 1 - Investment Flow */}
          <div className="min-w-full h-full flex items-center justify-center px-8 py-6">
            <div className="w-full max-w-5xl">
              <div className="text-center animate-fade-in">
                <div className="flex items-center justify-center gap-4 mb-6">
                  <img 
                    src={logoPath} 
                    alt="Logo" 
                    className="w-20 h-20 object-contain drop-shadow-lg"
                  />
                  <h1 className="text-7xl font-black bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 bg-clip-text text-transparent tracking-tight">
                    CCA COIN
                  </h1>
                </div>
                
                <div className="inline-block bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-sm border border-amber-500/30 rounded-full px-8 py-3.5 mb-12 shadow-2xl hover:shadow-amber-500/30 transition-all duration-500 hover:scale-105">
                  <span className="text-2xl font-semibold">
                    <span className="text-gray-300">Self ID should be of Minimum</span>{' '}
                    <span className="text-amber-400 font-bold text-3xl">$1000</span>
                  </span>
                </div>

                <div className="max-w-4xl mx-auto px-2">
                  <div className="flex items-center justify-center gap-6 flex-wrap relative">
                    <div className="bg-gradient-to-br from-amber-600 to-yellow-600 rounded-xl px-6 py-3 shadow-lg z-0 flex-shrink-0">
                      <span className="text-lg font-semibold text-slate-900">DIRECT</span>
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
                          <div className={`relative bg-white rounded-full w-24 h-24 flex items-center justify-center border-4 shadow-xl transition-all duration-500 ${
                            hoveredCard === index 
                              ? 'scale-150 border-yellow-400 shadow-2xl shadow-amber-500/60 border-amber-500' 
                              : 'scale-100 border-amber-500'
                          }`}>
                            <div className="text-center">
                              <div className={`font-bold text-slate-900 transition-all duration-500 ${
                                hoveredCard === index ? 'text-3xl' : 'text-xl'
                              }`}>
                                {level.percentage}
                              </div>
                            </div>
                          </div>
                        </div>
                        {index < directLevels.length - 1 && (
                          <div className="w-8 h-2 bg-gradient-to-r from-amber-400 to-yellow-500 flex-shrink-0 z-0"></div>
                        )}
                      </React.Fragment>
                    ))}
                    <div 
                      className="bg-gradient-to-br from-yellow-500 to-amber-600 rounded-xl px-8 py-5 shadow-2xl animate-pulse cursor-pointer transition-all duration-500 flex-shrink-0"
                      style={{ zIndex: hoveredCard === 'final' ? 50 : 1 }}
                      onMouseEnter={() => setHoveredCard('final')}
                      onMouseLeave={() => setHoveredCard(null)}
                    >
                      <span className={`font-black text-slate-900 transition-all duration-500 block ${
                        hoveredCard === 'final' ? 'text-5xl scale-150' : 'text-3xl'
                      }`}>5%</span>
                      <span className={`font-semibold text-slate-900 transition-all duration-500 block ${
                        hoveredCard === 'final' ? 'text-lg' : 'text-sm'
                      }`}>CCA coins</span>
                    </div>
                  </div>
                  <div className="text-amber-400 font-bold text-3xl mt-8 animate-bounce">
                    You $1000
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Slide 2 - Strategy */}
          <div 
            className="min-w-full h-full flex flex-col px-8 py-6 overflow-hidden relative"
            onMouseEnter={() => setShowStrategyNav(true)}
            onMouseLeave={() => setShowStrategyNav(false)}
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <img 
                src={logoPath} 
                alt="Logo" 
                className="w-16 h-16 object-contain drop-shadow-lg"
              />
              <h2 className="text-6xl font-black text-center bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">
                Investment Strategies
              </h2>
            </div>
            
            <div className="flex-1 flex items-center justify-center overflow-hidden">
              <div className="w-full max-w-5xl">
                {(() => {
                  const strategy = strategies[strategySlide];
                  const Icon = strategy.icon;
                  
                  return (
                    <div className={`w-full ${isTransitioning ? 'strategy-fade-out' : 'strategy-fade-in'}`}>
                      <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <div className={`absolute top-10 left-10 w-48 h-48 bg-gradient-to-r ${strategy.color} rounded-full blur-3xl opacity-20 animate-pulse-glow`}></div>
                        <div className={`absolute bottom-10 right-10 w-64 h-64 bg-gradient-to-l ${strategy.color} rounded-full blur-3xl opacity-15 animate-pulse-glow animation-delay-1000`}></div>
                      </div>

                      <div className="relative flex flex-col lg:flex-row items-center justify-center gap-12 px-4">
                        <div className="flex-shrink-0 relative">
                          <div className="relative w-72 h-72">
                            <div className="absolute inset-0 border-3 border-amber-400/20 rounded-full animate-spin-slow"></div>
                            <div className="absolute inset-6 border-3 border-yellow-400/25 rounded-full animate-spin-reverse"></div>
                            <div className="absolute inset-12 border-2 border-amber-300/30 rounded-full animate-spin-slow animation-delay-500"></div>
                            <div className={`absolute inset-8 bg-gradient-to-br ${strategy.color} rounded-full blur-2xl opacity-40 animate-pulse-mega`}></div>
                            <div className={`absolute inset-14 bg-gradient-to-br ${strategy.color} rounded-2xl flex items-center justify-center shadow-2xl icon-mega-float backdrop-blur-sm`}>
                              <Icon className="w-36 h-36 text-slate-900 drop-shadow-2xl icon-breathe" />
                            </div>
                            <div className="absolute top-0 left-1/2 w-4 h-4 bg-amber-400 rounded-full animate-orbit-1 shadow-lg shadow-amber-500/50"></div>
                            <div className="absolute bottom-0 left-1/2 w-3 h-3 bg-yellow-400 rounded-full animate-orbit-2 shadow-lg shadow-yellow-500/50"></div>
                            <div className="absolute left-0 top-1/2 w-3 h-3 bg-amber-500 rounded-full animate-orbit-3 shadow-lg shadow-amber-500/50"></div>
                            <div className="absolute right-0 top-1/2 w-4 h-4 bg-yellow-500 rounded-full animate-orbit-4 shadow-lg shadow-yellow-500/50"></div>
                          </div>
                        </div>

                        <div className="flex-1 text-center lg:text-left max-w-2xl">
                          <div className="mb-6">
                            <h3 className="text-7xl font-black mb-3 leading-tight">
                              <span className="inline-block animate-text-shimmer bg-gradient-to-r from-amber-300 via-yellow-400 via-amber-400 to-amber-300 bg-clip-text text-transparent bg-size-300">
                                {strategy.title}
                              </span>
                            </h3>
                            
                            {strategy.subtitle && (
                              <p className="text-3xl font-bold mb-3">
                                <span className="inline-block animate-fade-in-up animation-delay-200 bg-gradient-to-r from-amber-300 to-yellow-400 bg-clip-text text-transparent">
                                  {strategy.subtitle}
                                </span>
                              </p>
                            )}
                            
                            <div className="flex gap-1.5 justify-center lg:justify-start mt-2">
                              <div className={`h-1.5 w-20 bg-gradient-to-r ${strategy.color} rounded-full animate-slide-in-left`}></div>
                              <div className={`h-1.5 w-12 bg-gradient-to-r ${strategy.color} rounded-full animate-slide-in-left animation-delay-200`}></div>
                              <div className={`h-1.5 w-8 bg-gradient-to-r ${strategy.color} rounded-full animate-slide-in-left animation-delay-400`}></div>
                            </div>
                          </div>

                          <p className="text-4xl text-gray-100 leading-relaxed mb-6 font-medium animate-fade-in-up animation-delay-400 drop-shadow-lg">
                            {strategy.description}
                          </p>

                          <div className="space-y-3">
                            {strategy.detailPoints.map((point, idx) => (
                              <div 
                                key={idx}
                                className="flex items-center justify-center lg:justify-start gap-3 animate-slide-in-bounce"
                                style={{ animationDelay: `${600 + idx * 150}ms` }}
                              >
                                <div className="relative flex-shrink-0">
                                  <div className={`w-4 h-4 bg-gradient-to-r ${strategy.color} rounded-full animate-pulse-point`}></div>
                                  <div className={`absolute inset-0 w-4 h-4 bg-gradient-to-r ${strategy.color} rounded-full blur-md opacity-50`}></div>
                                </div>
                                <span className="text-3xl font-bold bg-gradient-to-r from-amber-200 to-yellow-300 bg-clip-text text-transparent drop-shadow-md">
                                  {point}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })()}
              </div>
            </div>

            {/* Strategy Navigation - Appears on Hover at Bottom */}
            <div className={`flex justify-center items-center gap-6 py-4 transition-all duration-300 ${
              showStrategyNav ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
            }`}>
              <button
                onClick={prevStrategy}
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white rounded-full p-3 shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-110"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={nextStrategy}
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white rounded-full p-3 shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-110"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Slide 3 - Technologies */}
          <div 
            className="min-w-full h-full flex flex-col px-8 py-6 overflow-hidden relative"
            onMouseEnter={() => setShowTechNav(true)}
            onMouseLeave={() => setShowTechNav(false)}
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <img 
                src={logoPath} 
                alt="Logo" 
                className="w-16 h-16 object-contain drop-shadow-lg"
              />
              <h2 className="text-6xl font-black text-center bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">
                Technologies Used
              </h2>
            </div>
            
            <div className="flex-1 flex items-center justify-center overflow-hidden">
              <div className="w-full max-w-5xl">
                {(() => {
                  const tech = technologies[techSlide];
                  const Icon = tech.icon;
                  
                  return (
                    <div className={`w-full ${isTransitioning ? 'strategy-fade-out' : 'strategy-fade-in'}`}>
                      <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <div className={`absolute top-10 left-10 w-48 h-48 bg-gradient-to-r ${tech.gradient} rounded-full blur-3xl opacity-20 animate-pulse-glow`}></div>
                        <div className={`absolute bottom-10 right-10 w-64 h-64 bg-gradient-to-l ${tech.gradient} rounded-full blur-3xl opacity-15 animate-pulse-glow animation-delay-1000`}></div>
                      </div>

                      <div className="relative flex flex-col lg:flex-row items-center justify-center gap-12 px-4">
                        <div className="flex-shrink-0 relative">
                          <div className="relative w-72 h-72">
                            <div className={`absolute inset-0 border-3 border-opacity-20 rounded-full animate-spin-slow`} style={{ borderColor: tech.color }}></div>
                            <div className={`absolute inset-6 border-3 border-opacity-25 rounded-full animate-spin-reverse`} style={{ borderColor: tech.color }}></div>
                            <div className={`absolute inset-12 border-2 border-opacity-30 rounded-full animate-spin-slow animation-delay-500`} style={{ borderColor: tech.color }}></div>
                            <div className={`absolute inset-8 bg-gradient-to-br ${tech.gradient} rounded-full blur-2xl opacity-40 animate-pulse-mega`}></div>
                            <div className={`absolute inset-14 bg-gradient-to-br ${tech.gradient} rounded-2xl flex items-center justify-center shadow-2xl icon-mega-float backdrop-blur-sm`}>
                              <Icon className="w-36 h-36 text-white drop-shadow-2xl icon-breathe" />
                            </div>
                            <div className="absolute top-0 left-1/2 w-4 h-4 rounded-full animate-orbit-1 shadow-lg" style={{ backgroundColor: tech.color }}></div>
                            <div className="absolute bottom-0 left-1/2 w-3 h-3 rounded-full animate-orbit-2 shadow-lg" style={{ backgroundColor: tech.color }}></div>
                            <div className="absolute left-0 top-1/2 w-3 h-3 rounded-full animate-orbit-3 shadow-lg" style={{ backgroundColor: tech.color }}></div>
                            <div className="absolute right-0 top-1/2 w-4 h-4 rounded-full animate-orbit-4 shadow-lg" style={{ backgroundColor: tech.color }}></div>
                          </div>
                        </div>

                        <div className="flex-1 text-center lg:text-left max-w-2xl">
                          <div className="mb-6">
                            <h3 className="text-7xl font-black mb-3 leading-tight">
                              <span className={`inline-block animate-text-shimmer bg-gradient-to-r ${tech.gradient} ${tech.gradient} ${tech.gradient} bg-clip-text text-transparent bg-size-300`}>
                                {tech.name}
                              </span>
                            </h3>
                            
                            <div className="flex gap-1.5 justify-center lg:justify-start mt-2">
                              <div className={`h-1.5 w-20 bg-gradient-to-r ${tech.gradient} rounded-full animate-slide-in-left`}></div>
                              <div className={`h-1.5 w-12 bg-gradient-to-r ${tech.gradient} rounded-full animate-slide-in-left animation-delay-200`}></div>
                              <div className={`h-1.5 w-8 bg-gradient-to-r ${tech.gradient} rounded-full animate-slide-in-left animation-delay-400`}></div>
                            </div>
                          </div>

                          <div className="mb-6 animate-fade-in-up animation-delay-400">
                            <div className="flex items-center justify-center lg:justify-start gap-3 mb-3">
                              <Coins className="w-8 h-8" style={{ color: tech.color }} />
                              <span className="text-2xl font-bold text-gray-300">Available Coins:</span>
                            </div>
                            <p className="text-3xl text-gray-100 leading-relaxed font-medium drop-shadow-lg">
                              {tech.coins}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })()}
              </div>
            </div>

            {/* Technology Navigation - Appears on Hover at Bottom */}
            <div className={`flex justify-center items-center gap-6 py-4 transition-all duration-300 ${
              showTechNav ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
            }`}>
              <button
                onClick={prevTech}
                className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white rounded-full p-3 shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-110"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={nextTech}
                className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white rounded-full p-3 shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-110"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Slide 4 - Bitcoin Halving */}
          <div 
            className="min-w-full h-full flex items-center justify-center px-8 py-4 overflow-hidden"
            onMouseEnter={() => setShowHalvingButtons(true)}
            onMouseLeave={() => setShowHalvingButtons(false)}
          >
            <div className="w-full max-w-7xl h-full flex flex-col">
              <div className="flex items-center justify-center gap-2 mb-3">
                <img 
                  src={logoPath} 
                  alt="Logo" 
                  className="w-10 h-10 object-contain drop-shadow-xl"
                />
                <h2 className="text-3xl font-black text-center bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">
                  Bitcoin Halving
                </h2>
              </div>

              <div className="flex-1 flex items-center justify-center overflow-hidden">
                {bitcoinSlide === 0 ? (
                  <div className="w-full h-full flex flex-col max-w-4xl">
                    <div className="text-center mb-2">
                      <h3 className="text-lg font-bold bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 bg-clip-text text-transparent mb-1">
                        Halving Chart
                      </h3>
                      <p className="text-xs text-amber-200">
                        Click to reveal the Bitcoin halving timeline
                      </p>
                    </div>

                    <div className="flex-1 flex flex-col justify-center space-y-2 overflow-y-auto px-2">
                      {halvingData.map((item, index) => (
                        <div
                          key={item.year}
                          className={`transform transition-all duration-700 ${
                            index < visibleItems
                              ? 'opacity-100 translate-y-0 scale-100'
                              : 'opacity-0 translate-y-8 scale-95'
                          }`}
                        >
                          <div className="relative group">
                            <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-lg blur-sm opacity-40 group-hover:opacity-60 transition-all duration-500"></div>
                            
                            <div className="relative bg-gradient-to-br from-slate-800/70 to-slate-900/70 backdrop-blur-md rounded-lg p-2.5 border-2 border-amber-500/50 hover:border-amber-400/70 transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/30">
                              <div className="flex items-center gap-2.5">
                                <div className="flex-shrink-0">
                                  <div className="bg-gradient-to-r from-amber-600 to-yellow-600 px-3 py-1 rounded-md border-2 border-amber-400/50 shadow-lg">
                                    <span className="text-xl font-bold text-slate-900 whitespace-nowrap">
                                      {item.year}
                                    </span>
                                  </div>
                                </div>

                                <div className="flex-shrink-0">
                                  <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                  </svg>
                                </div>

                                <div className="flex-1 min-w-0">
                                  <div className="bg-gradient-to-r from-yellow-600/30 to-amber-600/30 backdrop-blur-sm px-3 py-2 rounded-md border-2 border-yellow-400/50 text-center shadow-lg">
                                    <span className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent tracking-wide">
                                      {item.btc}
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="w-full h-full flex flex-col max-w-7xl">
                    <div className="text-center mb-2">
                      <h3 className="text-lg font-black text-amber-400 mb-0.5">
                        Bitcoin Pattern Graph
                      </h3>
                      <p className="text-xs text-amber-300/80">
                        Reveal Bitcoin's historical pattern
                      </p>
                    </div>
                    
                    <div className="flex-1 relative w-full min-h-0">
                      <svg className="w-full h-full" viewBox="0 0 267 100" preserveAspectRatio="xMidYMid meet">
                        <defs>
                          <filter id="glow">
                            <feGaussianBlur stdDeviation="1.2" result="coloredBlur"/>
                            <feMerge>
                              <feMergeNode in="coloredBlur"/>
                              <feMergeNode in="SourceGraphic"/>
                            </feMerge>
                          </filter>
                        </defs>

                        {connections.map((conn, idx) => {
                          if (!isConnectionVisible(conn)) return null;
                          const from = getNode(conn[0]);
                          const to = getNode(conn[1]);
                          return (
                            <line
                              key={`line-${idx}`}
                              x1={from.x}
                              y1={from.y}
                              x2={to.x}
                              y2={to.y}
                              stroke="#f59e0b"
                              strokeWidth="1.2"
                              strokeLinecap="round"
                              filter="url(#glow)"
                              style={{
                                strokeDasharray: 150,
                                strokeDashoffset: 150,
                                animation: 'drawLine 0.5s ease-out forwards'
                              }}
                            />
                          );
                        })}

                        {nodes.map((node, idx) => {
                          if (idx >= visibleNodes) return null;
                          
                          const isTop = node.y < 50;
                          const isLongText = node.price.length > 8;
                          const isVeryLongText = node.price.includes('to');
                          
                          return (
                            <g key={node.id}>
                              <circle cx={node.x} cy={node.y} r="5" fill={node.halving ? '#f59e0b' : '#fbbf24'} opacity="0.4" />
                              <circle cx={node.x} cy={node.y} r="3" fill={node.halving ? '#f59e0b' : '#1e293b'} stroke={node.halving ? '#fbbf24' : '#f59e0b'} strokeWidth="1" filter="url(#glow)" />
                              <circle cx={node.x} cy={node.y} r="1.2" fill="#fbbf24" />
                              <rect x={node.x - 6.5} y={isTop ? node.y - 10.5 : node.y + 3.5} width="13" height="7" fill="#0f172a" opacity="0.98" rx="1" stroke="#fbbf24" strokeWidth="0.3" />
                              <text x={node.x} y={isTop ? node.y - 5.5 : node.y + 7.5} textAnchor="middle" dominantBaseline="middle" fill="#fbbf24" fontWeight="900" fontSize="4.8" fontFamily="Arial, sans-serif">
                                {node.year}
                              </text>
                              <rect x={node.x - (isVeryLongText ? 11 : isLongText ? 10.5 : node.price === '?' ? 4 : 11)} y={isTop ? node.y + 3.5 : node.y - 10.5} width={isVeryLongText ? 22 : isLongText ? 21 : node.price === '?' ? 8 : 22} height="7" fill="#0f172a" opacity="0.98" rx="1" stroke={node.halving ? '#fbbf24' : '#ffffff'} strokeWidth="0.3" />
                              <text x={node.x} y={isTop ? node.y + 7.5 : node.y - 5.5} textAnchor="middle" dominantBaseline="middle" fill={node.halving ? '#fbbf24' : '#ffffff'} fontWeight={node.halving ? '900' : '800'} fontSize={isVeryLongText ? '3.8' : isLongText ? '4.2' : node.price === '?' ? '6.5' : '4.8'} fontFamily="Arial, sans-serif">
                                {node.price}
                              </text>
                            </g>
                          );
                        })}
                      </svg>
                    </div>
                  </div>
                )}
              </div>

              {/* Halving Controls - Show on hover */}
              <div className={`mt-3 space-y-1 transition-all duration-300 ${
                showHalvingButtons ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
              }`}>
                <div className="flex gap-1.5 justify-center">
                  <button
                    onClick={prevBitcoinSlide}
                    className="px-3 py-1 text-xs font-semibold rounded-lg border-2 bg-slate-700/50 hover:bg-slate-600/50 text-amber-400 border-amber-500/30 hover:border-amber-400/50 transition-all duration-300 transform hover:scale-105"
                  >
                    ← Previous
                  </button>
                  <button
                    onClick={nextBitcoinSlide}
                    className="px-3 py-1 text-xs font-semibold rounded-lg border-2 bg-slate-700/50 hover:bg-slate-600/50 text-amber-400 border-amber-500/30 hover:border-amber-400/50 transition-all duration-300 transform hover:scale-105"
                  >
                    Next →
                  </button>
                </div>

                <div className="flex gap-1.5 justify-center">
                  <button
                    onClick={handleBitcoinNext}
                    className="px-4 py-1.5 bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-500 hover:to-yellow-500 text-slate-900 text-sm font-semibold rounded-lg shadow-lg hover:shadow-xl hover:shadow-amber-500/50 transition-all duration-300 transform hover:scale-105"
                  >
                    {((bitcoinSlide === 0 && visibleItems === 0) || (bitcoinSlide === 1 && visibleNodes === 0))
                      ? 'Start' 
                      : ((bitcoinSlide === 0 && visibleItems < halvingData.length) || (bitcoinSlide === 1 && visibleNodes < nodes.length))
                      ? 'Next' 
                      : 'Restart'}
                  </button>
                  
                  {((bitcoinSlide === 0 && visibleItems > 0) || (bitcoinSlide === 1 && visibleNodes > 0)) && (
                    <button
                      onClick={handleBitcoinReset}
                      className="px-4 py-1.5 bg-slate-700/50 hover:bg-slate-600/50 text-amber-400 text-sm font-semibold rounded-lg border-2 border-amber-500/30 hover:border-amber-400/50 transition-all duration-300 transform hover:scale-105"
                    >
                      Reset
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Slide 5 - Thank You */}
          <div className="min-w-full h-full flex items-center justify-center px-8 py-8 relative overflow-y-auto">
            <div className="w-full max-w-3xl relative z-10">
              <div className="absolute inset-0 pointer-events-none opacity-20">
                <Sparkles className="absolute top-10 left-10 w-12 h-12 text-amber-500/40 animate-float" />
                <Heart className="absolute top-20 right-20 w-16 h-16 text-yellow-500/40 animate-float-delayed" />
                <Coins className="absolute bottom-20 left-20 w-20 h-20 text-amber-600/40 animate-float-slow" />
                <Shield className="absolute bottom-10 right-10 w-10 h-10 text-yellow-400/40 animate-float" />
              </div>

              <div className="text-center relative">
                <div className="mb-8 relative animate-fade-in">
                  <div className="inline-block relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 rounded-full blur-2xl opacity-40"></div>
                    <img 
                      src={logoPath} 
                      alt="CCA Coins Logo" 
                      className="relative w-40 h-40 mx-auto object-contain drop-shadow-2xl"
                    />
                  </div>
                </div>

                <div className="mb-8 animate-slide-up animation-delay-300">
                  <h1 className="text-7xl font-black mb-4">
                    <span className="bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 bg-clip-text text-transparent animate-gradient-x">
                      Thank You!
                    </span>
                  </h1>
                  
                  <div className="w-32 h-1 bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 mx-auto rounded-full animate-expand"></div>
                </div>

                <p className="text-3xl text-gray-300 font-semibold mb-8 animate-fade-in animation-delay-600 px-4">
                  <span className="bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">
                    For Choosing CCA Coin
                  </span>
                </p>

                <div className="animate-fade-in animation-delay-900">
                  <p className="text-lg text-gray-400 font-medium mb-6 px-4 leading-relaxed">
                    Your journey to smart crypto investments starts here
                  </p>
                  
                  <div className="flex justify-center items-center gap-4 mb-6">
                    <div className="w-16 h-1 bg-gradient-to-r from-transparent to-amber-500 rounded-full"></div>
                    <Heart className="w-8 h-8 text-amber-400 animate-pulse" />
                    <div className="w-16 h-1 bg-gradient-to-l from-transparent to-amber-500 rounded-full"></div>
                  </div>
                </div>

                <div className="animate-fade-in animation-delay-1200">
                  <div className="inline-block bg-gradient-to-r from-amber-600/20 to-yellow-600/20 backdrop-blur-sm border border-amber-500/30 rounded-2xl px-10 py-5 shadow-2xl hover:shadow-amber-500/30 transition-all duration-500 hover:scale-105">
                    <p className="text-xl font-bold text-amber-400 mb-1">
                      Stay Connected
                    </p>
                    <p className="text-sm text-gray-400">
                      Join thousands of successful investors
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mute/Unmute Button */}
      <button
        onClick={toggleMute}
        className="fixed top-10 right-8 z-20 bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-500 hover:to-yellow-500 text-slate-900 rounded-full p-4 shadow-2xl hover:shadow-amber-500/50 transition-all duration-300 hover:scale-110"
        title={isMuted ? "Unmute" : "Mute"}
      >
        {isMuted ? (
          <VolumeX className="w-6 h-6" />
        ) : (
          <Volume2 className="w-6 h-6" />
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

        @keyframes strategy-fade-in {
          0% { 
            opacity: 0;
            transform: scale(0.9) translateY(30px);
            filter: blur(10px);
          }
          100% { 
            opacity: 1;
            transform: scale(1) translateY(0);
            filter: blur(0px);
          }
        }

        @keyframes strategy-fade-out {
          0% { 
            opacity: 1;
            transform: scale(1) translateY(0);
            filter: blur(0px);
          }
          100% { 
            opacity: 0;
            transform: scale(0.9) translateY(-30px);
            filter: blur(10px);
          }
        }

        @keyframes pulse-glow {
          0%, 100% { 
            opacity: 0.3;
            transform: scale(1);
          }
          50% { 
            opacity: 0.6;
            transform: scale(1.05);
          }
        }

        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes spin-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }

        @keyframes icon-mega-float {
          0%, 100% {
            transform: translateY(0px) scale(1) rotate(0deg);
          }
          25% {
            transform: translateY(-15px) scale(1.05) rotate(2deg);
          }
          50% {
            transform: translateY(-20px) scale(1.08) rotate(0deg);
          }
          75% {
            transform: translateY(-15px) scale(1.05) rotate(-2deg);
          }
        }

        @keyframes icon-breathe {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
        }

        @keyframes pulse-mega {
          0%, 100% { 
            opacity: 0.3;
            transform: scale(1);
          }
          50% { 
            opacity: 0.6;
            transform: scale(1.2);
          }
        }

        @keyframes pulse-point {
          0%, 100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.3);
            opacity: 0.7;
          }
        }

        @keyframes orbit-1 {
          0% {
            transform: translate(-50%, -50%) rotate(0deg) translateX(150px) rotate(0deg);
          }
          100% {
            transform: translate(-50%, -50%) rotate(360deg) translateX(150px) rotate(-360deg);
          }
        }

        @keyframes orbit-2 {
          0% {
            transform: translate(-50%, -50%) rotate(180deg) translateX(150px) rotate(-180deg);
          }
          100% {
            transform: translate(-50%, -50%) rotate(540deg) translateX(150px) rotate(-540deg);
          }
        }

        @keyframes orbit-3 {
          0% {
            transform: translate(-50%, -50%) rotate(90deg) translateX(150px) rotate(-90deg);
          }
          100% {
            transform: translate(-50%, -50%) rotate(450deg) translateX(150px) rotate(-450deg);
          }
        }

        @keyframes orbit-4 {
          0% {
            transform: translate(-50%, -50%) rotate(270deg) translateX(150px) rotate(-270deg);
          }
          100% {
            transform: translate(-50%, -50%) rotate(630deg) translateX(150px) rotate(-630deg);
          }
        }

        @keyframes slide-in-left {
          0% {
            transform: translateX(-100px);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }

        @keyframes slide-in-bounce {
          0% {
            transform: translateX(-50px);
            opacity: 0;
          }
          60% {
            transform: translateX(10px);
            opacity: 1;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }

        @keyframes text-shimmer {
          0% {
            background-position: -200% center;
          }
          100% {
            background-position: 200% center;
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes drawLine {
          to { stroke-dashoffset: 0; }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .strategy-fade-in {
          animation: strategy-fade-in 0.6s ease-out forwards;
        }

        .strategy-fade-out {
          animation: strategy-fade-out 0.6s ease-in forwards;
        }

        .animate-pulse-glow {
          animation: pulse-glow 3s ease-in-out infinite;
        }

        .animate-pulse-mega {
          animation: pulse-mega 4s ease-in-out infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }

        .animate-spin-reverse {
          animation: spin-reverse 6s linear infinite;
        }

        .icon-mega-float {
          animation: icon-mega-float 4s ease-in-out infinite;
        }

        .icon-breathe {
          animation: icon-breathe 3s ease-in-out infinite;
        }

        .animate-pulse-point {
          animation: pulse-point 1.5s ease-in-out infinite;
        }

        .animate-orbit-1 {
          animation: orbit-1 8s linear infinite;
        }

        .animate-orbit-2 {
          animation: orbit-2 10s linear infinite;
        }

        .animate-orbit-3 {
          animation: orbit-3 7s linear infinite;
        }

        .animate-orbit-4 {
          animation: orbit-4 9s linear infinite;
        }

        .animate-slide-in-left {
          animation: slide-in-left 0.8s ease-out forwards;
        }

        .animate-slide-in-bounce {
          animation: slide-in-bounce 0.8s ease-out forwards;
        }

        .animate-text-shimmer {
          animation: text-shimmer 3s linear infinite;
        }

        .bg-size-300 {
          background-size: 300% auto;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }

        .animation-delay-200 { animation-delay: 0.2s; }
        .animation-delay-300 { animation-delay: 0.3s; }
        .animation-delay-400 { animation-delay: 0.4s; }
        .animation-delay-500 { animation-delay: 0.5s; }
        .animation-delay-600 { animation-delay: 0.6s; }
        .animation-delay-900 { animation-delay: 0.9s; }
        .animation-delay-1000 { animation-delay: 1s; }
        .animation-delay-1200 { animation-delay: 1.2s; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }

        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
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
      `}</style>
    </div>
  );
};

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
    <div className="grid grid-cols-3 gap-6 mt-8 animate-fade-in animation-delay-1500 px-4">
      <div className="text-center">
        <div className="text-4xl font-black bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent mb-1 animate-count-up">
          {formatNumber(users)}+
        </div>
        <div className="text-sm text-gray-400 font-semibold">
          Active Users
        </div>
      </div>
      
      <div className="text-center">
        <div className="text-4xl font-black bg-gradient-to-r from-yellow-400 to-amber-600 bg-clip-text text-transparent mb-1 animate-count-up">
          ${volume}M+
        </div>
        <div className="text-sm text-gray-400 font-semibold">
          Trading Volume
        </div>
      </div>
      
      <div className="text-center">
        <div className="text-4xl font-black bg-gradient-to-r from-amber-500 to-yellow-500 bg-clip-text text-transparent mb-1 animate-count-up">
          {uptime.toFixed(1)}%
        </div>
        <div className="text-sm text-gray-400 font-semibold">
          Uptime
        </div>
      </div>
    </div>
  );
};

export default CCACoins;
