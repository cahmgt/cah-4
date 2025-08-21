/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'scheme-background': 'var(--scheme-background)',
        'scheme-text': 'var(--scheme-text)',
        'scheme-border': 'var(--scheme-border)',
        'neutral-darkest': '#1a1a1a',
      },
      fontFamily: {
        'heading-h1': ['var(--font-heading-h1)'],
        'heading-h2': ['var(--font-heading-h2)'],
        'heading-h3': ['var(--font-heading-h3)'],
        'heading-h4': ['var(--font-heading-h4)'],
        'heading-h5': ['var(--font-heading-h5)'],
        'text-regular': ['var(--font-text-regular)'],
        'text-medium': ['var(--font-text-medium)'],
        'text-small': ['var(--font-text-small)'],
      },
      borderRadius: {
        'button': 'var(--border-radius-button)',
        'image': 'var(--border-radius-image)',
        'carousel': 'var(--border-radius-carousel)',
      },
    },
  },
  plugins: [],
}
