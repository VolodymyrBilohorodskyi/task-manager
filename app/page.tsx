import Tasks from '@/components/tasks/Tasks'
import Sidebar from '@/components/sidebar/Sidebar'

export default function Home() {
  return (
    <div className='container'>
      <div className='wrapper'>
        <Sidebar />
        <Tasks />
      </div>
    </div>
  )
}
