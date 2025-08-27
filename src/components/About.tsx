import React from 'react';
import { CheckCircle, Users, Target, Award } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <CheckCircle className="h-6 w-6 text-green-600" />,
      title: "Quality Assurance",
      description: "We ensure every project meets the highest standards of quality and reliability."
    },
    {
      icon: <Users className="h-6 w-6 text-blue-600" />,
      title: "Expert Team",
      description: "Our skilled developers and designers bring years of experience to every project."
    },
    {
      icon: <Target className="h-6 w-6 text-orange-600" />,
      title: "Goal-Oriented",
      description: "We focus on delivering solutions that align with your business objectives."
    },
    {
      icon: <Award className="h-6 w-6 text-purple-600" />,
      title: "Innovation",
      description: "We stay ahead of technology trends to provide cutting-edge solutions."
    }
  ];

  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About PT Azakana Gemilang Intermedia</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are a leading IT software company dedicated to transforming businesses through innovative technology solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Story</h3>
            <p className="text-gray-600 mb-4">
              Founded with a vision to bridge the gap between technology and business needs, PT Azakana Gemilang Intermedia has been serving clients across various industries with comprehensive IT solutions.
            </p>
            <p className="text-gray-600 mb-4">
              Our expertise spans across web development, mobile applications, enterprise resource planning systems, and custom software development. We pride ourselves on delivering scalable, secure, and user-friendly solutions.
            </p>
            <p className="text-gray-600">
              Located in Kendal, we serve clients nationwide, helping businesses of all sizes leverage technology to achieve their goals and stay competitive in today's digital landscape.
            </p>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-r from-blue-600 to-teal-600 rounded-lg p-8 text-white">
              <h4 className="text-2xl font-bold mb-4">Our Mission</h4>
              <p className="text-blue-100 mb-6">
                To empower businesses with innovative technology solutions that drive growth, efficiency, and success in the digital era.
              </p>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                <h5 className="font-semibold mb-2">Our Vision</h5>
                <p className="text-blue-100 text-sm">
                  To be the most trusted IT partner, recognized for excellence in software development and digital transformation.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="text-center p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <div className="flex justify-center mb-4">
                {value.icon}
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h4>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;