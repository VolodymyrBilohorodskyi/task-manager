'use client'

import { taskType } from '@/types'
import { TaskCheckedIcon, TaskUnCheckedIcon, FolderRemoveIcon, TitleEditIcon } from '../icons/Icons'
import { DeleteTaskFetch } from '@/services/TaskAPI'
import { useRouter } from 'next/navigation'

const TaskItem: React.FC<taskType> = ({ _id, title, completed }) => {
  const router = useRouter()
  const handleRemoveTask = () => {
    DeleteTaskFetch(_id)
    router.refresh()
  }
  return (
    <>
      <div className='task__title'>
        <h3>{title}</h3>
        <TitleEditIcon />
      </div>
      <div className='task__separate'></div>
      <div className='task__item'>
        <div className='task__cheked'>
          {completed ? <TaskCheckedIcon /> : <TaskUnCheckedIcon />}
        </div>
        <span className={completed ? 'task__completed task__name' : 'task__name'}>{title}</span>
        <button className='task__remove' onClick={handleRemoveTask}>
          <FolderRemoveIcon />
        </button>
      </div>
    </>
  )
}

export default TaskItem
