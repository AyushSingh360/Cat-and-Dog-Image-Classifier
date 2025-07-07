import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">🐱</span>
            </div>
            <span className="text-xl font-bold text-gray-900">Cat & Dog AI</span>
          </div>
          
          <div className="flex items-center space-x-4">
            <a
              href="https://github.com/yourusername/cat-dog-classifier"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <Github className="w-5 h-5" />
              <span className="hidden sm:inline">GitHub</span>
            </a>
            <a
              href="https://www.freecodecamp.org/learn/machine-learning-with-python/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ExternalLink className="w-5 h-5" />
              <span className="hidden sm:inline">freeCodeCamp</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;