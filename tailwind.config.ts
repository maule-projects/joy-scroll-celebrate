
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
      },
      textColor: {
        foreground: 'hsl(var(--foreground))',
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

