'use client'
import { useState } from 'react'
import { ClosePopupIcon } from '../icons/Icons'

type ActiveAdd = {
  handleActiveAdd: () => void
}

const AddFolderFetch = async (nameFolder: string) => {
  await fetch('/api/folder', {
    method: 'POST',
    body: JSON.stringify(nameFolder),
  })
}

const AddFolder: React.FC<ActiveAdd> = ({ handleActiveAdd }) => {
  const [folderName, setFolderName] = useState('')

  const handleSendName = () => {
    AddFolderFetch(folderName)
  }

  return (
    <div className='sidebar__popup-add'>
      <div className='sidebar__popup-close' onClick={handleActiveAdd}>
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
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <button className='sidebar__add-btn' onClick={handleSendName}>
        Add Folder
      </button>
    </div>
  )
}

export default AddFolder
