import React from 'react';
import { Brain, Layers, Target, TrendingUp } from 'lucide-react';

const ModelInfo: React.FC = () => {
  return (
    <div className="bg-white rounded-2xl card-shadow p-6">
      <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
        <Brain className="w-5 h-5 mr-2 text-purple-500" />
        Model Information
      </h3>
      
      <div className="space-y-6">
        <div className="flex items-start space-x-3">
          <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
            <Layers className="w-4 h-4 text-blue-600" />
          </div>
          <div>
            <h4 className="font-medium text-gray-900 mb-1">Architecture</h4>
            <p className="text-sm text-gray-600">
              Convolutional Neural Network with multiple Conv2D and MaxPooling layers
            </p>
          </div>
        </div>
        
        <div className="flex items-start space-x-3">
          <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
            <Target className="w-4 h-4 text-green-600" />
          </div>
          <div>
            <h4 className="font-medium text-gray-900 mb-1">Training Data</h4>
            <p className="text-sm text-gray-600">
              Trained on thousands of cat and dog images with data augmentation
            </p>
          </div>
        </div>
        
        <div className="flex items-start space-x-3">
          <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
            <TrendingUp className="w-4 h-4 text-purple-600" />
          </div>
          <div>
            <h4 className="font-medium text-gray-900 mb-1">Performance</h4>
            <p className="text-sm text-gray-600">
              Achieves >90% accuracy on validation data with binary classification
            </p>
          </div>
        </div>
      </div>
      
      <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
        <h4 className="font-medium text-gray-900 mb-2">Technical Details</h4>
        <ul className="text-sm text-gray-600 space-y-1">
          <li>• Input size: 150x150 pixels</li>
          <li>• Framework: TensorFlow.js</li>
          <li>• Activation: ReLU + Sigmoid</li>
          <li>• Optimizer: Adam</li>
        </ul>
      </div>
    </div>
  );
};

export default ModelInfo;