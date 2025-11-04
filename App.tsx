import React, { useState, useCallback } from 'react';
import { Header } from './components/Header';
import { ImageUpload } from './components/ImageUpload';
import { ImageDisplay } from './components/ImageDisplay';
import { AttireSelector } from './components/AttireSelector';
import { fileToBase64 } from './utils/fileUtils';
import { editImageWithPrompt } from './services/geminiService';
import { attireOptions, Attire } from './data/attire';
import { UploadIcon, SparklesIcon, ClothingIcon } from './components/Icons';

const App: React.FC = () => {
    const [originalImage, setOriginalImage] = useState<{ file: File | null; url: string | null }>({ file: null, url: null });
    const [selectedAttire, setSelectedAttire] = useState<Attire | null>(null);
    const [editedImage, setEditedImage] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const handleImageSelect = useCallback(async (file: File) => {
        try {
            const imageUrl = await fileToBase64(file);
            setOriginalImage({ file, url: imageUrl });
            setEditedImage(null);
            setError(null);
        } catch (err) {
            setError('Tidak dapat memproses file yang dipilih.');
            console.error(err);
        }
    }, []);

    const handleGenerate = useCallback(async () => {
        if (!originalImage.file) {
            setError('Silakan unggah foto Anda.');
            return;
        }
        if (!selectedAttire) {
            setError('Silakan pilih salah satu gaya pakaian adat.');
            return;
        }

        setIsLoading(true);
        setError(null);
        setEditedImage(null);

        try {
            const originalDataUrl = await fileToBase64(originalImage.file);
            const originalBase64Data = originalDataUrl.split(',')[1];
            const originalMimeType = originalImage.file.type;

            if (!originalBase64Data) {
                throw new Error("Format file gambar tidak valid.");
            }
            
            const newImageBase64 = await editImageWithPrompt(
                { base64Data: originalBase64Data, mimeType: originalMimeType },
                selectedAttire.prompt
            );
            setEditedImage(`data:image/jpeg;base64,${newImageBase64}`);
        } catch (err) {
            const errorMessage = err instanceof Error ? err.message : 'Terjadi kesalahan yang tidak diketahui.';
            setError(`Gagal membuat gambar: ${errorMessage}`);
            console.error(err);
        } finally {
            setIsLoading(false);
        }
    }, [originalImage.file, selectedAttire]);
    
    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex flex-col font-sans">
            <Header />
            <main className="flex-grow container mx-auto p-4 lg:p-8 flex flex-col">
                <div className="flex-grow grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                    {/* Controls Column */}
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg flex flex-col gap-6 sticky top-8">
                        <h2 className="text-2xl font-bold text-gray-800 dark:text-white flex items-center gap-3">
                            <UploadIcon className="w-7 h-7" />
                            <span>1. Unggah Foto Anda</span>
                        </h2>
                        <ImageUpload onImageSelect={handleImageSelect} currentImageUrl={originalImage.url} />
                        
                        {originalImage.url && (
                            <>
                                <div className="border-t border-gray-200 dark:border-gray-700"></div>
                                <h2 className="text-2xl font-bold text-gray-800 dark:text-white flex items-center gap-3">
                                    <ClothingIcon className="w-7 h-7" />
                                    <span>2. Pilih Pakaian Adat</span>
                                </h2>
                                <AttireSelector 
                                    options={attireOptions}
                                    selectedOption={selectedAttire}
                                    onSelect={setSelectedAttire}
                                />
                                <button
                                    onClick={handleGenerate}
                                    disabled={isLoading || !selectedAttire}
                                    className="w-full flex items-center justify-center gap-3 bg-indigo-600 text-white font-bold py-4 px-6 rounded-lg hover:bg-indigo-700 disabled:bg-indigo-400 disabled:cursor-not-allowed transition-transform transform hover:scale-105 duration-300 shadow-lg"
                                >
                                    {isLoading ? (
                                        <>
                                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            Membuat Gambar...
                                        </>
                                    ) : (
                                        <>
                                            <SparklesIcon className="w-6 h-6" />
                                            Buat Gambar
                                        </>
                                    )}
                                </button>
                                {error && <p className="text-red-500 mt-2 text-center">{error}</p>}
                            </>
                        )}
                    </div>

                    {/* Image Display Column */}
                    <div className="flex-grow">
                        <ImageDisplay
                            originalUrl={originalImage.url}
                            editedUrl={editedImage}
                            isLoading={isLoading}
                        />
                    </div>
                </div>
            </main>
        </div>
    );
};

export default App;