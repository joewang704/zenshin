'use client'

import { css } from '@styled-system/css'
import { styled } from '@styled-system/jsx'

const X = () => (
  <svg
    width="13"
    height="14"
    viewBox="0 0 13 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11.4609 0.203125C11.7891 0.203125 12.0664 0.320312 12.293 0.554688C12.5273 0.789062 12.6445 1.06641 12.6445 1.38672C12.6445 1.69141 12.5352 1.96094 12.3164 2.19531L8.23828 6.58984L12.375 11.0664C12.5938 11.3008 12.7031 11.5703 12.7031 11.875C12.7031 12.1953 12.5859 12.4727 12.3516 12.707C12.125 12.9336 11.8516 13.0469 11.5312 13.0469C11.1719 13.0469 10.8789 12.918 10.6523 12.6602L6.64453 8.3125L2.625 12.6484C2.39844 12.9062 2.10938 13.0352 1.75781 13.0352C1.4375 13.0352 1.16016 12.9219 0.925781 12.6953C0.699219 12.4609 0.585938 12.1836 0.585938 11.8633C0.585938 11.5586 0.695312 11.2891 0.914062 11.0547L5.05078 6.58984L0.972656 2.17188C0.753906 1.9375 0.644531 1.67188 0.644531 1.375C0.644531 1.05469 0.757812 0.78125 0.984375 0.554688C1.21875 0.320312 1.49609 0.203125 1.81641 0.203125C2.16797 0.203125 2.45703 0.332031 2.68359 0.589844L6.64453 4.86719L10.5938 0.601562C10.6875 0.492188 10.8164 0.398438 10.9805 0.320312C11.1523 0.242187 11.3125 0.203125 11.4609 0.203125Z"
      fill="black"
    />
  </svg>
)

const BG = styled('div', {
  base: {
    bgColor: 'black',
    height: '100vh',
    width: '100vw',
    position: 'fixed',
    top: 0,
    opacity: '.6',
  },
})

const Title = styled('div', {
  base: {
    mt: 6,
    textAlign: 'center',
  },
})

const Content = styled('div', {
  base: {
    m: 4,
    mt: 6,
  },
})

const Modal = ({
  isOpen,
  children,
  title,
  close,
}: {
  isOpen?: boolean
  children?: React.ReactNode
  title: React.ReactNode
  close: () => void
}) => {
  if (!isOpen) {
    return <></>
  }

  return (
    <>
      <BG onClick={close} />
      <div
        className={css({
          position: 'absolute',
          minHeight: '400px',
          left: 0,
          right: 0,
          mx: 'auto',
          borderRadius: '4px',
          zIndex: 1,
          bgColor: 'white',
          p: 4,
          maxWidth: '1000px',
          // Max width + margin
          '@media (max-width: 1032px)': {
            mx: '16px',
          },
        })}
      >
        <div
          className={css({
            position: 'absolute',
            right: '16px',
            top: '16px',
          })}
          onClick={close}
        >
          <X />
        </div>
        <Title>{title}</Title>
        <Content>{children}</Content>
      </div>
    </>
  )
}

export default Modal
