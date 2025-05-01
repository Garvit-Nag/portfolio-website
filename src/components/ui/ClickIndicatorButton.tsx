import { MousePointer } from 'lucide-react';

interface ClickIndicatorButtonProps {
  onClick: () => void;
  position?: 'top-right' | 'bottom-right';
  label?: string;
}

export default function ClickIndicatorButton({
  onClick,
  position = 'top-right',
  label = "More Details"
}: ClickIndicatorButtonProps) {
  const positions = {
    'top-right': 'top-3 right-3',
    'bottom-right': 'bottom-3 right-3'
  };

  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
      className={`absolute ${positions[position]} p-2 bg-[#1a1a2e]/80 hover:bg-[#252542] rounded-full 
      flex items-center justify-center transition-all duration-200 z-10 border border-gray-800/50 
      shadow-sm group-hover:scale-110 hover:scale-125`}
      aria-label={label}
    >
      <span className="text-blue-400 group-hover:text-blue-300 hover:text-blue-200">
        <MousePointer size={16} />
      </span>
      <span className="absolute opacity-0 group-hover:opacity-100 right-full mr-2 
      bg-[#0a0a1a] px-2 py-1 rounded text-xs text-gray-300 whitespace-nowrap 
      transition-opacity duration-200">
        {label}
      </span>
    </button>
  );
}