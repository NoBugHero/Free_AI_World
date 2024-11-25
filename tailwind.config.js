/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          50: '#F9FAFB',
          100: '#F3F4F6',
          // ... 其他灰度
        },
        blue: {
          50: '#EFF6FF',
          100: '#DBEAFE',
          // ... 其他蓝色
        },
        purple: {
          50: '#F5F3FF',
          100: '#EDE9FE',
          // ... 其他紫色
        },
        indigo: {
          50: '#EEF2FF',
          100: '#E0E7FF',
          // ... 其他靛蓝
        },
      },
      backgroundImage: {
        'radial-gradient': 'radial-gradient(circle at center, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}

