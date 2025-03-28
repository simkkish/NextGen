import React from 'react';
import { ArrowRight } from 'lucide-react';

interface CaseStudyCardProps {
  title: string;
  client: string;
  description: string;
  image: string;
  results: string[];
}

export function CaseStudyCard({ title, client, description, image, results }: CaseStudyCardProps) {
  return (
    <div className="bg-gray-800 rounded-xl overflow-hidden hover:transform hover:scale-[1.02] transition-all duration-300">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-blue-400 mb-3">{client}</p>
        <p className="text-gray-400 mb-4">{description}</p>
        <div className="space-y-2 mb-4">
          {results.map((result, index) => (
            <div key={index} className="flex items-center text-gray-300">
              <ArrowRight className="w-4 h-4 mr-2 text-blue-400" />
              <span>{result}</span>
            </div>
          ))}
        </div>
        <button className="text-blue-400 hover:text-blue-300 flex items-center">
          Read Case Study
          <ArrowRight className="w-4 h-4 ml-2" />
        </button>
      </div>
    </div>
  );
}