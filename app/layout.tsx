import Sidebar from '@/components/sidebar/Sidebar'
import { GetFolderFetch } from '@/services/FolderAPI'
import '@/style/globals.scss'
import { AddFolderType } from '@/types'
import { Roboto } from 'next/font/google'

const roboto = Roboto({ weight: ['400'], subsets: ['latin'] })

export const metadata = {
  title: 'Task manager',
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const folderData: AddFolderType[] = await GetFolderFetch()
  return (
    <html lang='en'>
      <body className={roboto.className}>
        <div className='container'>
          <div className='wrapper'>
            <Sidebar folders={folderData} />
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
