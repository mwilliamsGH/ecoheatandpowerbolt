import React from 'react';
import { Link } from 'react-router-dom';
import {
  Flame,
  ThermometerSun,
  SunIcon,
  Leaf,
  Recycle,
  DollarSign,
} from 'lucide-react';
import HeroSection from '../components/HeroSection';
import ProductCard from '../components/ProductCard';
import FeatureCard from '../components/FeatureCard';
import TestimonialCard from '../components/TestimonialCard';
import SectionTitle from '../components/SectionTitle';

const HomePage: React.FC = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <HeroSection
        title="Sustainable Energy Solutions for a Greener Tomorrow"
        subtitle="Eco Heat and Power provides environmentally friendly heating solutions with firewood, biomass boilers, and solar panels to reduce your carbon footprint and energy bills."
        backgroundImage="/EcoHeatAndPowerHero.jpg"
        buttonText="Explore Solutions"
        buttonLink="/about"
      />

      {/* Products Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Our Sustainable Solutions"
            subtitle="Discover our range of eco-friendly products designed to provide efficient heating while reducing your carbon footprint."
            centered={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ProductCard
              title="Premium Firewood"
              description="Sustainably sourced, perfectly seasoned firewood that burns cleaner and hotter for optimal heating efficiency."
              image="https://images.pexels.com/photos/122588/pexels-photo-122588.jpeg?auto=compress&cs=tinysrgb&w=1600"
              link="/firewood"
            />
            <ProductCard
              title="Biomass Boilers"
              description="State-of-the-art biomass heating systems that use organic materials to produce heat with minimal environmental impact."
              image="/eta_boiler1.png"
              link="/biomass"
            />
            <ProductCard
              title="Solar Panel Systems"
              description="Harness the power of the sun with our high-efficiency solar panels for clean, renewable energy year-round."
              image="https://images.pexels.com/photos/159397/solar-panel-array-power-sun-electricity-159397.jpeg?auto=compress&cs=tinysrgb&w=1600"
              link="/solar"
            />
          </div>

          <div className="text-center mt-12">
            <Link
              to="/contact"
              className="bg-green-600 hover:bg-green-500 text-white px-6 py-3 rounded-md inline-block transition-colors"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Why Choose Renewable Energy?"
            subtitle="Investing in renewable energy solutions provides numerous benefits for your home, wallet, and the environment."
            centered={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={Leaf}
              title="Environmentally Friendly"
              description="Reduce your carbon footprint and help combat climate change with clean, renewable energy sources."
            />
            <FeatureCard
              icon={DollarSign}
              title="Cost Effective"
              description="Save money on your energy bills with efficient systems that pay for themselves over time."
              color="text-yellow-600"
            />
            <FeatureCard
              icon={Recycle}
              title="Sustainable Resource"
              description="Our products use renewable resources that won't deplete over time, ensuring long-term sustainability."
              color="text-blue-600"
            />
            <FeatureCard
              icon={ThermometerSun}
              title="Year-Round Comfort"
              description="Maintain optimal comfort in your home throughout all seasons with reliable heating solutions."
              color="text-orange-600"
            />
            <FeatureCard
              icon={Flame}
              title="Efficient Heating"
              description="Our systems provide more heat with less fuel, increasing efficiency and reducing waste."
              color="text-red-600"
            />
            <FeatureCard
              icon={SunIcon}
              title="Energy Independence"
              description="Reduce reliance on utility companies and fossil fuels by generating your own renewable energy."
              color="text-yellow-500"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-green-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to switch to renewable energy?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
            Join thousands of satisfied customers who have reduced their carbon
            footprint and energy bills with our sustainable solutions.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/contact"
              className="bg-white text-green-800 hover:bg-gray-100 px-8 py-3 rounded-md font-medium inline-block transition-colors"
            >
              Request a Quote
            </Link>
            <Link
              to="/about"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-green-800 px-8 py-3 rounded-md font-medium inline-block transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="What Our Customers Say"
            subtitle="Don't just take our word for it. Here's what our customers have to say about their experience with Eco Heat and Power."
            centered={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard
              quote="The firewood from Eco Heat and Power burns cleaner and longer than any I've used before. Their delivery was prompt and the staff extremely helpful."
              author="Sarah J."
              rating={5}
            />
            <TestimonialCard
              quote="We had a biomass boiler installed last winter and have seen a 40% reduction in our heating costs. The system is efficient and the installation team was professional."
              author="Michael T."
              rating={5}
            />
            <TestimonialCard
              quote="Our solar panel system has transformed how we power our home. The team at Eco Heat and Power guided us through every step of the process. Highly recommended!"
              author="Lisa and David K."
              rating={4}
            />
          </div>
        </div>
      </section>

      {/* FAQ Section Teaser */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-gray-50 rounded-xl p-8 md:p-12 max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Have Questions?
            </h2>
            <p className="text-gray-600 mb-6">
              Check out our frequently asked questions to learn more about our
              products and services.
            </p>
            <Link
              to="/contact"
              className="bg-green-600 hover:bg-green-500 text-white px-6 py-3 rounded-md inline-block transition-colors"
            >
              View FAQ
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
