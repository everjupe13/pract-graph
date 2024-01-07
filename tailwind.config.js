// eslint-disable-next-line @typescript-eslint/no-var-requires
const plugin = require('tailwindcss/plugin')

const toPX = values => Object.fromEntries(values.map(v => [+v, `${v}px`]))
const object0to100px = toPX(Array.from({ length: 101 }).map((_, i) => +i))

const fallbackSansSerifFonts = [
  '-apple-system',
  'BlinkMacSystemFont',
  'Segoe UI',
  'Helvetica',
  'Arial',
  'sans-serif'
]

module.exports = {
  plugins: [
    require('@tailwindcss/aspect-ratio'),

    plugin(({ addUtilities }) => {
      const typographyWithOnlySizes = {}
      for (let i = 8; i <= 100; i += 2) {
        typographyWithOnlySizes[`.text-${i}`] = { fontSize: `${i}px` }
      }

      addUtilities(typographyWithOnlySizes)
    })
  ],

  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],

  corePlugins: {
    aspectRatio: false,
    container: false
  },

  theme: {
    extend: {
      borderColor: {
        DEFAULT: 'transparent'
      },

      scale: {
        101: '1.01'
      }
    },

    screens: {
      // xs: '0',
      // sm: '640px',
      // md: '768px',
      // lg: '1024px',
      // xl: '1280px',
      // '2xl': '1536px'

      xl: { max: '1529.99px' },
      lg: { max: '1199.99px' },
      md: { max: '991.99px' },
      sm: { max: '767.99px' },
      xs: { max: '575.99px' },
    },

    fontSize: false,

    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: '#000000',
      white: '#FFFFFF',
      zinc: '#E5E5E5',
      gray: {
        DEFAULT: '#191919',
        second: '#252525'
      },
      lightgray: '#BDBFBE',
      tapestry: '#DDADB5',
      green: {
        DEFAULT: '#6CEABD',
        'button-pressed': '#56BB97'
      },
      pink: {
        DEFAULT: '#FFBEC9',
        hover: '#FFCBD4'
      },
      danger: '#DA1C1C',
      red: '#FF3B30'
    },

    spacing: object0to100px,

    borderWidth: {
      DEFAULT: '1px',
      ...object0to100px
    },

    borderRadius: {
      ...object0to100px,
      full: '9999px'
    },

    fontFamily: {
      sans: ['Gilroy', ...fallbackSansSerifFonts],
      hauora: ['Hauora', ...fallbackSansSerifFonts]
    }
  }
}
