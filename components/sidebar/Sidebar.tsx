import AddFolder from './AddFolder'
import FolderItem from './FolderItem'
import { AllTaskIcon } from '../icons/Icons'
import { AddFolderType } from '@/types'
import randomColor from 'randomcolor'
import Link from 'next/link'
type FildersType = {
  folders: AddFolderType[]
}

const Sidebar: React.FC<FildersType> = ({ folders }) => {
  const colors = randomColor({
    count: 10,
    luminosity: 'random',
  })

  return (
    <aside className='sidebar'>
      <div className='sidebar__content'>
        <ul className='sidebar__main'>
          <li>
            <Link href={'/'} className='sidebar__main-li'>
              <AllTaskIcon />
              <span>All Task</span>
            </Link>
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
