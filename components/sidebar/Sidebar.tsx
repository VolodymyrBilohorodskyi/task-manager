import AddFolder from './AddFolder'
import FolderItem from './FolderItem'
import { AllTaskIcon } from '../icons/Icons'
import { AddFolderType } from '@/types'

const Sidebar = ({ folders }: { folders: AddFolderType[] }) => {
  console.log(folders)

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
          {folders &&
            folders.map((item: AddFolderType) => {
              return <FolderItem key={item._id} {...item} />
            })}
        </ul>
        <AddFolder />
      </div>
    </aside>
  )
}

export default Sidebar
