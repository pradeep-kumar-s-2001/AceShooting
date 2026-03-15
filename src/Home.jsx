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
  FiMail
} from 'react-icons/fi';
import { BiBody, BiBrain, BiDumbbell } from 'react-icons/bi';
import { GiTargetArrows, GiWeightLiftingUp } from 'react-icons/gi';
import { MdOutlineSportsScore } from 'react-icons/md';

// Import images directly from assets folder
import image1 from '../src/assets/image1.jpeg';
import image2 from '../src/assets/image2.jpeg';
import image3 from '../src/assets/image3.jpeg';
import image4 from '../src/assets/image4.jpeg';
import image5 from '../src/assets/image5.jpeg';
import image6 from '../src/assets/image6.jpeg';
import image7 from '../src/assets/image7.jpeg';
import image8 from '../src/assets/image8.jpeg';

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentGalleryPage, setCurrentGalleryPage] = useState(0);

  // Gallery images data - Using imported images directly
  const galleryImages = [
    { id: 1, src: image1, title: 'Training Session 1', category: 'Training' },
    { id: 2, src: image2, title: 'Training Session 2', category: 'Training' },
    { id: 3, src: image3, title: 'Competition 1', category: 'Competition' },
    { id: 4, src: image4, title: 'Facilities 1', category: 'Facilities' },
    { id: 5, src: image5, title: 'Training Session 3', category: 'Training' },
    { id: 6, src: image6, title: 'Competition 2', category: 'Competition' },
    { id: 7, src: image7, title: 'Facilities 2', category: 'Facilities' },
    { id: 8, src: image8, title: 'Training Session 4', category: 'Training' },
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

      // Update active section based on scroll position
      const sections = ['home', 'about', 'sport', 'facilities', 'coaching', 'gallery', 'contact'];
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

  // Close mobile menu on window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
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

  return (
    <div className="bg-white font-sans text-gray-800 antialiased overflow-x-hidden relative">
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
              className="flex-shrink-0 cursor-pointer transform hover:scale-105 transition-transform duration-300"
              onClick={() => scrollToSection('home')}
            >
              <h1 className="text-xl sm:text-2xl md:text-3xl font-black">
                <span className="text-gray-900">BRSA</span>
              </h1>
              <p className="text-[8px] sm:text-[10px] md:text-xs text-gray-500 -mt-1 tracking-wider">
                BANGALORE RIFLE SHOOTERS ARENA
              </p>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-1">
              {[
                { id: 'home', label: 'Home', icon: FiTarget },
                { id: 'about', label: 'About', icon: FiUsers },
                { id: 'sport', label: 'The Sport', icon: GiTargetArrows },
                { id: 'facilities', label: 'Facilities', icon: FiCamera },
                { id: 'coaching', label: 'Coaching', icon: FiAward },
                { id: 'gallery', label: 'Gallery', icon: FiHeart },
                { id: 'contact', label: 'Contact', icon: FiMapPin }
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`px-3 py-2 rounded-lg transition-all duration-300 flex items-center space-x-1 ${
                      activeSection === item.id
                        ? 'text-orange-600 bg-orange-50'
                        : 'text-gray-600 hover:text-orange-600 hover:bg-orange-50'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="text-sm font-medium">{item.label}</span>
                  </button>
                );
              })}
              
              <button
                onClick={() => scrollToSection('contact')}
                className="ml-2 px-4 py-2 bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white text-sm font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center space-x-1"
              >
                <FiZap className="w-4 h-4" />
                <span>Join Now</span>
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg text-gray-600 hover:text-orange-600 hover:bg-orange-50 focus:outline-none transition-colors duration-300"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <FiX className="w-6 h-6" />
              ) : (
                <FiMenu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Menu - FIXED: Same background as laptop, removed dark overlay */}
          <div 
            className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
              isMenuOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="bg-white/95 backdrop-blur-md rounded-xl shadow-lg border border-gray-100 p-2">
              <nav className="flex flex-col">
                {[
                  { id: 'home', label: 'Home', icon: FiTarget },
                  { id: 'about', label: 'About', icon: FiUsers },
                  { id: 'sport', label: 'The Sport', icon: GiTargetArrows },
                  { id: 'facilities', label: 'Facilities', icon: FiCamera },
                  { id: 'coaching', label: 'Coaching', icon: FiAward },
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
                          ? 'bg-orange-50 text-orange-600'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      <span className="text-base font-medium">{item.label}</span>
                    </button>
                  );
                })}
                
                <div className="border-t border-gray-100 my-2 pt-2">
                  <button
                    onClick={() => scrollToSection('contact')}
                    className="w-full px-4 py-3 bg-gradient-to-r from-orange-600 to-orange-500 text-white text-base font-semibold rounded-lg flex items-center justify-center space-x-2"
                  >
                    <FiZap className="w-5 h-5" />
                    <span>Join BRSA Today</span>
                  </button>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content - Added proper padding top to account for fixed navbar */}
      <main className="pt-20">
        {/* Hero Section */}
        <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-br from-gray-50 to-white overflow-hidden">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="space-y-6 sm:space-y-8">
                <div className="inline-flex items-center space-x-2 bg-orange-100 px-4 py-2 rounded-full">
                  <FiAward className="text-orange-600 w-5 h-5" />
                  <span className="text-orange-600 text-sm font-semibold">Premier Shooting Academy in Bangalore</span>
                </div>
                
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight">
                  <span className="text-gray-900">BANGALORE</span>
                  <br />
                  <span className="text-orange-600">RIFLE</span>
                  <br />
                  <span className="text-gray-800">SHOOTERS ARENA</span>
                </h1>
                
                <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-lg">
                  Your Gateway to Professional Shooting Sports
                </p>
                
                <p className="text-base sm:text-lg text-gray-500 italic border-l-4 border-orange-600 pl-4 sm:pl-6">
                  "Building champions with world-class training facilities and expert coaching in the heart of Bangalore."
                </p>
                
                <div className="flex flex-wrap gap-3 sm:gap-4">
                  <button
                    onClick={() => scrollToSection('contact')}
                    className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-orange-600 to-orange-500 text-white text-sm sm:text-base font-semibold rounded-full hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center space-x-2"
                  >
                    <span>Visit BRSA</span>
                    <FiChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </button>
                  
                  <button
                    onClick={() => scrollToSection('gallery')}
                    className="px-6 sm:px-8 py-3 sm:py-4 bg-gray-900 text-white text-sm sm:text-base font-semibold rounded-full hover:bg-gray-800 transform hover:scale-105 transition-all duration-300"
                  >
                    View Gallery
                  </button>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 sm:gap-6 pt-6 sm:pt-8">
                  {[
                    { value: '5+', label: 'Years Excellence', icon: FiAward },
                    { value: '500+', label: 'Athletes Trained', icon: FiUsers },
                    { value: '25+', label: 'State Medals', icon: FiTarget }
                  ].map((stat, index) => {
                    const Icon = stat.icon;
                    return (
                      <div key={index} className="text-center">
                        <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-orange-600 mx-auto mb-1 sm:mb-2" />
                        <div className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">{stat.value}</div>
                        <div className="text-[10px] sm:text-xs text-gray-500">{stat.label}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
              
              <div className="hidden lg:block relative">
                <div className="relative w-full h-[500px] xl:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src="https://img.freepik.com/premium-photo/concept-terrorism-silhouette-terrorist-with-rifle-background-sunset_556258-1961.jpg"
                    alt="Shooting Range"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 bg-white/90 backdrop-blur-sm rounded-xl p-3 sm:p-4">
                    <p className="text-sm sm:text-base font-medium text-gray-900">BRSA Shooting Range</p>
                    <p className="text-xs sm:text-sm text-gray-600">Professional Indoor Facility • Expert Coaching</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 sm:py-20 md:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 text-gray-900">About BRSA</h2>
              <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-orange-600 to-orange-400 mx-auto rounded-full"></div>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="space-y-4 sm:space-y-6">
                <p className="text-xl sm:text-2xl text-gray-700 italic font-light">
                  "Bangalore Rifle Shooters Arena (BRSA) is dedicated to promoting the sport of shooting and nurturing talent at the grassroots level."
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
                    <div key={index} className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-100 rounded-full flex items-center justify-center">
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-orange-600" />
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {[
                  { value: '2020', label: 'Established', icon: FiClock },
                  { value: '4', label: 'Lanes', icon: FiTarget },
                  { value: '5+', label: 'Coaches', icon: FiUsers },
                  { value: '1000+', label: 'Sessions', icon: FiActivity }
                ].map((stat, index) => (
                  <div key={index} className="bg-white p-4 sm:p-6 rounded-xl text-center shadow-sm border border-gray-100">
                    <stat.icon className="w-6 h-6 sm:w-8 sm:h-8 text-orange-600 mx-auto mb-1 sm:mb-2" />
                    <div className="text-xl sm:text-2xl font-bold text-gray-900">{stat.value}</div>
                    <div className="text-xs sm:text-sm text-gray-500">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* The Sport Section */}
        <section id="sport" className="py-16 sm:py-20 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 text-gray-900">The Sport</h2>
              <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-orange-600 to-orange-400 mx-auto rounded-full mb-4 sm:mb-6"></div>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                10 meter air rifle and pistol shooting is an <span className="font-semibold text-orange-600">ISSF recognized Olympic level event</span>, shot over a distance of 10 meters from a standing position with a 4.5 mm caliber air gun.
              </p>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 text-gray-900">
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
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-orange-600 transition-colors duration-300">
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-orange-600 group-hover:text-white transition-colors duration-300" />
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
        <section id="facilities" className="py-16 sm:py-20 md:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 text-gray-900">Our Facilities</h2>
              <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-orange-600 to-orange-400 mx-auto rounded-full"></div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {[
                { icon: FiTarget, title: "10M Indoor Range", desc: "Professional shooting lanes" },
                { icon: GiTargetArrows, title: "Competition Equipment", desc: "Grade air rifles and pistols" },
                { icon: BiDumbbell, title: "Fitness Area", desc: "Basic workout facilities" },
                { icon: FiDroplet, title: "Equipment Support", desc: "CO2 filling available" },
                { icon: FiCamera, title: "Video Analysis", desc: "Technique improvement tools" },
                { icon: FiHeart, title: "Safety First", desc: "Strict safety protocols" },
                { icon: FiUsers, title: "Changing Rooms", desc: "Clean facilities" },
                { icon: FiMapPin, title: "Parking Available", desc: "Convenient access" },
                { icon: MdOutlineSportsScore, title: "Target Practice", desc: "Regular practice sessions" }
              ].map((facility, index) => {
                const Icon = facility.icon;
                return (
                  <div key={index} className="bg-white p-4 sm:p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
                    <div className="flex items-start space-x-3 sm:space-x-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-orange-600" />
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
        <section id="coaching" className="py-16 sm:py-20 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 text-gray-900">Coaching Programs</h2>
              <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-orange-600 to-orange-400 mx-auto rounded-full"></div>
            </div>

            <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
              <div className="bg-gradient-to-br from-gray-50 to-white p-6 sm:p-8 rounded-2xl shadow-lg border border-gray-100">
                <div className="flex items-center space-x-3 mb-4 sm:mb-6">
                  <FiTarget className="w-6 h-6 sm:w-8 sm:h-8 text-orange-600" />
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Training Programs</h3>
                </div>
                
                <div className="space-y-3 sm:space-y-4">
                  {[
                    "Beginner shooting courses",
                    "Intermediate coaching",
                    "Advanced competition training",
                    "Weekly practice sessions",
                    "Corporate team building events"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-2 sm:space-x-3">
                      <FiChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm sm:text-base text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 sm:p-8 rounded-2xl shadow-lg text-white">
                <div className="flex items-center space-x-3 mb-4 sm:mb-6">
                  <FiHeart className="w-6 h-6 sm:w-8 sm:h-8 text-orange-500" />
                  <h3 className="text-xl sm:text-2xl font-bold">Why Choose BRSA</h3>
                </div>
                
                <p className="text-sm sm:text-base text-gray-300 mb-4 sm:mb-6 leading-relaxed">
                  Experienced coaches, personalized attention, and a supportive environment for shooters of all ages and skill levels.
                </p>
                
                <div className="bg-orange-600/20 p-4 sm:p-6 rounded-xl border border-orange-500/30">
                  <h4 className="font-bold text-lg sm:text-xl mb-2">Trial Sessions Available</h4>
                  <p className="text-xs sm:text-sm text-orange-200">Experience shooting with our introductory programs.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section id="gallery" className="py-16 sm:py-20 md:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 text-gray-900">Our Gallery</h2>
              <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-orange-600 to-orange-400 mx-auto rounded-full mb-4"></div>
              <p className="text-base sm:text-lg md:text-xl text-gray-600">Moments at BRSA</p>
            </div>

            {/* Gallery Grid */}
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
                      <p className="text-orange-400 text-[10px] sm:text-xs">{image.category}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center space-x-3 sm:space-x-4 mt-6 sm:mt-8">
                <button
                  onClick={() => setCurrentGalleryPage(prev => Math.max(0, prev - 1))}
                  disabled={currentGalleryPage === 0}
                  className="p-2 rounded-full bg-white border border-gray-200 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-orange-50 transition-colors duration-300"
                >
                  <FiChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
                
                <span className="text-xs sm:text-sm text-gray-600">
                  Page {currentGalleryPage + 1} of {totalPages}
                </span>
                
                <button
                  onClick={() => setCurrentGalleryPage(prev => Math.min(totalPages - 1, prev + 1))}
                  disabled={currentGalleryPage === totalPages - 1}
                  className="p-2 rounded-full bg-white border border-gray-200 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-orange-50 transition-colors duration-300"
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
                <p className="text-orange-400 text-xs sm:text-sm">{selectedImage.category}</p>
              </div>
            </div>
          </div>
        )}

        {/* Contact Section */}
        <section id="contact" className="py-16 sm:py-20 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 text-gray-900">Visit BRSA</h2>
              <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-orange-600 to-orange-400 mx-auto rounded-full"></div>
            </div>

            <div className="max-w-3xl mx-auto">
              <div className="bg-gradient-to-br from-gray-50 to-white p-6 sm:p-8 md:p-10 rounded-2xl shadow-lg border border-gray-100">
                <div className="flex flex-col items-center text-center">
                  <FiMapPin className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-orange-600 mb-3 sm:mb-4" />
                  
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-gray-900">Bangalore Rifle Shooters Arena</h3>
                  
                  <div className="space-y-4 sm:space-y-5 mb-6 sm:mb-8">
                    <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                      <span className="font-semibold">NO 23, BSVP College Campus</span><br />
                      7th Cross, 3rd Block, BDA Layout<br />
                      Nagarabhaavi, Bengaluru<br />
                      Karnataka - 500072
                    </p>
                    
                    <div className="flex flex-col items-center space-y-2">
                      <div className="flex items-center space-x-2">
                        <FiPhone className="w-4 h-4 sm:w-5 sm:h-5 text-orange-600" />
                        <a href="tel:919739565677" className="text-xl sm:text-2xl md:text-3xl font-bold text-orange-600 hover:text-orange-700 transition">
                          +91 97395 65677
                        </a>
                      </div>
                      <div className="flex items-center space-x-2">
                        <FiMail className="w-4 h-4 sm:w-5 sm:h-5 text-orange-600" />
                        <a href="mailto:info@brsa.in" className="text-base sm:text-lg text-gray-600 hover:text-orange-600 transition">
                          info@brsa.in
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full">
                    <a
                      href="tel:919739565677"
                      className="flex-1 px-4 sm:px-6 py-3 sm:py-4 bg-gradient-to-r from-orange-600 to-orange-500 text-white text-sm sm:text-base font-semibold rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
                    >
                      <FiPhone className="w-4 h-4 sm:w-5 sm:h-5" />
                      <span>Call BRSA</span>
                    </a>
                    
                    <a
                      href="https://maps.google.com/?q=BSVP+College+Campus+Nagarabhaavi+Bangalore"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-4 sm:px-6 py-3 sm:py-4 bg-gray-900 text-white text-sm sm:text-base font-semibold rounded-xl hover:bg-gray-800 transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
                    >
                      <FiMapPin className="w-4 h-4 sm:w-5 sm:h-5" />
                      <span>Get Directions</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Additional info */}
              <div className="mt-6 sm:mt-8 text-center text-xs sm:text-sm text-gray-500">
                <p>Open: Monday - Saturday, 10:00 AM - 7:00 PM</p>
                <p className="mt-1">Sunday by appointment only</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                <span className="text-white">BRSA</span>
              </h3>
              <p className="text-sm sm:text-base text-gray-400 mb-4 leading-relaxed">
                Bangalore Rifle Shooters Arena - Your destination for professional shooting sports training in Bangalore. We provide world-class facilities and expert coaching for shooters of all levels.
              </p>
              <div className="flex space-x-4">
                {[FiTarget, FiUsers, FiAward].map((Icon, index) => (
                  <div key={index} className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors duration-300 cursor-pointer">
                    <Icon className="w-5 h-5 text-gray-400 hover:text-white" />
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="hover:text-orange-500 cursor-pointer transition">About BRSA</li>
                <li className="hover:text-orange-500 cursor-pointer transition">Our Facilities</li>
                <li className="hover:text-orange-500 cursor-pointer transition">Coaching Programs</li>
                <li className="hover:text-orange-500 cursor-pointer transition">Gallery</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Nagarabhaavi, Bangalore</li>
                <li>
                  <a href="tel:919739565677" className="hover:text-orange-500 transition">
                    +91 97395 65677
                  </a>
                </li>
                <li>
                  <a href="mailto:info@brsa.in" className="hover:text-orange-500 transition">
                    info@brsa.in
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-10 pt-8 text-center text-gray-500 text-sm">
            <p>© 2024 Bangalore Rifle Shooters Arena (BRSA). All rights reserved.</p>
            <p className="mt-2">Affiliated to Karnataka State Rifle Association</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;