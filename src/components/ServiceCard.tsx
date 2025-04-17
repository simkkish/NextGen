import React from 'react';

interface ServiceCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
}

export function ServiceCard({ icon, title, description }: ServiceCardProps) {
    return (
        <div className="p-6 bg-gray-800 rounded-xl hover:bg-gray-700 transition-all duration-300">
            <div className="mb-4">{icon}</div>
            <h3 className="text-xl font-semibold mb-3">{title}</h3>
            <p className="text-gray-400">{description}</p>
        </div>
    );
}