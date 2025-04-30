import React from 'react';

interface CarouselArrowsProps {
  onPrevClick: () => void;
  onNextClick: () => void;
  className?: string;
}

export function CarouselArrows({ onPrevClick, onNextClick, className = '' }: CarouselArrowsProps) {
  return (
    <div className={`flex justify-center space-x-4 ${className}`}>
      <button
        onClick={onPrevClick}
        className="bg-white dark:bg-gray-800 p-2 rounded-full shadow-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
        aria-label="Previous slide"
      >
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
          className="text-gray-700 dark:text-gray-300"
        >
          <path d="m15 18-6-6 6-6"/>
        </svg>
      </button>
      
      <button
        onClick={onNextClick}
        className="bg-white dark:bg-gray-800 p-2 rounded-full shadow-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
        aria-label="Next slide"
      >
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
          className="text-gray-700 dark:text-gray-300"
        >
          <path d="m9 18 6-6-6-6"/>
        </svg>
      </button>
    </div>
  );
}