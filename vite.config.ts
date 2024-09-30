import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8080', // Spring Boot 서버 URL
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''), // '/api' 경로를 제거
      },
    },
  },
});
