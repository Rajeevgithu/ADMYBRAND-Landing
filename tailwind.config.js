/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './lib/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary Palette (Trust + Modern Tech)
        primary: '#6366F1',      // Indigo 500 - Buttons, links, highlights
        secondary: '#EC4899',    // Pink 400 - CTA hover states, icon accents
        accent: '#38BDF8',       // Sky 400 - Cards, subtle gradients
        
        // Neutral Colors
        neutral: {
          100: '#FFFFFF',        // White - Backgrounds (light mode)
          800: '#1F2937',        // Zinc 800 - Text color on light background
          900: '#0F172A',        // Zinc 900 - Background (dark mode)
        },
        
        // Dark Mode Palette
        dark: {
          background: '#0F172A', // Very dark navy
          surface: '#1E293B',    // Dark slate for cards
          text: '#F8FAFC',       // Near white
        },
        
        // Glass effect for modern UI
        glass: 'rgba(255, 255, 255, 0.05)',
        'glass-dark': 'rgba(30, 41, 59, 0.8)',
      },
      backdropBlur: {
        xs: '2px',
      },
      // Custom gradients for modern design
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #6366F1 0%, #EC4899 100%)',
        'gradient-secondary': 'linear-gradient(135deg, #38BDF8 0%, #6366F1 100%)',
        'gradient-accent': 'linear-gradient(135deg, #EC4899 0%, #38BDF8 100%)',
        'gradient-dark': 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)',
        'gradient-glass': 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
        'gradient-to-r': 'linear-gradient(to right, var(--tw-gradient-stops))',
        'gradient-to-br': 'linear-gradient(to bottom right, var(--tw-gradient-stops))',
      },
      // Custom shadows for depth
      boxShadow: {
        'glass': '0 8px 32px rgba(0, 0, 0, 0.1)',
        'glass-dark': '0 8px 32px rgba(0, 0, 0, 0.3)',
        'primary-glow': '0 0 20px rgba(99, 102, 241, 0.3)',
        'secondary-glow': '0 0 20px rgba(236, 72, 153, 0.3)',
        'accent-glow': '0 0 20px rgba(56, 189, 248, 0.3)',
      },
    },
  },
  plugins: [],
} 