import React from 'react';

interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
}

export function TestimonialCard({ name, role, content }: TestimonialCardProps) {
  const getInitials = (name: string) => {
    return name
        .split(' ')
        .map(part => part[0])
        .join('')
        .toUpperCase();
  };

  return (
      <div className="p-6 bg-gray-800 rounded-xl">
        <div className="flex items-center mb-6">
          <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-lg font-semibold mr-4">
            {getInitials(name)}
          </div>
          <div>
            <h4 className="font-semibold">{name}</h4>
            <p className="text-gray-400 text-sm">{role}</p>
          </div>
        </div>
        <p className="text-gray-300">{content}</p>
      </div>
  );
}