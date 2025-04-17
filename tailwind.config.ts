
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
      },
      backgroundColor: {
        background: 'hsl(var(--background))',
        'birthday-lavender': '#E5DEFF',
        'birthday-teal': '#00CED1',
        'birthday-pink': '#FFB6C1',
        'birthday-purple': '#9B87F5',
        'birthday-blue': '#87CEEB',
      },
      textColor: {
        foreground: 'hsl(var(--foreground))',
        'birthday-lavender': '#E5DEFF',
        'birthday-teal': '#00CED1',
        'birthday-pink': '#FFB6C1',
        'birthday-purple': '#9B87F5',
        'birthday-blue': '#87CEEB',
      },
      gradientColorStops: {
        'gradient-start': '#FFB6C1',
        'gradient-middle': '#9B87F5',
        'gradient-end': '#87CEEB'
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

