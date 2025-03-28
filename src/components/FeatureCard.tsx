import React from 'react';
import { CheckCircle } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  description: string;
}

export function FeatureCard({ title, description }: FeatureCardProps) {
  return (
    <div className="p-6 bg-gray-900 rounded-xl border border-gray-700">
      <CheckCircle className="w-8 h-8 text-blue-400 mb-4" />
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}