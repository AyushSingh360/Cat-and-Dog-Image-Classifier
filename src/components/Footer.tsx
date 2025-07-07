import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-16">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="flex items-center justify-center space-x-2 text-gray-300">
            <span>Built with</span>
            <Heart className="w-4 h-4 text-red-500" />
            <span>for the freeCodeCamp Machine Learning curriculum</span>
          </p>
          <p className="text-gray-400 mt-2 text-sm">
            © 2025 Cat & Dog Classifier. Powered by TensorFlow.js and React.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;