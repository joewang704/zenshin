import { css } from '@styled-system/css'
import Image from 'next/image'

export default function Navbar() {
  return (
    <div
      className={css({
        maxW: '1000px',
        mx: 'auto',
        p: 4,
      })}
    >
      <Image src="/logo.svg" alt="logo" width="96" height="32" />
    </div>
  )
}
