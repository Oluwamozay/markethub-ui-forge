import React from 'react';

const Logo = () => {
  return (
    <a href="/" className="flex items-center space-x-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-8 w-8 text-primary"
      >
        <path d="M6 9l6 6 6-6" />
      </svg>
      <span className="text-2xl font-bold text-primary">MarketHub</span>
    </a>
  );
};

export default Logo;
