import React from 'react';

interface CarouselDotsProps {
  scrollSnaps: number[];
  selectedIndex: number;
  scrollTo: (index: number) => void;
  className?: string;
}

export function CarouselDots({ scrollSnaps, selectedIndex, scrollTo, className = '' }: CarouselDotsProps) {
  return (
    <div className={`flex justify-center space-x-2 ${className}`}>
      {scrollSnaps.map((_, index) => (
        <button
          key={index}
          onClick={() => scrollTo(index)}
          className={`w-2 h-2 rounded-full transition-all duration-300 ${
            index === selectedIndex 
              ? 'bg-blue-500 w-4' 
              : 'bg-gray-300 dark:bg-gray-600'
          }`}
          aria-label={`Go to slide ${index + 1}`}
        />
      ))}
    </div>
  );
}