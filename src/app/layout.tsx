import { Inter } from 'next/font/google'
import '../styles/globals.css'
import { ThemeProvider } from '@mui/material/styles'
import { GlobalTheme } from '@/styles/GlobalTheme'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <div className="root-layout">
      <ThemeProvider theme={GlobalTheme}>
        {children}
      </ThemeProvider>
    </div>
  )
}
