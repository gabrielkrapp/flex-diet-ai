import RootLayout from '@/app/layout';
import { ReactQueryProvider } from '@/components/ReactQueryProvider';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  
  return (
    <ReactQueryProvider>
        <RootLayout>
            <Component {...pageProps} />
        </RootLayout>
    </ReactQueryProvider>
  );
}

export default MyApp;
