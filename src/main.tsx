import { createRoot } from 'react-dom/client';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import '../src/styles/custom-scrollbar.css';
import App from './App.tsx';
import '../src/styles/date-range-picker.css';
import './index.css';

createRoot(document.getElementById('root')!).render(
  // <StrictMode>
  <App />
  // </StrictMode>
);
