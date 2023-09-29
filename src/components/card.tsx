'use client'

import { useState, useEffect, useRef } from 'react'
import { styled } from '@styled-system/jsx'
import { css } from '@styled-system/css'

const Container = styled('div', {
  base: {
    rounded: 'md',
    boxShadow: 'md',
    border: '1px solid #EAEAEA',
    userSelect: 'none',
  },
})

const Header = styled('div', {
  base: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
})

const Title = styled('div', {
  base: {
    flexGrow: 1,
    p: 4,
  },
})

const Content = styled('div', {
  base: {
    p: 4,
  },
})

type BaseProps = {
  action?: React.ReactNode
  actionOnClick?: () => void
  title: React.ReactNode
  titleOnClick?: () => void
  children?: React.ReactNode
  className?: string
}

const Base = ({
  action,
  actionOnClick,
  title,
  titleOnClick,
  className,
  children,
}: BaseProps) => {
  return (
    <Container className={className}>
      <Header>
        <Title
          className={css({
            cursor: titleOnClick ? 'pointer' : 'default',
          })}
          onClick={titleOnClick}
        >
          <span>{title}</span>
        </Title>
        <div
          className={css({
            cursor: actionOnClick ? 'pointer' : 'default',
            p: 4,
          })}
          onClick={actionOnClick}
        >
          {action}
        </div>
      </Header>
      {children}
    </Container>
  )
}

export default Object.assign(Base, {
  Content,
})

type CollapsibleCardProps = Omit<
  BaseProps,
  'action' | 'actionOnClick' | 'titleOnClick'
>

const Chevron = ({ className }: { className?: string }) => (
  <svg
    width="16"
    height="11"
    viewBox="0 0 16 11"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M6.98486 9.74365L0.344238 3.10303C-0.114746 2.64404 -0.114746 1.90186 0.344238 1.44775L1.44775 0.344238C1.90674 -0.114746 2.64893 -0.114746 3.10303 0.344238L7.81006 5.05127L12.5171 0.344238C12.9761 -0.114746 13.7183 -0.114746 14.1724 0.344238L15.2759 1.44775C15.7349 1.90674 15.7349 2.64893 15.2759 3.10303L8.63525 9.74365C8.18604 10.2026 7.44385 10.2026 6.98486 9.74365Z"
      fill="black"
    />
  </svg>
)

export const CollapsibleCard = ({
  children,
  ...props
}: CollapsibleCardProps) => {
  const [open, setOpen] = useState(false)
  const contentRef = useRef<any>(null)

  const toggle = () => setOpen(!open)

  useEffect(() => {
    if (contentRef.current) {
      if (open) {
        contentRef.current.style.height = contentRef.current.scrollHeight + 'px'
      } else {
        contentRef.current.style.height = 0
      }
    }
  }, [open, contentRef.current])

  return (
    <Base
      {...props}
      action={
        <Chevron
          className={css({
            transform: open ? 'rotate(180deg)' : undefined,
          })}
        />
      }
      titleOnClick={toggle}
      actionOnClick={toggle}
    >
      <div
        className={css({
          height: 0,
          overflow: 'hidden',
          transition: 'height .2s ease-out',
        })}
        ref={contentRef}
      >
        <Content>{children}</Content>
      </div>
    </Base>
  )
}
