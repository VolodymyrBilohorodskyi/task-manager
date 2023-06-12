import AddFolder from './AddFolder'
import FolderItem from './FolderItem'
import { AllTaskIcon } from '../icons/Icons'
import { GetFolderFetch } from '@/services/FolderAPI'
import { AddFolderType } from '@/types'

const Sidebar = async () => {
  const data: AddFolderType[] = await GetFolderFetch()

  return (
    <aside className='sidebar'>
      <div className='sidebar__content'>
        <ul className='sidebar__main'>
          <li>
            <AllTaskIcon />
            <span>All Task</span>
          </li>
        </ul>
        <ul className='sidebar__list'>
          {data &&
            data.map((item: AddFolderType, index) => {
              return <FolderItem key={item._id} {...item} />
            })}
        </ul>
        <AddFolder />
      </div>
    </aside>
  )
}

export default Sidebar
