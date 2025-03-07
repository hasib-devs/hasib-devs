import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.tsx',
        './resources/js/**/*.jsx',
    ],
    darkMode: 'class',

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
        },
        colors: {
            navy: '#1e2a3a',
            black: '#111821',
            primary: '#059669',
            'primary-dark': '#065F46',
            secondary: 'rgb(19 154 225)',
            'secondary-dark': 'rgb(19 154 225)',
            'gray-10': '#fafafa'
          },
          screens: {
           // Define breakpoints based on your layout needs
            'xs': '480px',  // Extra small devices
            'sm': '640px',  // Small devices
            'md': '768px',  // Medium devices
            'lg': '1024px', // Large devices
            'xl': '1280px', // Extra large devices
          },
          container: {
            center: true, // Center the container
            padding: {
                DEFAULT: '1rem', // Default padding value
                lg: '4rem',      // Large devices
                xl: '5rem',      // Extra large devices
            }
          },
          maxWidth: {
            'small': '600px',  // Custom small max-width for narrow content
          }
    },

    plugins: [forms],
};
