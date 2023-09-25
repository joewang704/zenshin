import Image from 'next/image'
import { styled } from '@styled-system/jsx'
import { css } from '@styled-system/css'

const GoogleLogin = styled('button', {
  base: {
    backgroundColor: 'white',
    border: '1px solid rgb(218, 220, 224)',
    padding: '2px 10px',
    borderRadius: '4px',
    fontSize: '14px',
    height: '38px',
    cursor: 'pointer',
    _hover: {
      backgroundColor: 'gray.100',
    },
  },
})

const GoogleIcon = () => (
  <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 48 48"
    height={18}
  >
    <g>
      <path
        fill="#EA4335"
        d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
      ></path>
      <path
        fill="#4285F4"
        d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
      ></path>
      <path
        fill="#FBBC05"
        d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
      ></path>
      <path
        fill="#34A853"
        d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
      ></path>
      <path fill="none" d="M0 0h48v48H0z"></path>
    </g>
  </svg>
)

const Page = async () => {
  return (
    <>
      <div
        className={css({
          bgColor: '#F1F1F1',
          height: '100vh',
          width: '100vw',
          top: 0,
          left: 0,
          position: 'fixed',
          zIndex: -1,
        })}
      >
        <div
          className={css({
            mx: 'auto',
            display: 'flex',
            flexDir: 'column',
            alignItems: 'center',
            textAlign: 'center',
            position: 'fixed',
            top: '40%',
            width: '100%',
          })}
        >
          <Image src="/logo.svg" alt="logo" width="180" height="64" priority />
          <a href="/login/google" className={css({ mt: 6 })}>
            <GoogleLogin>
              <div
                className={css({
                  display: 'flex',
                  alignItems: 'center',
                })}
              >
                <GoogleIcon />
                <div className={css({ ml: 2 })}>Sign in with Google</div>
              </div>
            </GoogleLogin>
          </a>
        </div>
      </div>
    </>
  )
}

export default Page
