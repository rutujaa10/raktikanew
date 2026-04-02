// API Configuration
// Priorities:
// 1. VITE_API_URL from environment (Vercel/Local)
// 2. Relative path for Vercel production ("/api" via rewrites)
// 3. Current host with port 5000 for local development (handles both localhost and local IP)

const isProd = import.meta.env.PROD || window.location.hostname !== 'localhost' && window.location.hostname !== '127.0.0.1';

export const API_BASE_URL = 
  import.meta.env.VITE_API_URL || 
  (isProd ? "" : `http://${window.location.hostname}:5000`);
