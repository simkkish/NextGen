import React from 'react';

interface SocialLinkProps {
  icon: React.ReactNode;
  href: string;
}

export function SocialLink({ icon, href }: SocialLinkProps) {
  return (
    <a
      href={href}
      className="text-gray-400 hover:text-white transition-colors duration-300"
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon}
    </a>
  );
}