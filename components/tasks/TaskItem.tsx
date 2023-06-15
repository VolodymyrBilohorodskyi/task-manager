'use client'
import { taskType } from '@/types'
import { TaskCheckedIcon, TaskUnCheckedIcon, FolderRemoveIcon } from '../icons/Icons'
import { DeleteTaskFetch, PatchTaskFetch } from '@/services/TaskAPI'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

const TaskItem: React.FC<taskType> = ({ _id, title, completed }) => {
  const [isCompleted, setCompleted] = useState(completed)
  const router = useRouter()
  const handleRemoveTask = () => {
    DeleteTaskFetch(_id)
    router.refresh()
  }

  const changeCompleted = () => {
    setCompleted(!isCompleted)
    PatchTaskFetch(_id, !isCompleted)
  }

  return (
    <div className='task__item'>
      <div className='task__cheked' onClick={changeCompleted}>
        {isCompleted ? <TaskCheckedIcon /> : <TaskUnCheckedIcon />}
      </div>
      <span className={isCompleted ? 'task__completed task__name' : 'task__name'}>{title}</span>
      <button className='task__remove' onClick={handleRemoveTask}>
        <FolderRemoveIcon />
      </button>
    </div>
  )
}

export default TaskItem
