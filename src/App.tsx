import React from 'react';
import {
  Code2,
  Cloud,
  Shield,
  GitBranch,
  Brain,
  Github,
  Linkedin,
  Twitter,
  Mail,
  ArrowRight
} from 'lucide-react';
import { Toaster } from 'react-hot-toast';
import { ServiceCard } from './components/ServiceCard';
import { FeatureCard } from './components/FeatureCard';
import { TestimonialCard } from './components/TestimonialCard';
import { SocialLink } from './components/SocialLink';
import { ContactForm } from './components/ContactForm';
import { CaseStudyCard } from './components/CaseStudyCard';
import { PricingCard } from './components/PricingCard';
import { BlogCard } from './components/BlogCard';
import { Navbar } from './components/Navbar';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Toaster position="top-right" />
      <Navbar />
      
      {/* Hero Section */}
      <header className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20" />
        <div className="relative container mx-auto px-6 py-16 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            Innovating Software, Accelerating DevOps
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            At NexGen DevOps, we specialize in cutting-edge software solutions, cloud transformation, 
            and DevOps consulting to streamline your business operations.
          </p>
          <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg 
            text-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 
            transform hover:scale-105">
            Get Started
          </button>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">About Us</h2>
          <p className="text-xl text-gray-300 text-center max-w-4xl mx-auto">
            Empowering businesses with scalable, secure, and high-performance software solutions using 
            modern DevOps practices. We bridge the gap between development and operations, ensuring 
            seamless delivery and optimal performance.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              icon={<Code2 className="w-12 h-12 text-blue-400" />}
              title="Custom Software Development"
              description="Tailored solutions built with cutting-edge technologies to meet your unique business needs."
            />
            <ServiceCard
              icon={<Cloud className="w-12 h-12 text-purple-400" />}
              title="Cloud & DevOps Consulting"
              description="Expert guidance in cloud migration and DevOps implementation for optimal efficiency."
            />
            <ServiceCard
              icon={<Shield className="w-12 h-12 text-green-400" />}
              title="Security & Compliance"
              description="Robust security measures and compliance solutions to protect your digital assets."
            />
            <ServiceCard
              icon={<GitBranch className="w-12 h-12 text-blue-400" />}
              title="Automation & CI/CD"
              description="Streamlined development workflows with automated testing and deployment pipelines."
            />
            <ServiceCard
              icon={<Brain className="w-12 h-12 text-purple-400" />}
              title="AI & ML Integration"
              description="Intelligent solutions powered by advanced machine learning algorithms."
            />
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="case-studies" className="py-20 bg-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Case Studies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <CaseStudyCard
              title="Cloud Migration Success"
              client="TechCorp Industries"
              description="Complete digital transformation and cloud migration for a Fortune 500 company."
              image="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800"
              results={[
                "50% reduction in operational costs",
                "99.99% system uptime achieved",
                "3x faster deployment cycles"
              ]}
            />
            <CaseStudyCard
              title="DevOps Transformation"
              client="FinTech Solutions"
              description="Implementing modern DevOps practices for a leading financial services provider."
              image="https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?auto=format&fit=crop&w=800"
              results={[
                "70% faster time-to-market",
                "90% reduction in deployment errors",
                "2x developer productivity"
              ]}
            />
            <CaseStudyCard
              title="Security Enhancement"
              client="HealthCare Plus"
              description="Comprehensive security overhaul for a healthcare provider's digital infrastructure."
              image="https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&w=800"
              results={[
                "Zero security breaches post-implementation",
                "HIPAA compliance achieved",
                "45% reduction in security incidents"
              ]}
            />
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Pricing Plans</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <PricingCard
              title="Starter"
              price="$2,999"
              description="Perfect for small businesses starting their DevOps journey"
              features={[
                "Initial DevOps Assessment",
                "Basic CI/CD Pipeline Setup",
                "Cloud Infrastructure Planning",
                "5x8 Support",
                "Monthly Review Meetings"
              ]}
            />
            <PricingCard
              title="Professional"
              price="$5,999"
              description="Ideal for growing companies needing comprehensive DevOps solutions"
              features={[
                "Advanced DevOps Implementation",
                "Multi-Cloud Strategy",
                "Automated Security Testing",
                "24x7 Priority Support",
                "Weekly Strategy Sessions"
              ]}
              isPopular
            />
            <PricingCard
              title="Enterprise"
              price="Custom"
              description="Tailored solutions for large-scale enterprise operations"
              features={[
                "Full DevOps Transformation",
                "Custom Security Solutions",
                "Dedicated DevOps Team",
                "24x7 Premium Support",
                "Daily Collaboration"
              ]}
            />
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-20 bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center mb-16">
            <h2 className="text-4xl font-bold text-center md:text-left">Latest Insights</h2>
            <button className="mt-4 md:mt-0 text-blue-400 hover:text-blue-300 flex items-center">
              View All Articles
              <ArrowRight className="w-4 h-4 ml-2" />
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <BlogCard
              title="The Future of Cloud Computing in 2024"
              excerpt="Explore the revolutionary trends and innovations shaping the future of cloud computing and digital transformation in the enterprise landscape."
              image="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800"
              date="Mar 15, 2024"
              readTime="5 min read"
              category="Cloud Computing"
              author={{
                name: "Alex Thompson",
                avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150",
                role: "Cloud Solutions Architect"
              }}
            />
            <BlogCard
              title="Implementing Zero-Trust Security in DevSecOps"
              excerpt="Learn how to integrate advanced security practices into your DevOps pipeline for enhanced protection and compliance."
              image="https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&w=800"
              date="Mar 12, 2024"
              readTime="7 min read"
              category="Security"
              author={{
                name: "Sarah Chen",
                avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150",
                role: "Security Engineer"
              }}
            />
            <BlogCard
              title="AI-Powered DevOps: The Next Evolution"
              excerpt="Discover how artificial intelligence and machine learning are revolutionizing DevOps practices and automation capabilities."
              image="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800"
              date="Mar 10, 2024"
              readTime="6 min read"
              category="AI & ML"
              author={{
                name: "Mike Roberts",
                avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150",
                role: "AI Solutions Lead"
              }}
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              title="Industry Expertise"
              description="Over 10 years of experience in delivering enterprise-grade solutions."
            />
            <FeatureCard
              title="Innovative Approach"
              description="Cutting-edge technologies and methodologies for optimal results."
            />
            <FeatureCard
              title="Proven Success"
              description="Successful partnerships with Fortune 500 companies worldwide."
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Client Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard
              name="Sarah Johnson"
              role="CTO, TechCorp"
              content="NexGen DevOps transformed our development pipeline, reducing deployment time by 70%."
              image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150"
            />
            <TestimonialCard
              name="Michael Chen"
              role="VP Engineering, CloudScale"
              content="Their expertise in cloud architecture helped us achieve unprecedented scalability."
              image="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150"
            />
            <TestimonialCard
              name="Emily Rodriguez"
              role="Director of Operations, DataFlow"
              content="Outstanding service and technical expertise. They're truly partners in our success."
              image="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Contact Us</h2>
          <div className="max-w-2xl mx-auto">
            <ContactForm />
            <div className="mt-12 flex justify-center space-x-6">
              <SocialLink icon={<Github />} href="#" />
              <SocialLink icon={<Linkedin />} href="#" />
              <SocialLink icon={<Twitter />} href="#" />
              <SocialLink icon={<Mail />} href="mailto:contact@nexgendevops.com" />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-700">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm">
              © 2025 NexGen DevOps. All rights reserved.
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;