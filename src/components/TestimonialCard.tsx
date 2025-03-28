import React from 'react';

interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
  image: string;
}

export function TestimonialCard({ name, role, content, image }: TestimonialCardProps) {
  return (
    <div className="p-6 bg-gray-800 rounded-xl">
      <div className="flex items-center mb-4">
        <img
          src={image}
          alt={name}
          className="w-12 h-12 rounded-full object-cover mr-4"
        />
        <div>
          <h4 className="font-semibold">{name}</h4>
          <p className="text-gray-400 text-sm">{role}</p>
        </div>
      </div>
      <p className="text-gray-300">{content}</p>
    </div>
  );
}