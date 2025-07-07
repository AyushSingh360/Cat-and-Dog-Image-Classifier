import React, { useState, useRef, useCallback } from 'react';
import { Upload, X, Image as ImageIcon } from 'lucide-react';
import { classifyImage } from '../utils/modelUtils';
import { PredictionResult } from '../types';

interface ImageUploaderProps {
  onPrediction: (result: PredictionResult, imageUrl: string) => void;
  onLoadingChange: (loading: boolean) => void;
  onReset: () => void;
}

const ImageUploader: React.FC<ImageUploaderProps> = ({
  onPrediction,
  onLoadingChange,
  onReset
}) => {
  const [dragOver, setDragOver] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = useCallback(async (file: File) => {
    if (!file.type.startsWith('image/')) {
      alert('Please select a valid image file');
      return;
    }

    const imageUrl = URL.createObjectURL(file);
    setSelectedImage(imageUrl);
    
    onLoadingChange(true);
    
    try {
      const result = await classifyImage(file);
      onPrediction(result, imageUrl);
    } catch (error) {
      console.error('Classification error:', error);
      alert('Error classifying image. Please try again.');
    } finally {
      onLoadingChange(false);
    }
  }, [onPrediction, onLoadingChange]);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    
    const files = Array.from(e.dataTransfer.files);
    if (files.length > 0) {
      handleFileSelect(files[0]);
    }
  }, [handleFileSelect]);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
  }, []);

  const handleFileInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      handleFileSelect(files[0]);
    }
  }, [handleFileSelect]);

  const handleReset = useCallback(() => {
    setSelectedImage(null);
    onReset();
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  }, [onReset]);

  return (
    <div className="space-y-4">
      {!selectedImage ? (
        <div
          className={`upload-area rounded-xl p-8 text-center cursor-pointer transition-all duration-300 ${
            dragOver ? 'dragover' : ''
          }`}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onClick={() => fileInputRef.current?.click()}
        >
          <div className="flex flex-col items-center space-y-4">
            <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center transition-colors duration-300">
              <Upload className="w-8 h-8 text-blue-500 dark:text-blue-400" />
            </div>
            <div>
              <p className="text-lg font-medium text-gray-700 dark:text-gray-200 mb-2 transition-colors duration-300">
                Drop your image here or click to browse
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400 transition-colors duration-300">
                Supports JPG, PNG, GIF up to 10MB
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="relative">
          <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-4 transition-colors duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                <ImageIcon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-200 transition-colors duration-300">Selected Image</span>
              </div>
              <button
                onClick={handleReset}
                className="p-1 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-full transition-colors duration-200"
              >
                <X className="w-4 h-4 text-gray-500 dark:text-gray-400" />
              </button>
            </div>
            <img
              src={selectedImage}
              alt="Selected"
              className="w-full max-w-md mx-auto rounded-lg shadow-md"
            />
          </div>
        </div>
      )}

      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileInputChange}
        className="hidden"
      />
    </div>
  );
};

export default ImageUploader;