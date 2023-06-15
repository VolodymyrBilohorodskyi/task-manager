import Tasks from '@/components/tasks/Tasks'
import { GetAllTaskFetch } from '@/services/TaskAPI'

const Home = async () => {
  const tasks = await GetAllTaskFetch()
  return <Tasks tasks={tasks} />
}

export default Home
