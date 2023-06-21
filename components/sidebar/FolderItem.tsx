'use client'
import { AddFolderType } from '@/types'
import { usePathname, useRouter } from 'next/navigation'
import { FolderRemoveIcon } from '../icons/Icons'
import { DeleteFolderFetch } from '@/services/FolderAPI'
import Link from 'next/link'
import { DeleteAllTaskFetch } from '@/services/TaskAPI'

const FolderItem: React.FC<AddFolderType> = ({ title, _id, color, label }) => {
  const router = useRouter()
  const pathname = usePathname()
  const handleRemoveFolder = async () => {
    const deleteFolder = await DeleteFolderFetch(_id)
    const deleteAllTask = await DeleteAllTaskFetch(label)
    if (deleteFolder && deleteAllTask) {
      router.push('/')
      router.refresh()
    }
  }

  let isActive = false

  if (pathname === `/${label}`) {
    isActive = true
  }

  return (
    <li className={isActive ? 'active' : ''}>
      <Link href={`/${label}`} className='sidebar__list-item'>
        <span className='sidebar__list-color' style={{ backgroundColor: color }}></span>
        <span className='sidebar__list-title'>{title}</span>
        <button className='sidebar__list-remove' onClick={() => handleRemoveFolder()}>
          <FolderRemoveIcon />
        </button>
      </Link>
    </li>
  )
}

export default FolderItem
