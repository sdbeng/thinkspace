/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./src/**/*.{js,jsx,ts,tsx}"], //remember to update the path to src when I have the app folder in the src folder, otherwise tailwind won't work
  presets: [require("nativewind/preset")],
  theme: {
    extend: {},
  },
  plugins: [],
};
