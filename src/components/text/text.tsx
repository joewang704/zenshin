import { styled } from '@styled-system/jsx'

const Text = styled('div', {
  base: {
    fontWeight: 'base.regular',
    fontSize: '16px',
    color: 'stone.900',
  },
  variants: {
    kind: {
      label: {
        fontWeight: 'base.medium',
      },
      callout: {
        color: 'stone.600',
        fontSize: '12px',
      },
      title: {
        fontWeight: 'base.bold',
        fontSize: '24px',
      },
    },
  },
})

export default Text
