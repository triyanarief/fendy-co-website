import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
export default defineConfig({ base: process.env.BASE_PATH || '/fendy-co-website/', plugins: [react(), tailwindcss()] });
