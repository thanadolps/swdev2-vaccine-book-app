/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        shake: {
          "0%, 100%": { transform: "translate3d(0, 0, 0)" },
          "10%, 30%, 50%, 70%, 90%": { transform: "translate3d(-1px, 0, 0)" },
          "20%, 40%, 60%, 80%": { transform: "translate3d(1px, 0, 0)" },
        },
        lr: {
          "0%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" },
        },
        rl: {
          "0%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(50%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      animation: {
        shake: "shake 0.5s cubic-bezier(.36,.07,.19,.97) infinite",
        lr: "lr 1s ease-in-out infinite",
        rl: "rl 1s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
