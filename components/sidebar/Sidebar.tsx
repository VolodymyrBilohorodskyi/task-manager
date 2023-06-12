import AddFolder from './AddFolder'
import FolderItem from './FolderItem'
import { AllTaskIcon } from '../icons/Icons'
import { AddFolderType } from '@/types'
import randomColor from 'randomcolor'

type FildersType = {
  folders: AddFolderType[]
}

const Sidebar: React.FC<FildersType> = ({ folders }) => {
  const colors = randomColor({
    count: 10,
    luminosity: 'dark',
  })
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
        <AddFolder colors={colors} />
      </div>
    </aside>
  )
}

export default Sidebar
