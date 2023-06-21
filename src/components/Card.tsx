import React from 'react';

interface CardProps {
  title: string;
  imageSrc: string;
  description: string;
  className?: string;
}

const Card: React.FC<CardProps> = ({ title, imageSrc, description, className }) => {
  return (
    <div className={`bg-white rounded-lg shadow-md p-4 ${className}`}>
      <img src={imageSrc} alt={title} className="w-full h-auto mb-4 rounded-lg" />
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Card;
