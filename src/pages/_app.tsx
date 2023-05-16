import type { AppProps } from 'next/app'
import './style/global.css'
import './style/navbar.css'
export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
