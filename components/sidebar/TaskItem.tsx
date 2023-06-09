import { FolderRemoveIcon } from '../icons/Icons'

const TaskItem = ({ title }: any) => {
  return (
    <li>
      <span className='sidebar__list-color'></span>
      <span className='sidebar__list-title'>{title}</span>
      <div className='sidebar__list-remove'>
        <FolderRemoveIcon />
      </div>
    </li>
  )
}

export default TaskItem
