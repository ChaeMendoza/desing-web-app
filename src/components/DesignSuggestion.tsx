import React from 'react';

interface DesignSuggestionProps {
  suggestion: string;
}

const DesignSuggestion: React.FC<DesignSuggestionProps> = ({ suggestion }) => {
  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-md">
      <h2 className="text-center text-gray-800 text-lg font-semibold mb-2">Design Suggestion</h2>
      <p className="text-center text-gray-800">{suggestion}</p>
    </div>
  );
};

export default DesignSuggestion;
