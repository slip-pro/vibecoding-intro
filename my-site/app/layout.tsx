import './globals.css'
import React from 'react'

export const metadata = {
  title: 'Сергей Липчанский — визитка',
  description: 'Персональная визитка Сергея Липчанского',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body>
        {children}
      </body>
    </html>
  )
}
