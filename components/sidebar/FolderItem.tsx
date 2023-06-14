'use client'
import { AddFolderType } from '@/types'
import { useRouter } from 'next/navigation'
import { FolderRemoveIcon } from '../icons/Icons'
import { DeleteFolderFetch } from '@/services/FolderAPI'

const FolderItem: React.FC<AddFolderType> = ({ title, _id, color }) => {
  const router = useRouter()
  const handleRemoveFolder = async () => {
    await DeleteFolderFetch(_id)
    router.refresh()
  }
  return (
    <li>
      <span className='sidebar__list-color' style={{ backgroundColor: color }}></span>
      <span className='sidebar__list-title'>{title}</span>
      <button className='sidebar__list-remove' onClick={() => handleRemoveFolder()}>
        <FolderRemoveIcon />
      </button>
    </li>
  )
}

export default FolderItem
