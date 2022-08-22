import '../styles/globals.css'
import "../styles/page-transitions.css"
import { CSSTransition } from 'react-transition-group'
import type { AppProps } from 'next/app'
import { useRouter } from "next/router"
import TransitionContainer from './TransitionContainer'

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  return (
    <div>
      {/* <TransitionContainer> */}
        <Component key={router.asPath} {...pageProps} />
      {/* </TransitionContainer> */}
    </div>
  )
}

export default MyApp
