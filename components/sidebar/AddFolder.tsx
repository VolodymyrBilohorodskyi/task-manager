'use client'
import { useState } from 'react'
import { AddFolderIcon, ClosePopupIcon } from '../icons/Icons'
import { addFolderFetch } from '@/services/addfolder'

const AddFolder: React.FC = () => {
  const [isActive, setActive] = useState(false)
  const [folderName, setFolderName] = useState('')

  const handleAddFolder = () => {
    setActive(!isActive)
  }

  const folderFetch = () => {
    addFolderFetch(folderName)
  }

  return (
    <div className='sidebar__addfolder'>
      <button className='sidebar__add-folder' onClick={handleAddFolder}>
        <AddFolderIcon />
        Add folder
      </button>
      {isActive && (
        <div className='sidebar__popup-add'>
          <div className='sidebar__popup-close' onClick={handleAddFolder}>
            <ClosePopupIcon />
          </div>
          <input
            type='text'
            placeholder='Folder name'
            className='sidebar__folder-title'
            value={folderName}
            onChange={(e) => setFolderName(e.target.value)}
          />
          <div className='sidebar__color-block'>
            <div></div>
          </div>
          <button className='sidebar__add-btn' onClick={folderFetch}>
            Add Folder
          </button>
        </div>
      )}
    </div>
  )
}

export default AddFolder
