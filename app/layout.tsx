import '@/tailwind.css'

import React from 'react'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="кг">
      <body>{children}</body>
    </html>
  )
}
