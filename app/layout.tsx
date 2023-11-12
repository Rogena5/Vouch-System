import type { Metadata } from 'next'
import './globals.css'
import Header from '../components/Header'
import React from 'react'

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
    <html lang="en">
     
      <body className=''> <Header/> {children}</body>
    </html>
  )
}
