import React from 'react';
import { Globe, Smartphone, Database, Settings, Code, BarChart3 } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Globe className="h-12 w-12 text-blue-600" />,
      title: "Website Development",
      description: "Custom websites and web applications built with modern technologies for optimal performance and user experience.",
      features: ["Responsive Design", "SEO Optimization", "CMS Integration", "E-commerce Solutions"]
    },
    {
      icon: <Database className="h-12 w-12 text-teal-600" />,
      title: "Information Systems",
      description: "Comprehensive information management systems tailored to your business processes and requirements.",
      features: ["Custom Databases", "Data Analytics", "Reporting Systems", "Integration Solutions"]
    },
    {
      icon: <Smartphone className="h-12 w-12 text-orange-600" />,
      title: "Android Applications",
      description: "Native and cross-platform mobile applications that provide seamless user experiences across devices.",
      features: ["Native Development", "Cross-platform", "UI/UX Design", "App Store Deployment"]
    },
    {
      icon: <Settings className="h-12 w-12 text-purple-600" />,
      title: "ERP Solutions",
      description: "Enterprise Resource Planning systems that streamline business operations and improve efficiency.",
      features: ["Process Automation", "Resource Management", "Financial Integration", "Real-time Monitoring"]
    },
    {
      icon: <Code className="h-12 w-12 text-green-600" />,
      title: "Custom Software",
      description: "Bespoke software solutions designed to meet your specific business needs and challenges.",
      features: ["Requirement Analysis", "Custom Development", "Testing & QA", "Maintenance Support"]
    },
    {
      icon: <BarChart3 className="h-12 w-12 text-red-600" />,
      title: "Digital Transformation",
      description: "Complete digital transformation services to modernize your business processes and technology infrastructure.",
      features: ["Process Analysis", "Technology Migration", "Staff Training", "Change Management"]
    }
  ];

  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer a comprehensive range of IT services to help your business succeed in the digital world.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-6">
              <div className="flex justify-center mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">{service.title}</h3>
              <p className="text-gray-600 mb-4 text-center">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-teal-600 rounded-lg p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
            <p className="text-blue-100 mb-6">
              Let's discuss how we can help transform your business with our IT solutions.
            </p>
            <button 
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Contact Us Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;