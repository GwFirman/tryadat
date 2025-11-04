
import React, { useCallback, useRef } from 'react';
import { UploadIcon } from './Icons';

interface ImageUploadProps {
    onImageSelect: (file: File) => void;
    currentImageUrl: string | null;
}

export const ImageUpload: React.FC<ImageUploadProps> = ({ onImageSelect, currentImageUrl }) => {
    const inputRef = useRef<HTMLInputElement>(null);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            onImageSelect(file);
        }
    };

    const handleDrop = useCallback((event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        event.stopPropagation();
        const file = event.dataTransfer.files?.[0];
        if (file) {
            onImageSelect(file);
        }
    }, [onImageSelect]);

    const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        event.stopPropagation();
    };

    const handleClick = () => {
        inputRef.current?.click();
    };

    return (
        <div 
            onClick={handleClick} 
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            className="w-full h-48 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg flex justify-center items-center text-center cursor-pointer hover:border-indigo-500 dark:hover:border-indigo-500 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors duration-300 relative overflow-hidden"
        >
            <input
                ref={inputRef}
                type="file"
                accept="image/png, image/jpeg, image/webp"
                onChange={handleFileChange}
                className="hidden"
            />
            {currentImageUrl ? (
                <img src={currentImageUrl} alt="Uploaded preview" className="absolute inset-0 w-full h-full object-cover" />
            ) : (
                <div className="flex flex-col items-center text-gray-500 dark:text-gray-400">
                    <UploadIcon className="w-12 h-12 mb-2" />
                    <p className="font-semibold">Click to upload or drag & drop</p>
                    <p className="text-sm">PNG, JPG, or WEBP</p>
                </div>
            )}
        </div>
    );
};
