import React from 'react';
import { Check, Truck, Calendar, ShieldCheck } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import SectionTitle from '../components/SectionTitle';
import ContactForm from '../components/ContactForm';

const FirewoodPage: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <HeroSection 
        title="Premium Sustainable Firewood" 
        subtitle="Harvested from sustainably managed forests with care for the environment. Our firewood burns cleaner, hotter, and longer."
        backgroundImage="https://images.pexels.com/photos/5816288/pexels-photo-5816288.jpeg?auto=compress&cs=tinysrgb&w=1600"
        buttonText="Order Now"
        buttonLink="/contact"
      />
      
      {/* Introduction Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle 
                title="Premium Quality Firewood" 
                subtitle="At Eco Heat and Power, we take pride in providing the highest quality firewood sourced from sustainably managed forests."
              />
              <p className="text-gray-600 mb-6">
                Our firewood goes through a careful selection and preparation process to ensure you receive only the best product for your heating needs. We understand the importance of reliable heat sources, especially during the colder months, which is why we focus on delivering consistent quality with every order.
              </p>
              <p className="text-gray-600 mb-6">
                All our firewood is properly seasoned to achieve an optimal moisture content of less than 20%, ensuring a clean, efficient burn with maximum heat output and minimal smoke production.
              </p>
              
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Check className="h-6 w-6 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Sustainably harvested from managed forests</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-6 w-6 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Properly seasoned for efficient burning (less than 20% moisture)</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-6 w-6 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Available in various hardwood varieties</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-6 w-6 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Convenient delivery options available</span>
                </li>
              </ul>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/4963357/pexels-photo-4963357.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                alt="Stacked firewood" 
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-10 -left-10 hidden lg:block">
                <div className="bg-green-600 text-white p-4 rounded-lg shadow-lg">
                  <p className="text-xl font-bold">100%</p>
                  <p>Sustainably Sourced</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Wood Types Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Our Firewood Varieties" 
            subtitle="We offer a selection of premium hardwoods, each with unique burning characteristics to suit your specific needs."
            centered={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div 
                className="h-48 bg-cover bg-center" 
                style={{ backgroundImage: `url(https://images.pexels.com/photos/6492397/pexels-photo-6492397.jpeg?auto=compress&cs=tinysrgb&w=1600)` }}
              ></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Oak</h3>
                <p className="text-gray-600 mb-4">
                  Known for its slow burn and high heat output, oak is perfect for long-lasting warmth during cold winter nights.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full mr-2">High Heat</span>
                  </li>
                  <li className="flex items-center">
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full mr-2">Long Burning</span>
                  </li>
                  <li className="flex items-center">
                    <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded-full mr-2">Low Smoke</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div 
                className="h-48 bg-cover bg-center" 
                style={{ backgroundImage: `url(https://images.pexels.com/photos/2525899/pexels-photo-2525899.jpeg?auto=compress&cs=tinysrgb&w=1600)` }}
              ></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Maple</h3>
                <p className="text-gray-600 mb-4">
                  A versatile hardwood that burns cleanly with good heat output and creates a pleasant aroma.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full mr-2">Medium-High Heat</span>
                  </li>
                  <li className="flex items-center">
                    <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded-full mr-2">Pleasant Aroma</span>
                  </li>
                  <li className="flex items-center">
                    <span className="bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded-full mr-2">Easy to Split</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div 
                className="h-48 bg-cover bg-center" 
                style={{ backgroundImage: `url(https://images.pexels.com/photos/1753270/pexels-photo-1753270.jpeg?auto=compress&cs=tinysrgb&w=1600)` }}
              ></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Birch</h3>
                <p className="text-gray-600 mb-4">
                  Quick to light and perfect for kindling, birch has a medium heat output with a clean, bright flame.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full mr-2">Medium Heat</span>
                  </li>
                  <li className="flex items-center">
                    <span className="bg-orange-100 text-orange-800 text-xs font-medium px-2.5 py-0.5 rounded-full mr-2">Quick Starting</span>
                  </li>
                  <li className="flex items-center">
                    <span className="bg-indigo-100 text-indigo-800 text-xs font-medium px-2.5 py-0.5 rounded-full mr-2">Attractive Flame</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Our Firewood Services" 
            subtitle="We offer a range of services to ensure you have the perfect firewood experience, from selection to delivery."
            centered={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center p-6">
              <div className="inline-block p-4 bg-green-100 rounded-full mb-4">
                <Truck className="h-10 w-10 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Convenient Delivery</h3>
              <p className="text-gray-600">
                We offer scheduled deliveries to your home or property, stacked neatly where you specify for ultimate convenience.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="inline-block p-4 bg-green-100 rounded-full mb-4">
                <Calendar className="h-10 w-10 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Seasonal Subscriptions</h3>
              <p className="text-gray-600">
                Never run out of firewood with our seasonal subscription service, delivering fresh loads on your schedule.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="inline-block p-4 bg-green-100 rounded-full mb-4">
                <ShieldCheck className="h-10 w-10 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Quality Guarantee</h3>
              <p className="text-gray-600">
                If you're not completely satisfied with your firewood quality, we'll replace it at no additional cost.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Pricing Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Firewood Pricing" 
            subtitle="We offer competitive pricing with options to suit your needs, from single orders to bulk purchases."
            centered={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
              <div className="p-6 border-b border-gray-200">
                <h3 className="text-2xl font-bold text-gray-800 mb-1">Single Bundle</h3>
                <p className="text-gray-600">Perfect for occasional use</p>
              </div>
              <div className="p-6">
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-800">$15</span>
                  <span className="text-gray-600">/bundle</span>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Premium hardwood mix</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Properly seasoned</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Pick-up available</span>
                  </li>
                </ul>
                <button className="w-full bg-green-600 hover:bg-green-500 text-white py-2 px-4 rounded-md transition-colors">
                  Order Now
                </button>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-xl overflow-hidden border-2 border-green-500 transform md:-translate-y-4">
              <div className="bg-green-500 text-white text-center py-2">
                <span className="text-sm font-medium">Most Popular</span>
              </div>
              <div className="p-6 border-b border-gray-200">
                <h3 className="text-2xl font-bold text-gray-800 mb-1">Half Cord</h3>
                <p className="text-gray-600">Ideal for regular home use</p>
              </div>
              <div className="p-6">
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-800">$175</span>
                  <span className="text-gray-600">/half cord</span>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Choose your wood type</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Free local delivery</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Stacking available (+$25)</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Scheduled delivery date</span>
                  </li>
                </ul>
                <button className="w-full bg-green-600 hover:bg-green-500 text-white py-2 px-4 rounded-md transition-colors">
                  Order Now
                </button>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
              <div className="p-6 border-b border-gray-200">
                <h3 className="text-2xl font-bold text-gray-800 mb-1">Full Cord</h3>
                <p className="text-gray-600">Best value for high volume users</p>
              </div>
              <div className="p-6">
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-800">$325</span>
                  <span className="text-gray-600">/cord</span>
                </div>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Premium choice of wood</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Free delivery within 30 miles</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Complimentary stacking</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>10% discount on next order</span>
                  </li>
                </ul>
                <button className="w-full bg-green-600 hover:bg-green-500 text-white py-2 px-4 rounded-md transition-colors">
                  Order Now
                </button>
              </div>
            </div>
          </div>
          
          <p className="text-center text-gray-600 mt-8">
            Need a custom order or have specific requirements? <a href="#contact" className="text-green-600 hover:underline">Contact us</a> for personalized pricing.
          </p>
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <SectionTitle 
                title="Order Your Firewood Today" 
                subtitle="Fill out the form to place an order or inquire about our firewood products and services. We'll get back to you promptly."
              />
              
              <div className="bg-gray-50 p-6 rounded-lg mt-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Why Our Customers Love Our Firewood</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Check className="h-6 w-6 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <p>
                      <span className="font-medium">Premium Quality:</span> Properly seasoned for maximum heat output and minimal smoke.
                    </p>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-6 w-6 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <p>
                      <span className="font-medium">Convenience:</span> Reliable delivery and optional stacking service.
                    </p>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-6 w-6 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <p>
                      <span className="font-medium">Sustainability:</span> Responsibly harvested from managed forests, minimizing environmental impact.
                    </p>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-6 w-6 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <p>
                      <span className="font-medium">Local Business:</span> Supporting the local economy and reducing transportation emissions.
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
            subtitle="Find answers to common questions about our firewood products and services."
            centered={true}
          />
          
          <div className="max-w-3xl mx-auto mt-12">
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <button className="w-full text-left p-4 font-medium text-gray-800">
                  What types of wood do you offer?
                </button>
                <div className="p-4 pt-0 text-gray-600 border-t">
                  <p>
                    We offer a variety of hardwoods including oak, maple, birch, and mixed hardwood bundles. Each type has different burning characteristics to suit various needs, from quick-starting fires to long-lasting heat.
                  </p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <button className="w-full text-left p-4 font-medium text-gray-800">
                  How do you ensure your firewood is sustainably sourced?
                </button>
                <div className="p-4 pt-0 text-gray-600 border-t">
                  <p>
                    We work exclusively with managed forests that practice sustainable harvesting methods. This includes selective cutting, replanting programs, and forest management practices that maintain biodiversity and forest health.
                  </p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <button className="w-full text-left p-4 font-medium text-gray-800">
                  How much firewood is in a cord?
                </button>
                <div className="p-4 pt-0 text-gray-600 border-t">
                  <p>
                    A full cord of firewood is a stacked pile measuring 4 feet high x 4 feet wide x 8 feet long, or 128 cubic feet. A face cord or rick is 4 feet high x 8 feet long but only as deep as the length of the individual pieces (typically 16-18 inches).
                  </p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <button className="w-full text-left p-4 font-medium text-gray-800">
                  Do you deliver and stack the firewood?
                </button>
                <div className="p-4 pt-0 text-gray-600 border-t">
                  <p>
                    Yes, we offer delivery services to locations within our service area. Stacking is available for an additional fee with half and full cord orders, and is included complimentary with full cord orders.
                  </p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <button className="w-full text-left p-4 font-medium text-gray-800">
                  How far in advance should I order my firewood?
                </button>
                <div className="p-4 pt-0 text-gray-600 border-t">
                  <p>
                    We recommend ordering at least 2-3 weeks in advance during peak season (fall and winter) to ensure availability and your preferred delivery date. During off-peak seasons, we can typically accommodate orders with shorter notice.
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

export default FirewoodPage;