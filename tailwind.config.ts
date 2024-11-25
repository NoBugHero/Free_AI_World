import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          50: '#F9FAFB',
          // ... 其他灰度
        },
        blue: {
          50: '#EFF6FF',
          // ... 其他蓝色
        },
        purple: {
          50: '#F5F3FF',
          // ... 其他紫色
        },
        indigo: {
          50: '#EEF2FF',
          // ... 其他靛蓝
        },
      },
      backgroundImage: {
        'radial-gradient': 'radial-gradient(circle at center, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
} satisfies Config;
