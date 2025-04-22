/** @type {import('tailwindcss').Config} */
import rippleui from 'rippleui';

const config = {
    content: [
      './app/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}',
    ],
    darkMode: 'class',
    theme: { extend: {} },
    plugins: [rippleui],
  };

export default config;
  