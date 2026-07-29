/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: 'hsl(var(--radius))',
        md: 'calc(hsl(var(--radius)) - 2px)',
        sm: 'calc(hsl(var(--radius)) - 4px)',
      },
      fontFamily: {
        sans: ['Noto Sans Armenian', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Noto Serif Armenian', 'Playfair Display', 'serif'],
      },
      keyframes: {
        kenburns: {
          '0%': { transform: 'scale(1) translate(0, 0)' },
          '100%': { transform: 'scale(1.15) translate(-1.5%, -1.5%)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'slide-in-right': {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        'glow-pulse': {
          '0%, 100%': { boxShadow: '0 0 20px -5px hsl(var(--primary) / 0.4)' },
          '50%': { boxShadow: '0 0 30px -3px hsl(var(--primary) / 0.6)' },
        },
      },
      animation: {
        kenburns: 'kenburns 20s ease-out forwards',
        shimmer: 'shimmer 2s linear infinite',
        'fade-up': 'fade-up 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'fade-in': 'fade-in 0.6s ease-out forwards',
        'scale-in': 'scale-in 0.4s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'slide-in-right': 'slide-in-right 0.6s ease-out forwards',
        float: 'float 4s ease-in-out infinite',
        'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
      },
      boxShadow: {
        'soft': '0 2px 12px -2px rgb(0 0 0 / 0.08), 0 1px 4px -1px rgb(0 0 0 / 0.06)',
        'medium': '0 8px 30px -4px rgb(0 0 0 / 0.12), 0 2px 10px -2px rgb(0 0 0 / 0.08)',
        'large': '0 20px 60px -8px rgb(0 0 0 / 0.18), 0 6px 20px -4px rgb(0 0 0 / 0.1)',
        'xlarge': '0 30px 80px -12px rgb(0 0 0 / 0.25), 0 10px 30px -6px rgb(0 0 0 / 0.12)',
        'primary': '0 8px 30px -4px hsl(var(--primary) / 0.25)',
        'primary-lg': '0 20px 50px -8px hsl(var(--primary) / 0.35)',
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.22, 1, 0.36, 1)',
        'bounce-out': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
