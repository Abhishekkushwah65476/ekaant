import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Menu, X, Play, ArrowRight, Star, Users, Award, TrendingUp } from 'lucide-react';

// Mock API data - In production, this would come from actual API endpoints
const mockData = {
  navigation: [
    { id: 1, title: 'Home', href: '#home' },
    { id: 2, title: 'About', href: '#about' },
    { id: 3, title: 'Services', href: '#services' },
    { id: 4, title: 'Portfolio', href: '#portfolio' },
    { id: 5, title: 'Contact', href: '#contact' }
  ],
  hero: {
    title: 'Transform Your Digital Experience',
    subtitle: 'Innovative solutions that drive growth and engagement',
    description: 'We create cutting-edge digital experiences that help businesses thrive in the modern landscape.',
    ctaText: 'Get Started',
    videoText: 'Watch Demo'
  },
  features: [
    {
      id: 1,
      icon: TrendingUp,
      title: 'Performance Driven',
      description: 'Optimized solutions that deliver measurable results and exceptional user experiences.'
    },
    {
      id: 2,
      icon: Users,
      title: 'User Centered',
      description: 'Designs crafted with your users in mind, ensuring intuitive and engaging interactions.'
    },
    {
      id: 3,
      icon: Award,
      title: 'Award Winning',
      description: 'Recognized excellence in design and development across multiple industry standards.'
    }
  ],
  testimonials: [
    {
      id: 1,
      name: 'Sarah Johnson',
      position: 'CEO, TechCorp',
      content: 'Outstanding work! The team delivered beyond our expectations and transformed our digital presence completely.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=64&h=64&fit=crop&crop=face'
    },
    {
      id: 2,
      name: 'Michael Chen',
      position: 'CTO, StartupX',
      content: 'Professional, efficient, and innovative. They understood our vision and brought it to life perfectly.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=face'
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      position: 'Marketing Director, GrowthCo',
      content: 'The results speak for themselves. Our engagement rates increased by 300% after the redesign.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&fit=crop&crop=face'
    }
  ],
  portfolio: [
    {
      id: 1,
      title: 'E-commerce Revolution',
      category: 'Web Development',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
      description: 'Modern e-commerce platform with advanced features'
    },
    {
      id: 2,
      title: 'Brand Identity Design',
      category: 'Branding',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop',
      description: 'Complete brand overhaul for tech startup'
    },
    {
      id: 3,
      title: 'Mobile App Innovation',
      category: 'Mobile Development',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop',
      description: 'Cross-platform mobile application'
    }
  ]
};

const DynamicHomepage = () => {
  // State management for dynamic behavior
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [data, setData] = useState(null);
  const [activeSection, setActiveSection] = useState('home');
  
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const portfolioRef = useRef(null);
  const contactRef = useRef(null);

  // Simulate API data fetching
  useEffect(() => {
    const fetchData = async () => {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      setData(mockData);
    };
    fetchData();
  }, []);

  // Scroll effect for navigation
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Active section detection
      const sections = [
        { name: 'home', ref: heroRef },
        { name: 'about', ref: aboutRef },
        { name: 'services', ref: servicesRef },
        { name: 'portfolio', ref: portfolioRef },
        { name: 'contact', ref: contactRef }
      ];
      
      sections.forEach(section => {
        if (section.ref.current) {
          const rect = section.ref.current.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section.name);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-slide testimonials
  useEffect(() => {
    if (data?.testimonials) {
      const interval = setInterval(() => {
        setCurrentTestimonial((prev) => 
          (prev + 1) % data.testimonials.length
        );
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [data]);

  // Loading state
  if (!data) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center">
        <div className="animate-pulse text-white text-xl">Loading...</div>
      </div>
    );
  }

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % data.testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => 
      prev === 0 ? data.testimonials.length - 1 : prev - 1
    );
  };

  const scrollToSection = (sectionName) => {
    const refs = {
      home: heroRef,
      about: aboutRef,
      services: servicesRef,
      portfolio: portfolioRef,
      contact: contactRef
    };
    
    refs[sectionName]?.current?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 lg:h-20">
            {/* Logo */}
            <div className={`text-2xl font-bold transition-colors duration-300 ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}>
              DevCorp
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden lg:flex space-x-8">
              {data.navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.href.slice(1))}
                  className={`font-medium transition-all duration-300 hover:scale-105 ${
                    activeSection === item.href.slice(1)
                      ? isScrolled 
                        ? 'text-blue-600 border-b-2 border-blue-600' 
                        : 'text-yellow-400 border-b-2 border-yellow-400'
                      : isScrolled 
                        ? 'text-gray-700 hover:text-blue-600' 
                        : 'text-white hover:text-yellow-400'
                  }`}
                >
                  {item.title}
                </button>
              ))}
            </div>
            
            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`lg:hidden p-2 rounded-md transition-colors duration-300 ${
                isScrolled ? 'text-gray-900 hover:bg-gray-100' : 'text-white hover:bg-white/10'
              }`}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white/95 backdrop-blur-md border-t border-gray-200">
            <div className="px-4 py-2 space-y-1">
              {data.navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.href.slice(1))}
                  className={`block w-full text-left px-3 py-2 rounded-md font-medium transition-colors duration-300 ${
                    activeSection === item.href.slice(1)
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                >
                  {item.title}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 overflow-hidden"
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight">
            <span className="block animate-fadeInUp">{data.hero.title}</span>
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl mb-4 animate-fadeInUp delay-200 text-gray-300">
            {data.hero.subtitle}
          </p>
          <p className="text-base sm:text-lg mb-8 animate-fadeInUp delay-400 text-gray-400 max-w-2xl mx-auto">
            {data.hero.description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fadeInUp delay-600">
            <button className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
              {data.hero.ctaText}
              <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            <button className="group flex items-center text-white hover:text-yellow-400 font-semibold transition-colors duration-300">
              <div className="w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center mr-3 group-hover:scale-110 transition-all duration-300">
                <Play className="w-5 h-5 ml-0.5" />
              </div>
              {data.hero.videoText}
            </button>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section ref={aboutRef} className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Us
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We combine creativity with technical expertise to deliver exceptional results
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {data.features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div 
                  key={feature.id}
                  className="text-center group hover:transform hover:scale-105 transition-all duration-300"
                  style={{
                    animationDelay: `${index * 200}ms`
                  }}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:shadow-xl transition-all duration-300">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section ref={portfolioRef} className="py-20 lg:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Work
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our latest projects and see how we bring ideas to life
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.portfolio.map((project, index) => (
              <div 
                key={project.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer"
                style={{
                  animationDelay: `${index * 150}ms`
                }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <div className="text-sm text-blue-600 font-medium mb-2">
                    {project.category}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section ref={servicesRef} className="py-20 lg:py-32 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/3 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Don't just take our word for it - hear from our satisfied clients
            </p>
          </div>
          
          <div className="relative">
            <div className="text-center">
              <div className="mb-8">
                <img 
                  src={data.testimonials[currentTestimonial].avatar}
                  alt={data.testimonials[currentTestimonial].name}
                  className="w-20 h-20 rounded-full mx-auto mb-4 border-4 border-white/20"
                />
                <div className="flex justify-center mb-4">
                  {[...Array(data.testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
              
              <blockquote className="text-xl lg:text-2xl font-light mb-8 leading-relaxed max-w-3xl mx-auto">
                "{data.testimonials[currentTestimonial].content}"
              </blockquote>
              
              <div>
                <div className="font-semibold text-lg">
                  {data.testimonials[currentTestimonial].name}
                </div>
                <div className="text-gray-300">
                  {data.testimonials[currentTestimonial].position}
                </div>
              </div>
            </div>
            
            {/* Navigation buttons */}
            <button 
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors duration-300"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors duration-300"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
            
            {/* Dots indicator */}
            <div className="flex justify-center mt-8 space-x-2">
              {data.testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    index === currentTestimonial ? 'bg-white' : 'bg-white/30'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
  

  {/* 
  
  
  */}

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-2xl font-bold mb-4">DevCorp</div>
            <p className="text-gray-400 mb-8">
              Creating digital experiences that make a difference
            </p>
            <div className="flex justify-center space-x-6">
              {data.navigation.slice(0, -1).map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.href.slice(1))}
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  {item.title}
                </button>
              ))}
            </div>
            <div className="border-t border-gray-800 mt-8 pt-8 text-gray-500">
              <p>&copy; 2025 DevCorp. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
        }
        
        .delay-200 {
          animation-delay: 0.2s;
        }
        
        .delay-400 {
          animation-delay: 0.4s;
        }
        
        .delay-600 {
          animation-delay: 0.6s;
        }
        
        .delay-1000 {
          animation-delay: 1s;
        }
        
        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }
        
        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }
        
        ::-webkit-scrollbar-track {
          background: #f1f1f1;
        }
        
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #3b82f6, #8b5cf6);
          border-radius: 4px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #2563eb, #7c3aed);
        }
      `}</style>
    </div>
  );
};

export default DynamicHomepage;