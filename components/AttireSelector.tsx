import React from 'react';
import { Attire } from '../data/attire';

interface AttireSelectorProps {
    options: Attire[];
    selectedOption: Attire | null;
    onSelect: (option: Attire) => void;
}

export const AttireSelector: React.FC<AttireSelectorProps> = ({ options, selectedOption, onSelect }) => {
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {options.map((option) => (
                <button
                    key={option.id}
                    onClick={() => onSelect(option)}
                    className={`p-3 rounded-lg border-2 text-left transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500
                        ${selectedOption?.id === option.id 
                            ? 'bg-indigo-600 border-indigo-500 text-white shadow-lg' 
                            : 'bg-gray-100 dark:bg-gray-700 border-gray-300 dark:border-gray-600 hover:border-indigo-400 dark:hover:border-indigo-500'
                        }`}
                >
                    <h4 className="font-bold text-sm">{option.name}</h4>
                    <p className="text-xs opacity-80 mt-1">{option.description}</p>
                </button>
            ))}
        </div>
    );
};
