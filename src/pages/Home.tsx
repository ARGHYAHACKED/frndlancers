import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code, 
  Smartphone, 
  Users, 
  Palette, 
  Camera, 
  Video, 
  PenTool,
  Search,
  Share2,
  Mail
} from 'lucide-react';

const services = [
  { icon: Code, title: 'Website Development', description: 'Custom websites built with modern technologies' },
  { icon: Smartphone, title: 'App Development', description: 'Native and cross-platform mobile applications' },
  { icon: Users, title: 'Influencer Marketing', description: 'Connect with influential content creators' },
  { icon: Palette, title: 'Graphics Designing', description: 'Creative and professional design solutions' },
  { icon: Camera, title: 'Photography', description: 'Professional photography services' },
  { icon: Video, title: 'Videography', description: 'High-quality video production' },
  { icon: PenTool, title: 'Editor SEO', description: 'Content optimization for search engines' },
  { icon: Share2, title: 'Social Media Management', description: 'Comprehensive social media solutions' },
  { icon: Users, title: 'Branding & Advertising', description: 'Build and promote your brand identity' },
  { icon: Mail, title: 'Email Marketing', description: 'Effective email campaign strategies' }
];

const Home = () => {
  return (
    <div className="relative">
      {/* Hero Section */}
      <div 
        className="min-h-screen relative flex items-center justify-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1519681393784-d120267933ba")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Welcome to Frndlancers
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto"
          >
            Your gateway to exceptional freelance talent and digital solutions
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <a 
              href="/hire" 
              className="bg-teal-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-teal-600 transition duration-300"
            >
              Hire a Freelancer
            </a>
          </motion.div>
        </div>
      </div>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600">Comprehensive solutions for your digital needs</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition duration-300"
              >
                <service.icon className="h-12 w-12 text-teal-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">About Frndlancers</h2>
              <p className="text-lg text-gray-600 mb-6">
                At Frndlancers, we bridge the gap between talented freelancers and businesses seeking exceptional services. Our platform connects you with skilled professionals across various digital domains.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Whether you need a stunning website, engaging content, or comprehensive digital marketing solutions, our vetted freelancers are here to bring your vision to life.
              </p>
              <a 
                href="/contact" 
                className="inline-flex items-center text-teal-500 font-semibold hover:text-teal-600"
              >
                Learn more about us
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c" 
                alt="Team collaboration" 
                className="rounded-lg shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;