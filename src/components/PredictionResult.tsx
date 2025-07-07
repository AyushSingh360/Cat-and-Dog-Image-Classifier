import React from 'react';
import { CheckCircle, AlertCircle, Loader } from 'lucide-react';
import { PredictionResult as PredictionType } from '../types';

interface PredictionResultProps {
  prediction: PredictionType | null;
  isLoading: boolean;
  imageUrl: string | null;
}

const PredictionResult: React.FC<PredictionResultProps> = ({
  prediction,
  isLoading,
  imageUrl
}) => {
  if (isLoading) {
    return (
      <div className="prediction-card bg-gray-50 dark:bg-gray-700 rounded-xl p-6 transition-colors duration-300">
        <div className="flex items-center justify-center space-x-3">
          <Loader className="w-6 h-6 text-blue-500 loading-spinner" />
          <span className="text-lg font-medium text-gray-700 dark:text-gray-200 transition-colors duration-300">
            Analyzing image...
          </span>
        </div>
      </div>
    );
  }

  if (!prediction) return null;

  const isHighConfidence = prediction.confidence > 0.8;
  const confidenceColor = isHighConfidence ? 'text-green-600 dark:text-green-400' : 'text-yellow-600 dark:text-yellow-400';
  const IconComponent = isHighConfidence ? CheckCircle : AlertCircle;

  return (
    <div className="prediction-card bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl p-6 border border-blue-100 dark:border-blue-800 transition-colors duration-300">
      <div className="flex items-start space-x-4">
        {imageUrl && (
          <img
            src={imageUrl}
            alt="Analyzed"
            className="w-24 h-24 object-cover rounded-lg shadow-md flex-shrink-0"
          />
        )}
        
        <div className="flex-1">
          <div className="flex items-center space-x-2 mb-3">
            <IconComponent className={`w-6 h-6 ${confidenceColor} transition-colors duration-300`} />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white transition-colors duration-300">
              Prediction Result
            </h3>
          </div>
          
          <div className="space-y-3">
            <div>
              <p className="text-lg text-gray-700 dark:text-gray-200 transition-colors duration-300">
                This image appears to be a{' '}
                <span className="font-bold text-2xl">
                  {prediction.class === 'dog' ? '🐕 Dog' : '🐱 Cat'}
                </span>
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg p-4 transition-colors duration-300">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-600 dark:text-gray-300 transition-colors duration-300">Confidence</span>
                <span className={`text-sm font-bold ${confidenceColor} transition-colors duration-300`}>
                  {(prediction.confidence * 100).toFixed(1)}%
                </span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2 transition-colors duration-300">
                <div
                  className={`h-2 rounded-full transition-all duration-500 ${
                    isHighConfidence ? 'bg-green-500' : 'bg-yellow-500'
                  }`}
                  style={{ width: `${prediction.confidence * 100}%` }}
                />
              </div>
            </div>
            
            {!isHighConfidence && (
              <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-3 transition-colors duration-300">
                <p className="text-sm text-yellow-800 dark:text-yellow-200 transition-colors duration-300">
                  <strong>Note:</strong> The model has moderate confidence in this prediction. 
                  Consider trying a clearer image for better results.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PredictionResult;