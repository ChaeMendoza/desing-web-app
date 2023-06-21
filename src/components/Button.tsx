import React from 'react';

interface ButtonProps {
  onClick: () => void;
  label: string;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ onClick, label, className }) => {
  return (
    <button
      className={`bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded ${className}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
