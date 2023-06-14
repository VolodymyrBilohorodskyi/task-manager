import { taskType } from '@/types'
import { TitleEditIcon } from '../icons/Icons'
import TaskItem from './TaskItem'
import TaskNew from './TaskNew'

type TaskProps = {
  label: string
  tasks: taskType[]
}
const Tasks: React.FC<TaskProps> = ({ label, tasks }) => {
  return (
    <main className='task'>
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
