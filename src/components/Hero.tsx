import React from 'react';
import { ArrowRight, Code, Smartphone, Database, Globe } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50 flex items-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Transforming Ideas Into
            <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent"> Digital Solutions</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            PT Azakana Gemilang Intermedia delivers cutting-edge IT software solutions to help your business thrive in the digital age.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button
              onClick={() => scrollToSection('services')}
              className="bg-gradient-to-r from-blue-600 to-teal-600 text-white px-8 py-3 rounded-lg font-semibold flex items-center justify-center space-x-2 hover:from-blue-700 hover:to-teal-700 transition-all duration-300 transform hover:scale-105"
            >
              <span>Our Services</span>
              <ArrowRight className="h-5 w-5" />
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300"
            >
              Get In Touch
            </button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg">
                <Code className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <h3 className="text-2xl font-bold text-gray-900">50+</h3>
                <p className="text-gray-600">Projects Completed</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg">
                <Globe className="h-8 w-8 text-teal-600 mx-auto mb-2" />
                <h3 className="text-2xl font-bold text-gray-900">30+</h3>
                <p className="text-gray-600">Websites Built</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg">
                <Smartphone className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                <h3 className="text-2xl font-bold text-gray-900">15+</h3>
                <p className="text-gray-600">Mobile Apps</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg">
                <Database className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                <h3 className="text-2xl font-bold text-gray-900">10+</h3>
                <p className="text-gray-600">ERP Systems</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;