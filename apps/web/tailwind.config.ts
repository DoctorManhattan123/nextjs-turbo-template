import daisyUi from "daisyui";

import type { Config } from "tailwindcss";

const config = {
  content: ["./src/**/*.{ts,tsx}"],
  plugins: [daisyUi],
} satisfies Config;

export default config;
