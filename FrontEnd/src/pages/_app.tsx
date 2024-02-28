import RootLayout from '@/app/layout';
import { ReactQueryProvider } from '@/components/ReactQueryProvider';
import { GlobalTheme } from '@/styles/GlobalTheme';
import { ThemeProvider } from '@mui/material/styles';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  
  return (
    <ReactQueryProvider>
      <RootLayout>
        <ThemeProvider theme={GlobalTheme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </RootLayout>
    </ReactQueryProvider>
  );
}

export default MyApp;
