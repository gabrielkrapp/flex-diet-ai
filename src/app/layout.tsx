'use client'

import { Inter } from 'next/font/google'
import '../styles/globals.css'
import { usePathname } from 'next/navigation'
import { CheckIsPublicRoute } from '@/functions/check-is-public-route'
import PrivateRouter from '@/components/PrivateRouter'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const pathname = usePathname()
  const isPublicPage = CheckIsPublicRoute(pathname!)

  return (
    <div className="root-layout">
      {isPublicPage ? (
        children
      ) : (
        <PrivateRouter>{children}</PrivateRouter>
      )}
    </div>
  )
}
