'use client'
import { AddFolderType } from '@/types'
import { usePathname, useRouter } from 'next/navigation'
import { FolderRemoveIcon } from '../icons/Icons'
import { DeleteFolderFetch } from '@/services/FolderAPI'
import Link from 'next/link'

const FolderItem: React.FC<AddFolderType> = ({ title, _id, color, label }) => {
  const router = useRouter()
  const pathname = usePathname()
  const handleRemoveFolder = async () => {
    await DeleteFolderFetch(_id)
    router.refresh()
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
