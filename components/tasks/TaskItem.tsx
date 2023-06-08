'use client'

import { useState } from 'react'
import { TaskCheckedIcon, TaskUnCheckedIcon } from '../icons/Icons'

const TaskItem = () => {
  const [isChecked, setChecked] = useState(false)
  const handleCheckChange = () => {
    setChecked(!isChecked)
  }
  return (
    <div className='task__item'>
      <div className='task__cheked' onClick={handleCheckChange}>
        {isChecked ? <TaskCheckedIcon /> : <TaskUnCheckedIcon />}
      </div>
      <span className={isChecked ? 'task__completed' : ''}>Learn JavaScript</span>
    </div>
  )
}

export default TaskItem
