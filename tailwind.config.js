// import { createRequire } from 'module';
// const require = createRequire(import.meta.url);

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: ["light"],
  },
  // eslint-disable-next-line no-undef
  plugins: [require("daisyui")],
  corePlugins: {
    '@tailwind': true,
  }
}

