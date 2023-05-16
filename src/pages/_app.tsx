import type { AppProps } from 'next/app'
import './style/global.css'
import './style/navbar.css'
// import ErrorBoundary from '../components/ErrorBoundary';

export default function App({ Component, pageProps }: AppProps) {
  return (
    // Wrap the Component prop with ErrorBoundary component
    // <ErrorBoundary>
    <Component {...pageProps} />
    // </ErrorBoundary>
  );
}
