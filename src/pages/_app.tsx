import RootLayout from '@/app/layout';
import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
        <RootLayout>
            <Component {...pageProps} />
        </RootLayout>
    </QueryClientProvider>
  );
}

export default MyApp;
