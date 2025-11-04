import React from 'react';
import { SparklesIcon } from './Icons';

export const Header: React.FC = () => (
    <header className="bg-white dark:bg-gray-800 shadow-md sticky top-0 z-10">
        <div className="container mx-auto px-4 lg:px-8 py-4 flex items-center justify-center">
            <SparklesIcon className="w-8 h-8 text-indigo-500 mr-3" />
            <h1 className="text-2xl lg:text-3xl font-bold text-gray-800 dark:text-white">
                AI Pakaian Adat Editor
            </h1>
        </div>
    </header>
);