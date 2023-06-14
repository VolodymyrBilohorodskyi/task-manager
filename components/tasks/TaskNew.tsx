'use client'
import { useState, useRef } from 'react'
import { AddFolderIcon } from '../icons/Icons'
import { addTaskFetch } from '@/services/TaskAPI'
import { useRouter } from 'next/navigation'

const TaskNew: React.FC<{ label: string }> = ({ label }) => {
  const router = useRouter()
  const [addTask, setAddTask] = useState(false)
  const [taskName, setTaskName] = useState('')

  const taskRef = useRef(null)

  const handleChangeAddTask = () => {
    setAddTask(!addTask)
  }

  const postTaskFetch = async () => {
    const data = {
      title: taskName,
      category: label,
      completed: false,
    }
    await addTaskFetch(data)
    setAddTask(!addTask)
    setTaskName('')
    router.refresh()
  }

  return (
    <div className='task__new'>
      {addTask ? (
        <div className='task__add-block'>
          <input
            ref={taskRef}
            className='task__add-field'
            placeholder='Text task'
            value={taskName}
            onChange={(event) => setTaskName(event.target.value)}
          />
          <div className='task__add-action'>
            <button className='task__add' onClick={postTaskFetch}>
              Add task
            </button>
            <button className='task__cancel' onClick={handleChangeAddTask}>
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <button className='task__add-btn' onClick={handleChangeAddTask}>
          <AddFolderIcon />
          <span>Add new task</span>
        </button>
      )}
    </div>
  )
}

export default TaskNew
