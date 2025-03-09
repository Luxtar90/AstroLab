// Este archivo contiene las declaraciones de tipos para las variables de entorno de Expo.

declare module 'expo-env' {
  export const API_URL: string;
  export const NODE_ENV: 'development' | 'production';
  export const APP_VERSION: string;
  export const APP_NAME: string;
  // Agrega más variables de entorno según sea necesario
}