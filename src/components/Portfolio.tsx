import React from 'react';
import { ExternalLink, Calendar, Tag } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      category: "Web Development",
      description: "A comprehensive e-commerce solution with inventory management and payment integration.",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      year: "2024"
    },
    {
      title: "School Management System",
      category: "Information System",
      description: "Complete school administration system with student, teacher, and parent portals.",
      image: "https://images.pexels.com/photos/267507/pexels-photo-267507.jpeg?auto=compress&cs=tinysrgb&w=600",
      tags: ["Laravel", "MySQL", "Bootstrap", "API"],
      year: "2023"
    },
    {
      title: "Delivery Mobile App",
      category: "Mobile Development",
      description: "On-demand delivery application with real-time tracking and payment processing.",
      image: "https://images.pexels.com/photos/4246119/pexels-photo-4246119.jpeg?auto=compress&cs=tinysrgb&w=600",
      tags: ["Flutter", "Firebase", "Google Maps", "Push Notifications"],
      year: "2024"
    },
    {
      title: "Manufacturing ERP",
      category: "ERP System",
      description: "Enterprise resource planning system for manufacturing company operations.",
      image: "https://images.pexels.com/photos/8867482/pexels-photo-8867482.jpeg?auto=compress&cs=tinysrgb&w=600",
      tags: ["Java", "PostgreSQL", "Spring Boot", "Reports"],
      year: "2023"
    },
    {
      title: "Healthcare Dashboard",
      category: "Web Application",
      description: "Medical practice management system with patient records and appointment scheduling.",
      image: "https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=600",
      tags: ["Vue.js", "Express", "MongoDB", "Charts"],
      year: "2024"
    },
    {
      title: "Real Estate Portal",
      category: "Web Development",
      description: "Property listing and management platform with advanced search and filters.",
      image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=600",
      tags: ["React", "Next.js", "Prisma", "Maps"],
      year: "2023"
    }
  ];

  return (
    <section id="portfolio" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Portfolio</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore some of our recent projects and see how we've helped businesses transform their digital presence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="h-4 w-4 mr-1" />
                    {project.year}
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="flex items-center bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                      <Tag className="h-3 w-3 mr-1" />
                      {tag}
                    </span>
                  ))}
                </div>
                <button className="flex items-center text-blue-600 hover:text-blue-800 transition-colors">
                  <span>View Details</span>
                  <ExternalLink className="h-4 w-4 ml-1" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            These are just a few examples of our work. We'd love to discuss your project requirements.
          </p>
          <button 
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="bg-gradient-to-r from-blue-600 to-teal-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-teal-700 transition-all duration-300"
          >
            Start Your Project
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;