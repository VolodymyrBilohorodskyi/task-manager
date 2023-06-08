'use client'
import { useState, useEffect } from 'react'
import AddFolder from './AddFolder'
import TaskItem from './TaskItem'
import { AddFolderIcon, AllTaskIcon } from '../icons/Icons'

const Sidebar = () => {
  const [isActive, setActive] = useState(false)
  const [folder, setFolder] = useState<any>(null)

  useEffect(() => {
    const folders = async () => {
      const response = await fetch('/api/folder')
      const { data } = await response.json()
      setFolder(data)
    }
    folders()
  }, [])

  const handleActiveAdd = () => {
    setActive(!isActive)
  }

  return (
    <aside className='sidebar'>
      <div className='sidebar__content'>
        <ul className='sidebar__main'>
          <li>
            <AllTaskIcon />
            <span>All Task</span>
          </li>
        </ul>
        <ul className='sidebar__list'>
          {folder &&
            folder.map((item: any) => {
              return <TaskItem {...item} key={item.title} />
            })}
        </ul>
        <div className='sidebar__addfolder'>
          <button className='sidebar__add-folder' onClick={handleActiveAdd}>
            <AddFolderIcon />
            Add fodler
          </button>
        </div>
        {isActive && <AddFolder handleActiveAdd={handleActiveAdd} />}
      </div>
    </aside>
  )
}

export default Sidebar
