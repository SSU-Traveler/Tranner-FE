import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';

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
