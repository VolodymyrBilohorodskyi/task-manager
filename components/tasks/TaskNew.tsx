'use client'
import { useState } from 'react'
import { AddFolderIcon } from '../icons/Icons'

const TaskNew: React.FC = () => {
  const [addTask, setAddTask] = useState(false)

  const handleAddTask = () => {
    setAddTask(!addTask)
  }

  return (
    <div className='task__new'>
      {addTask ? (
        <div className='task__add-block'>
          <input className='task__add-field' placeholder='Text task' />
          <div className='task__add-action'>
            <button className='task__add'>Add task</button>
            <button className='task__cancel' onClick={handleAddTask}>
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <button className='task__add-btn' onClick={handleAddTask}>
          <AddFolderIcon />
          <span>Add new task</span>
        </button>
      )}
    </div>
  )
}

export default TaskNew
