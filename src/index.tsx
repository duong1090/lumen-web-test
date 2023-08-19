import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './fonts/Hellix-Black.ttf'
import './fonts/Hellix-BlackItalic.ttf';
import './fonts/Hellix-Bold.ttf';
import './fonts/Hellix-BoldItalic.ttf';
import './fonts/Hellix-ExtraBold.ttf';
import './fonts/Hellix-ExtraBoldItalic.ttf';
import './fonts/Hellix-Light.ttf';
import './fonts/Hellix-LightItalic.ttf';
import './fonts/Hellix-Medium.ttf';
import './fonts/Hellix-MediumItalic.ttf';
import './fonts/Hellix-Regular.ttf';
import './fonts/Hellix-RegularItalic.ttf';
import './fonts/Hellix-SemiBold.ttf';
import './fonts/Hellix-SemiBoldItalic.ttf';
import './fonts/Hellix-Thin.ttf';
import './fonts/Hellix-ThinItalic.ttf';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
