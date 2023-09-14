import { css } from '@styled-system/css'
import { styled } from '@styled-system/jsx'
import Image from 'next/image'
import Link from 'next/link'

import MobileMenu from './mobile_menu'

const DesktopMenu = styled('div', {
  base: {
    display: { sm: 'none', lg: 'flex' },
    '& div, & input': {
      ml: 10,
      cursor: 'pointer',
      _hover: {
        opacity: '.4',
      },
    },
  },
})

export default async function Navbar() {
  return (
    <div
      className={css({
        maxW: '1000px',
        mx: 'auto',
        py: 4,
        px: 8,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      })}
    >
      <Image src="/logo.svg" alt="logo" width="96" height="32" />
      <MobileMenu />
      <DesktopMenu>
        <Link href="/">
          <div>Home</div>
        </Link>
        <Link href="/">
          <div>Cycles</div>
        </Link>
        <Logout />
      </DesktopMenu>
    </div>
  )
}

export const Logout = () => (
  <form action="/logout" method="POST">
    <input type="submit" value="Log out" />
  </form>
)
