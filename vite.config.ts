import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8080', // Spring Boot 서버 URL
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''), // '/api' 경로를 제거,
        secure: false,
        ws: true,
      },
      // 구글 맵 API
      '/maps/api/place': {
        target: 'https://maps.googleapis.com',
        changeOrigin: true,
        secure: true,
      },
      // 날씨 API
      '/weather-api': {
        target: 'https://apihub.kma.go.kr',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/weather-api/, ''), // '/weather-api' 경로를 제거
        secure: true,
      },
      // 위키피디아 API
      '/wikipedia-api': {
        target: 'https://ko.wikipedia.org',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/wikipedia-api/, ''), // '/wikipedia-api' 경로를 제거
        secure: true,
      },
    },
  },
});
