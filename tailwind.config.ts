
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        dancing: ['Dancing Script', 'cursive'],
      },
      backgroundColor: {
        background: 'hsl(var(--background))',
        'birthday-lavender': '#E5DEFF',
        'birthday-teal': '#00CED1',
        'birthday-pink': '#FFB6C1',
        'birthday-purple': '#9B87F5',
        'birthday-blue': '#87CEEB',
        'birthday-yellow': '#FFD166',
        'birthday-orange': '#FF9E7D',
      },
      textColor: {
        foreground: 'hsl(var(--foreground))',
        'birthday-lavender': '#E5DEFF',
        'birthday-teal': '#00CED1',
        'birthday-pink': '#FFB6C1',
        'birthday-purple': '#9B87F5',
        'birthday-blue': '#87CEEB',
        'birthday-yellow': '#FFD166',
        'birthday-orange': '#FF9E7D',
      },
      gradientColorStops: {
        'gradient-start': '#FFB6C1',
        'gradient-middle': '#9B87F5',
        'gradient-end': '#87CEEB'
      },
      animation: {
        'confetti': 'confetti 5s ease-in-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'sparkle': 'sparkle 2s ease-in-out infinite',
        'pulse-soft': 'pulse-soft 3s ease-in-out infinite',
      },
      keyframes: {
        confetti: {
          '0%': { transform: 'translateY(0) rotate(0)', opacity: '0' },
          '10%': { opacity: '1' },
          '100%': { transform: 'translateY(100vh) rotate(720deg)', opacity: '0' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(5deg)' }
        },
        sparkle: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.5', transform: 'scale(1.2)' }
        },
        'pulse-soft': {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' }
        }
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
