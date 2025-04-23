import React from 'react';
import { SunIcon, BarChart, Home, Battery, Zap, CloudSun } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import SectionTitle from '../components/SectionTitle';
import TestimonialCard from '../components/TestimonialCard';
import ContactForm from '../components/ContactForm';

const SolarPage: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <HeroSection 
        title="Harness the Power of the Sun" 
        subtitle="Our advanced solar panel systems help you generate clean, renewable electricity while reducing your energy bills and carbon footprint."
        backgroundImage="https://images.pexels.com/photos/159397/solar-panel-array-power-sun-electricity-159397.jpeg?auto=compress&cs=tinysrgb&w=1600"
        buttonText="Explore Solar"
        buttonLink="#solar-solutions"
      />
      
      {/* Introduction Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle 
                title="Why Solar Energy?" 
                subtitle="Solar power is one of the cleanest and most abundant renewable energy sources available, offering numerous benefits for homeowners and businesses."
              />
              <p className="text-gray-600 mb-6">
                Solar photovoltaic (PV) systems convert sunlight directly into electricity, providing a sustainable alternative to fossil fuels. With advances in technology, modern solar panels are more efficient and affordable than ever before, making them an excellent investment for your property.
              </p>
              <p className="text-gray-600 mb-6">
                At Eco Heat and Power, we offer premium solar panel systems designed to maximize energy production while seamlessly integrating with your property's aesthetics. Our systems are built to withstand harsh weather conditions and come with comprehensive warranties for peace of mind.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="flex items-start">
                  <SunIcon className="h-6 w-6 text-yellow-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Clean, renewable energy</span>
                </div>
                <div className="flex items-start">
                  <BarChart className="h-6 w-6 text-yellow-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Reduced electricity bills</span>
                </div>
                <div className="flex items-start">
                  <Home className="h-6 w-6 text-yellow-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Increased property value</span>
                </div>
                <div className="flex items-start">
                  <Battery className="h-6 w-6 text-yellow-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Energy independence</span>
                </div>
                <div className="flex items-start">
                  <Zap className="h-6 w-6 text-yellow-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Low maintenance costs</span>
                </div>
                <div className="flex items-start">
                  <CloudSun className="h-6 w-6 text-yellow-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Works even on cloudy days</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/9875441/pexels-photo-9875441.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                alt="Solar panel installation on a residential roof" 
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-10 -left-10 hidden lg:block">
                <div className="bg-yellow-500 text-white p-4 rounded-lg shadow-lg">
                  <p className="text-xl font-bold">25+ Years</p>
                  <p>Lifespan</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Solar Solutions Section */}
      <section id="solar-solutions" className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Our Solar Energy Solutions" 
            subtitle="We offer comprehensive solar solutions tailored to your specific needs and property requirements."
            centered={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div 
                className="h-48 bg-cover bg-center" 
                style={{ backgroundImage: `url(https://images.pexels.com/photos/2800832/pexels-photo-2800832.jpeg?auto=compress&cs=tinysrgb&w=1600)` }}
              ></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Residential Solar Panels</h3>
                <p className="text-gray-600 mb-4">
                  High-efficiency solar panel systems designed for homes, helping families reduce electricity bills while supporting a sustainable future.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <span className="text-yellow-500 mr-2">•</span>
                    <span>3-15 kW systems available</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-yellow-500 mr-2">•</span>
                    <span>Monocrystalline premium panels</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-yellow-500 mr-2">•</span>
                    <span>Roof or ground mounting options</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-yellow-500 mr-2">•</span>
                    <span>Smart monitoring included</span>
                  </li>
                </ul>
                <button className="w-full bg-yellow-500 hover:bg-yellow-400 text-white py-2 px-4 rounded-md transition-colors">
                  Learn More
                </button>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div 
                className="h-48 bg-cover bg-center" 
                style={{ backgroundImage: `url(https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg?auto=compress&cs=tinysrgb&w=1600)` }}
              ></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Commercial Solar Systems</h3>
                <p className="text-gray-600 mb-4">
                  Large-scale solar installations for businesses, reducing operating costs and demonstrating corporate environmental responsibility.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <span className="text-yellow-500 mr-2">•</span>
                    <span>20-500+ kW capacity</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-yellow-500 mr-2">•</span>
                    <span>Flat roof or car port options</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-yellow-500 mr-2">•</span>
                    <span>Advanced commercial inverters</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-yellow-500 mr-2">•</span>
                    <span>Corporate sustainability reporting</span>
                  </li>
                </ul>
                <button className="w-full bg-yellow-500 hover:bg-yellow-400 text-white py-2 px-4 rounded-md transition-colors">
                  Learn More
                </button>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div 
                className="h-48 bg-cover bg-center" 
                style={{ backgroundImage: `url(https://images.pexels.com/photos/9875339/pexels-photo-9875339.jpeg?auto=compress&cs=tinysrgb&w=1600)` }}
              ></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Battery Storage Solutions</h3>
                <p className="text-gray-600 mb-4">
                  Store excess solar energy for use when the sun isn't shining, maximizing self-consumption and providing backup power.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <span className="text-yellow-500 mr-2">•</span>
                    <span>5-15 kWh residential capacities</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-yellow-500 mr-2">•</span>
                    <span>Scalable commercial solutions</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-yellow-500 mr-2">•</span>
                    <span>Backup power functionality</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-yellow-500 mr-2">•</span>
                    <span>Smart energy management</span>
                  </li>
                </ul>
                <button className="w-full bg-yellow-500 hover:bg-yellow-400 text-white py-2 px-4 rounded-md transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* How It Works Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="How Solar Energy Works" 
            subtitle="Understanding the process of converting sunlight into usable electricity for your home or business."
            centered={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            <div className="text-center p-6">
              <div className="inline-block p-4 bg-yellow-100 rounded-full mb-4">
                <span className="text-2xl font-bold text-yellow-500">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Solar Collection</h3>
              <p className="text-gray-600">
                Photovoltaic cells in solar panels absorb photons from sunlight, generating direct current (DC) electricity through the photovoltaic effect.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="inline-block p-4 bg-yellow-100 rounded-full mb-4">
                <span className="text-2xl font-bold text-yellow-500">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Power Conversion</h3>
              <p className="text-gray-600">
                Inverters convert the DC electricity from the solar panels into alternating current (AC) electricity that can be used in your home or business.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="inline-block p-4 bg-yellow-100 rounded-full mb-4">
                <span className="text-2xl font-bold text-yellow-500">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Energy Usage</h3>
              <p className="text-gray-600">
                The converted AC electricity powers your appliances and lighting, reducing or eliminating the need to draw electricity from the grid.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="inline-block p-4 bg-yellow-100 rounded-full mb-4">
                <span className="text-2xl font-bold text-yellow-500">4</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Grid Connection</h3>
              <p className="text-gray-600">
                Excess electricity is fed back to the grid, potentially earning credits, or stored in batteries for use during night-time or cloudy periods.
              </p>
            </div>
          </div>
          
          <div className="max-w-4xl mx-auto mt-16">
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Is Solar Right for You?</h3>
              <p className="text-gray-600 mb-6">
                Solar energy systems are ideal for:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">•</span>
                  <span>Properties with unshaded south, east, or west-facing roof space</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">•</span>
                  <span>Homeowners looking to reduce long-term energy costs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">•</span>
                  <span>Businesses aiming to reduce carbon footprint</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">•</span>
                  <span>Properties with high electricity consumption</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">•</span>
                  <span>Those interested in energy independence</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">•</span>
                  <span>Anyone wanting to protect against future energy price rises</span>
                </li>
              </ul>
              <a href="#contact" className="bg-yellow-500 hover:bg-yellow-400 text-white py-2 px-6 rounded-md inline-block transition-colors">
                Get a Free Assessment
              </a>
            </div>
          </div>
        </div>
      </section>
      
      {/* Benefits Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-yellow-500 to-orange-600 text-white">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Benefits of Solar Energy" 
            subtitle="Discover the many advantages of switching to solar power for your home or business."
            centered={true}
            light={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">Environmental Benefits</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-yellow-300 mr-2">•</span>
                  <span>Zero emissions during electricity generation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-300 mr-2">•</span>
                  <span>Reduces reliance on fossil fuels</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-300 mr-2">•</span>
                  <span>Minimal water usage compared to conventional power</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-300 mr-2">•</span>
                  <span>Helps combat climate change</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">Financial Benefits</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-yellow-300 mr-2">•</span>
                  <span>Significant savings on electricity bills</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-300 mr-2">•</span>
                  <span>Protection against rising energy costs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-300 mr-2">•</span>
                  <span>Potential income from surplus energy</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-300 mr-2">•</span>
                  <span>Increased property value</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">Practical Benefits</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-yellow-300 mr-2">•</span>
                  <span>Low maintenance requirements</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-300 mr-2">•</span>
                  <span>Long system lifespan (25+ years)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-300 mr-2">•</span>
                  <span>Energy independence and security</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-300 mr-2">•</span>
                  <span>Works silently with no disruption</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <p className="text-xl mb-6">
              The average solar installation saves approximately 1.5-2 tonnes of carbon emissions annually, equivalent to planting 30-40 trees each year.
            </p>
            <a 
              href="#contact" 
              className="bg-white text-yellow-500 hover:bg-yellow-100 px-8 py-3 rounded-md font-medium inline-block transition-colors"
            >
              Start Your Solar Journey
            </a>
          </div>
        </div>
      </section>
      
      {/* Installation Process */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle 
                title="Our Solar Installation Process" 
                subtitle="From initial assessment to system commissioning, we ensure a smooth and professional installation experience."
              />
              
              <div className="space-y-6 mt-8">
                <div className="flex">
                  <div className="flex-shrink-0 h-12 w-12 rounded-full bg-yellow-100 flex items-center justify-center mr-4">
                    <span className="text-xl font-bold text-yellow-500">1</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-800 mb-1">Site Assessment</h3>
                    <p className="text-gray-600">
                      We evaluate your property's solar potential, analyzing roof orientation, shading, and structural suitability to design the optimal system.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 h-12 w-12 rounded-full bg-yellow-100 flex items-center justify-center mr-4">
                    <span className="text-xl font-bold text-yellow-500">2</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-800 mb-1">Custom Design</h3>
                    <p className="text-gray-600">
                      Our engineers create a tailored solar system design to maximize energy production based on your specific requirements and budget.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 h-12 w-12 rounded-full bg-yellow-100 flex items-center justify-center mr-4">
                    <span className="text-xl font-bold text-yellow-500">3</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-800 mb-1">Permits and Approval</h3>
                    <p className="text-gray-600">
                      We handle all necessary permits, grid connection applications, and regulatory approvals to ensure your installation complies with all requirements.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 h-12 w-12 rounded-full bg-yellow-100 flex items-center justify-center mr-4">
                    <span className="text-xl font-bold text-yellow-500">4</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-800 mb-1">Professional Installation</h3>
                    <p className="text-gray-600">
                      Our certified technicians install your solar system with minimal disruption, adhering to the highest safety and quality standards.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 h-12 w-12 rounded-full bg-yellow-100 flex items-center justify-center mr-4">
                    <span className="text-xl font-bold text-yellow-500">5</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-800 mb-1">System Activation</h3>
                    <p className="text-gray-600">
                      After final inspections, we commission your system, connect it to the grid, and provide comprehensive training on monitoring and operation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <img 
                src="https://images.pexels.com/photos/3068291/pexels-photo-3068291.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                alt="Solar installation" 
                className="rounded-lg shadow-lg"
              />
              
              <div className="mt-8 bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Our Quality Guarantee</h3>
                <p className="text-gray-600 mb-4">
                  All our solar installations include:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">•</span>
                    <span>10-year workmanship warranty</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">•</span>
                    <span>25-year performance guarantee on panels</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">•</span>
                    <span>Extended warranties on inverters and battery systems</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">•</span>
                    <span>Compliance with all electrical and building codes</span>
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
            title="What Our Solar Customers Say" 
            subtitle="Hear from property owners who have embraced solar energy with Eco Heat and Power."
            centered={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <TestimonialCard 
              quote="The solar system has exceeded our expectations. We're generating more power than anticipated and our electricity bills have dropped by over 80%. The installation was smooth and professional."
              author="Robert & Amy L."
              rating={5}
            />
            <TestimonialCard 
              quote="As a business owner, installing solar was one of the best decisions I've made. Not only are we saving thousands on energy costs, but our customers appreciate our commitment to sustainability."
              author="Jennifer K., Business Owner"
              rating={5}
            />
            <TestimonialCard 
              quote="The battery storage system gives us peace of mind during power outages. The Eco Heat and Power team were helpful throughout the entire process and the system is performing brilliantly."
              author="Mark S."
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
                title="Ready to Switch to Solar?" 
                subtitle="Contact us today to discuss your solar energy options and arrange a free site assessment."
              />
              
              <div className="bg-gray-50 p-6 rounded-lg mt-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">What to Expect</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">•</span>
                    <p>
                      <span className="font-medium">Free Consultation:</span> We'll discuss your energy needs and potential solar solutions.
                    </p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">•</span>
                    <p>
                      <span className="font-medium">Site Assessment:</span> Our solar specialists will visit your property to assess solar potential.
                    </p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">•</span>
                    <p>
                      <span className="font-medium">Detailed Proposal:</span> We'll provide a comprehensive proposal with system specifications and expected benefits.
                    </p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">•</span>
                    <p>
                      <span className="font-medium">Financing Options:</span> Information on solar rebates, incentives, and flexible payment options.
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
            subtitle="Find answers to common questions about solar energy systems."
            centered={true}
          />
          
          <div className="max-w-3xl mx-auto mt-12">
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <button className="w-full text-left p-4 font-medium text-gray-800">
                  How much do solar panels cost?
                </button>
                <div className="p-4 pt-0 text-gray-600 border-t">
                  <p>
                    The cost of solar panels varies depending on system size, panel quality, and installation complexity. A typical residential system (3-6 kW) ranges from $8,000-$18,000 after incentives. Commercial systems have different pricing structures based on scale. We provide detailed quotes after assessing your specific requirements and available incentives.
                  </p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <button className="w-full text-left p-4 font-medium text-gray-800">
                  How much electricity will my solar panels generate?
                </button>
                <div className="p-4 pt-0 text-gray-600 border-t">
                  <p>
                    Electricity generation depends on several factors including system size, panel efficiency, roof orientation, shading, and local climate. In Halifax, a well-designed 5 kW system typically generates 5,500-6,500 kWh annually. During your site assessment, we'll provide detailed estimates based on your specific location and system design.
                  </p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <button className="w-full text-left p-4 font-medium text-gray-800">
                  What happens to my solar energy on cloudy days or at night?
                </button>
                <div className="p-4 pt-0 text-gray-600 border-t">
                  <p>
                    Solar panels still generate electricity on cloudy days, though at reduced capacity (typically 10-25% of their rated output). At night, you'll draw power from the grid unless you have a battery storage system. With grid-connected systems, excess electricity generated during sunny periods is fed into the grid, potentially earning credits that offset nighttime usage through net metering programs.
                  </p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <button className="w-full text-left p-4 font-medium text-gray-800">
                  How long do solar panels last?
                </button>
                <div className="p-4 pt-0 text-gray-600 border-t">
                  <p>
                    Quality solar panels typically have a lifespan of 25-30+ years. Most manufacturers provide a 25-year performance warranty guaranteeing that panels will maintain at least 80% of their initial output after this period. The actual physical lifespan is often longer, with many systems continuing to produce significant electricity for 30-40 years, albeit with gradually decreasing efficiency.
                  </p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <button className="w-full text-left p-4 font-medium text-gray-800">
                  Do solar panels require maintenance?
                </button>
                <div className="p-4 pt-0 text-gray-600 border-t">
                  <p>
                    Solar panels require minimal maintenance. They generally need occasional cleaning to remove dust and debris, especially in dry areas or after long periods without rain. We recommend an annual inspection to ensure optimal performance. Modern systems include monitoring software that alerts you to any performance issues. We offer maintenance packages that include regular inspections and cleaning services.
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

export default SolarPage;