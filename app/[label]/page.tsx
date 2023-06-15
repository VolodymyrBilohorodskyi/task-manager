import Tasks from '@/components/tasks/Tasks'
import { GetFolderFetch } from '@/services/FolderAPI'
import { getTaskFetch } from '@/services/TaskAPI'

type labelParams = {
  params: {
    label: string
  }
}

const FolderNamePage = async ({ params }: labelParams) => {
  const tasks = await getTaskFetch(params.label)
  const taskFolder = await GetFolderFetch(params.label)

  return <Tasks label={params.label} tasks={tasks} folder={taskFolder} />
}
export default FolderNamePage
