import { FolderRemoveIcon } from '../icons/Icons'

const TaskItem = ({ title }: any) => {
  return (
    <li>
      <span className='sidebar__listColor'></span>
      <span className='sidebar__listTitle'>{title}</span>
      <div className='sidebar__listRemove'>
        <FolderRemoveIcon />
      </div>
    </li>
  )
}

export default TaskItem
