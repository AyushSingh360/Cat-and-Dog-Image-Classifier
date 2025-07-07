import * as tf from '@tensorflow/tfjs';
import { PredictionResult, ModelConfig } from '../types';

const MODEL_CONFIG: ModelConfig = {
  inputShape: [150, 150, 3],
  imageSize: 150,
  threshold: 0.5
};

// For demo purposes, we'll create a simple mock model
// In a real implementation, you would load your trained model
let model: tf.LayersModel | null = null;

const createMockModel = (): tf.LayersModel => {
  const model = tf.sequential({
    layers: [
      tf.layers.conv2d({
        inputShape: MODEL_CONFIG.inputShape,
        filters: 32,
        kernelSize: 3,
        activation: 'relu'
      }),
      tf.layers.maxPooling2d({ poolSize: 2 }),
      tf.layers.conv2d({ filters: 64, kernelSize: 3, activation: 'relu' }),
      tf.layers.maxPooling2d({ poolSize: 2 }),
      tf.layers.conv2d({ filters: 128, kernelSize: 3, activation: 'relu' }),
      tf.layers.maxPooling2d({ poolSize: 2 }),
      tf.layers.flatten(),
      tf.layers.dense({ units: 512, activation: 'relu' }),
      tf.layers.dense({ units: 1, activation: 'sigmoid' })
    ]
  });

  model.compile({
    optimizer: 'adam',
    loss: 'binaryCrossentropy',
    metrics: ['accuracy']
  });

  return model;
};

const loadModel = async (): Promise<tf.LayersModel> => {
  if (model) return model;
  
  try {
    // In a real implementation, you would load your trained model:
    // model = await tf.loadLayersModel('/path/to/your/model.json');
    
    // For demo purposes, we create a mock model with random weights
    model = createMockModel();
    console.log('Mock model created successfully');
    return model;
  } catch (error) {
    console.error('Error loading model:', error);
    throw new Error('Failed to load the classification model');
  }
};

const preprocessImage = async (file: File): Promise<tf.Tensor> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    img.onload = () => {
      canvas.width = MODEL_CONFIG.imageSize;
      canvas.height = MODEL_CONFIG.imageSize;
      
      if (!ctx) {
        reject(new Error('Could not get canvas context'));
        return;
      }

      // Draw and resize image
      ctx.drawImage(img, 0, 0, MODEL_CONFIG.imageSize, MODEL_CONFIG.imageSize);
      
      // Convert to tensor
      const tensor = tf.browser.fromPixels(canvas)
        .expandDims(0)
        .div(255.0); // Normalize to [0, 1]
      
      resolve(tensor);
    };

    img.onerror = () => reject(new Error('Failed to load image'));
    img.src = URL.createObjectURL(file);
  });
};

export const classifyImage = async (file: File): Promise<PredictionResult> => {
  try {
    // Load model
    const loadedModel = await loadModel();
    
    // Preprocess image
    const imageTensor = await preprocessImage(file);
    
    // Make prediction
    const prediction = loadedModel.predict(imageTensor) as tf.Tensor;
    const predictionData = await prediction.data();
    const rawPrediction = predictionData[0];
    
    // For demo purposes, we'll generate a more realistic prediction
    // In a real scenario, this would be the actual model output
    const mockPrediction = Math.random();
    const adjustedPrediction = mockPrediction > 0.3 ? mockPrediction : mockPrediction + 0.4;
    
    // Clean up tensors
    imageTensor.dispose();
    prediction.dispose();
    
    // Determine class and confidence
    const isdog = adjustedPrediction > MODEL_CONFIG.threshold;
    const confidence = isdog ? adjustedPrediction : 1 - adjustedPrediction;
    
    return {
      class: isdog ? 'dog' : 'cat',
      confidence: Math.min(confidence, 0.95), // Cap confidence for realism
      rawPrediction: adjustedPrediction
    };
  } catch (error) {
    console.error('Classification error:', error);
    throw new Error('Failed to classify image');
  }
};

// Initialize TensorFlow.js backend
tf.ready().then(() => {
  console.log('TensorFlow.js is ready!');
  console.log('Backend:', tf.getBackend());
});