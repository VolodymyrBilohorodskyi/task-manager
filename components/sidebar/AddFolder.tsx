'use client'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { AddFolderIcon, ClosePopupIcon } from '../icons/Icons'
import { addFolderFetch } from '@/services/FolderAPI'

const AddFolder: React.FC = () => {
  const router = useRouter()
  const [isActive, setActive] = useState(false)
  const [folderName, setFolderName] = useState('')

  const handleOpenFolder = () => {
    setActive(!isActive)
  }

  const handleAddFolder = async () => {
    if (folderName.length > 2) {
      await addFolderFetch(folderName)
      setActive(!isActive)
      setFolderName('')
      router.refresh()
    }
  }

  const handleKeyAddFolder: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === 'Enter' && e.code === 'Enter') {
      handleAddFolder()
    }
  }

  return (
    <div className='sidebar__addfolder'>
      <button className='sidebar__add-folder' onClick={handleOpenFolder}>
        <AddFolderIcon />
        Add folder
      </button>
      {isActive && (
        <div className='sidebar__popup-add'>
          <div className='sidebar__popup-close' onClick={handleOpenFolder}>
            <ClosePopupIcon />
          </div>
          <input
            type='text'
            placeholder='Folder name'
            className='sidebar__folder-title'
            value={folderName}
            onChange={(e) => setFolderName(e.target.value)}
            onKeyDown={(e) => {
              handleKeyAddFolder(e)
            }}
          />
          <div className='sidebar__color-block'>
            <div></div>
          </div>
          <button className='sidebar__add-btn' onClick={handleAddFolder}>
            Add Folder
          </button>
        </div>
      )}
    </div>
  )
}

export default AddFolder
