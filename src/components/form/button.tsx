import { styled } from '@styled-system/jsx'

const Button = styled('button', {
  base: {
    // border
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: 'stone.900',
    borderRadius: 'sm',
    boxShadow: 'base',

    // layout
    minWidth: '130px',
    height: '48px',
    padding: '8px',
    textAlign: 'center',
    overflow: 'hidden',
    fontSize: '16px',
    fontWeight: 'base.semiBold',

    // color
    backgroundColor: 'stone.900',
    color: 'white',

    // animation
    cursor: 'pointer',
    transitionDuration: '0.3s',

    _active: {
      boxShadow: 'none',
    },

    _disabled: {
      backgroundColor: 'stone.100',
      color: 'stone.400',
      borderColor: 'stone.100',
      boxShadow: 'none',
    },
  },
  variants: {
    size: {
      fullWidth: {
        width: '100%',
      },
    },
    kind: {
      secondary: {
        backgroundColor: 'white',
        color: 'stone.900',
      },
    },
  },
})

export default Button
