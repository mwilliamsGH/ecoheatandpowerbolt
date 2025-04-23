import React from 'react';
import { ArrowRight } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  description: string;
  features: string[];
  image: string;
  powerRange: string;
  efficiency: string;
  fuelType: string;
}

interface ProductGridProps {
  products: Product[];
}

const ProductGrid: React.FC<ProductGridProps> = ({ products }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {products.map((product) => (
        <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="relative">
            <img 
              src={product.image} 
              alt={product.name}
              className="w-full h-64 object-cover"
            />
            <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm">
              {product.efficiency} Efficient
            </div>
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-2">{product.name}</h3>
            <p className="text-gray-600 mb-4">{product.description}</p>
            
            <div className="space-y-3 mb-6">
              <div className="flex items-center text-sm">
                <span className="font-medium text-gray-700 w-24">Power Range:</span>
                <span className="text-gray-600">{product.powerRange}</span>
              </div>
              <div className="flex items-center text-sm">
                <span className="font-medium text-gray-700 w-24">Fuel Type:</span>
                <span className="text-gray-600">{product.fuelType}</span>
              </div>
            </div>
            
            <div className="space-y-2 mb-6">
              {product.features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span className="text-sm text-gray-600">{feature}</span>
                </div>
              ))}
            </div>
            
            <button className="w-full bg-green-600 hover:bg-green-500 text-white py-2 px-4 rounded-md transition-colors flex items-center justify-center">
              Learn More <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;