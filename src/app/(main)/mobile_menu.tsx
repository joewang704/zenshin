'use client'
import { useState } from 'react'
import { styled } from '@styled-system/jsx'
import { css } from '@styled-system/css'
import { Logout } from './navbar'

const HamburgerIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M5 17h14M5 12h14M5 7h14"
    />
  </svg>
)

const Container = styled('div', {
  base: {
    display: { sm: 'block', lg: 'none' },
    position: 'relative',
    fontSize: '14px',
  },
})

export default function MobileMenu() {
  const [mobileMenu, setMobileMenu] = useState(false)

  return (
    <Container>
      <div onClick={() => setMobileMenu(!mobileMenu)}>
        <HamburgerIcon />
      </div>
      {mobileMenu && (
        <div
          className={css({
            position: 'absolute',
            right: 0,
            top: 8,
            borderWidth: '1px',
            borderColor: 'neutral.200',
            color: 'neutral.600',
            minWidth: '160px',
            borderRadius: '4px',
            '& div': {
              px: 4,
              py: 3,
              _first: {
                pt: 4,
              },
            },
            '& input': {
              p: 4,
              mt: 1,
              borderTopWidth: '1px',
              borderColor: 'neutral.200',
              color: 'neutral.600',
              width: '100%',
              textAlign: 'left',
            },
          })}
        >
          <div>Home</div>
          <div>Cycles</div>
          <Logout />
        </div>
      )}
    </Container>
  )
}
