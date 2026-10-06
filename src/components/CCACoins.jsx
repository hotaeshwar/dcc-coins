import React, { useState, useEffect, useRef } from 'react';
import { 
  DollarSign, // DCA
  TrendingUp, // CCA
  Gem, // FSC
  Brain, // SIP
  Newspaper, // News & Updates
  Calendar, // Events
  Bitcoin, // Halving
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
  Sparkles,
  Lock,
  Server,
  Play,
  Pause,
  Home,
  BarChart3,
  Target,
  Cpu as CpuIcon,
  CheckCircle,
  Activity,
  Zap,
  Database,
  Shield,
  Coins
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
  const [isPlaying, setIsPlaying] = useState(false);
  const [childAutoPlaying, setChildAutoPlaying] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isChildAnimationComplete, setIsChildAnimationComplete] = useState(true);
  
  const audioRef = useRef(null);
  const autoPlayTimerRef = useRef(null);
  const childAutoPlayTimerRef = useRef(null);
  const strategyCompletionTimerRef = useRef(null);
  const techCompletionTimerRef = useRef(null);
  const bitcoinCompletionTimerRef = useRef(null);

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
    { id: 0, name: 'Intro', icon: Home, color: 'from-amber-500 to-yellow-500', hasChildNav: false },
    { id: 1, name: 'Flow', icon: BarChart3, color: 'from-blue-500 to-cyan-500', hasChildNav: false },
    { id: 2, name: 'Strategies', icon: Target, color: 'from-purple-500 to-pink-500', hasChildNav: true, type: 'strategy', childCount: 7 },
    { id: 3, name: 'Tech', icon: CpuIcon, color: 'from-cyan-500 to-blue-500', hasChildNav: true, type: 'tech', childCount: 9 },
    { id: 4, name: 'Halving', icon: Bitcoin, color: 'from-yellow-500 to-orange-500', hasChildNav: true, type: 'bitcoin', childCount: 2 },
    { id: 5, name: 'Thank You', icon: CheckCircle, color: 'from-green-500 to-emerald-500', hasChildNav: false }
  ];

  const directLevels = [
    { percentage: '1%', value: '$1000' },
    { percentage: '2%', value: '$1000' },
    { percentage: '3%', value: '$1000' },
    { percentage: '4%', value: '$1000' },
    { percentage: '5%', value: '$1000' }
  ];

  const strategies = [
    { 
      icon: DollarSign, // Coin icon for DCA
      title: 'DCA', 
      subtitle: '(Dollar Cost Averaging)',
      color: 'from-amber-400 to-yellow-600',
      description: 'Systematically invest fixed amounts over time to reduce market timing risk.',
      detailPoints: ['Minimize timing risk', 'Consistent investing', 'Long-term growth'],
      autoPlayTime: 5000
    },
    { 
      icon: TrendingUp, // Coin/Chart icon for CCA
      title: 'CCA', 
      subtitle: '(Coin Cost Averaging)',
      color: 'from-yellow-500 to-amber-700',
      description: 'Optimize coin purchases based on market cycles and technical analysis.',
      detailPoints: ['Market cycle analysis', 'Technical indicators', 'Strategic entry points'],
      autoPlayTime: 5000
    },
    { 
      icon: Gem, // Gem/Strong coin icon for FSC
      title: 'FSC', 
      subtitle: '(Fundamental Strong Coin)',
      color: 'from-amber-500 to-orange-600',
      description: 'Invest in cryptocurrencies with strong fundamentals and long-term potential.',
      detailPoints: ['Strong fundamentals', 'Quality projects', 'Sustainable growth'],
      autoPlayTime: 5000
    },
    { 
      icon: Brain, // Brain/AI icon for SIP
      title: 'SIP', 
      subtitle: '(Smart Investment Plan)',
      color: 'from-yellow-400 to-amber-600',
      description: 'AI-powered investment strategies tailored to market conditions.',
      detailPoints: ['AI-driven insights', 'Adaptive strategies', 'Market optimization'],
      autoPlayTime: 5000
    },
    { 
      icon: Newspaper, // Newspaper icon for News & Updates
      title: 'News & Updates', 
      subtitle: '',
      color: 'from-amber-400 to-yellow-500',
      description: 'Real-time market insights and breaking news alerts.',
      detailPoints: ['Real-time alerts', 'Market analysis', 'Breaking news'],
      autoPlayTime: 5000
    },
    { 
      icon: Calendar, // Calendar icon for Events
      title: 'Events', 
      subtitle: '',
      color: 'from-yellow-500 to-amber-600',
      description: 'Major crypto events, conferences, and product launches.',
      detailPoints: ['Global conferences', 'Product launches', 'Industry events'],
      autoPlayTime: 5000
    },
    { 
      icon: Bitcoin, // Bitcoin icon for Halving
      title: 'Halving', 
      subtitle: '',
      color: 'from-amber-500 to-yellow-700',
      description: 'Bitcoin halving cycles analysis and investment opportunities.',
      detailPoints: ['Cycle analysis', 'Historical patterns', 'Investment timing'],
      autoPlayTime: 5000
    }
  ];

  const technologies = [
    {
      icon: Cpu,
      name: 'AI Technology',
      coins: 'TAO, NEAR Protocol, XAI, WLD, ICP, Ocean Protocol, GRT, INT, ENN',
      gradient: 'from-violet-500 to-purple-600',
      color: '#8B5CF6',
      autoPlayTime: 5000
    },
    {
      icon: Network,
      name: 'Blockchain',
      coins: 'TRX, ADA, SOLO, WALKER, ETH, BTRC, ETHERMAL, A+B+COIN, ARB',
      gradient: 'from-cyan-400 to-cyan-600',
      color: '#00E5FF',
      autoPlayTime: 5000
    },
    {
      icon: Globe2,
      name: 'Web 3',
      coins: 'Theta, Doge, Osiim Protocol, File, Coinos, SOL, Polka dot, ICP, ENS',
      gradient: 'from-blue-500 to-blue-700',
      color: '#3B82F6',
      autoPlayTime: 5000
    },
    {
      icon: Sparkles,
      name: 'NFT',
      coins: 'GMT coin, APT coin, APE coin, Near Protocol, AXS coin, CHZ coin, ZORA',
      gradient: 'from-pink-500 to-pink-700',
      color: '#EC4899',
      autoPlayTime: 5000
    },
    {
      icon: Lock,
      name: 'DeFi',
      coins: 'BIT coin, TWT coin, Sushi coin, Uni coin, Cake coin, 1 inch coin, Dodo coin',
      gradient: 'from-green-500 to-green-700',
      color: '#22C55E',
      autoPlayTime: 5000
    },
    {
      icon: DollarSign,
      name: 'DEX',
      coins: 'Decentralized Exchange (DEX) Game coins and platforms',
      gradient: 'from-teal-500 to-teal-700',
      color: '#14B8A6',
      autoPlayTime: 5000
    },
    {
      icon: Gem,
      name: 'Meme Coin',
      coins: 'Doge, Shib, Pepe, Baby Dole, Akita, Ploti, kishu inu',
      gradient: 'from-yellow-400 to-orange-500',
      color: '#FACC15',
      autoPlayTime: 5000
    },
    {
      icon: Bitcoin,
      name: 'BRC 20',
      coins: 'Pepe, Diorydi, Saints, Rats, MultiBit, ORD',
      gradient: 'from-orange-500 to-orange-700',
      color: '#F7931A',
      autoPlayTime: 5000
    },
    {
      icon: Server,
      name: 'Infrastructure',
      coins: 'Various infrastructure and protocol coins',
      gradient: 'from-slate-400 to-slate-600',
      color: '#94A3B8',
      autoPlayTime: 5000
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
    setCurrentSlide((prev) => {
      const nextSlide = (prev + 1) % 6;
      if (nextSlide === 5) {
        resetChildStates();
      }
      setIsChildAnimationComplete(true);
      return nextSlide;
    });
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => {
      const prevSlideNum = (prev - 1 + 6) % 6;
      if (prevSlideNum === 5) {
        resetChildStates();
      }
      setIsChildAnimationComplete(true);
      return prevSlideNum;
    });
  };

  const goToSlide = (slideIndex) => {
    setCurrentSlide(slideIndex);
    if (slideIndex !== 2 && slideIndex !== 3 && slideIndex !== 4) {
      resetChildStates();
    }
    setIsChildAnimationComplete(true);
  };

  const resetChildStates = () => {
    setStrategySlide(0);
    setTechSlide(0);
    setBitcoinSlide(0);
    setVisibleItems(0);
    setVisibleNodes(0);
    setChildAutoPlaying(false);
    setIsChildAnimationComplete(true);
  };

  const nextStrategy = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setStrategySlide((prev) => {
        const next = (prev + 1) % strategies.length;
        if (next === 0) {
          setIsChildAnimationComplete(true);
        }
        return next;
      });
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
      setTechSlide((prev) => {
        const next = (prev + 1) % technologies.length;
        if (next === 0) {
          setIsChildAnimationComplete(true);
        }
        return next;
      });
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
    setBitcoinSlide((prev) => {
      const next = (prev + 1) % 2;
      setVisibleItems(0);
      setVisibleNodes(0);
      setIsChildAnimationComplete(false);
      return next;
    });
  };

  const prevBitcoinSlide = () => {
    setBitcoinSlide((prev) => (prev - 1 + 2) % 2);
    setVisibleItems(0);
    setVisibleNodes(0);
    setIsChildAnimationComplete(false);
  };

  const handleBitcoinNext = () => {
    if (bitcoinSlide === 0) {
      if (visibleItems < halvingData.length) {
        setVisibleItems(prev => {
          const newValue = prev + 1;
          if (newValue >= halvingData.length) {
            setIsChildAnimationComplete(true);
          }
          return newValue;
        });
      } else {
        setVisibleItems(0);
        setIsChildAnimationComplete(true);
      }
    } else if (bitcoinSlide === 1) {
      if (visibleNodes < nodes.length) {
        setVisibleNodes(prev => {
          const newValue = prev + 1;
          if (newValue >= nodes.length) {
            setIsChildAnimationComplete(true);
          }
          return newValue;
        });
      } else {
        setVisibleNodes(0);
        setIsChildAnimationComplete(true);
      }
    }
  };

  const handleBitcoinReset = () => {
    if (bitcoinSlide === 0) {
      setVisibleItems(0);
    } else if (bitcoinSlide === 1) {
      setVisibleNodes(0);
    }
    setIsChildAnimationComplete(true);
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

  const toggleAutoPlay = () => {
    const newPlayingState = !isPlaying;
    setIsPlaying(newPlayingState);
    
    if (!newPlayingState) {
      setChildAutoPlaying(false);
      setIsChildAnimationComplete(true);
    }
  };

  const toggleChildAutoPlay = () => {
    const newChildPlayingState = !childAutoPlaying;
    setChildAutoPlaying(newChildPlayingState);
    if (newChildPlayingState) {
      setIsChildAnimationComplete(false);
    }
  };

  // Main auto play logic
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
      }, 15000);
    } else if (autoPlayTimerRef.current) {
      clearInterval(autoPlayTimerRef.current);
    }

    return () => {
      if (autoPlayTimerRef.current) {
        clearInterval(autoPlayTimerRef.current);
      }
    };
  }, [isPlaying, currentSlide, childAutoPlaying, isChildAnimationComplete]);

  // Start child auto play when slide with child content is active
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

  // Child auto play logic for Strategies
  useEffect(() => {
    if (childAutoPlaying && currentSlide === 2) {
      if (strategyCompletionTimerRef.current) {
        clearTimeout(strategyCompletionTimerRef.current);
      }
      
      const currentStrategy = strategies[strategySlide];
      strategyCompletionTimerRef.current = setTimeout(() => {
        nextStrategy();
      }, currentStrategy.autoPlayTime);

      return () => {
        if (strategyCompletionTimerRef.current) {
          clearTimeout(strategyCompletionTimerRef.current);
        }
      };
    }
  }, [childAutoPlaying, currentSlide, strategySlide]);

  // Child auto play logic for Technologies
  useEffect(() => {
    if (childAutoPlaying && currentSlide === 3) {
      if (techCompletionTimerRef.current) {
        clearTimeout(techCompletionTimerRef.current);
      }
      
      const currentTech = technologies[techSlide];
      techCompletionTimerRef.current = setTimeout(() => {
        nextTech();
      }, currentTech.autoPlayTime);

      return () => {
        if (techCompletionTimerRef.current) {
          clearTimeout(techCompletionTimerRef.current);
        }
      };
    }
  }, [childAutoPlaying, currentSlide, techSlide]);

  // Child auto play logic for Bitcoin Halving
  useEffect(() => {
    if (childAutoPlaying && currentSlide === 4) {
      if (childAutoPlayTimerRef.current) {
        clearInterval(childAutoPlayTimerRef.current);
      }
      if (bitcoinCompletionTimerRef.current) {
        clearTimeout(bitcoinCompletionTimerRef.current);
      }

      if (bitcoinSlide === 0) {
        if (visibleItems < halvingData.length) {
          childAutoPlayTimerRef.current = setInterval(() => {
            setVisibleItems(prev => {
              if (prev < halvingData.length) {
                const newValue = prev + 1;
                if (newValue >= halvingData.length) {
                  clearInterval(childAutoPlayTimerRef.current);
                  bitcoinCompletionTimerRef.current = setTimeout(() => {
                    nextBitcoinSlide();
                  }, 3000);
                }
                return newValue;
              }
              return prev;
            });
          }, 1000);
        } else {
          bitcoinCompletionTimerRef.current = setTimeout(() => {
            nextBitcoinSlide();
          }, 3000);
        }
      } else if (bitcoinSlide === 1) {
        if (visibleNodes < nodes.length) {
          childAutoPlayTimerRef.current = setInterval(() => {
            setVisibleNodes(prev => {
              if (prev < nodes.length) {
                const newValue = prev + 1;
                if (newValue >= nodes.length) {
                  clearInterval(childAutoPlayTimerRef.current);
                  bitcoinCompletionTimerRef.current = setTimeout(() => {
                    setVisibleNodes(0);
                    nextBitcoinSlide();
                    setIsChildAnimationComplete(true);
                  }, 3000);
                }
                return newValue;
              }
              return prev;
            });
          }, 600);
        } else {
          bitcoinCompletionTimerRef.current = setTimeout(() => {
            setVisibleNodes(0);
            nextBitcoinSlide();
            setIsChildAnimationComplete(true);
          }, 3000);
        }
      }

      return () => {
        if (childAutoPlayTimerRef.current) {
          clearInterval(childAutoPlayTimerRef.current);
        }
        if (bitcoinCompletionTimerRef.current) {
          clearTimeout(bitcoinCompletionTimerRef.current);
        }
      };
    } else if (childAutoPlayTimerRef.current) {
      clearInterval(childAutoPlayTimerRef.current);
    }
  }, [childAutoPlaying, currentSlide, bitcoinSlide, visibleItems, visibleNodes]);

  // Auto reset Bitcoin animation when changing views
  useEffect(() => {
    if (currentSlide === 4) {
      if (bitcoinSlide === 0) {
        setVisibleItems(0);
      } else {
        setVisibleNodes(0);
      }
    }
  }, [currentSlide, bitcoinSlide]);

  const audioFile = '/audio/relax.mp3';
  const logoPath = '/audio/logo.png';
  const bitcoinImagePath = 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1200px-Bitcoin.svg.png';

  const getSlideTextSize = () => {
    if (isMobile) return 'text-3xl md:text-4xl lg:text-6xl';
    if (isTablet) return 'text-5xl lg:text-6xl';
    return 'text-7xl lg:text-8xl';
  };

  const getTitleTextSize = () => {
    if (isMobile) return 'text-2xl md:text-3xl lg:text-4xl';
    if (isTablet) return 'text-3xl lg:text-4xl';
    return 'text-4xl lg:text-5xl';
  };

  const getBodyTextSize = () => {
    if (isMobile) return 'text-sm md:text-base lg:text-lg';
    if (isTablet) return 'text-base lg:text-lg';
    return 'text-lg lg:text-xl';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900 text-white overflow-hidden relative">
      {/* Animated Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-amber-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute top-40 right-10 w-64 h-64 bg-blue-900 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-64 h-64 bg-yellow-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
      </div>

      {/* Main Slide Container */}
      <div className="relative z-10 h-screen overflow-hidden pb-20 md:pb-24 lg:pb-32">
        <div 
          className="flex h-full transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {/* INTRO SLIDE */}
          <div className="min-w-full h-full flex items-center justify-center px-4 sm:px-6 lg:px-8 py-4 sm:py-6 relative overflow-y-auto">
            <div className="w-full max-w-6xl relative z-10">
              <div className="absolute inset-0 pointer-events-none opacity-30">
                <Building2 className="absolute top-8 left-8 w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-amber-500/40 animate-float" />
                <DollarSign className="absolute top-12 right-12 w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 text-yellow-500/40 animate-float-delayed" />
                <Coins className="absolute bottom-12 left-12 w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 text-amber-600/40 animate-float-slow" />
                <Sparkles className="absolute bottom-8 right-8 w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 text-yellow-400/40 animate-float" />
              </div>

              <div className="text-center relative">
                <div className="mb-2 md:mb-4 relative">
                  <div className="inline-block relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 rounded-full blur-xl md:blur-2xl opacity-30"></div>
                    <img 
                      src={logoPath} 
                      alt="CCA Logo" 
                      className="relative w-16 h-16 md:w-20 md:h-20 lg:w-28 lg:h-28 mx-auto object-contain drop-shadow-xl md:drop-shadow-2xl"
                    />
                  </div>
                </div>

                <div className="mb-2 md:mb-4 overflow-hidden">
                  <h1 className="text-2xl md:text-3xl lg:text-5xl font-black mb-1 md:mb-2 animate-slide-up leading-tight px-2">
                    <span className="bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 bg-clip-text text-transparent inline-block animate-gradient-x">
                      Welcome to
                    </span>
                  </h1>
                  
                  <div className="relative inline-block">
                    <h2 className={`${getSlideTextSize()} font-black bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-600 bg-clip-text text-transparent animate-slide-up animation-delay-300 tracking-tight leading-none px-2`}>
                      CCA COIN
                    </h2>
                    <div className="absolute -bottom-1 left-0 right-0 h-0.5 md:h-1 bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 animate-expand"></div>
                  </div>
                </div>

                <p className={`${getTitleTextSize()} text-gray-300 font-semibold mb-3 md:mb-6 animate-fade-in animation-delay-600 px-4 md:px-6`}>
                  <span className="bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">
                    Your Gateway to Smart Crypto Investments
                  </span>
                </p>

                <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-4 md:mb-6 animate-fade-in animation-delay-900 px-2 md:px-4">
                  <div className="group bg-gradient-to-r from-amber-600/20 to-yellow-600/20 backdrop-blur-sm border border-amber-500/30 rounded-full px-3 py-1.5 md:px-4 md:py-2 lg:px-5 lg:py-2 hover:scale-110 transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/50">
                    <span className="text-xs md:text-sm font-semibold text-amber-300 flex items-center gap-1 md:gap-2">
                      <TrendingUp className="w-3 h-3 md:w-4 md:h-4" />
                      <span>Smart Strategies</span>
                    </span>
                  </div>
                  
                  <div className="group bg-gradient-to-r from-yellow-600/20 to-amber-600/20 backdrop-blur-sm border border-yellow-500/30 rounded-full px-3 py-1.5 md:px-4 md:py-2 lg:px-5 lg:py-2 hover:scale-110 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/50">
                    <span className="text-xs md:text-sm font-semibold text-yellow-300 flex items-center gap-1 md:gap-2">
                      <Shield className="w-3 h-3 md:w-4 md:h-4" />
                      <span>Secure Platform</span>
                    </span>
                  </div>
                  
                  <div className="group bg-gradient-to-r from-amber-600/20 to-yellow-500/20 backdrop-blur-sm border border-amber-500/30 rounded-full px-3 py-1.5 md:px-4 md:py-2 lg:px-5 lg:py-2 hover:scale-110 transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/50">
                    <span className="text-xs md:text-sm font-semibold text-amber-300 flex items-center gap-1 md:gap-2">
                      <Sparkles className="w-3 h-3 md:w-4 md:h-4" />
                      <span>High Returns</span>
                    </span>
                  </div>
                </div>

                <button
                  onClick={nextSlide}
                  className="group relative inline-flex items-center gap-2 bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-500 hover:to-yellow-500 text-slate-900 text-sm md:text-base lg:text-lg font-bold px-6 py-3 md:px-8 md:py-4 rounded-full shadow-xl md:shadow-2xl hover:shadow-amber-500/50 transition-all duration-500 hover:scale-110 animate-bounce-slow animation-delay-1200"
                >
                  <span>Start Your Journey</span>
                  <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-2 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-amber-400 rounded-full blur-lg md:blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
                </button>

                <AnimatedStats isMobile={isMobile} isTablet={isTablet} />
              </div>
            </div>
          </div>

          {/* Slide 1 - Investment Flow - CIRCLES */}
          <div className="min-w-full h-full flex items-center justify-center px-4 md:px-6 lg:px-8 py-4 md:py-6">
            <div className="w-full max-w-5xl">
              <div className="text-center animate-fade-in">
                <div className="flex items-center justify-center gap-2 md:gap-3 lg:gap-4 mb-4 md:mb-6">
                  <img 
                    src={logoPath} 
                    alt="Logo" 
                    className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 object-contain drop-shadow-lg"
                  />
                  <h1 className={`${getSlideTextSize()} font-black bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 bg-clip-text text-transparent tracking-tight`}>
                    CCA COIN
                  </h1>
                </div>
                
                <div className="inline-block bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-sm border border-amber-500/30 rounded-full px-4 py-2 md:px-6 md:py-3 lg:px-8 lg:py-3.5 mb-6 md:mb-8 lg:mb-12 shadow-xl md:shadow-2xl hover:shadow-amber-500/30 transition-all duration-500 hover:scale-105">
                  <span className="text-base md:text-xl lg:text-2xl font-semibold">
                    <span className="text-gray-300">Self ID should be of Minimum</span>{' '}
                    <span className="text-amber-400 font-bold text-xl md:text-2xl lg:text-3xl">$1000</span>
                  </span>
                </div>

                <div className="max-w-4xl mx-auto px-2">
                  <div className="flex items-center justify-center gap-2 md:gap-4 lg:gap-6 flex-wrap relative">
                    {/* DIRECT Label */}
                    <div className="relative group cursor-pointer flex-shrink-0"
                         style={{ zIndex: hoveredCard === 'direct' ? 50 : 1 }}
                         onMouseEnter={() => setHoveredCard('direct')}
                         onMouseLeave={() => setHoveredCard(null)}>
                      <div className={`absolute inset-0 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full blur-md md:blur-lg transition-opacity duration-500 ${
                        hoveredCard === 'direct' ? 'opacity-100' : 'opacity-50'
                      }`}></div>
                      <div className={`relative bg-white rounded-full w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24 flex items-center justify-center border-2 md:border-3 lg:border-4 shadow-lg md:shadow-xl transition-all duration-500 ${
                        hoveredCard === 'direct' 
                          ? 'scale-125 md:scale-150 border-yellow-400 shadow-xl md:shadow-2xl shadow-amber-500/60 border-amber-500' 
                          : 'scale-100 border-amber-500'
                      }`}>
                        <div className="text-center">
                          <div className={`font-bold text-slate-900 transition-all duration-500 ${
                            hoveredCard === 'direct' ? 'text-lg md:text-xl lg:text-2xl xl:text-3xl' : 'text-sm md:text-base lg:text-xl'
                          }`}>
                            DIRECT
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {directLevels.map((level, index) => (
                      <React.Fragment key={index}>
                        <div className="w-4 h-1 md:w-6 md:h-1.5 lg:w-8 lg:h-2 bg-gradient-to-r from-amber-400 to-yellow-500 flex-shrink-0 z-0"></div>
                        <div 
                          className="relative group cursor-pointer flex-shrink-0"
                          style={{ zIndex: hoveredCard === index ? 50 : 1 }}
                          onMouseEnter={() => setHoveredCard(index)}
                          onMouseLeave={() => setHoveredCard(null)}
                        >
                          <div className={`absolute inset-0 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full blur-md md:blur-lg transition-opacity duration-500 ${
                            hoveredCard === index ? 'opacity-100' : 'opacity-50'
                          }`}></div>
                          <div className={`relative bg-white rounded-full w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24 flex items-center justify-center border-2 md:border-3 lg:border-4 shadow-lg md:shadow-xl transition-all duration-500 ${
                            hoveredCard === index 
                              ? 'scale-125 md:scale-150 border-yellow-400 shadow-xl md:shadow-2xl shadow-amber-500/60 border-amber-500' 
                              : 'scale-100 border-amber-500'
                          }`}>
                            <div className="text-center">
                              <div className={`font-bold text-slate-900 transition-all duration-500 ${
                                hoveredCard === index ? 'text-lg md:text-xl lg:text-2xl xl:text-3xl' : 'text-sm md:text-base lg:text-xl'
                              }`}>
                                {level.percentage}
                              </div>
                            </div>
                          </div>
                        </div>
                      </React.Fragment>
                    ))}
                    {/* Final CCA coins block */}
                    <div className="w-4 h-1 md:w-6 md:h-1.5 lg:w-8 lg:h-2 bg-gradient-to-r from-amber-400 to-yellow-500 flex-shrink-0 z-0"></div>
                    <div 
                      className="relative group cursor-pointer flex-shrink-0"
                      style={{ zIndex: hoveredCard === 'final' ? 50 : 1 }}
                      onMouseEnter={() => setHoveredCard('final')}
                      onMouseLeave={() => setHoveredCard(null)}
                    >
                      <div className={`absolute inset-0 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full blur-md md:blur-lg transition-opacity duration-500 ${
                        hoveredCard === 'final' ? 'opacity-100' : 'opacity-50'
                      }`}></div>
                      <div className={`relative bg-gradient-to-br from-yellow-500 to-amber-600 rounded-full w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24 flex flex-col items-center justify-center border-2 md:border-3 lg:border-4 shadow-xl md:shadow-2xl animate-pulse transition-all duration-500 ${
                        hoveredCard === 'final' 
                          ? 'scale-125 md:scale-150 border-yellow-400 shadow-2xl md:shadow-3xl shadow-amber-500/60 border-amber-500' 
                          : 'scale-100 border-amber-500'
                      }`}>
                        <span className={`font-black text-slate-900 transition-all duration-500 block ${
                          hoveredCard === 'final' ? 'text-base md:text-lg lg:text-xl xl:text-2xl' : 'text-sm md:text-base lg:text-lg'
                        }`}>CCA</span>
                        <span className={`font-semibold text-slate-900 transition-all duration-500 block ${
                          hoveredCard === 'final' ? 'text-xs md:text-sm' : 'text-xs md:text-xs'
                        }`}>coins</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-amber-400 font-bold text-lg md:text-xl lg:text-2xl xl:text-3xl mt-4 md:mt-6 lg:mt-8 animate-bounce">
                    You $1000
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Slide 2 - Strategy */}
          <div className="min-w-full h-full flex flex-col px-2 md:px-4 lg:px-6 py-2 md:py-4 overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-900/10 via-slate-900/20 to-yellow-900/10 backdrop-blur-sm pointer-events-none"></div>
            
            <div className="relative z-10 flex items-center justify-center gap-1 md:gap-2 mb-2 md:mb-4">
              <img 
                src={logoPath} 
                alt="Logo" 
                className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 object-contain drop-shadow-lg"
              />
              <h2 className={`${getSlideTextSize()} font-black text-center bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent`}>
                Investment Strategies
              </h2>
            </div>
            
            <div className="relative z-10 flex-1 flex items-center justify-center overflow-hidden px-1 md:px-2">
              <div className="w-full max-w-5xl">
                {(() => {
                  const strategy = strategies[strategySlide];
                  const Icon = strategy.icon;
                  
                  return (
                    <div className={`w-full ${isTransitioning ? 'strategy-fade-out' : 'strategy-fade-in'}`}>
                      <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <div className={`absolute top-5 md:top-10 left-5 md:left-10 w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 bg-gradient-to-r ${strategy.color} rounded-full blur-xl md:blur-2xl lg:blur-3xl opacity-20 animate-pulse-glow`}></div>
                        <div className={`absolute bottom-5 md:bottom-10 right-5 md:right-10 w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 bg-gradient-to-l ${strategy.color} rounded-full blur-xl md:blur-2xl lg:blur-3xl opacity-15 animate-pulse-glow animation-delay-1000`}></div>
                      </div>

                      <div className="relative flex flex-col lg:flex-row items-center justify-center gap-3 md:gap-4 lg:gap-6 xl:gap-8 px-1 md:px-2">
                        <div className="flex-shrink-0 relative">
                          <div className="relative w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 xl:w-56 xl:h-56">
                            <div className="absolute inset-0 border-2 md:border-3 border-amber-400/20 rounded-full animate-spin-slow"></div>
                            <div className="absolute inset-2 md:inset-3 lg:inset-4 border-2 md:border-3 border-yellow-400/25 rounded-full animate-spin-reverse"></div>
                            <div className="absolute inset-4 md:inset-6 lg:inset-8 border-1 md:border-2 border-amber-300/30 rounded-full animate-spin-slow animation-delay-500"></div>
                            <div className={`absolute inset-3 md:inset-4 lg:inset-5 bg-gradient-to-br ${strategy.color} rounded-full blur-lg md:blur-xl lg:blur-2xl opacity-40 animate-pulse-mega`}></div>
                            <div className={`absolute inset-6 md:inset-8 lg:inset-10 bg-gradient-to-br ${strategy.color} rounded-lg md:rounded-xl lg:rounded-2xl flex items-center justify-center shadow-xl md:shadow-2xl icon-mega-float backdrop-blur-sm`}>
                              <Icon className="w-14 h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24 text-slate-900 drop-shadow-xl md:drop-shadow-2xl icon-breathe" />
                            </div>
                            <div className="absolute top-0 left-1/2 w-1.5 h-1.5 md:w-2 md:h-2 lg:w-3 lg:h-3 bg-amber-400 rounded-full animate-orbit-1 shadow-lg shadow-amber-500/50"></div>
                            <div className="absolute bottom-0 left-1/2 w-1 h-1 md:w-1.5 md:h-1.5 lg:w-2 lg:h-2 bg-yellow-400 rounded-full animate-orbit-2 shadow-lg shadow-yellow-500/50"></div>
                          </div>
                        </div>

                        <div className="flex-1 text-center lg:text-left max-w-2xl px-2 md:px-3">
                          <div className="mb-2 md:mb-3 lg:mb-4">
                            <h3 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black mb-1 md:mb-2 leading-tight">
                              <span className="inline-block animate-text-shimmer bg-gradient-to-r from-amber-300 via-yellow-400 via-amber-400 to-amber-300 bg-clip-text text-transparent bg-size-300">
                                {strategy.title}
                              </span>
                            </h3>
                            
                            {strategy.subtitle && (
                              <p className="text-lg md:text-xl lg:text-2xl font-bold mb-1 md:mb-2 text-amber-300">
                                {strategy.subtitle}
                              </p>
                            )}
                            
                            <div className="flex gap-1 md:gap-1.5 justify-center lg:justify-start mt-1 md:mt-2">
                              <div className={`h-1 w-8 md:w-12 lg:w-16 bg-gradient-to-r ${strategy.color} rounded-full animate-slide-in-left`}></div>
                              <div className={`h-1 w-6 md:w-8 lg:w-10 bg-gradient-to-r ${strategy.color} rounded-full animate-slide-in-left animation-delay-200`}></div>
                              <div className={`h-1 w-4 md:w-6 lg:w-8 bg-gradient-to-r ${strategy.color} rounded-full animate-slide-in-left animation-delay-400`}></div>
                            </div>
                          </div>

                          <p className="text-sm md:text-base lg:text-lg text-gray-100 leading-relaxed mb-2 md:mb-3 lg:mb-4 font-medium animate-fade-in-up animation-delay-400 drop-shadow-lg">
                            {strategy.description}
                          </p>

                          <div className="space-y-1 md:space-y-1.5 lg:space-y-2">
                            {strategy.detailPoints.map((point, idx) => (
                              <div 
                                key={idx}
                                className="flex items-center justify-center lg:justify-start gap-1.5 md:gap-2 animate-slide-in-bounce"
                                style={{ animationDelay: `${600 + idx * 150}ms` }}
                              >
                                <div className="relative flex-shrink-0">
                                  <div className={`w-1.5 h-1.5 md:w-2 md:h-2 lg:w-3 lg:h-3 bg-gradient-to-r ${strategy.color} rounded-full animate-pulse-point`}></div>
                                  <div className={`absolute inset-0 w-1.5 h-1.5 md:w-2 md:h-2 lg:w-3 lg:h-3 bg-gradient-to-r ${strategy.color} rounded-full blur-sm md:blur-md opacity-50`}></div>
                                </div>
                                <span className="text-sm md:text-base lg:text-lg font-bold text-amber-200 drop-shadow-md">
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
          </div>

          {/* Slide 3 - Technologies */}
          <div className="min-w-full h-full flex flex-col px-2 md:px-4 lg:px-6 py-2 md:py-4 overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/10 via-slate-900/20 to-blue-900/10 backdrop-blur-sm pointer-events-none"></div>
            
            <div className="relative z-10 flex items-center justify-center gap-1 md:gap-2 mb-2 md:mb-4">
              <img 
                src={logoPath} 
                alt="Logo" 
                className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 object-contain drop-shadow-lg"
              />
              <h2 className={`${getSlideTextSize()} font-black text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent`}>
                Technologies Used
              </h2>
            </div>
            
            <div className="relative z-10 flex-1 flex items-center justify-center overflow-hidden px-1 md:px-2">
              <div className="w-full max-w-5xl">
                {(() => {
                  const tech = technologies[techSlide];
                  const Icon = tech.icon;
                  const isBRC20 = tech.name === 'BRC 20';
                  
                  return (
                    <div className={`w-full ${isTransitioning ? 'strategy-fade-out' : 'strategy-fade-in'}`}>
                      <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <div className={`absolute top-5 md:top-10 left-5 md:left-10 w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 bg-gradient-to-r ${tech.gradient} rounded-full blur-xl md:blur-2xl lg:blur-3xl opacity-20 animate-pulse-glow`}></div>
                        <div className={`absolute bottom-5 md:bottom-10 right-5 md:right-10 w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 bg-gradient-to-l ${tech.gradient} rounded-full blur-xl md:blur-2xl lg:blur-3xl opacity-15 animate-pulse-glow animation-delay-1000`}></div>
                      </div>

                      <div className="relative flex flex-col lg:flex-row items-center justify-center gap-3 md:gap-4 lg:gap-6 xl:gap-8 px-1 md:px-2">
                        <div className="flex-shrink-0 relative">
                          <div className="relative w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 xl:w-56 xl:h-56">
                            <div className={`absolute inset-0 border-2 md:border-3 border-opacity-20 rounded-full animate-spin-slow`} style={{ borderColor: tech.color }}></div>
                            <div className={`absolute inset-2 md:inset-3 lg:inset-4 border-2 md:border-3 border-opacity-25 rounded-full animate-spin-reverse`} style={{ borderColor: tech.color }}></div>
                            <div className={`absolute inset-4 md:inset-6 lg:inset-8 border-1 md:border-2 border-opacity-30 rounded-full animate-spin-slow animation-delay-500`} style={{ borderColor: tech.color }}></div>
                            <div className={`absolute inset-3 md:inset-4 lg:inset-5 bg-gradient-to-br ${tech.gradient} rounded-full blur-lg md:blur-xl lg:blur-2xl opacity-40 animate-pulse-mega`}></div>
                            <div className={`absolute inset-6 md:inset-8 lg:inset-10 bg-gradient-to-br ${tech.gradient} rounded-lg md:rounded-xl lg:rounded-2xl flex items-center justify-center shadow-xl md:shadow-2xl icon-mega-float backdrop-blur-sm`}>
                              {isBRC20 ? (
                                <div className="relative w-full h-full flex items-center justify-center p-4">
                                  <img 
                                    src={bitcoinImagePath} 
                                    alt="Bitcoin" 
                                    className="w-full h-full object-contain icon-breathe"
                                    style={{ filter: 'brightness(1.2) saturate(1.2)' }}
                                  />
                                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-orange-700 rounded-lg md:rounded-xl lg:rounded-2xl opacity-20"></div>
                                </div>
                              ) : (
                                <Icon className="w-14 h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24 text-white drop-shadow-xl md:drop-shadow-2xl icon-breathe" />
                              )}
                            </div>
                            <div className="absolute top-0 left-1/2 w-1.5 h-1.5 md:w-2 md:h-2 lg:w-3 lg:h-3 rounded-full animate-orbit-1 shadow-lg" style={{ backgroundColor: tech.color }}></div>
                            <div className="absolute bottom-0 left-1/2 w-1 h-1 md:w-1.5 md:h-1.5 lg:w-2 lg:h-2 rounded-full animate-orbit-2 shadow-lg" style={{ backgroundColor: tech.color }}></div>
                          </div>
                        </div>

                        <div className="flex-1 text-center lg:text-left max-w-2xl px-2 md:px-3">
                          <div className="mb-2 md:mb-3 lg:mb-4">
                            <h3 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black mb-1 md:mb-2 leading-tight">
                              <span className={`inline-block animate-text-shimmer bg-gradient-to-r ${tech.gradient} bg-clip-text text-transparent bg-size-300`}>
                                {tech.name}
                              </span>
                            </h3>
                            
                            <div className="flex gap-1 md:gap-1.5 justify-center lg:justify-start mt-1 md:mt-2">
                              <div className={`h-1 w-8 md:w-12 lg:w-16 bg-gradient-to-r ${tech.gradient} rounded-full animate-slide-in-left`}></div>
                              <div className={`h-1 w-6 md:w-8 lg:w-10 bg-gradient-to-r ${tech.gradient} rounded-full animate-slide-in-left animation-delay-200`}></div>
                              <div className={`h-1 w-4 md:w-6 lg:w-8 bg-gradient-to-r ${tech.gradient} rounded-full animate-slide-in-left animation-delay-400`}></div>
                            </div>
                          </div>

                          <div className="mb-2 md:mb-3 lg:mb-4 animate-fade-in-up animation-delay-400">
                            <div className="flex items-center justify-center lg:justify-start gap-1.5 md:gap-2 mb-1 md:mb-2">
                              <Coins className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" style={{ color: tech.color }} />
                              <span className="text-sm md:text-base lg:text-lg font-bold text-gray-300">Available Coins:</span>
                            </div>
                            <p className="text-sm md:text-base lg:text-lg text-gray-100 leading-relaxed font-medium drop-shadow-lg break-words">
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
          </div>

          {/* Slide 4 - Bitcoin Halving */}
          <div className="min-w-full h-full flex items-center justify-center px-4 md:px-6 lg:px-8 py-4 overflow-hidden">
            <div className="w-full max-w-7xl h-full flex flex-col">
              <div className="flex items-center justify-center gap-1 md:gap-2 mb-2 md:mb-3">
                <img 
                  src={logoPath} 
                  alt="Logo" 
                  className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 object-contain drop-shadow-lg md:drop-shadow-xl"
                />
                <h2 className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-black text-center bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">
                  Bitcoin Halving
                </h2>
              </div>

              <div className="flex-1 flex items-center justify-center overflow-hidden">
                {bitcoinSlide === 0 ? (
                  <div className="w-full h-full flex flex-col max-w-4xl">
                    <div className="text-center mb-1 md:mb-2">
                      <h3 className="text-sm md:text-base lg:text-lg font-bold bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 bg-clip-text text-transparent mb-0.5 md:mb-1">
                        Halving Chart
                      </h3>
                      <p className="text-xs text-amber-200">
                        {childAutoPlaying ? 'Auto-playing...' : 'Click to reveal the Bitcoin halving timeline'}
                      </p>
                    </div>

                    <div className="flex-1 flex flex-col justify-center items-center space-y-1 md:space-y-1.5 lg:space-y-2 overflow-y-auto px-1 md:px-2">
                      {halvingData.map((item, index) => {
                        const isVisible = index < visibleItems;
                        const isPrevious = index < visibleItems - 1;
                        const isCurrent = index === visibleItems - 1;
                        
                        return (
                          <div
                            key={item.year}
                            className={`w-full max-w-md transform transition-all duration-700 ${
                              isVisible
                                ? isCurrent
                                  ? 'opacity-100 translate-y-0 scale-100'
                                  : 'opacity-70 -translate-y-4 md:-translate-y-6 scale-95'
                                : 'opacity-0 translate-y-4 md:translate-y-8 scale-95'
                            }`}
                            style={{
                              zIndex: isCurrent ? 50 : isPrevious ? 40 : 30,
                              position: 'relative'
                            }}
                          >
                            <div className="relative group">
                              <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-lg blur-sm opacity-40 group-hover:opacity-60 transition-all duration-500"></div>
                              
                              <div className="relative bg-gradient-to-br from-slate-800/70 to-slate-900/70 backdrop-blur-md rounded-lg p-1.5 md:p-2 lg:p-2.5 border-2 border-amber-500/50 hover:border-amber-400/70 transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/30">
                                <div className="flex items-center gap-1.5 md:gap-2 lg:gap-2.5">
                                  <div className="flex-shrink-0">
                                    <div className="bg-gradient-to-r from-amber-600 to-yellow-600 px-2 py-0.5 md:px-2.5 md:py-1 lg:px-3 lg:py-1 rounded-md border-2 border-amber-400/50 shadow-lg">
                                      <span className="text-base md:text-lg lg:text-xl font-bold text-slate-900 whitespace-nowrap">
                                        {item.year}
                                      </span>
                                    </div>
                                  </div>

                                  <div className="flex-shrink-0">
                                    <svg className="w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                  </div>

                                  <div className="flex-1 min-w-0">
                                    <div className="bg-gradient-to-r from-yellow-600/30 to-amber-600/30 backdrop-blur-sm px-2 py-1 md:px-2.5 md:py-1.5 lg:px-3 lg:py-2 rounded-md border-2 border-yellow-400/50 text-center shadow-lg">
                                      <span className="text-lg md:text-xl lg:text-2xl font-bold bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent tracking-wide">
                                        {item.btc}
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ) : (
                  <div className="w-full h-full flex flex-col max-w-7xl">
                    <div className="text-center mb-1 md:mb-2">
                      <h3 className="text-sm md:text-base lg:text-lg font-black text-amber-400 mb-0.5">
                        Bitcoin Pattern Graph
                      </h3>
                      <p className="text-xs text-amber-300/80">
                        {childAutoPlaying ? 'Auto-playing...' : 'Reveal Bitcoin\'s historical pattern'}
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
            </div>
          </div>

          {/* Slide 5 - Thank You */}
          <div className="min-w-full h-full flex items-center justify-center px-4 md:px-6 lg:px-8 py-4 md:py-6 lg:py-8 relative overflow-y-auto">
            <div className="w-full max-w-3xl relative z-10">
              <div className="absolute inset-0 pointer-events-none opacity-20">
                <Sparkles className="absolute top-10 left-10 w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12 text-amber-500/40 animate-float" />
                <Heart className="absolute top-20 right-20 w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 xl:w-16 xl:h-16 text-yellow-500/40 animate-float-delayed" />
                <Coins className="absolute bottom-20 left-20 w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 xl:w-20 xl:h-20 text-amber-600/40 animate-float-slow" />
                <Shield className="absolute bottom-10 right-10 w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 text-yellow-400/40 animate-float" />
              </div>

              <div className="text-center relative">
                <div className="mb-4 md:mb-6 lg:mb-8 relative animate-fade-in">
                  <div className="inline-block relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 rounded-full blur-lg md:blur-xl lg:blur-2xl opacity-40"></div>
                    <img 
                      src={logoPath} 
                      alt="CCA Coins Logo" 
                      className="relative w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 xl:w-40 xl:h-40 mx-auto object-contain drop-shadow-xl md:drop-shadow-2xl"
                    />
                  </div>
                </div>

                <div className="mb-4 md:mb-6 lg:mb-8 animate-slide-up animation-delay-300">
                  <h1 className={`${getSlideTextSize()} font-black mb-2 md:mb-3 lg:mb-4`}>
                    <span className="bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 bg-clip-text text-transparent animate-gradient-x">
                      Thank You!
                    </span>
                  </h1>
                  
                  <div className="w-20 h-0.5 md:w-24 md:h-1 lg:w-32 lg:h-1 bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 mx-auto rounded-full animate-expand"></div>
                </div>

                <p className={`${getTitleTextSize()} text-gray-300 font-semibold mb-4 md:mb-6 lg:mb-8 animate-fade-in animation-delay-600 px-2 md:px-3 lg:px-4`}>
                  <span className="bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">
                    For Choosing CCA Coin
                  </span>
                </p>

                <div className="animate-fade-in animation-delay-900">
                  <p className={`${getBodyTextSize()} text-gray-400 font-medium mb-3 md:mb-4 lg:mb-6 px-2 md:px-3 lg:px-4 leading-relaxed`}>
                    Your journey to smart crypto investments starts here
                  </p>
                  
                  <div className="flex justify-center items-center gap-2 md:gap-3 lg:gap-4 mb-3 md:mb-4 lg:mb-6">
                    <div className="w-8 h-0.5 md:w-12 md:h-1 lg:w-16 lg:h-1 bg-gradient-to-r from-transparent to-amber-500 rounded-full"></div>
                    <Heart className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 xl:w-8 xl:h-8 text-amber-400 animate-pulse" />
                    <div className="w-8 h-0.5 md:w-12 md:h-1 lg:w-16 lg:h-1 bg-gradient-to-l from-transparent to-amber-500 rounded-full"></div>
                  </div>
                </div>

                <div className="animate-fade-in animation-delay-1200">
                  <div className="inline-block bg-gradient-to-r from-amber-600/20 to-yellow-600/20 backdrop-blur-sm border border-amber-500/30 rounded-lg md:rounded-xl lg:rounded-2xl px-6 py-3 md:px-8 md:py-4 lg:px-10 lg:py-5 shadow-xl md:shadow-2xl hover:shadow-amber-500/30 transition-all duration-500 hover:scale-105">
                    <p className="text-base md:text-lg lg:text-xl font-bold text-amber-400 mb-0.5 md:mb-1">
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

      {/* VLC Style Control Panel - Fixed at Bottom */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-gradient-to-t from-slate-900/95 to-slate-800/95 backdrop-blur-lg border-t border-slate-700/50 shadow-2xl">
        <div className="container mx-auto px-2 md:px-3 lg:px-4">
          {/* Child Navigation Panel */}
          {slides[currentSlide].hasChildNav && (
            <div className="py-1 md:py-1.5 lg:py-2 border-b border-slate-600/50">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 md:gap-0">
                <div className="flex items-center justify-center md:justify-start gap-1.5 md:gap-2 lg:gap-3 overflow-x-auto pb-1 md:pb-0">
                  {currentSlide === 2 && (
                    <>
                      <div className="flex items-center gap-1 md:gap-1.5 lg:gap-2 flex-shrink-0">
                        <div className="p-1 bg-gradient-to-r from-amber-600/20 to-yellow-600/20 rounded md:rounded-lg border border-amber-500/30">
                          <Target className="w-3 h-3 md:w-3.5 md:h-3.5 lg:w-4 lg:h-4 text-amber-400" />
                        </div>
                        <span className="text-xs md:text-sm font-medium text-amber-300">Strategies</span>
                      </div>
                      
                      <div className="h-3 md:h-4 w-px bg-slate-600 flex-shrink-0"></div>
                      
                      <button
                        onClick={prevStrategy}
                        className="p-1.5 md:p-2 bg-gradient-to-r from-amber-700 to-yellow-700 hover:from-amber-600 hover:to-yellow-600 text-white rounded md:rounded-lg shadow-lg hover:shadow-amber-500/50 transition-all duration-300 flex-shrink-0"
                        title="Previous Strategy"
                      >
                        <ChevronLeft className="w-3 h-3 md:w-3.5 md:h-3.5 lg:w-4 lg:h-4" />
                      </button>
                      
                      <div className="px-2 py-1 md:px-3 md:py-1.5 bg-slate-800/80 rounded md:rounded-lg border border-slate-600/50 min-w-[60px] md:min-w-[70px] lg:min-w-[80px] text-center flex-shrink-0">
                        <span className="text-xs md:text-sm font-semibold text-amber-300 truncate">
                          {strategies[strategySlide].title}
                        </span>
                        <div className="text-xs text-amber-400/70">
                          {strategySlide + 1}/{strategies.length}
                        </div>
                      </div>
                      
                      <button
                        onClick={nextStrategy}
                        className="p-1.5 md:p-2 bg-gradient-to-r from-amber-700 to-yellow-700 hover:from-amber-600 hover:to-yellow-600 text-white rounded md:rounded-lg shadow-lg hover:shadow-amber-500/50 transition-all duration-300 flex-shrink-0"
                        title="Next Strategy"
                      >
                        <ChevronRight className="w-3 h-3 md:w-3.5 md:h-3.5 lg:w-4 lg:h-4" />
                      </button>
                    </>
                  )}
                  
                  {currentSlide === 3 && (
                    <>
                      <div className="flex items-center gap-1 md:gap-1.5 lg:gap-2 flex-shrink-0">
                        <div className="p-1 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded md:rounded-lg border border-cyan-500/30">
                          <CpuIcon className="w-3 h-3 md:w-3.5 md:h-3.5 lg:w-4 lg:h-4 text-cyan-400" />
                        </div>
                        <span className="text-xs md:text-sm font-medium text-cyan-300">Technologies</span>
                      </div>
                      
                      <div className="h-3 md:h-4 w-px bg-slate-600 flex-shrink-0"></div>
                      
                      <button
                        onClick={prevTech}
                        className="p-1.5 md:p-2 bg-gradient-to-r from-cyan-700 to-blue-700 hover:from-cyan-600 hover:to-blue-600 text-white rounded md:rounded-lg shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 flex-shrink-0"
                        title="Previous Technology"
                      >
                        <ChevronLeft className="w-3 h-3 md:w-3.5 md:h-3.5 lg:w-4 lg:h-4" />
                      </button>
                      
                      <div className="px-2 py-1 md:px-3 md:py-1.5 bg-slate-800/80 rounded md:rounded-lg border border-slate-600/50 min-w-[70px] md:min-w-[90px] lg:min-w-[120px] text-center flex-shrink-0">
                        <span className="text-xs md:text-sm font-semibold text-cyan-300 truncate">
                          {technologies[techSlide].name}
                        </span>
                        <div className="text-xs text-cyan-400/70">
                          {techSlide + 1}/{technologies.length}
                        </div>
                      </div>
                      
                      <button
                        onClick={nextTech}
                        className="p-1.5 md:p-2 bg-gradient-to-r from-cyan-700 to-blue-700 hover:from-cyan-600 hover:to-blue-600 text-white rounded md:rounded-lg shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 flex-shrink-0"
                        title="Next Technology"
                      >
                        <ChevronRight className="w-3 h-3 md:w-3.5 md:h-3.5 lg:w-4 lg:h-4" />
                      </button>
                    </>
                  )}
                  
                  {currentSlide === 4 && (
                    <>
                      <div className="flex items-center gap-1 md:gap-1.5 lg:gap-2 flex-shrink-0">
                        <div className="p-1 bg-gradient-to-r from-yellow-600/20 to-orange-600/20 rounded md:rounded-lg border border-yellow-500/30">
                          <Bitcoin className="w-3 h-3 md:w-3.5 md:h-3.5 lg:w-4 lg:h-4 text-yellow-400" />
                        </div>
                        <span className="text-xs md:text-sm font-medium text-yellow-300">Bitcoin</span>
                      </div>
                      
                      <div className="h-3 md:h-4 w-px bg-slate-600 flex-shrink-0"></div>
                      
                      <div className="flex items-center gap-1 md:gap-1.5 lg:gap-2 flex-shrink-0">
                        <button
                          onClick={prevBitcoinSlide}
                          className="p-1.5 md:p-2 bg-gradient-to-r from-yellow-700 to-orange-700 hover:from-yellow-600 hover:to-orange-600 text-white rounded md:rounded-lg shadow-lg hover:shadow-yellow-500/50 transition-all duration-300"
                          title="Previous View"
                        >
                          <ChevronLeft className="w-3 h-3 md:w-3.5 md:h-3.5 lg:w-4 lg:h-4" />
                        </button>
                        
                        <div className="px-2 py-1 md:px-3 md:py-1.5 bg-slate-800/80 rounded md:rounded-lg border border-slate-600/50 min-w-[60px] md:min-w-[70px] lg:min-w-[80px] text-center">
                          <span className="text-xs md:text-sm font-semibold text-yellow-300 truncate">
                            {bitcoinSlide === 0 ? 'Chart' : 'Graph'}
                          </span>
                          <div className="text-xs text-yellow-400/70">
                            {bitcoinSlide === 0 ? `${visibleItems}/${halvingData.length}` : `${visibleNodes}/${nodes.length}`}
                          </div>
                        </div>
                        
                        <button
                          onClick={nextBitcoinSlide}
                          className="p-1.5 md:p-2 bg-gradient-to-r from-yellow-700 to-orange-700 hover:from-yellow-600 hover:to-orange-600 text-white rounded md:rounded-lg shadow-lg hover:shadow-yellow-500/50 transition-all duration-300"
                          title="Next View"
                        >
                          <ChevronRight className="w-3 h-3 md:w-3.5 md:h-3.5 lg:w-4 lg:h-4" />
                        </button>
                      </div>
                      
                      <div className="h-3 md:h-4 w-px bg-slate-600 flex-shrink-0 hidden md:block"></div>
                      
                      <div className="flex items-center gap-1 md:gap-1.5 lg:gap-2 flex-shrink-0">
                        <button
                          onClick={handleBitcoinNext}
                          className="px-2 py-1 md:px-3 md:py-1.5 bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-500 hover:to-yellow-500 text-slate-900 text-xs md:text-sm font-semibold rounded md:rounded-lg shadow-lg hover:shadow-xl hover:shadow-amber-500/50 transition-all duration-300"
                        >
                          Next Step
                        </button>
                        
                        <button
                          onClick={handleBitcoinReset}
                          className="px-2 py-1 md:px-3 md:py-1.5 bg-slate-700/50 hover:bg-slate-600/50 text-amber-400 text-xs md:text-sm font-semibold rounded md:rounded-lg border border-amber-500/30 hover:border-amber-400/50 transition-all duration-300"
                        >
                          Reset
                        </button>
                      </div>
                    </>
                  )}
                </div>
                
                {/* Child Auto Play Toggle */}
                <div className="flex justify-center md:justify-end">
                  <button
                    onClick={toggleChildAutoPlay}
                    className={`flex items-center gap-1 md:gap-1.5 px-2 py-1 md:px-3 md:py-1.5 rounded md:rounded-lg transition-all duration-300 ${
                      childAutoPlaying
                        ? 'bg-gradient-to-r from-emerald-600 to-green-600 text-white'
                        : 'bg-gradient-to-r from-slate-700 to-slate-800 text-slate-300 hover:text-white'
                    }`}
                    title={childAutoPlaying ? "Stop Auto Play" : "Start Auto Play"}
                  >
                    {childAutoPlaying ? (
                      <>
                        <Pause className="w-3 h-3 md:w-3.5 md:h-3.5" />
                        <span className="text-xs font-medium">Stop Auto</span>
                      </>
                    ) : (
                      <>
                        <Play className="w-3 h-3 md:w-3.5 md:h-3.5" />
                        <span className="text-xs font-medium">Auto Play</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Main Control Panel */}
          <div className="py-2 md:py-2.5 lg:py-3">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 md:gap-0">
              {/* Left Side - Slide Navigation */}
              <div className="flex items-center justify-center md:justify-start space-x-2 md:space-x-2.5 lg:space-x-3">
                <button
                  onClick={prevSlide}
                  className="bg-gradient-to-r from-slate-700 to-slate-800 hover:from-slate-600 hover:to-slate-700 text-slate-300 hover:text-white rounded p-2 md:p-2.5 shadow-lg hover:shadow-xl transition-all duration-300"
                  title="Previous Slide"
                >
                  <ChevronLeft className="w-4 h-4 md:w-4.5 md:h-4.5 lg:w-5 lg:h-5" />
                </button>
                
                <button
                  onClick={nextSlide}
                  className="bg-gradient-to-r from-slate-700 to-slate-800 hover:from-slate-600 hover:to-slate-700 text-slate-300 hover:text-white rounded p-2 md:p-2.5 shadow-lg hover:shadow-xl transition-all duration-300"
                  title="Next Slide"
                >
                  <ChevronRight className="w-4 h-4 md:w-4.5 md:h-4.5 lg:w-5 lg:h-5" />
                </button>
                
                <div className="h-4 md:h-5 lg:h-6 w-px bg-slate-600 hidden md:block"></div>
                
                <button
                  onClick={toggleAutoPlay}
                  className={`rounded p-2 md:p-2.5 shadow-lg hover:shadow-xl transition-all duration-300 ${
                    isPlaying 
                      ? 'bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-500 hover:to-yellow-500 text-slate-900' 
                      : 'bg-gradient-to-r from-slate-700 to-slate-800 hover:from-slate-600 hover:to-slate-700 text-slate-300 hover:text-white'
                  }`}
                  title={isPlaying ? "Pause AutoPlay" : "Start AutoPlay"}
                >
                  {isPlaying ? (
                    <Pause className="w-4 h-4 md:w-4.5 md:h-4.5 lg:w-5 lg:h-5" />
                  ) : (
                    <Play className="w-4 h-4 md:w-4.5 md:h-4.5 lg:w-5 lg:h-5" />
                  )}
                </button>
              </div>

              {/* Center - Slide Indicators */}
              <div className="flex items-center justify-center space-x-1 md:space-x-1.5 lg:space-x-2 overflow-x-auto py-1 md:py-0">
                {slides.map((slide, index) => (
                  <button
                    key={slide.id}
                    onClick={() => goToSlide(index)}
                    className={`flex items-center space-x-1 md:space-x-1.5 lg:space-x-2 px-2 py-1 md:px-2.5 md:py-1.5 lg:px-3 lg:py-1.5 rounded md:rounded-lg transition-all duration-300 flex-shrink-0 ${
                      currentSlide === index
                        ? 'bg-gradient-to-r from-amber-600/30 to-yellow-600/30 border border-amber-500/50 shadow-lg shadow-amber-500/20'
                        : 'bg-slate-800/50 hover:bg-slate-700/50 border border-slate-600/30'
                    }`}
                  >
                    <slide.icon className={`w-3 h-3 md:w-3.5 md:h-3.5 lg:w-4 lg:h-4 ${currentSlide === index ? 'text-amber-400' : 'text-slate-400'}`} />
                    <span className={`text-xs md:text-sm font-medium ${currentSlide === index ? 'text-amber-300' : 'text-slate-300'}`}>
                      {isMobile ? slide.name.substring(0, 3) : slide.name}
                    </span>
                    {currentSlide === index && (
                      <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-gradient-to-r from-amber-400 to-yellow-500 animate-pulse"></div>
                    )}
                  </button>
                ))}
              </div>

              {/* Right Side - Audio & Progress */}
              <div className="flex items-center justify-center md:justify-end space-x-2 md:space-x-2.5 lg:space-x-3">
                <div className="text-xs md:text-sm text-slate-400 font-medium">
                  <span className="text-amber-400">{currentSlide + 1}</span>
                  <span className="mx-0.5 md:mx-1">/</span>
                  <span>{slides.length}</span>
                </div>
                
                <div className="h-4 md:h-5 lg:h-6 w-px bg-slate-600 hidden md:block"></div>
                
                <button
                  onClick={toggleMute}
                  className={`rounded p-2 md:p-2.5 shadow-lg hover:shadow-xl transition-all duration-300 ${
                    isMuted 
                      ? 'bg-gradient-to-r from-slate-700 to-slate-800 hover:from-slate-600 hover:to-slate-700 text-slate-300 hover:text-white' 
                      : 'bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-500 hover:to-yellow-500 text-slate-900'
                  }`}
                  title={isMuted ? "Unmute" : "Mute"}
                >
                  {isMuted ? (
                    <VolumeX className="w-4 h-4 md:w-4.5 md:h-4.5 lg:w-5 lg:h-5" />
                  ) : (
                    <Volume2 className="w-4 h-4 md:w-4.5 md:h-4.5 lg:w-5 lg:h-5" />
                  )}
                </button>
              </div>
            </div>
            
            {/* Progress Bar */}
            <div className="mt-2 md:mt-2.5 lg:mt-3">
              <div className="h-0.5 md:h-1 bg-slate-700/50 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full transition-all duration-300"
                  style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>

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

const AnimatedStats = ({ isMobile, isTablet }) => {
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

  const getStatsTextSize = () => {
    if (isMobile) return 'text-2xl md:text-3xl';
    if (isTablet) return 'text-3xl lg:text-4xl';
    return 'text-4xl lg:text-5xl';
  };

  const getStatsLabelSize = () => {
    if (isMobile) return 'text-xs md:text-sm';
    if (isTablet) return 'text-sm lg:text-base';
    return 'text-base lg:text-lg';
  };

  return (
    <div className="grid grid-cols-3 gap-3 md:gap-4 lg:gap-6 mt-4 md:mt-6 lg:mt-8 animate-fade-in animation-delay-1500 px-2 md:px-3 lg:px-4">
      <div className="text-center">
        <div className={`${getStatsTextSize()} font-black bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent mb-0.5 md:mb-1 animate-count-up`}>
          {formatNumber(users)}+
        </div>
        <div className={`${getStatsLabelSize()} text-gray-400 font-semibold`}>
          Active Users
        </div>
      </div>
      
      <div className="text-center">
        <div className={`${getStatsTextSize()} font-black bg-gradient-to-r from-yellow-400 to-amber-600 bg-clip-text text-transparent mb-0.5 md:mb-1 animate-count-up`}>
          ${volume}M+
        </div>
        <div className={`${getStatsLabelSize()} text-gray-400 font-semibold`}>
          Trading Volume
        </div>
      </div>
      
      <div className="text-center">
        <div className={`${getStatsTextSize()} font-black bg-gradient-to-r from-amber-500 to-yellow-500 bg-clip-text text-transparent mb-0.5 md:mb-1 animate-count-up`}>
          {uptime.toFixed(1)}%
        </div>
        <div className={`${getStatsLabelSize()} text-gray-400 font-semibold`}>
          Uptime
        </div>
      </div>
    </div>
  );
};

export default CCACoins;
