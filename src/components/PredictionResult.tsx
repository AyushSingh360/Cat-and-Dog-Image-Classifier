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
      <div className="prediction-card bg-gray-50 rounded-xl p-6">
        <div className="flex items-center justify-center space-x-3">
          <Loader className="w-6 h-6 text-blue-500 loading-spinner" />
          <span className="text-lg font-medium text-gray-700">
            Analyzing image...
          </span>
        </div>
      </div>
    );
  }

  if (!prediction) return null;

  const isHighConfidence = prediction.confidence > 0.8;
  const confidenceColor = isHighConfidence ? 'text-green-600' : 'text-yellow-600';
  const IconComponent = isHighConfidence ? CheckCircle : AlertCircle;

  return (
    <div className="prediction-card bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-100">
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
            <IconComponent className={`w-6 h-6 ${confidenceColor}`} />
            <h3 className="text-xl font-semibold text-gray-900">
              Prediction Result
            </h3>
          </div>
          
          <div className="space-y-3">
            <div>
              <p className="text-lg text-gray-700">
                This image appears to be a{' '}
                <span className="font-bold text-2xl">
                  {prediction.class === 'dog' ? '🐕 Dog' : '🐱 Cat'}
                </span>
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-600">Confidence</span>
                <span className={`text-sm font-bold ${confidenceColor}`}>
                  {(prediction.confidence * 100).toFixed(1)}%
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className={`h-2 rounded-full transition-all duration-500 ${
                    isHighConfidence ? 'bg-green-500' : 'bg-yellow-500'
                  }`}
                  style={{ width: `${prediction.confidence * 100}%` }}
                />
              </div>
            </div>
            
            {!isHighConfidence && (
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
                <p className="text-sm text-yellow-800">
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