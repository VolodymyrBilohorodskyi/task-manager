import '@/style/globals.scss'
import { Roboto } from 'next/font/google'

const roboto = Roboto({ weight: ['400'], subsets: ['latin'] })

export const metadata = {
  title: 'Task manager',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={roboto.className}>{children}</body>
    </html>
  )
}
