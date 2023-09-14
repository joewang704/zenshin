import { defineConfig } from '@pandacss/dev'

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: [
    './src/components/**/*.{ts,tsx,js,jsx}',
    './src/app/**/*.{ts,tsx,js,jsx}',
  ],

  // Files to exclude
  exclude: [],

  theme: {
    extend: {
      tokens: {
        colors: {
          base: {
            DEFAULT: { value: '{colors.stone.200}' },
            danger: { value: '{colors.red.400}' },
            success: { value: '{colors.emerald.400}' },
          },
        },
        shadows: {
          base: {
            DEFAULT: { value: '{shadows.md}' },
            danger: {
              value:
                '0 4px 6px -1px rgb(255 0 0 / 0.1), 0 2px 4px -2px rgb(255 0 0 / 0.1)',
            },
            success: {
              value:
                '0 4px 6px -1px rgb(0 128 0 / 0.1), 0 2px 4px -2px rgb(0 128 0 / 0.1)',
            },
          },
        },
        fontWeights: {
          base: {
            regular: { value: '400' },
            medium: { value: '500' },
            semiBold: { value: '600' },
            bold: { value: '700' },
          }
        }
      },
    },
  },

  // The output directory for your css system
  outdir: 'styled-system',

  jsxFramework: 'react',
})
