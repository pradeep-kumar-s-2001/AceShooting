import React, { useState, useEffect } from 'react';
import { 
  FiMenu, 
  FiX, 
  FiTarget, 
  FiDroplet, 
  FiUsers, 
  FiMapPin, 
  FiPhone, 
  FiChevronRight,
  FiChevronLeft,
  FiAward,
  FiClock,
  FiHeart,
  FiCamera,
  FiShield,
  FiZap,
  FiEye,
  FiActivity,
  FiTrendingUp,
  FiUserCheck,
  FiMail,
  FiMessageCircle,
  FiInstagram,
  FiFacebook,
  FiYoutube
} from 'react-icons/fi';
import { BiBody, BiBrain, BiDumbbell } from 'react-icons/bi';
import { GiTargetArrows, GiWeightLiftingUp } from 'react-icons/gi';
import { MdOutlineSportsScore } from 'react-icons/md';

// Import images directly from assets folder
// Import all 40 images individually
import image1 from '../src/assets/image1.jpeg';
import image2 from '../src/assets/image2.jpeg';
import image3 from '../src/assets/image3.jpeg';
import image4 from '../src/assets/image4.jpeg';
import image5 from '../src/assets/image5.jpeg';
import image6 from '../src/assets/image6.jpeg';
import image7 from '../src/assets/image7.jpeg';
import image8 from '../src/assets/image8.jpeg';
import image9 from '../src/assets/image9.jpeg';
import image10 from '../src/assets/image10.jpeg';
import image11 from '../src/assets/image11.jpeg';
import image12 from '../src/assets/image12.jpeg';
import image13 from '../src/assets/image13.jpeg';
import image14 from '../src/assets/image14.jpeg';
import image15 from '../src/assets/image15.jpeg';
import image16 from '../src/assets/image16.jpeg';
import image17 from '../src/assets/image17.jpeg';
import image18 from '../src/assets/image18.jpeg';
import image19 from '../src/assets/image19.jpeg';
import image20 from '../src/assets/image20.jpeg';
import image21 from '../src/assets/image21.jpeg';
import image22 from '../src/assets/image22.jpeg';
import image23 from '../src/assets/image23.jpeg';
import image24 from '../src/assets/image24.jpeg';
import image25 from '../src/assets/image25.jpeg';
import image26 from '../src/assets/image26.jpeg';
import image27 from '../src/assets/image27.jpeg';
import image28 from '../src/assets/image28.jpeg';
import image29 from '../src/assets/image29.jpeg';
import image30 from '../src/assets/image30.jpeg';
import image31 from '../src/assets/image31.jpeg';
import image32 from '../src/assets/image32.jpeg';
import image33 from '../src/assets/image33.jpeg';
import image34 from '../src/assets/image34.jpeg';
import image35 from '../src/assets/image35.jpeg';
import image36 from '../src/assets/image36.jpeg';
import image37 from '../src/assets/image37.jpeg';
import image38 from '../src/assets/image38.jpeg';
import image39 from '../src/assets/image39.jpeg';
import image40 from '../src/assets/image40.jpeg';
import image41 from '../src/assets/image41.jpeg';
import image42 from '../src/assets/image42.jpeg';
import image43 from '../src/assets/image43.jpeg';
import image44 from '../src/assets/image44.jpeg';
import image45 from '../src/assets/image45.jpeg';
import image46 from '../src/assets/image46.jpeg';
import image47 from '../src/assets/image47.jpeg';
import image48 from '../src/assets/image48.jpeg';
import testi1 from '../src/assets/testi1.jpeg';
import testi2 from '../src/assets/testi2.jpeg';
import testi3 from '../src/assets/testi3.jpeg';


import display1 from '../src/assets/display1.jpeg.jpeg';
import display2 from '../src/assets/display2.jpeg.jpeg';
import display3 from '../src/assets/display3.jpeg.jpeg';
import display4 from '../src/assets/display4.jpeg.jpeg';
import display5 from '../src/assets/display5.jpeg.jpeg';
import display6 from '../src/assets/display6.jpeg.jpeg';
import display7 from '../src/assets/display7.jpeg.jpeg';
import display8 from '../src/assets/display8.jpeg.jpeg';
import display9 from '../src/assets/display9.jpeg.jpeg';
import display10 from '../src/assets/display10.jpeg.jpeg';
import display11 from '../src/assets/display11.jpeg.jpeg';

// Create an array with all images

import brsaLogo from '../src/assets/brsalogo.jpeg';

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentGalleryPage, setCurrentGalleryPage] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Gallery images data
  const galleryImages = [
  { id: 1, src: image1, title: 'Training Session 1', category: 'Training' },
  { id: 2, src: image2, title: 'Training Session 2', category: 'Training' },
  { id: 3, src: image3, title: 'Competition 1', category: 'Competition' },
  { id: 4, src: image4, title: 'Facilities 1', category: 'Facilities' },
  { id: 5, src: image5, title: 'Training Session 3', category: 'Training' },
  { id: 6, src: image6, title: 'Competition 2', category: 'Competition' },
  { id: 7, src: image7, title: 'Facilities 2', category: 'Facilities' },
  { id: 8, src: image8, title: 'Training Session 4', category: 'Training' },
  { id: 9, src: image9, title: 'Training Session 5', category: 'Training' },
  { id: 10, src: image10, title: 'Competition 3', category: 'Competition' },
  { id: 11, src: image11, title: 'Facilities 3', category: 'Facilities' },
  { id: 12, src: image12, title: 'Training Session 6', category: 'Training' },
  { id: 13, src: image13, title: 'Competition 4', category: 'Competition' },
  { id: 14, src: image14, title: 'Facilities 4', category: 'Facilities' },
  { id: 15, src: image15, title: 'Training Session 7', category: 'Training' },
  { id: 16, src: image16, title: 'Competition 5', category: 'Competition' },
  { id: 17, src: image17, title: 'Facilities 5', category: 'Facilities' },
  { id: 18, src: image18, title: 'Training Session 8', category: 'Training' },
  { id: 19, src: image19, title: 'Competition 6', category: 'Competition' },
  { id: 20, src: image20, title: 'Facilities 6', category: 'Facilities' },
  { id: 21, src: image21, title: 'Training Session 9', category: 'Training' },
  { id: 22, src: image22, title: 'Competition 7', category: 'Competition' },
  { id: 23, src: image23, title: 'Facilities 7', category: 'Facilities' },
  { id: 24, src: image24, title: 'Training Session 10', category: 'Training' },
  { id: 25, src: image25, title: 'Competition 8', category: 'Competition' },
  { id: 26, src: image26, title: 'Facilities 8', category: 'Facilities' },
  { id: 27, src: image27, title: 'Training Session 11', category: 'Training' },
  { id: 28, src: image28, title: 'Competition 9', category: 'Competition' },
  { id: 29, src: image29, title: 'Facilities 9', category: 'Facilities' },
  { id: 30, src: image30, title: 'Training Session 12', category: 'Training' },
  { id: 31, src: image31, title: 'Competition 10', category: 'Competition' },
  { id: 32, src: image32, title: 'Facilities 10', category: 'Facilities' },
  { id: 33, src: image33, title: 'Training Session 13', category: 'Training' },
  { id: 34, src: image34, title: 'Competition 11', category: 'Competition' },
  { id: 35, src: image35, title: 'Facilities 11', category: 'Facilities' },
  { id: 36, src: image36, title: 'Training Session 14', category: 'Training' },
  { id: 37, src: image37, title: 'Competition 12', category: 'Competition' },
  { id: 38, src: image38, title: 'Facilities 12', category: 'Facilities' },
  { id: 39, src: image39, title: 'Training Session 15', category: 'Training' },
  { id: 40, src: image40, title: 'Competition 13', category: 'Competition' },
   { id: 41, src: image41, title: 'Competition 13', category: 'Competition' },
    { id: 42, src: image42, title: 'Competition 13', category: 'Competition' },
     { id: 43, src: image43, title: 'Competition 13', category: 'Competition' },
      { id: 44, src: image44, title: 'Competition 13', category: 'Competition' },
       { id: 45, src: image45, title: 'Competition 13', category: 'Competition' },
        { id: 46, src: image46, title: 'Competition 13', category: 'Competition' },
         { id: 47, src: image47, title: 'Competition 13', category: 'Competition' },
          { id: 48, src: image48, title: 'Competition 13', category: 'Competition' },
           
           

  
];

  const slideImages = [
  { id: 1, src: display9, title: 'Display Image 9' },
  { id: 2, src: image1, title: 'Training Session' },
  { id: 3, src: image2, title: 'Practice Session' },

  { id: 4, src: image8, title: 'Competition' },
  { id: 5, src: image16, title: 'Competition' },

  // Display images
  { id: 6, src: display1, title: 'Display Image 1' },
  { id: 7, src: display2, title: 'Display Image 2' },
  { id: 8, src: display3, title: 'Display Image 3' },
  { id: 9, src: display4, title: 'Display Image 4' },
  { id: 10, src: display5, title: 'Display Image 5' },
  { id: 11, src: display6, title: 'Display Image 6' },
  { id: 12, src: display7, title: 'Display Image 7' },
  { id: 13, src: display8, title: 'Display Image 8' },
   { id: 14, src: image7, title: 'Competition' },
  { id: 15, src: display10, title: 'Display Image 10' },
  { id: 16, src: display11, title: 'Display Image 11' },
];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const playerTestimonials = [
    {
      id: 1,
      name: "K. Venkata Krishnan",
      achievement: "State Gold Medalist 2024",
      image: testi1,
      quote: "At BRSA, Coach is super supportive, friendly, and takes the time to guide one properly - a great spot for beginners to kick things off! in 🔫"
    },
    {
      id: 2,
      name: "Partha Naresh",
      achievement: "National Bronze Medalist",
      image: testi2,
      quote: "Hi team BRSA, just wanted to share my experience with the shooters academy - the coach is skilled and super patient and supportive. The training sessions are top-notch! 👍 Really helped my son to improve his aim and confidence. The facilities are well-maintained and equipment is modern. Plus, the community vibe is awesome - more than anything management is very responsible and approachable. Feels like a big shooting family 😊. Highly recommend!"
    },
    {
      id: 3,
      name: "Rahul K",
      achievement: "Junior National Competitor",
      image: testi3,
      quote: "Bangalore Rifle Shooting Arena has been an incredible experience for my shooting journey. The academy provides a highly professional and supportive environment for anyone interested in shooting sports.One of the standout aspects is the coach’s expertise and dedication. The coach is extremely skilled and focuses on training each individual with great attention to detail. The one-on-one personal guidance really helps in improving technique, confidence, and overall performance. Every session feels productive and tailored to my progress.The ambience of the academy is another major highlight. It is calm, well-maintained, and perfectly suited for focus and discipline, which are essential in a sport like rifle shooting and pistol shooting . The peaceful environment allows for better concentration and learning."
    }
  ];

  const newsUpdates = [
    {
      id: 1,
      title: "Summer Camp  Announcement",
      description: "Summer camp March 15th - May 30th every year"
    },
    {
      id: 2,
      title: "Upcoming competition",
      description: "24th KSS 2026 Rifle & Pistol Championship"
    },
    {
      id: 3,
      title: "New Batch Starting",
      description: "New batch starts every month"
    }
  ];

  const imagesPerPage = 8;
  const totalPages = Math.ceil(galleryImages.length / imagesPerPage);
  const displayedImages = galleryImages.slice(
    currentGalleryPage * imagesPerPage,
    (currentGalleryPage + 1) * imagesPerPage
  );

  // Handle scroll effect and active section
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'sport', 'facilities', 'coaching', 'testimonials', 'news', 'gallery', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slideImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slideImages.length) % slideImages.length);
  };

  // Navigation items - reduced for better spacing
  const navItems = [
    { id: 'home', label: 'Home', icon: FiTarget },
    { id: 'about', label: 'About', icon: FiUsers },
    { id: 'sport', label: 'Sport', icon: GiTargetArrows },
    { id: 'facilities', label: 'Facilities', icon: FiCamera },
    { id: 'coaching', label: 'Coaching', icon: FiAward },
    { id: 'gallery', label: 'Gallery', icon: FiHeart }
  ];

  return (
    <div className="bg-white text-gray-800 antialiased overflow-x-hidden">
      {/* Sticky Navigation */}
      <header 
        className={`fixed w-full top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-lg py-2' 
            : 'bg-white/80 backdrop-blur-sm py-3'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div 
              className="flex-shrink-0 cursor-pointer transform hover:scale-105 transition-transform duration-300 flex items-center"
              onClick={() => scrollToSection('home')}
            >
              <img src={brsaLogo} alt="BRSA Logo" className="h-8 sm:h-10 w-auto mr-2" />
              <div>
                <h1 className="text-lg sm:text-xl md:text-2xl font-black">
                  <span className="text-gray-900">BRSA</span>
                </h1>
                <p className="hidden xs:block text-[8px] sm:text-[10px] text-gray-500 -mt-1 tracking-wider">
                  BANGALORE RIFLE SHOOTERS ARENA
                </p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`px-2 xl:px-3 py-2 rounded-lg transition-all duration-300 flex items-center space-x-1 whitespace-nowrap ${
                      activeSection === item.id
                        ? 'text-green-600 bg-green-50'
                        : 'text-gray-600 hover:text-green-600 hover:bg-green-50'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="text-sm font-medium">{item.label}</span>
                  </button>
                );
              })}
              
              {/* Action Buttons */}
              <div className="flex items-center space-x-2 ml-2">
                <button
                  onClick={() => scrollToSection('contact')}
                  className="px-3 xl:px-4 py-2 bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white text-sm font-semibold rounded-lg transition-all duration-300 flex items-center space-x-1 whitespace-nowrap"
                >
                  <FiZap className="w-4 h-4" />
                  <span>Join Now</span>
                </button>

                <a
                  href="https://wa.me/919739565677?text=Hi%20BRSA%2C%20I'm%20interested%20in%20your%20shooting%20programs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 xl:px-4 py-2 bg-green-500 hover:bg-green-600 text-white text-sm font-semibold rounded-lg transition-all duration-300 flex items-center space-x-1 whitespace-nowrap"
                >
                  <FiMessageCircle className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-gray-600 hover:text-green-600 hover:bg-green-50 focus:outline-none transition-colors duration-300"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <FiX className="w-6 h-6" />
              ) : (
                <FiMenu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          <div 
            className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
              isMenuOpen ? 'max-h-[80vh] opacity-100 mt-4' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="bg-white/95 backdrop-blur-md rounded-xl shadow-lg border border-gray-100 overflow-y-auto max-h-[70vh]">
              <nav className="flex flex-col p-2">
                {[
                  { id: 'home', label: 'Home', icon: FiTarget },
                  { id: 'about', label: 'About', icon: FiUsers },
                  { id: 'sport', label: 'The Sport', icon: GiTargetArrows },
                  { id: 'facilities', label: 'Facilities', icon: FiCamera },
                  { id: 'coaching', label: 'Coaching', icon: FiAward },
                  { id: 'testimonials', label: 'Testimonials', icon: FiHeart },
                  { id: 'news', label: 'News', icon: FiActivity },
                  { id: 'gallery', label: 'Gallery', icon: FiHeart },
                  { id: 'contact', label: 'Contact', icon: FiMapPin }
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                        activeSection === item.id
                          ? 'bg-green-50 text-green-600'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      <span className="text-base font-medium">{item.label}</span>
                    </button>
                  );
                })}
                
                <div className="border-t border-gray-100 my-2 pt-2 space-y-2">
                  <button
                    onClick={() => scrollToSection('contact')}
                    className="w-full px-4 py-3 bg-gradient-to-r from-green-600 to-green-500 text-white text-base font-semibold rounded-lg flex items-center justify-center space-x-2"
                  >
                    <FiZap className="w-5 h-5" />
                    <span>Join BRSA Today</span>
                  </button>
                  
                  <a
                    href="https://wa.me/919739565677?text=Hi%20BRSA%2C%20I'm%20interested%20in%20your%20shooting%20programs"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full px-4 py-3 bg-green-500 text-white text-base font-semibold rounded-lg flex items-center justify-center space-x-2"
                  >
                    <FiMessageCircle className="w-5 h-5" />
                    <span>Enquire on WhatsApp</span>
                  </a>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>

      {/* Add padding top to prevent content from hiding under navbar */}
      <div className="pt-16 sm:pt-20">
        {/* Auto-sliding Images at Top */}
        <div className="relative w-full h-[70vh] sm:h-[80vh] overflow-hidden">
          {slideImages.map((image, index) => (
            <div
              key={image.id}
              className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent flex items-center">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                  <div className="max-w-2xl">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4">
                      Bangalore Rifle<br />Shooters Arena
                    </h1>
                    <p className="text-lg sm:text-xl text-gray-200 mb-6 sm:mb-8">
                      Premier Shooting Academy Since 2016
                    </p>
                    <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                      <button
                        onClick={() => scrollToSection('contact')}
                        className="px-6 sm:px-8 py-3 sm:py-4 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors duration-300 text-sm sm:text-base"
                      >
                        Get Started
                      </button>
                      <a
                        href="https://wa.me/919739565677?text=Hi%20BRSA%2C%20I'm%20interested%20in%20your%20shooting%20programs"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 sm:px-8 py-3 sm:py-4 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center space-x-2 text-sm sm:text-base"
                      >
                        <FiMessageCircle className="w-5 h-5" />
                        <span>Enquire Now</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Slide Controls */}
          <button
            onClick={prevSlide}
            className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-1 sm:p-2 rounded-full backdrop-blur-sm transition-colors duration-300"
          >
            <FiChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-1 sm:p-2 rounded-full backdrop-blur-sm transition-colors duration-300"
          >
            <FiChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Slide Indicators */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {slideImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'w-4 sm:w-8 bg-green-600' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Main Content */}
        <main>
          {/* About Section */}
          <section id="about" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-8 sm:mb-12 md:mb-16">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-4 text-gray-900">About BRSA</h2>
                <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-green-600 to-green-400 mx-auto rounded-full"></div>
              </div>
              
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                <div className="space-y-4 sm:space-y-6">
                  <p className="text-lg sm:text-xl md:text-2xl text-gray-700 italic font-light">
                    "Bangalore Rifle Shooters Arena (BRSA) was established in 2016, making us one of the oldest shooting academies in Bangalore."
                  </p>
                  
                  <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-gray-100">
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-3 sm:mb-4">
                      Located in the heart of Bangalore at Nagarabhaavi, BRSA offers world-class shooting facilities with professional coaching. We are affiliated with the Karnataka State Rifle Association and provide comprehensive training for shooters of all levels.
                    </p>
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                      Our academy features state-of-the-art electronic targets, professional coaching staff, and a supportive environment for both recreational shooters and competitive athletes aiming for state and national level competitions.
                    </p>
                  </div>
                  
                  <div className="flex items-center space-x-3 sm:space-x-4">
                    {[FiShield, FiTarget, FiAward].map((Icon, index) => (
                      <div key={index} className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 rounded-full flex items-center justify-center">
                        <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  {[
                    { value: '2016', label: 'Established', icon: FiClock },
                    { value: '8', label: 'Manual Lanes', icon: FiTarget },
                    { value: '5', label: 'Electronic Lanes', icon: FiTarget },
                    { value: '1+', label: 'Expert Coaches', icon: FiUsers },
                    { value: '75+', label: 'State Medals', icon: FiAward },
                    { value: '25+', label: 'National Medals', icon: FiAward }
                  ].map((stat, index) => (
                    <div key={index} className="bg-white p-4 sm:p-6 rounded-xl text-center shadow-sm border border-gray-100">
                      <stat.icon className="w-6 h-6 sm:w-8 sm:h-8 text-green-600 mx-auto mb-1 sm:mb-2" />
                      <div className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">{stat.value}</div>
                      <div className="text-xs sm:text-sm text-gray-500">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* The Sport Section */}
          <section id="sport" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-8 sm:mb-12 md:mb-16">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-4 text-gray-900">The Sport</h2>
                <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-green-600 to-green-400 mx-auto rounded-full mb-4 sm:mb-6"></div>
                <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                  10 meter air rifle and pistol shooting is an <span className="font-semibold text-green-600">ISSF recognized Olympic level event</span>, shot over a distance of 10 meters from a standing position with a 4.5 mm caliber air gun.
                </p>
              </div>

              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-6 sm:mb-8 md:mb-12 text-gray-900">
                Benefits of Taking Up Shooting
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                {[
                  { icon: BiBody, title: "Physical Discipline", desc: "Builds strength, stamina, and fine motor skills" },
                  { icon: GiWeightLiftingUp, title: "Arm Strength", desc: "Develops strong arms for steady aiming" },
                  { icon: FiZap, title: "Natural Adrenaline", desc: "Enhances focus and energy" },
                  { icon: BiBrain, title: "Mental Focus", desc: "Sharpens concentration" },
                  { icon: FiActivity, title: "Physical Balance", desc: "Strengthens core for stability" },
                  { icon: FiEye, title: "Eye Health", desc: "Exercises eye capabilities" },
                  { icon: FiUserCheck, title: "Personal Responsibility", desc: "Builds confidence and safety" },
                  { icon: FiTrendingUp, title: "Mental Discipline", desc: "90% mental - builds toughness" }
                ].map((benefit, index) => {
                  const Icon = benefit.icon;
                  return (
                    <div key={index} className="group bg-gray-50 p-4 sm:p-6 rounded-xl hover:shadow-xl transition-all duration-300 border border-gray-100">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 rounded-lg flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-green-600 transition-colors duration-300">
                        <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-green-600 group-hover:text-white transition-colors duration-300" />
                      </div>
                      <h4 className="text-base sm:text-lg font-bold mb-1 sm:mb-2 text-gray-900">{benefit.title}</h4>
                      <p className="text-xs sm:text-sm text-gray-600">{benefit.desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Facilities Section */}
          <section id="facilities" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-8 sm:mb-12 md:mb-16">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-4 text-gray-900">Our Facilities</h2>
                <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-green-600 to-green-400 mx-auto rounded-full"></div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {[
                  { icon: FiTarget, title: "10M Indoor Range", desc: "8 Manual Lanes & 5 Electronic Lanes" },
                  { icon: GiTargetArrows, title: "Competition Equipment", desc: "Grade air rifles and pistols" },
                  { icon: BiDumbbell, title: "Fitness Area", desc: "Basic workout facilities" },
                  { icon: FiDroplet, title: "Equipment Support", desc: "CO2 filling available" },
                  { icon: FiHeart, title: "Safety First", desc: "Strict safety protocols" },
                  { icon: FiUsers, title: "Changing Rooms", desc: "Clean facilities" },
                  { icon: FiMapPin, title: "Parking Available", desc: "Convenient access" },
                  { icon: MdOutlineSportsScore, title: "Target Practice", desc: "Regular practice sessions" },
                  { icon: FiClock, title: "Pay & Shoot", desc: "Guest shooting available" }
                ].map((facility, index) => {
                  const Icon = facility.icon;
                  return (
                    <div key={index} className="bg-white p-4 sm:p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
                      <div className="flex items-start space-x-3 sm:space-x-4">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-900 text-sm sm:text-base mb-1">{facility.title}</h3>
                          <p className="text-xs sm:text-sm text-gray-600">{facility.desc}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Coaching Section */}
          <section id="coaching" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-8 sm:mb-12 md:mb-16">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-4 text-gray-900">Coaching Programs</h2>
                <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-green-600 to-green-400 mx-auto rounded-full"></div>
                <p className="text-base sm:text-lg mt-4 text-gray-600">1+ Expert Coaches • Personalized Training</p>
              </div>

              <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 mb-8">
                <div className="bg-gradient-to-br from-gray-50 to-white p-6 sm:p-8 rounded-2xl shadow-lg border border-gray-100">
                  <div className="flex items-center space-x-3 mb-4 sm:mb-6">
                    <FiTarget className="w-6 h-6 sm:w-8 sm:h-8 text-green-600" />
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Training Programs</h3>
                  </div>
                  
                  <div className="space-y-3 sm:space-y-4">
                    <div className="flex items-start space-x-2 sm:space-x-3">
                      <FiChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm sm:text-base text-gray-700">Basic Foundation Course</span>
                    </div>
                    <div className="flex items-start space-x-2 sm:space-x-3">
                      <FiChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm sm:text-base text-gray-700">Weekend Basic Foundation Course</span>
                    </div>
                    <div className="flex items-start space-x-2 sm:space-x-3">
                      <FiChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm sm:text-base text-gray-700">Annual Membership</span>
                    </div>
                    <div className="flex items-start space-x-2 sm:space-x-3">
                      <FiChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm sm:text-base text-gray-700">Weekend Annual Membership</span>
                    </div>
                    <div className="flex items-start space-x-2 sm:space-x-3">
                      <FiChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm sm:text-base text-gray-700">One-to-One Personal Training</span>
                    </div>
                    <div className="flex items-start space-x-2 sm:space-x-3">
                      <FiChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm sm:text-base text-gray-700">Pay & Shoot (Guest Shooting)</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 sm:p-8 rounded-2xl shadow-lg text-white">
                  <div className="flex items-center space-x-3 mb-4 sm:mb-6">
                    <FiClock className="w-6 h-6 sm:w-8 sm:h-8 text-green-500" />
                    <h3 className="text-xl sm:text-2xl font-bold">Opening Hours</h3>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="bg-green-600/20 p-4 rounded-xl border border-green-500/30">
                      <p className="text-base sm:text-lg font-semibold mb-2">Monday - Sunday</p>
                      <p className="text-xl sm:text-2xl font-bold text-green-400">10:00 AM – 2:00 PM</p>
                      <p className="text-xl sm:text-2xl font-bold text-green-400 mt-2">4:00 PM – 9:00 PM</p>
                    </div>
                    <div className="bg-gray-800 p-4 rounded-xl">
                      <p className="text-base sm:text-lg font-semibold text-red-400">Closed on Tuesdays</p>
                    </div>
                  </div>

                  <div className="mt-6 bg-orange-600/20 p-4 sm:p-6 rounded-xl border border-orange-500/30">
                    <h4 className="font-bold text-base sm:text-lg md:text-xl mb-2">Trial Sessions Available</h4>
                    <p className="text-xs sm:text-sm text-orange-200">Experience shooting with our introductory programs.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Testimonials Section */}
          
          <section id="testimonials" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-8 sm:mb-12 md:mb-16">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-4 text-gray-900">Player Experiences</h2>
      <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-green-600 to-green-400 mx-auto rounded-full"></div>
      <p className="text-base sm:text-lg mt-4 text-gray-600">What our shooters say about BRSA</p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {playerTestimonials.map((testimonial) => {
        const [expanded, setExpanded] = React.useState(false);
        const isLong = testimonial.quote.length > 100;
        
        return (
          <div key={testimonial.id} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center space-x-4 mb-4">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover border-2 border-green-600"
              />
              <div>
                <h3 className="font-bold text-gray-900 text-sm sm:text-base">{testimonial.name}</h3>
              </div>
            </div>
            
            <p className="text-gray-600 italic text-sm sm:text-base">
              "{expanded || !isLong ? testimonial.quote : testimonial.quote.substring(0, 100) + '...'}"
            </p>
            
            {isLong && (
              <button 
                onClick={() => setExpanded(!expanded)}
                className="text-green-600 text-sm mt-2 hover:text-green-700 font-medium"
              >
                {expanded ? 'Show less' : 'Read more'}
              </button>
            )}
            
            <div className="mt-4 flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <FiHeart key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  </div>
</section>

          {/* News and Updates Section */}
          <section id="news" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-8 sm:mb-12 md:mb-16">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-4 text-gray-900">News & Updates</h2>
                <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-green-600 to-green-400 mx-auto rounded-full"></div>
                <p className="text-base sm:text-lg mt-4 text-gray-600">Stay informed about BRSA activities</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {newsUpdates.map((news) => (
                  <div key={news.id} className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                    
                    <h3 className="text-lg sm:text-xl font-bold mb-2 text-gray-900">{news.title}</h3>
                    <p className="text-sm sm:text-base text-gray-600">{news.description}</p>
                    
                  </div>
                ))}
              </div>

              <div className="mt-8 bg-gradient-to-r from-green-600 to-green-500 rounded-2xl p-6 sm:p-8 text-white text-center">
                <h3 className="text-xl sm:text-2xl font-bold mb-2">Summer Camp 2026</h3>
                <p className="text-base sm:text-lg mb-4">Registration Open Now! Limited Seats Available</p>
                <a
                  href="https://wa.me/919739565677?text=Hi%20BRSA%2C%20I'm%20interested%20in%20the%20Summer%20Camp%20"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-white text-green-600 px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 text-sm sm:text-base"
                >
                  <FiMessageCircle className="w-5 h-5" />
                  <span>Enquire Now</span>
                </a>
              </div>
            </div>
          </section>

          {/* Gallery Section */}
          <section id="gallery" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-8 sm:mb-12 md:mb-16">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-4 text-gray-900">Our Gallery</h2>
                <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-green-600 to-green-400 mx-auto rounded-full mb-4"></div>
                <p className="text-base sm:text-lg md:text-xl text-gray-600">Moments at BRSA</p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3 md:gap-4">
                {displayedImages.map((image) => (
                  <div
                    key={image.id}
                    onClick={() => setSelectedImage(image)}
                    className="relative group cursor-pointer overflow-hidden rounded-lg sm:rounded-xl aspect-square"
                  >
                    <img
                      src={image.src}
                      alt={image.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-3 md:p-4">
                        <p className="text-white text-xs sm:text-sm font-semibold truncate">{image.title}</p>
                        <p className="text-green-400 text-[10px] sm:text-xs">{image.category}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {totalPages > 1 && (
                <div className="flex justify-center items-center space-x-3 sm:space-x-4 mt-6 sm:mt-8">
                  <button
                    onClick={() => setCurrentGalleryPage(prev => Math.max(0, prev - 1))}
                    disabled={currentGalleryPage === 0}
                    className="p-2 rounded-full bg-white border border-gray-200 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-green-50 transition-colors duration-300"
                  >
                    <FiChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                  </button>
                  
                  <span className="text-xs sm:text-sm text-gray-600">
                    Page {currentGalleryPage + 1} of {totalPages}
                  </span>
                  
                  <button
                    onClick={() => setCurrentGalleryPage(prev => Math.min(totalPages - 1, prev + 1))}
                    disabled={currentGalleryPage === totalPages - 1}
                    className="p-2 rounded-full bg-white border border-gray-200 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-green-50 transition-colors duration-300"
                  >
                    <FiChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </button>
                </div>
              )}
            </div>
          </section>

          {/* Image Modal */}
          {selectedImage && (
            <div
              className="fixed inset-0 z-[60] flex items-center justify-center p-3 sm:p-4 bg-black/90"
              onClick={() => setSelectedImage(null)}
            >
              <div className="relative max-w-4xl w-full" onClick={e => e.stopPropagation()}>
                <img
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  className="w-full h-auto rounded-lg"
                />
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-2 right-2 sm:top-4 sm:right-4 p-2 bg-white/20 hover:bg-white/30 rounded-full transition-colors duration-300"
                >
                  <FiX className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </button>
                <div className="absolute bottom-2 left-2 right-2 sm:bottom-4 sm:left-4 sm:right-4 bg-black/50 backdrop-blur-sm p-2 sm:p-4 rounded-lg">
                  <h3 className="text-white text-sm sm:text-base md:text-lg font-bold">{selectedImage.title}</h3>
                  <p className="text-green-400 text-xs sm:text-sm">{selectedImage.category}</p>
                </div>
              </div>
            </div>
          )}

          {/* Contact Section */}
          <section id="contact" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-8 sm:mb-12 md:mb-16">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-4 text-gray-900">Visit BRSA</h2>
                <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-green-600 to-green-400 mx-auto rounded-full"></div>
              </div>

              <div className="max-w-3xl mx-auto">
                <div className="bg-gradient-to-br from-gray-50 to-white p-6 sm:p-8 md:p-10 rounded-2xl shadow-lg border border-gray-100">
                  <div className="flex flex-col items-center text-center">
                    <FiMapPin className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-green-600 mb-3 sm:mb-4" />
                    
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 text-gray-900">Bangalore Rifle Shooters Arena</h3>
                    
                    <div className="space-y-4 sm:space-y-5 mb-6 sm:mb-8">
                      <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                        <span className="font-semibold">NO 23, BSVP College Campus</span><br />
                        7th Cross, 3rd Block, BDA Layout<br />
                        Nagarabhaavi, Bengaluru<br />
                        Karnataka - 560072
                      </p>
                      
                      <div className="flex flex-col items-center space-y-2">
                        <div className="flex items-center space-x-2">
                          <FiPhone className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
                          <a href="tel:919739565677" className="text-lg sm:text-xl md:text-2xl font-bold text-green-600 hover:text-green-700 transition">
                            +91 97395 65677
                          </a>
                        </div>
                        <div className="flex items-center space-x-2">
                          <FiMail className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
                          <a href="mailto:info@brsa.in" className="text-sm sm:text-base text-gray-600 hover:text-green-600 transition">
                            info@brsa.in
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full">
                      <a
                        href="tel:919739565677"
                        className="flex-1 px-4 sm:px-6 py-3 sm:py-4 bg-gradient-to-r from-green-600 to-green-500 text-white text-sm sm:text-base font-semibold rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
                      >
                        <FiPhone className="w-4 h-4 sm:w-5 sm:h-5" />
                        <span>Call BRSA</span>
                      </a>
                      
                      <a
                        href="https://wa.me/919739565677?text=Hi%20BRSA%2C%20I'm%20interested%20in%20your%20shooting%20programs"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 px-4 sm:px-6 py-3 sm:py-4 bg-green-500 text-white text-sm sm:text-base font-semibold rounded-xl hover:bg-green-600 transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
                      >
                        <FiMessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                        <span>WhatsApp</span>
                      </a>
                      
                      <a
                        href="https://maps.google.com/?q=BSVP+College+Campus+Nagarabhaavi+Bangalore"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 px-4 sm:px-6 py-3 sm:py-4 bg-gray-900 text-white text-sm sm:text-base font-semibold rounded-xl hover:bg-gray-800 transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
                      >
                        <FiMapPin className="w-4 h-4 sm:w-5 sm:h-5" />
                        <span>Directions</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        {/* Footer - Full width with no extra padding */}
        <footer className="bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Company Info */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <img src={brsaLogo} alt="BRSA Logo" className="h-12 sm:h-14 w-auto" />
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white">BRSA</h3>
                    <p className="text-xs text-gray-400">Est. 2016</p>
                  </div>
                </div>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Premier shooting academy in Bangalore providing world-class training facilities and expert coaching for shooters of all levels.
                </p>
                <div className="flex space-x-3">
                 
                  <a href="https://www.instagram.com/blr_shootersacademy/" className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors duration-300">
                    <FiInstagram className="w-4 h-4 text-gray-400 hover:text-white" />
                  </a>
                 
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="text-base sm:text-lg font-bold mb-4 text-white">Quick Links</h4>
                <ul className="space-y-2">
                  <li>
                    <button onClick={() => scrollToSection('about')} className="text-sm text-gray-400 hover:text-green-500 transition-colors duration-300 flex items-center space-x-1">
                      <FiChevronRight className="w-3 h-3" />
                      <span>About BRSA</span>
                    </button>
                  </li>
                  <li>
                    <button onClick={() => scrollToSection('facilities')} className="text-sm text-gray-400 hover:text-green-500 transition-colors duration-300 flex items-center space-x-1">
                      <FiChevronRight className="w-3 h-3" />
                      <span>Our Facilities</span>
                    </button>
                  </li>
                  <li>
                    <button onClick={() => scrollToSection('coaching')} className="text-sm text-gray-400 hover:text-green-500 transition-colors duration-300 flex items-center space-x-1">
                      <FiChevronRight className="w-3 h-3" />
                      <span>Coaching Programs</span>
                    </button>
                  </li>
                  <li>
                    <button onClick={() => scrollToSection('gallery')} className="text-sm text-gray-400 hover:text-green-500 transition-colors duration-300 flex items-center space-x-1">
                      <FiChevronRight className="w-3 h-3" />
                      <span>Gallery</span>
                    </button>
                  </li>
                  <li>
                    <button onClick={() => scrollToSection('testimonials')} className="text-sm text-gray-400 hover:text-green-500 transition-colors duration-300 flex items-center space-x-1">
                      <FiChevronRight className="w-3 h-3" />
                      <span>Testimonials</span>
                    </button>
                  </li>
                  <li>
                    <button onClick={() => scrollToSection('news')} className="text-sm text-gray-400 hover:text-green-500 transition-colors duration-300 flex items-center space-x-1">
                      <FiChevronRight className="w-3 h-3" />
                      <span>News & Updates</span>
                    </button>
                  </li>
                </ul>
              </div>

              {/* Address & Contact */}
              <div>
                <h4 className="text-base sm:text-lg font-bold mb-4 text-white">Visit Us</h4>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <FiMapPin className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <div className="text-sm text-gray-400 leading-relaxed">
                      <p>NO 23, BSVP College Campus</p>
                      <p>7th Cross, 3rd Block, BDA Layout</p>
                      <p>Nagarabhaavi, Bengaluru</p>
                      <p>Karnataka - 560072</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <FiPhone className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <a href="tel:919739565677" className="text-sm text-gray-400 hover:text-green-500 transition-colors duration-300">
                      +91 97395 65677
                    </a>
                  </div>
                  
                </div>
              </div>

              {/* Opening Hours & Quick Contact */}
              <div>
                <h4 className="text-base sm:text-lg font-bold mb-4 text-white">Opening Hours</h4>
                <div className="space-y-3 mb-6">
                  <div className="bg-green-600/10 p-3 rounded-lg border border-green-500/20">
                    <p className="text-sm text-gray-300">Monday - Sunday</p>
                    <p className="text-base font-semibold text-green-400">10:00 AM – 2:00 PM</p>
                    <p className="text-base font-semibold text-green-400">4:00 PM – 9:00 PM</p>
                    <p className="text-xs text-red-400 mt-1">Closed on Tuesdays</p>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <a
                    href="https://wa.me/919739565677?text=Hi%20BRSA%2C%20I'm%20interested%20in%20your%20shooting%20programs"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-green-600 hover:bg-green-700 text-white text-sm font-semibold py-2.5 px-4 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <FiMessageCircle className="w-4 h-4" />
                    <span>Enquire on WhatsApp</span>
                  </a>
                  <button
                    onClick={() => scrollToSection('contact')}
                    className="w-full bg-gray-800 hover:bg-gray-700 text-white text-sm font-semibold py-2.5 px-4 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <FiMapPin className="w-4 h-4" />
                    <span>Get Directions</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-800 mt-8 pt-6">
              <div className="flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0">
                <p className="text-xs sm:text-sm text-gray-500 text-center md:text-left">
                  © 2026 Bangalore Rifle Shooters Arena (BRSA). All rights reserved.
                </p>
                <p className="text-xs text-gray-600 text-center md:text-right">
                  Affiliated to Karnataka State Rifle Association
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Home;