import Tasks from '@/components/tasks/Tasks'
import { getTaskFetch } from '@/services/TaskAPI'
type labelParams = {
  params: {
    label: string
  }
}
const FolderNamePage = async ({ params }: labelParams) => {
  const tasks = await getTaskFetch(params.label)

  return <Tasks label={params.label} tasks={tasks} />
}
export default FolderNamePage
