import React from 'react';
import { Leaf, AreaChart, Settings, Wind, ThermometerSun, Gauge } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import SectionTitle from '../components/SectionTitle';
import TestimonialCard from '../components/TestimonialCard';
import ContactForm from '../components/ContactForm';
import ProductGrid from '../components/ProductGrid';
import { biomassProducts } from '../data/biomassProducts';

const BiomassPage: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <HeroSection 
        title="Modern Biomass Heating Solutions" 
        subtitle="Embrace clean, renewable heat with our state-of-the-art biomass boiler systems. Efficient, eco-friendly, and economical."
        backgroundImage="/eta_boiler1.png"
        buttonText="Explore Biomass"
        buttonLink="#biomass-systems"
      />
      
      {/* Introduction Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle 
                title="Why Choose Biomass?" 
                subtitle="Biomass boilers are an environmentally friendly alternative to fossil fuel systems, using organic materials to produce heat with minimal carbon emissions."
              />
              <p className="text-gray-600 mb-6">
                Biomass heating systems use renewable organic materials like wood pellets, chips, or logs to generate heat, providing a sustainable alternative to conventional fossil fuel boilers. These advanced systems efficiently convert biomass into heat with minimal waste and emissions.
              </p>
              <p className="text-gray-600 mb-6">
                At Eco Heat and Power, we offer a range of high-efficiency biomass boilers suitable for various applications, from single-family homes to commercial buildings. Our systems are designed for optimal performance, reliability, and ease of use, with features like automatic feeding and ash removal.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="flex items-start">
                  <Leaf className="h-6 w-6 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Carbon neutral heating</span>
                </div>
                <div className="flex items-start">
                  <AreaChart className="h-6 w-6 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Reduced energy bills</span>
                </div>
                <div className="flex items-start">
                  <Settings className="h-6 w-6 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Automated operation</span>
                </div>
                <div className="flex items-start">
                  <Wind className="h-6 w-6 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Low emissions</span>
                </div>
                <div className="flex items-start">
                  <ThermometerSun className="h-6 w-6 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>High efficiency (90%+)</span>
                </div>
                <div className="flex items-start">
                  <Gauge className="h-6 w-6 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Smart controls</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="/eta_boiler1.png" 
                alt="Modern biomass boiler" 
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-10 -left-10 hidden lg:block">
                <div className="bg-green-600 text-white p-4 rounded-lg shadow-lg">
                  <p className="text-xl font-bold">90%+</p>
                  <p>Energy Efficient</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Product Grid Section */}
      <section id="biomass-systems" className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Our Biomass Heating Systems" 
            subtitle="We offer a comprehensive range of biomass boilers to suit different requirements, from residential homes to industrial applications."
            centered={true}
          />
          
          <div className="mt-12">
            <ProductGrid products={biomassProducts} />
          </div>
        </div>
      </section>
      
      {/* How It Works Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="How Biomass Heating Works" 
            subtitle="Understanding the process behind efficient, carbon-neutral biomass heating systems."
            centered={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            <div className="text-center p-6">
              <div className="inline-block p-4 bg-green-100 rounded-full mb-4">
                <span className="text-2xl font-bold text-green-600">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Fuel Storage</h3>
              <p className="text-gray-600">
                Biomass fuel (pellets, chips, or logs) is stored in a hopper or silo adjacent to the boiler, keeping a consistent supply available.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="inline-block p-4 bg-green-100 rounded-full mb-4">
                <span className="text-2xl font-bold text-green-600">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Automated Feeding</h3>
              <p className="text-gray-600">
                The system automatically transfers fuel from storage to the combustion chamber based on heating demand and temperature settings.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="inline-block p-4 bg-green-100 rounded-full mb-4">
                <span className="text-2xl font-bold text-green-600">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Efficient Combustion</h3>
              <p className="text-gray-600">
                Advanced combustion technology ensures complete fuel burning at optimal temperatures, maximizing energy extraction while minimizing emissions.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="inline-block p-4 bg-green-100 rounded-full mb-4">
                <span className="text-2xl font-bold text-green-600">4</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Heat Distribution</h3>
              <p className="text-gray-600">
                The generated heat is transferred to water in the system, which circulates through your existing radiators or underfloor heating to warm your property.
              </p>
            </div>
          </div>
          
          <div className="max-w-4xl mx-auto mt-16">
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Is Biomass Right for You?</h3>
              <p className="text-gray-600 mb-6">
                Biomass heating systems are ideal for:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>Properties not connected to the gas network</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>Replacing oil, LPG, or electric heating systems</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>Homes with space for fuel storage</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>Businesses looking to reduce carbon footprint</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>Buildings with high heating demands</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>Properties seeking energy independence</span>
                </li>
              </ul>
              <a href="#contact" className="bg-green-600 hover:bg-green-500 text-white py-2 px-6 rounded-md inline-block transition-colors">
                Get Expert Advice
              </a>
            </div>
          </div>
        </div>
      </section>
      
      {/* Benefits Section */}
      <section className="py-16 md:py-24 bg-green-800 text-white">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Benefits of Biomass Heating" 
            subtitle="Discover why more people are switching to biomass for their heating needs."
            centered={true}
            light={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-green-700 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">Environmental Benefits</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-green-300 mr-2">•</span>
                  <span>Carbon neutral renewable energy source</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-300 mr-2">•</span>
                  <span>Significantly reduced greenhouse gas emissions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-300 mr-2">•</span>
                  <span>Sustainable resource when properly managed</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-300 mr-2">•</span>
                  <span>Reduces waste by utilizing by-products</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-green-700 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">Financial Benefits</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-green-300 mr-2">•</span>
                  <span>Lower fuel costs compared to fossil fuels</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-300 mr-2">•</span>
                  <span>Potential for renewable heat incentive payments</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-300 mr-2">•</span>
                  <span>Stable fuel prices not affected by oil markets</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-300 mr-2">•</span>
                  <span>Increased property value with modern heating</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-green-700 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">Practical Benefits</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-green-300 mr-2">•</span>
                  <span>High efficiency (90%+) modern systems</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-300 mr-2">•</span>
                  <span>Automated operation requires minimal attention</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-300 mr-2">•</span>
                  <span>Compatible with existing heating infrastructure</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-300 mr-2">•</span>
                  <span>Long system lifespan (15-20 years)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Installation Process */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle 
                title="Our Installation Process" 
                subtitle="From initial consultation to commissioning, we ensure a smooth and professional biomass boiler installation."
              />
              
              <div className="space-y-6 mt-8">
                <div className="flex">
                  <div className="flex-shrink-0 h-12 w-12 rounded-full bg-green-100 flex items-center justify-center mr-4">
                    <span className="text-xl font-bold text-green-600">1</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-800 mb-1">Initial Consultation</h3>
                    <p className="text-gray-600">
                      We assess your heating requirements, discuss options, and recommend the most suitable biomass solution for your property.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 h-12 w-12 rounded-full bg-green-100 flex items-center justify-center mr-4">
                    <span className="text-xl font-bold text-green-600">2</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-800 mb-1">System Design</h3>
                    <p className="text-gray-600">
                      Our engineers design a customized biomass heating system, including boiler sizing, fuel storage, and integration with existing heating.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 h-12 w-12 rounded-full bg-green-100 flex items-center justify-center mr-4">
                    <span className="text-xl font-bold text-green-600">3</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-800 mb-1">Installation</h3>
                    <p className="text-gray-600">
                      Our certified technicians install your biomass system with minimal disruption, ensuring all components are properly integrated.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 h-12 w-12 rounded-full bg-green-100 flex items-center justify-center mr-4">
                    <span className="text-xl font-bold text-green-600">4</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-800 mb-1">Commissioning</h3>
                    <p className="text-gray-600">
                      We thoroughly test the system, optimize settings for maximum efficiency, and provide comprehensive training on operation and maintenance.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 h-12 w-12 rounded-full bg-green-100 flex items-center justify-center mr-4">
                    <span className="text-xl font-bold text-green-600">5</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-800 mb-1">Ongoing Support</h3>
                    <p className="text-gray-600">
                      We offer maintenance packages and responsive support to ensure your biomass system continues to operate at peak performance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <img 
                src="https://images.pexels.com/photos/1216544/pexels-photo-1216544.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                alt="Biomass installation" 
                className="rounded-lg shadow-lg"
              />
              
              <div className="mt-8 bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Our Quality Guarantee</h3>
                <p className="text-gray-600 mb-4">
                  All our biomass installations come with:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>5-year installation warranty</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>Manufacturer warranties on all equipment</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>MCS certification for eligible systems</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <span>Compliance with all relevant regulations</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="What Our Customers Say" 
            subtitle="Hear from property owners who have made the switch to biomass heating with Eco Heat and Power."
            centered={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <TestimonialCard 
              quote="Our biomass boiler has transformed how we heat our farmhouse. We're saving around 40% on heating costs compared to our old oil system, and the automated operation makes it so convenient."
              author="James W., Halifax"
              rating={5}
            />
            <TestimonialCard 
              quote="As a business owner, I was looking for ways to reduce our carbon footprint and operating costs. The commercial biomass system installed by Eco Heat and Power has achieved both goals brilliantly."
              author="Sarah T., Business Owner"
              rating={5}
            />
            <TestimonialCard 
              quote="The installation team was professional and knowledgeable. They took the time to explain how the system works and made sure we were comfortable operating it. The heat output is consistent and comfortable."
              author="Michael and Rebecca L."
              rating={4}
            />
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <SectionTitle 
                title="Ready to Switch to Biomass Heating?" 
                subtitle="Contact us today to discuss your biomass heating options and arrange a free site assessment."
              />
              
              <div className="bg-gray-50 p-6 rounded-lg mt-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">What to Expect</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <p>
                      <span className="font-medium">Free Consultation:</span> We'll discuss your heating requirements and recommend suitable options.
                    </p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <p>
                      <span className="font-medium">Site Assessment:</span> Our engineers will visit your property to assess feasibility and design requirements.
                    </p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <p>
                      <span className="font-medium">Detailed Quote:</span> We'll provide a comprehensive quotation with clear pricing and specifications.
                    </p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    <p>
                      <span className="font-medium">Financing Options:</span> Information on available grants, incentives, and finance options for your installation.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            
            <ContactForm />
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Frequently Asked Questions" 
            subtitle="Find answers to common questions about biomass heating systems."
            centered={true}
          />
          
          <div className="max-w-3xl mx-auto mt-12">
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <button className="w-full text-left p-4 font-medium text-gray-800">
                  What types of biomass fuel can be used?
                </button>
                <div className="p-4 pt-0 text-gray-600 border-t">
                  <p>
                    Biomass boilers can use various types of organic material as fuel, including wood pellets, wood chips, logs, and agricultural by-products. The specific fuel type depends on the boiler design, with most modern systems using standardized wood pellets for consistent performance and convenient handling.
                  </p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <button className="w-full text-left p-4 font-medium text-gray-800">
                  How much space do I need for a biomass system?
                </button>
                <div className="p-4 pt-0 text-gray-600 border-t">
                  <p>
                    Space requirements vary depending on the system size and fuel type. A typical residential pellet boiler needs approximately 2-3 square meters for the boiler itself, plus additional space for the fuel storage (typically 2-4 square meters). Commercial systems require more space, both for the larger boiler and increased fuel storage capacity.
                  </p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <button className="w-full text-left p-4 font-medium text-gray-800">
                  How often does a biomass boiler need maintenance?
                </button>
                <div className="p-4 pt-0 text-gray-600 border-t">
                  <p>
                    Modern biomass boilers require regular but minimal maintenance. This typically includes emptying the ash container every 1-2 months (depending on usage), an annual service by a qualified technician, and occasional cleaning of heat exchangers. Automated systems have self-cleaning features that reduce maintenance requirements.
                  </p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <button className="w-full text-left p-4 font-medium text-gray-800">
                  Are there any government incentives for installing biomass heating?
                </button>
                <div className="p-4 pt-0 text-gray-600 border-t">
                  <p>
                    Yes, there are various incentives available for biomass heating installations, including renewable heat incentives, tax credits, and grants. These vary by location and change over time. Our team stays current with all available programs and can help you identify and apply for any incentives you qualify for.
                  </p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <button className="w-full text-left p-4 font-medium text-gray-800">
                  Can a biomass boiler work with my existing heating system?
                </button>
                <div className="p-4 pt-0 text-gray-600 border-t">
                  <p>
                    Yes, biomass boilers can typically be integrated with existing heating systems, including radiator networks, underfloor heating, and hot water cylinders. They can also work in conjunction with other renewable technologies like solar thermal. Our engineers will design an integration solution specific to your property's heating infrastructure.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BiomassPage;