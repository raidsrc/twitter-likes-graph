import '../styles/globals.css'
import type { AppProps } from 'next/app'
import "../styles/transition.css"
import Transition from '../components/Transition'
import { useState } from 'react'

function MyApp({ Component, pageProps }: AppProps) {
  const [finished, setFinished] = useState(false)
  return (
    <div>
      <Transition>
        <Component {...pageProps} finished={finished} setFinished={setFinished} />
      </Transition>
    </div>
  )
}

export default MyApp
