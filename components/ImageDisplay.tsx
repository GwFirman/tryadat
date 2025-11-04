
import React from 'react';
import { Loader } from './Loader';
import { PhotoIcon } from './Icons';

interface ImageDisplayProps {
    originalUrl: string | null;
    editedUrl: string | null;
    isLoading: boolean;
}

const ImagePlaceholder: React.FC<{ title: string }> = ({ title }) => (
    <div className="w-full aspect-square bg-white dark:bg-gray-800 rounded-2xl shadow-lg flex flex-col justify-center items-center p-4">
        <PhotoIcon className="w-24 h-24 text-gray-300 dark:text-gray-600 mb-4" />
        <h3 className="text-xl font-semibold text-gray-500 dark:text-gray-400">{title}</h3>
    </div>
);

export const ImageDisplay: React.FC<ImageDisplayProps> = ({ originalUrl, editedUrl, isLoading }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
                {originalUrl ? (
                     <div className="w-full aspect-square bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden">
                        <img src={originalUrl} alt="Original" className="w-full h-full object-contain" />
                        <h3 className="text-center text-lg font-semibold py-2 bg-white dark:bg-gray-800">Original</h3>
                    </div>
                ) : (
                    <ImagePlaceholder title="Original Image" />
                )}
            </div>

            <div>
                {isLoading ? (
                    <div className="w-full aspect-square bg-white dark:bg-gray-800 rounded-2xl shadow-lg flex flex-col justify-center items-center p-4">
                        <Loader />
                        <h3 className="text-xl font-semibold text-gray-500 dark:text-gray-400 mt-6">Generating...</h3>
                    </div>
                ) : editedUrl ? (
                    <div className="w-full aspect-square bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden">
                        <img src={editedUrl} alt="Edited" className="w-full h-full object-contain" />
                        <h3 className="text-center text-lg font-semibold py-2 bg-white dark:bg-gray-800">Edited</h3>
                    </div>
                ) : (
                    <ImagePlaceholder title="Edited Image" />
                )}
            </div>
        </div>
    );
};
