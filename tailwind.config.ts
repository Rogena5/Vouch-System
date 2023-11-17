import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'violit-main': '#AB54DB',
        'grey-dark': '#A3A3A3',
        'grey-light': '#F5F5F5',
      },
      fontFamily: {
        sans: ['var(--font-poppins)']
      }
    },
  },
  plugins: [],
}
export default config
