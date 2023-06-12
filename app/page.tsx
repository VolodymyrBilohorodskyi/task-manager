import Tasks from '@/components/tasks/Tasks'
import Sidebar from '@/components/sidebar/Sidebar'
import { AddFolderType } from '@/types'
import { GetFolderFetch } from '@/services/FolderAPI'

export default async function Home() {
  const folderData: AddFolderType[] = await GetFolderFetch()

  return (
    <div className='container'>
      <div className='wrapper'>
        <Sidebar folders={folderData} />
        <Tasks />
      </div>
    </div>
  )
}
