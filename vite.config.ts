// filepath: d:\js\maria-garden-fe\vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true, // Enables global variables like `describe`, `it`, etc.
    environment: 'jsdom', // Sets the test environment to jsdom
  },
});
