import React from 'react';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  author: string;
  rating: number;
  image?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, author, rating, image }) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`h-5 w-5 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
          />
        ))}
      </div>
      <blockquote className="text-gray-600 italic mb-4">"{quote}"</blockquote>
      <div className="flex items-center">
        {image && (
          <div className="mr-3 h-10 w-10 rounded-full overflow-hidden">
            <img src={image} alt={author} className="h-full w-full object-cover" />
          </div>
        )}
        <div className="font-medium text-gray-800">{author}</div>
      </div>
    </div>
  );
};

export default TestimonialCard;