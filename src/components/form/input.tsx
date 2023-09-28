import { cva } from '@styled-system/css'
import { styled } from '@styled-system/jsx'

const baseStyles = cva({
  base: {
    // border
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: 'base',
    borderRadius: 'sm',

    // layout
    backgroundColor: 'white',
    padding: '8px',
    minHeight: '48px',
    fontSize: '16px',
    lineHeight: '28px',

    // animations
    transitionDuration: '0.3s',

    _focus: {
      outline: 'none',
      boxShadow: 'base',
    },

    _disabled: {
      backgroundColor: 'stone.100',
    },

    _placeholder: {
      color: 'stone.300',
    },
  },
  variants: {
    kind: {
      danger: {
        borderColor: 'base.danger',
        _focus: {
          boxShadow: 'base.danger',
        },
      },
      success: {
        borderColor: 'base.success',
        _focus: {
          boxShadow: 'base.success',
        },
      },
    },
  },
})

const Input = styled('input', baseStyles)
const Select = styled('select', baseStyles)

export { Input, Select }
