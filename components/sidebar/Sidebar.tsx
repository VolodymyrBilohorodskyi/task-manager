import AddFolder from './AddFolder'
import TaskItem from './TaskItem'
import { AllTaskIcon } from '../icons/Icons'
import { GetFolderFetch } from '@/services/addfolder'
import useSWR from 'swr'

const fetcher = async (url: string) => {
  const response = await fetch(url)
  const data = await response.json()
  return data
}

const Sidebar = async () => {
  const data = await GetFolderFetch()

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
            data.map((item: any) => {
              return <TaskItem key={item.title} {...item} />
            })}
        </ul>
        <AddFolder />
      </div>
    </aside>
  )
}

export default Sidebar
