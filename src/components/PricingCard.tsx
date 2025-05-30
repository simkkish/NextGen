import React from 'react';
import { Check } from 'lucide-react';

interface PricingCardProps {
  title: string;
  description: string;
  features: string[];
  isPopular?: boolean;
}

export function PricingCard({ title, description, features, isPopular }: PricingCardProps) {
  return (
      <div className={`
      p-6 rounded-xl border ${isPopular
          ? 'border-blue-500 bg-gray-800'
          : 'border-gray-700 bg-gray-900'
      } relative
    `}>
        {isPopular && (
            <span className="absolute -top-3 right-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm">
          Most Popular
        </span>
        )}
        <h3 className="text-xl font-semibold mb-4">{title}</h3>
        <p className="text-gray-400 mb-6">{description}</p>
        <ul className="space-y-3 mb-6">
          {features.map((feature, index) => (
              <li key={index} className="flex items-center text-gray-300">
                <Check className="w-5 h-5 text-blue-400 mr-2" />
                {feature}
              </li>
          ))}
        </ul>
        <a
            href="#contact"
            className={`
          w-full py-3 rounded-lg font-semibold transition-all duration-300 text-center block
          ${isPopular
                ? 'bg-blue-500 hover:bg-blue-600 text-white'
                : 'bg-gray-800 hover:bg-gray-700 text-white border border-gray-700'
            }
        `}
        >
          Contact Us
        </a>
      </div>
  );
}