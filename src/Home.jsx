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
  ];

  const imagesPerPage = 8;
  const totalPages = Math.ceil(galleryImages.length / imagesPerPage);
  const displayedImages = galleryImages.slice(
    currentGalleryPage * imagesPerPage,
    (currentGalleryPage + 1) * imagesPerPage
  );

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

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

  // Close mobile menu on resize
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
      const offset = 70;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="bg-white font-sans text-gray-800 antialiased overflow-x-hidden">
      {/* Navigation */}
      <header 
        className={`fixed w-full top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-md py-2' 
            : 'bg-white/90 backdrop-blur-sm py-3'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div 
              className="flex-shrink-0 cursor-pointer active:scale-95 transition-transform duration-200"
              onClick={() => scrollToSection('home')}
            >
              <h1 className="text-xl sm:text-2xl font-black">
                <span className="text-gray-900">BRSA</span>
              </h1>
              <p className="text-[7px] sm:text-[8px] text-gray-500 -mt-1 tracking-wider">
                BANGALORE RIFLE SHOOTERS ARENA
              </p>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-1">
              {[
                { id: 'home', label: 'Home', icon: FiTarget },
                { id: 'about', label: 'About', icon: FiUsers },
                { id: 'sport', label: 'Sport', icon: GiTargetArrows },
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
                    className={`px-3 py-1.5 rounded-lg transition-all duration-200 flex items-center space-x-1 ${
                      activeSection === item.id
                        ? 'text-orange-600 bg-orange-50'
                        : 'text-gray-600 hover:text-orange-600 hover:bg-orange-50'
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    <span className="text-xs font-medium">{item.label}</span>
                  </button>
                );
              })}
              
              <button
                onClick={() => scrollToSection('contact')}
                className="ml-2 px-4 py-1.5 bg-gradient-to-r from-orange-600 to-orange-500 text-white text-xs font-semibold rounded-lg active:scale-95 transition-all duration-200 flex items-center space-x-1"
              >
                <FiZap className="w-3.5 h-3.5" />
                <span>Join</span>
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg text-gray-600 active:bg-orange-50 active:text-orange-600 transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <FiX className="w-5 h-5" />
              ) : (
                <FiMenu className="w-5 h-5" />
              )}
            </button>
          </div>

          {/* Mobile Menu - FIXED: Removed dark background */}
          <div 
            className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
              isMenuOpen ? 'max-h-96 opacity-100 mt-3' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="bg-white rounded-xl shadow-lg border border-gray-100 py-1">
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
                    className={`w-full flex items-center space-x-3 px-4 py-3 transition-colors duration-200 ${
                      activeSection === item.id
                        ? 'text-orange-600 bg-orange-50'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="text-sm font-medium">{item.label}</span>
                  </button>
                );
              })}
              
              <div className="border-t border-gray-100 mt-1 pt-2 px-4 pb-3">
                <button
                  onClick={() => scrollToSection('contact')}
                  className="w-full py-3 bg-gradient-to-r from-orange-600 to-orange-500 text-white text-sm font-semibold rounded-lg active:scale-95 transition-all duration-200 flex items-center justify-center space-x-2"
                >
                  <FiZap className="w-4 h-4" />
                  <span>Join BRSA Today</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-16">
        {/* Hero Section */}
        <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-gray-50 to-white px-4">
          <div className="max-w-7xl mx-auto w-full py-12">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center space-x-2 bg-orange-100 px-3 py-1.5 rounded-full">
                  <FiAward className="text-orange-600 w-4 h-4" />
                  <span className="text-orange-600 text-xs font-semibold">Premier Shooting Academy</span>
                </div>
                
                <h1 className="text-4xl sm:text-5xl font-black leading-tight">
                  <span className="text-gray-900">BANGALORE</span>
                  <br />
                  <span className="text-orange-600">RIFLE</span>
                  <br />
                  <span className="text-gray-800">SHOOTERS ARENA</span>
                </h1>
                
                <p className="text-lg text-gray-600">
                  Your Gateway to Professional Shooting Sports
                </p>
                
                <p className="text-base text-gray-500 italic border-l-4 border-orange-600 pl-4">
                  "Building champions with world-class training facilities in Bangalore."
                </p>
                
                <div className="flex flex-wrap gap-3">
                  <button
                    onClick={() => scrollToSection('contact')}
                    className="px-6 py-3 bg-gradient-to-r from-orange-600 to-orange-500 text-white text-sm font-semibold rounded-full active:scale-95 transition-all duration-200 flex items-center space-x-2"
                  >
                    <span>Visit BRSA</span>
                    <FiChevronRight className="w-4 h-4" />
                  </button>
                  
                  <button
                    onClick={() => scrollToSection('gallery')}
                    className="px-6 py-3 bg-gray-900 text-white text-sm font-semibold rounded-full active:scale-95 transition-all duration-200"
                  >
                    View Gallery
                  </button>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 pt-4">
                  {[
                    { value: '5+', label: 'Years', icon: FiAward },
                    { value: '500+', label: 'Athletes', icon: FiUsers },
                    { value: '25+', label: 'Medals', icon: FiTarget }
                  ].map((stat, index) => {
                    const Icon = stat.icon;
                    return (
                      <div key={index} className="text-center">
                        <Icon className="w-5 h-5 text-orange-600 mx-auto mb-1" />
                        <div className="text-lg font-bold text-gray-900">{stat.value}</div>
                        <div className="text-xs text-gray-500">{stat.label}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
              
              {/* Hero Image - Hidden on mobile */}
              <div className="hidden lg:block">
                <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src="https://img.freepik.com/premium-photo/concept-terrorism-silhouette-terrorist-with-rifle-background-sunset_556258-1961.jpg"
                    alt="Shooting Range"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section - Updated with your content */}
        <section id="about" className="py-16 bg-gray-50 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-black mb-3 text-gray-900">About BRSA</h2>
              <div className="w-16 h-1 bg-gradient-to-r from-orange-600 to-orange-400 mx-auto rounded-full"></div>
            </div>
            
            <div className="max-w-3xl mx-auto">
              <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-gray-100">
                <p className="text-gray-700 leading-relaxed mb-4">
                  Located in the heart of Bangalore at Nagarabhaavi, BRSA offers world-class shooting facilities with professional coaching. We are affiliated with the Karnataka State Rifle Association and provide comprehensive training for shooters of all levels.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Our academy features state-of-the-art electronic targets, professional coaching staff, and a supportive environment for both recreational shooters and competitive athletes aiming for state and national level competitions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* The Sport Section */}
        <section id="sport" className="py-16 bg-white px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-black mb-3 text-gray-900">The Sport</h2>
              <div className="w-16 h-1 bg-gradient-to-r from-orange-600 to-orange-400 mx-auto rounded-full mb-4"></div>
              <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
                10m air rifle and pistol shooting, an Olympic level event.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {[
                { icon: BiBody, title: "Physical Discipline" },
                { icon: GiWeightLiftingUp, title: "Arm Strength" },
                { icon: FiZap, title: "Natural Adrenaline" },
                { icon: BiBrain, title: "Mental Focus" },
                { icon: FiActivity, title: "Physical Balance" },
                { icon: FiEye, title: "Eye Health" },
                { icon: FiUserCheck, title: "Responsibility" },
                { icon: FiTrendingUp, title: "Mental Discipline" }
              ].map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div key={index} className="bg-gray-50 p-3 rounded-xl text-center">
                    <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                      <Icon className="w-4 h-4 text-orange-600" />
                    </div>
                    <h4 className="text-xs font-bold text-gray-900">{benefit.title}</h4>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Facilities Section */}
        <section id="facilities" className="py-16 bg-gray-50 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-black mb-3 text-gray-900">Facilities</h2>
              <div className="w-16 h-1 bg-gradient-to-r from-orange-600 to-orange-400 mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {[
                { icon: FiTarget, title: "10M Indoor Range" },
                { icon: GiTargetArrows, title: "Competition Equipment" },
                { icon: BiDumbbell, title: "Fitness Area" },
                { icon: FiDroplet, title: "Equipment Support" },
                { icon: FiCamera, title: "Electronic Targets" },
                { icon: FiHeart, title: "Safety First" },
                { icon: FiUsers, title: "Changing Rooms" },
                { icon: FiMapPin, title: "Parking Available" },
                { icon: MdOutlineSportsScore, title: "Target Practice" }
              ].map((facility, index) => {
                const Icon = facility.icon;
                return (
                  <div key={index} className="bg-white p-4 rounded-xl shadow-sm">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-orange-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-sm text-gray-900">{facility.title}</h3>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Coaching Section */}
        <section id="coaching" className="py-16 bg-white px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-black mb-3 text-gray-900">Coaching</h2>
              <div className="w-16 h-1 bg-gradient-to-r from-orange-600 to-orange-400 mx-auto rounded-full"></div>
            </div>

            <div className="grid lg:grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl shadow-sm">
                <h3 className="text-lg font-bold mb-3 text-gray-900">Training Programs</h3>
                <div className="space-y-2">
                  {[
                    "Beginner courses",
                    "Intermediate coaching",
                    "Advanced training",
                    "Practice sessions",
                    "Corporate events"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <FiChevronRight className="w-4 h-4 text-orange-600" />
                      <span className="text-sm text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl text-white">
                <h3 className="text-lg font-bold mb-3">Why Choose BRSA</h3>
                <p className="text-sm text-gray-300 mb-3">
                  Experienced coaches and personalized attention for all skill levels.
                </p>
                <div className="bg-orange-600/20 p-4 rounded-lg">
                  <h4 className="font-bold text-sm mb-1">Trial Sessions</h4>
                  <p className="text-xs text-orange-200">Available for beginners</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section id="gallery" className="py-16 bg-gray-50 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-black mb-3 text-gray-900">Gallery</h2>
              <div className="w-16 h-1 bg-gradient-to-r from-orange-600 to-orange-400 mx-auto rounded-full mb-3"></div>
              <p className="text-sm text-gray-600">Moments at BRSA</p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
              {displayedImages.map((image) => (
                <div
                  key={image.id}
                  onClick={() => setSelectedImage(image)}
                  className="relative group cursor-pointer overflow-hidden rounded-lg aspect-square"
                >
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-end p-2">
                    <p className="text-white text-xs font-semibold">{image.title}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center space-x-3 mt-6">
                <button
                  onClick={() => setCurrentGalleryPage(prev => Math.max(0, prev - 1))}
                  disabled={currentGalleryPage === 0}
                  className="p-2 rounded-full bg-white border disabled:opacity-50 active:bg-orange-50 transition-colors"
                >
                  <FiChevronLeft className="w-4 h-4" />
                </button>
                <span className="text-xs text-gray-600">
                  Page {currentGalleryPage + 1} of {totalPages}
                </span>
                <button
                  onClick={() => setCurrentGalleryPage(prev => Math.min(totalPages - 1, prev + 1))}
                  disabled={currentGalleryPage === totalPages - 1}
                  className="p-2 rounded-full bg-white border disabled:opacity-50 active:bg-orange-50 transition-colors"
                >
                  <FiChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Image Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/90"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-3xl w-full">
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="w-full h-auto rounded-lg"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-2 right-2 p-2 bg-black/50 rounded-full"
              >
                <FiX className="w-5 h-5 text-white" />
              </button>
              <div className="absolute bottom-2 left-2 right-2 bg-black/50 p-3 rounded-lg">
                <h3 className="text-white text-sm font-bold">{selectedImage.title}</h3>
                <p className="text-orange-400 text-xs">{selectedImage.category}</p>
              </div>
            </div>
          </div>
        )}

        {/* Contact Section */}
        <section id="contact" className="py-16 bg-white px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-black mb-3 text-gray-900">Contact</h2>
              <div className="w-16 h-1 bg-gradient-to-r from-orange-600 to-orange-400 mx-auto rounded-full"></div>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl shadow-sm">
              <div className="text-center">
                <FiMapPin className="w-8 h-8 text-orange-600 mx-auto mb-3" />
                
                <h3 className="text-lg font-bold mb-3">Bangalore Rifle Shooters Arena</h3>
                
                <div className="space-y-3 mb-6">
                  <p className="text-sm text-gray-700">
                    NO 23, BSVP College Campus<br />
                    7th Cross, 3rd Block, BDA Layout<br />
                    Nagarabhaavi, Bengaluru - 500072
                  </p>
                  
                  <div className="space-y-2">
                    <div className="flex items-center justify-center space-x-2">
                      <FiPhone className="w-4 h-4 text-orange-600" />
                      <a href="tel:919739565677" className="text-lg font-bold text-orange-600">
                        +91 97395 65677
                      </a>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <FiMail className="w-4 h-4 text-orange-600" />
                      <a href="mailto:info@brsa.in" className="text-sm text-gray-600">
                        info@brsa.in
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-2">
                  <a
                    href="tel:919739565677"
                    className="flex-1 py-3 bg-gradient-to-r from-orange-600 to-orange-500 text-white text-sm font-semibold rounded-lg active:scale-95 transition-all flex items-center justify-center space-x-2"
                  >
                    <FiPhone className="w-4 h-4" />
                    <span>Call Now</span>
                  </a>
                  
                  <a
                    href="https://maps.google.com/?q=BSVP+College+Campus+Nagarabhaavi+Bangalore"
                    target="_blank"
                    className="flex-1 py-3 bg-gray-900 text-white text-sm font-semibold rounded-lg active:scale-95 transition-all flex items-center justify-center space-x-2"
                  >
                    <FiMapPin className="w-4 h-4" />
                    <span>Directions</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-4 text-center text-xs text-gray-500">
              <p>Open: Mon-Sat, 10:00 AM - 7:00 PM</p>
              <p className="mt-1">Sunday by appointment</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-4">
            <h3 className="text-xl font-bold mb-2">BRSA</h3>
            <p className="text-xs text-gray-400 max-w-md mx-auto">
              Bangalore Rifle Shooters Arena - Professional shooting sports training in Bangalore.
            </p>
          </div>
          
          <div className="flex justify-center space-x-4 mb-4">
            {[FiTarget, FiUsers, FiAward].map((Icon, index) => (
              <div key={index} className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors cursor-pointer">
                <Icon className="w-4 h-4 text-gray-400 hover:text-white" />
              </div>
            ))}
          </div>
          
          <div className="text-center text-xs text-gray-500 pt-4 border-t border-gray-800">
            <p>© 2024 Bangalore Rifle Shooters Arena. All rights reserved.</p>
            <p className="mt-1">Affiliated to Karnataka State Rifle Association</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;