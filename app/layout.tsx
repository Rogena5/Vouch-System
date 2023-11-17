import type { Metadata } from 'next'
import './globals.css'
import Header from '../components/Header'
import React from 'react'
import localFont from '@next/font/local'

const poppins = localFont({
  src: [
    {
      path: '../public/fonts/Poppins-Regular.ttf',
      weight: '400'
    },
    {
      path: '../public/fonts/Poppins-Bold.ttf',
      weight: '700'
    },
    {
      path: '../public/fonts/Poppins-Medium.ttf',
      weight: '500'
    },
    {
      path: '../public/fonts/Poppins-Light.ttf',
      weight: '300'
    },
    {
      path: '../public/fonts/Poppins-SemiBold.ttf',
      weight: '600'
    },
  ],
  variable: '--font-poppins'
})

export const metadata: Metadata = {
  title: 'Vouch system',
  description: 'Marketing Agency ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${poppins.variable} font-sans`}>

      <body className=''> <Header /> {children}</body>
    </html>
  )
}
