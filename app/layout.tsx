
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import SesProvider from './providers/SessProvider'
import { Button, CssBaseline } from '@mui/material'
import ThemesProvider, { ColorModeContext, useColorMode } from './providers/ThemesProvider'
import ThemeButton from './components/ThemeButton'
import Header from './components/Header'
import SideMenu from './components/SideMenu/SideMenu'
import { useSession } from 'next-auth/react'
import UserProvider from './providers/UserProvider'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Shipesa',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  
  return (
    <html lang="en">
      <body className={inter.className}>
         <ThemesProvider currentMode='dark'>
            <SesProvider>
              <CssBaseline />
              <Header ColorModeContext={ColorModeContext}/>
              <UserProvider>
                {children}
              </UserProvider>
            </SesProvider>
         </ThemesProvider>
      </body>
    </html>
  )
}
