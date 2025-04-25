// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["var(--font-poppins)"],
      },
      colors: {
        cosmic: {
          dark: "#050816",
          light: "#090325",
          accent: "#3b82f6", // blue-500
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        "cosmic-pulse": "cosmic-pulse 4s ease-in-out infinite",
        "float": "float 6s ease-in-out infinite",
        'marquee-slow': 'marquee-slow 30s linear infinite',
        'marquee-fast': 'marquee-fast 20s linear infinite',
        'marquee-fast-reverse': 'marquee-fast 20s linear infinite reverse',
      },
      keyframes: {
        "cosmic-pulse": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        'marquee-slow': {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-fast': {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      boxShadow: {
        'glow': '0 0 15px rgba(139, 92, 246, 0.5)',
      },
    },
  },
  plugins: [],
};

export default config;