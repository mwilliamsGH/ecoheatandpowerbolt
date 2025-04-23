import React from 'react';
import { Flame, ThermometerSun, SunIcon, Users, Award, Leaf } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import SectionTitle from '../components/SectionTitle';
import FeatureCard from '../components/FeatureCard';

const AboutPage: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <HeroSection 
        title="About Eco Heat and Power" 
        subtitle="Delivering sustainable energy solutions since 2010. We're committed to reducing carbon footprints while providing reliable heating alternatives."
        backgroundImage="https://images.pexels.com/photos/957024/forest-trees-perspective-bright-957024.jpeg?auto=compress&cs=tinysrgb&w=1600"
        buttonText="Our Products"
        buttonLink="/firewood"
      />
      
      {/* Our Story Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle 
                title="Our Story" 
                subtitle="From humble beginnings to becoming a leader in sustainable heating solutions."
              />
              <p className="text-gray-600 mb-6">
                Eco Heat and Power was founded in 2010 with a simple mission: to provide eco-friendly heating alternatives that don't compromise on performance or reliability. What began as a small firewood supplier has grown into a comprehensive renewable energy company serving thousands of satisfied customers.
              </p>
              <p className="text-gray-600 mb-6">
                Our journey started when our founder, Michael Thompson, noticed the growing demand for sustainable heating solutions in our community. Having worked in traditional energy sectors, Michael was passionate about creating alternatives that would reduce environmental impact while maintaining the comfort and reliability that customers expect.
              </p>
              <p className="text-gray-600">
                Today, we're proud to offer a full range of renewable energy products, from our premium sustainable firewood to cutting-edge biomass boilers and solar panel systems. Throughout our growth, we've remained committed to our core values of environmental stewardship, quality, and customer satisfaction.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="overflow-hidden rounded-lg">
                <img 
                  src="https://images.pexels.com/photos/3934422/pexels-photo-3934422.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                  alt="Our founder in the forest" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="overflow-hidden rounded-lg">
                <img 
                  src="https://images.pexels.com/photos/4100130/pexels-photo-4100130.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                  alt="Solar panel installation" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="overflow-hidden rounded-lg">
                <img 
                  src="https://images.pexels.com/photos/5217981/pexels-photo-5217981.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                  alt="Biomass boiler installation" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="overflow-hidden rounded-lg">
                <img 
                  src="https://images.pexels.com/photos/4039537/pexels-photo-4039537.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                  alt="Our team" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Mission Section */}
      <section className="py-16 md:py-24 bg-green-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <SectionTitle 
            title="Our Mission" 
            subtitle="We're on a mission to make renewable energy accessible, affordable, and effective for everyone."
            centered={true}
            light={true}
          />
          
          <div className="max-w-3xl mx-auto mt-8">
            <p className="text-green-100 text-lg leading-relaxed">
              At Eco Heat and Power, we believe that sustainable energy shouldn't be a luxury—it should be the standard. We're committed to helping homeowners and businesses reduce their environmental impact without sacrificing comfort or convenience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-green-700 rounded-lg p-6">
              <div className="flex justify-center mb-4">
                <Leaf className="h-12 w-12 text-green-300" />
              </div>
              <h3 className="text-xl font-bold mb-2">Sustainability</h3>
              <p className="text-green-100">
                We're committed to sourcing, producing, and delivering our products in the most environmentally responsible way possible.
              </p>
            </div>
            
            <div className="bg-green-700 rounded-lg p-6">
              <div className="flex justify-center mb-4">
                <Award className="h-12 w-12 text-green-300" />
              </div>
              <h3 className="text-xl font-bold mb-2">Quality</h3>
              <p className="text-green-100">
                We never compromise on the quality of our products, ensuring optimal performance and customer satisfaction.
              </p>
            </div>
            
            <div className="bg-green-700 rounded-lg p-6">
              <div className="flex justify-center mb-4">
                <Users className="h-12 w-12 text-green-300" />
              </div>
              <h3 className="text-xl font-bold mb-2">Community</h3>
              <p className="text-green-100">
                We're dedicated to supporting the communities we serve through education, outreach, and responsible business practices.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Products Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Our Renewable Energy Solutions" 
            subtitle="We offer a comprehensive range of sustainable energy products to meet your heating and power needs."
            centered={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-12">
            <div className="text-center">
              <div className="mb-6 flex justify-center">
                <div className="p-4 bg-green-100 rounded-full">
                  <Flame className="h-10 w-10 text-orange-500" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Premium Firewood</h3>
              <p className="text-gray-600">
                Sustainably harvested, properly seasoned firewood that burns cleaner and hotter. Available in various hardwood varieties and convenient package sizes.
              </p>
              <a href="/firewood" className="inline-block mt-4 text-green-600 font-medium hover:text-green-500">
                Learn more
              </a>
            </div>
            
            <div className="text-center">
              <div className="mb-6 flex justify-center">
                <div className="p-4 bg-green-100 rounded-full">
                  <ThermometerSun className="h-10 w-10 text-green-600" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Biomass Boilers</h3>
              <p className="text-gray-600">
                Modern, efficient biomass heating systems that use organic materials to produce heat with minimal environmental impact. Perfect for residential and commercial applications.
              </p>
              <a href="/biomass" className="inline-block mt-4 text-green-600 font-medium hover:text-green-500">
                Learn more
              </a>
            </div>
            
            <div className="text-center">
              <div className="mb-6 flex justify-center">
                <div className="p-4 bg-green-100 rounded-full">
                  <SunIcon className="h-10 w-10 text-yellow-500" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Solar Panel Systems</h3>
              <p className="text-gray-600">
                High-efficiency solar panel systems designed to harness the power of the sun and reduce your reliance on traditional energy sources. Custom solutions for any property.
              </p>
              <a href="/solar" className="inline-block mt-4 text-green-600 font-medium hover:text-green-500">
                Learn more
              </a>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Team Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Meet Our Team" 
            subtitle="Our dedicated team of experts is passionate about renewable energy and committed to helping you find the perfect solution."
            centered={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-64 overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                  alt="Michael Thompson" 
                  className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800">Michael Thompson</h3>
                <p className="text-green-600 mb-3">Founder & CEO</p>
                <p className="text-gray-600 text-sm">
                  With over 20 years of experience in sustainable energy, Michael leads our company's mission to provide eco-friendly heating solutions.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-64 overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                  alt="Sarah Johnson" 
                  className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800">Sarah Johnson</h3>
                <p className="text-green-600 mb-3">Operations Director</p>
                <p className="text-gray-600 text-sm">
                  Sarah ensures our day-to-day operations run smoothly, from sourcing materials to coordinating installations and deliveries.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-64 overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                  alt="David Chen" 
                  className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800">David Chen</h3>
                <p className="text-green-600 mb-3">Technical Director</p>
                <p className="text-gray-600 text-sm">
                  As our technical expert, David oversees installations and provides technical guidance on all our renewable energy systems.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-64 overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                  alt="Emma Wilson" 
                  className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800">Emma Wilson</h3>
                <p className="text-green-600 mb-3">Customer Relations</p>
                <p className="text-gray-600 text-sm">
                  Emma is dedicated to ensuring our customers receive the highest level of service and support throughout their journey with us.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Sustainability Commitment Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.pexels.com/photos/1072824/pexels-photo-1072824.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                alt="Planting trees" 
                className="rounded-lg shadow-lg"
              />
            </div>
            
            <div>
              <SectionTitle 
                title="Our Commitment to Sustainability" 
                subtitle="We believe in taking concrete actions to protect our environment for future generations."
              />
              
              <div className="space-y-6 mt-8">
                <div className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-full mr-4 flex-shrink-0">
                    <Leaf className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-800 mb-1">Reforestation</h3>
                    <p className="text-gray-600">
                      For every tree harvested for our firewood, we plant two new ones. We've planted over 10,000 trees since our founding.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-full mr-4 flex-shrink-0">
                    <Leaf className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-800 mb-1">Carbon Neutrality</h3>
                    <p className="text-gray-600">
                      We're working toward making our operations 100% carbon neutral by 2026 through renewable energy use and carbon offset programs.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-full mr-4 flex-shrink-0">
                    <Leaf className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-800 mb-1">Sustainable Sourcing</h3>
                    <p className="text-gray-600">
                      All our products come from suppliers who meet strict environmental and ethical standards, ensuring a responsible supply chain.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-full mr-4 flex-shrink-0">
                    <Leaf className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-800 mb-1">Community Education</h3>
                    <p className="text-gray-600">
                      We regularly host workshops and events to educate our community about renewable energy and sustainable living practices.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 md:py-20 bg-green-800 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Us in Creating a Sustainable Future</h2>
          <p className="text-green-100 text-lg max-w-3xl mx-auto mb-8">
            Whether you're looking for eco-friendly heating solutions or want to reduce your carbon footprint, we're here to help you make a positive impact on the environment.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="/contact" 
              className="bg-white text-green-800 hover:bg-gray-100 px-8 py-3 rounded-md font-medium inline-block transition-colors"
            >
              Contact Us
            </a>
            <a 
              href="/firewood" 
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-green-800 px-8 py-3 rounded-md font-medium inline-block transition-colors"
            >
              Explore Products
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;