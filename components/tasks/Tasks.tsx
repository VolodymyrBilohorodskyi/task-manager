import { AddFolderType, taskType } from '@/types'
import { TitleEditIcon } from '../icons/Icons'
import TaskItem from './TaskItem'
import TaskNew from './TaskNew'
import { UpdateFolderNameFetch } from '@/services/FolderAPI'

type TaskProps = {
  label?: string
  tasks?: taskType[]
  folder?: AddFolderType
}
const Tasks: React.FC<TaskProps> = ({ label, tasks, folder }) => {
  return (
    <main className='task'>
      <div className='task__title'>
        <h3 style={{ color: folder?.color }}>{folder?.title ? folder?.title : 'All Tasks'}</h3>
        {folder?.title && <TitleEditIcon />}
      </div>
      <div className='task__separate' style={{ backgroundColor: folder?.color }}></div>
      <div className='task__list'>
        {tasks &&
          tasks.map((item: taskType) => {
            return <TaskItem key={item._id} {...item} />
          })}
      </div>
      {label && <TaskNew label={label} />}
    </main>
  )
}

export default Tasks
