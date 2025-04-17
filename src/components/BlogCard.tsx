import React from 'react';
import { Calendar, Clock, ArrowRight, BookOpen, Share2 } from 'lucide-react';

interface BlogCardProps {
  title: string;
  excerpt: string;
  image: string;
  date: string;
  readTime: string;
  category: string;
  author: {
    name: string;
    avatar: string;
    role: string;
  };
}

export function BlogCard({ title, excerpt, image, date, readTime, category, author }: BlogCardProps) {
  return (
      <div className="bg-gray-800 rounded-xl overflow-hidden hover:transform hover:scale-[1.02] transition-all duration-300 flex flex-col">
        <div className="relative">
          <img
              src={image}
              alt={title}
              className="w-full h-48 object-cover"
          />
          <span className="absolute top-4 left-4 bg-blue-500 text-white text-sm px-3 py-1 rounded-full">
          {category}
        </span>
        </div>
        <div className="p-6 flex-1 flex flex-col">
          <div className="flex items-center space-x-4 mb-4">
            <img
                src={author.avatar}
                alt={author.name}
                className="w-10 h-10 rounded-full border-2 border-blue-500"
            />
            <div>
              <p className="text-sm font-medium">{author.name}</p>
              <p className="text-sm text-gray-400">{author.role}</p>
            </div>
          </div>
          <h3 className="text-xl font-semibold mb-2 hover:text-blue-400 transition-colors">
            {title}
          </h3>
          <p className="text-gray-400 mb-4 flex-1">{excerpt}</p>
          <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-700">
            <div className="flex items-center text-gray-400 text-sm">
              <Calendar className="w-4 h-4 mr-1" />
              {date}
              <Clock className="w-4 h-4 ml-3 mr-1" />
              {readTime}
            </div>
            <div className="flex space-x-3">
              <button className="text-gray-400 hover:text-white transition-colors" title="Share">
                <Share2 className="w-5 h-5" />
              </button>
              <button className="text-gray-400 hover:text-white transition-colors" title="Save">
                <BookOpen className="w-5 h-5" />
              </button>
            </div>
          </div>
          <button className="mt-4 text-blue-400 hover:text-blue-300 flex items-center font-medium">
            Read Article
            <ArrowRight className="w-4 h-4 ml-2" />
          </button>
        </div>
      </div>
  );
}