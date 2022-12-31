import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="flex flex-col max-w-3xl mx-auto min-h-full px-4">
      <Header />
      <div className="main">
        <Component {...pageProps} />
      </div>
      <Footer />
    </div>
  );
}

export default MyApp;
