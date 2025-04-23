import React, {useState} from 'react';
import {
    Code2,
    Palette,
    Smartphone,
    ShoppingBag,
    Search,
    Mail,
} from 'lucide-react';
import { Toaster } from 'react-hot-toast';
import { ServiceCard } from './components/ServiceCard';
import { FeatureCard } from './components/FeatureCard';
import { TestimonialCard } from './components/TestimonialCard';
import { SocialLink } from './components/SocialLink';
import { ContactForm } from './components/ContactForm';
import { CaseStudyCard } from './components/CaseStudyCard';
import { PricingCard } from './components/PricingCard';
import { Navbar } from './components/Navbar';
import PolicyModal from "./components/PolicyModal.tsx";

function App() {
    const [showPolicy, setShowPolicy] = useState<"privacy" | "terms" | null>(null);
    return (
        <div className="min-h-screen bg-gray-900 text-white">
            <Toaster position="top-right" />
            <Navbar />

            {/* Hero Section */}
            <header className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20" />
                <div className="relative container mx-auto px-6 py-16 text-center">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                        Crafting Digital Experiences That Matter
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                        We create stunning, responsive websites and web applications that help businesses thrive in the digital world.
                    </p>
                    <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg
            text-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300
            transform hover:scale-105">
                        Start Your Project
                    </button>
                </div>
            </header>

            {/* About Section */}
            <section id="about" className="py-20 bg-gray-800">
                <div className="container mx-auto px-6">
                    <h2 className="text-4xl font-bold text-center mb-16">About Us</h2>
                    <p className="text-xl text-gray-300 text-center max-w-4xl mx-auto">
                        We're a passionate team of web developers, designers, and digital strategists dedicated to creating
                        exceptional online experiences. From custom websites to e-commerce solutions, we bring your vision to life.
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
                            title="Custom Web Development"
                            description="Tailored websites and web applications built with modern technologies and best practices."
                        />
                        <ServiceCard
                            icon={<Palette className="w-12 h-12 text-purple-400" />}
                            title="UI/UX Design"
                            description="Beautiful, intuitive designs that engage users and drive conversions."
                        />
                        <ServiceCard
                            icon={<Smartphone className="w-12 h-12 text-green-400" />}
                            title="Responsive Development"
                            description="Mobile-first websites that work flawlessly across all devices and screens."
                        />
                        <ServiceCard
                            icon={<ShoppingBag className="w-12 h-12 text-blue-400" />}
                            title="E-commerce Solutions"
                            description="Custom online stores with secure payment processing and inventory management."
                        />
                        <ServiceCard
                            icon={<Search className="w-12 h-12 text-purple-400" />}
                            title="SEO Optimization"
                            description="Search engine optimized websites that help you reach more customers."
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
                            title="E-commerce Success"
                            client="Swadesh Grocery Store"
                            description="A modern e-commerce platform with inventory management and online ordering system."
                            image="https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=800"
                            results={[
                                "200% increase in online sales",
                                "50% reduction in order processing time",
                                "Improved inventory tracking"
                            ]}
                        />
                        <CaseStudyCard
                            title="Restaurant Website"
                            client="The Himalayan Restaurant"
                            description="A responsive website with online ordering and reservation system."
                            image="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800"
                            results={[
                                "300% increase in online orders",
                                "Streamlined reservation process",
                                "Enhanced customer engagement"
                            ]}
                        />
                        <CaseStudyCard
                            title="Digital Presence"
                            client="The Thai Kitchen"
                            description="Complete digital transformation with modern website and ordering capabilities."
                            image="https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=800"
                            results={[
                                "150% increase in website traffic",
                                "Improved customer satisfaction",
                                "Higher online visibility"
                            ]}
                        />
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <section id="pricing" className="py-20">
                <div className="container mx-auto px-6">
                    <h2 className="text-4xl font-bold text-center mb-16">Our Packages</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <PricingCard
                            title="Basic Package"
                            description="Perfect for small businesses needing a professional web presence"
                            features={[
                                "Responsive Website Design",
                                "5 Custom Pages",
                                "Contact Form",
                                "Basic SEO Setup",
                                "3 Months Support"
                            ]}
                        />
                        <PricingCard
                            title="Business Package"
                            description="Ideal for growing businesses needing advanced features"
                            features={[
                                "Custom Web Design",
                                "10 Custom Pages",
                                "E-commerce Integration",
                                "Advanced SEO Package",
                                "6 Months Support"
                            ]}
                            isPopular
                        />
                        <PricingCard
                            title="Enterprise Package"
                            description="Tailored solutions for large-scale business needs"
                            features={[
                                "Custom Web Application",
                                "Unlimited Pages",
                                "Advanced Features",
                                "Priority Support",
                                "12 Months Support"
                            ]}
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
                            title="Expert Team"
                            description="Skilled designers and developers dedicated to creating exceptional websites that drive results."
                        />
                        <FeatureCard
                            title="Custom Solutions"
                            description="Tailored web solutions that perfectly match your business needs and goals."
                        />
                        <FeatureCard
                            title="Proven Results"
                            description="Track record of delivering successful websites that help businesses grow online."
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
                            name="Rajesh Kumar"
                            role="Owner, Swadesh Grocery Store"
                            content="NexGen DevOps helped us build a fantastic website and inventory management system. Our customers can now browse our products online and place orders for pickup. It's transformed our business!"
                        />
                        <TestimonialCard
                            name="Pemba Sherpa"
                            role="Owner, The Himalayan Restaurant"
                            content="They created an amazing website with online ordering capabilities for our restaurant. The system is easy to use and has helped us reach more customers. Our online orders have increased significantly!"
                        />
                        <TestimonialCard
                            name="Somchai Patel"
                            role="Owner, The Thai Kitchen"
                            content="Our new website and ordering system from NexGen DevOps has modernized our restaurant. Customers love the easy online ordering, and it's helped us streamline our operations."
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
                        <div className="mt-12 flex justify-center">
                            <SocialLink icon={<Mail />} href="mailto:service.nexgendev@gmail.com" />
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
                        <div className="space-x-4">
                            <button
                                onClick={() => setShowPolicy("privacy")}
                                className="text-gray-400 hover:text-white text-sm"
                            >
                                Privacy Policy
                            </button>

                            <button
                                onClick={() => setShowPolicy("terms")}
                                className="text-gray-400 hover:text-white text-sm"
                            >
                                Terms of Service
                            </button>
                        </div>

                        <PolicyModal
                            isOpen={!!showPolicy}
                            selectedTab={showPolicy}
                            onClose={() => setShowPolicy(null)}
                        />
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default App;