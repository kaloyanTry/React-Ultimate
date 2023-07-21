import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { QuizProvider } from './constexts/QuizContext';
import App from './components/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <QuizProvider>
      <App />
    </QuizProvider>
  </React.StrictMode>
);
