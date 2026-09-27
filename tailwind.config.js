/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      colors: {
        // Brand: deep ink, warm paper, one safety-yellow accent, a water-blue for links.
        ink: { DEFAULT: "#0b1f2a", 2: "#132c3a", 3: "#1d3b4c" },
        paper: { DEFAULT: "#f5f3ee", 2: "#ebe7dd", 3: "#dfd9cc" },
        accent: { DEFAULT: "#f2b705", dark: "#c99500" },
        water: { DEFAULT: "#1e6f86", light: "#5fb3c8" },
      },
      animation: {
        shake: "shake 0.3s ease-in-out",
        "marquee-up": "marqueeUp var(--marquee-duration, 38s) linear infinite",
        "marquee-down": "marqueeDown var(--marquee-duration, 38s) linear infinite",
      },
      keyframes: {
        shake: {
          "0%, 100%": { transform: "translateX(0)" },
          "25%": { transform: "translateX(-4px)" },
          "75%": { transform: "translateX(4px)" },
        },
        // Content is duplicated once, so shifting by half loops seamlessly.
        marqueeUp: {
          from: { transform: "translateY(0)" },
          to: { transform: "translateY(-50%)" },
        },
        marqueeDown: {
          from: { transform: "translateY(-50%)" },
          to: { transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
