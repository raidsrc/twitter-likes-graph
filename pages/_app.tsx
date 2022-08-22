import '../styles/globals.css'
import "../styles/page-transitions.css"
import type { AppProps } from 'next/app'
import "../styles/transition.css"
import Transition from '../components/Transition'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Transition>
        <Component {...pageProps} />
      </Transition>
    </div>
  )
}

export default MyApp
