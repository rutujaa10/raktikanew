// API Configuration
// Automatically uses the same domain (relative path) in production, 
// but falls back to localhost:5000 for local development.
export const API_BASE_URL = import.meta.env.VITE_API_URL || (import.meta.env.PROD ? "" : "http://localhost:5000");
