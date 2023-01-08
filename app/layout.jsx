import { Inter } from '@next/font/google'

import '../styles/index.css'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang='en' className={inter.className}>
      <body>{children}</body>
    </html>
  )
}
