import { TitleEditIcon } from '../icons/Icons'
import TaskItem from './TaskItem'
import TaskNew from './TaskNew'

const Tasks = () => {
  return (
    <main className='task'>
      <div className='task__title'>
        <h3>Task Title</h3>
        <TitleEditIcon />
      </div>
      <div className='task__separate'></div>
      <div className='task__list'>
        <TaskItem />
        <TaskItem />
        <TaskItem />
        <TaskItem />
        <TaskItem />
        <TaskItem />
        <TaskItem />
      </div>
      <TaskNew />
    </main>
  )
}

export default Tasks
