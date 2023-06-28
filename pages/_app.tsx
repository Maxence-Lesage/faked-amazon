import '../styles/globals.css';
import { StoreProvider } from '../store/store';

export default function MyApp({ Component, pageProps }: any) {
    return <StoreProvider><Component {...pageProps} /></StoreProvider>;
}