import React, { useState, useRef, useCallback } from 'react';
import { Upload, Camera, Brain, Github, ExternalLink } from 'lucide-react';
import ImageUploader from './components/ImageUploader';
import PredictionResult from './components/PredictionResult';
import ModelInfo from './components/ModelInfo';
import Header from './components/Header';
import Footer from './components/Footer';
import { PredictionResult as PredictionType } from './types';

function App() {
  const [prediction, setPrediction] = useState<PredictionType | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);

  const handlePrediction = useCallback((result: PredictionType, imageUrl: string) => {
    setPrediction(result);
    setUploadedImage(imageUrl);
  }, []);

  const handleLoadingChange = useCallback((loading: boolean) => {
    setIsLoading(loading);
  }, []);

  const resetPrediction = useCallback(() => {
    setPrediction(null);
    setUploadedImage(null);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-6">
              <Brain className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Cat & Dog Classifier
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Upload an image and let our AI-powered model determine whether it's a cat or a dog. 
              Built with TensorFlow.js for real-time predictions in your browser.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Upload Section */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl card-shadow p-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                  <Upload className="w-6 h-6 mr-3 text-blue-500" />
                  Upload Image
                </h2>
                
                <ImageUploader
                  onPrediction={handlePrediction}
                  onLoadingChange={handleLoadingChange}
                  onReset={resetPrediction}
                />

                {/* Prediction Result */}
                {(prediction || isLoading) && (
                  <div className="mt-8">
                    <PredictionResult
                      prediction={prediction}
                      isLoading={isLoading}
                      imageUrl={uploadedImage}
                    />
                  </div>
                )}
              </div>
            </div>

            {/* Model Info Sidebar */}
            <div className="lg:col-span-1">
              <ModelInfo />
            </div>
          </div>

          {/* Features Section */}
          <div className="mt-16 grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4">
                <Camera className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Real-time Processing</h3>
              <p className="text-gray-600">
                Instant predictions powered by TensorFlow.js running directly in your browser
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-100 rounded-lg mb-4">
                <Brain className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Deep Learning</h3>
              <p className="text-gray-600">
                Convolutional Neural Network trained on thousands of cat and dog images
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-lg mb-4">
                <ExternalLink className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Privacy First</h3>
              <p className="text-gray-600">
                All processing happens locally - your images never leave your device
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;