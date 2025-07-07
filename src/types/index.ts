export interface PredictionResult {
  class: 'cat' | 'dog';
  confidence: number;
  rawPrediction: number;
}

export interface ModelConfig {
  inputShape: [number, number, number];
  imageSize: number;
  threshold: number;
}