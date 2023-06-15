export const addFolderFetch = async (folderData: { title: string; color: string }) => {
  const data = {
    title: folderData.title,
    label: folderData.title.replace(/\s/g, '').toLowerCase(),
    color: folderData.color,
  }
  await fetch('/api/folder', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(data),
  })
}

export const GetAllFolderFetch = async () => {
  const response = await fetch('http://localhost:3000/api/folder', { next: { revalidate: 0 } })
  return await response.json()
}

export const GetFolderFetch = async (folderLabel: string) => {
  const response = await fetch(`http://localhost:3000/api/folder/${folderLabel}`, {
    next: { revalidate: 0 },
  })
  return await response.json()
}

export const DeleteFolderFetch = async (folderId: string) => {
  const response = await fetch(`http://localhost:3000/api/folder/${folderId}`, {
    method: 'DELETE',
    next: { revalidate: 0 },
  })
  if (response.ok) {
    console.log('Delete success')
  } else {
    console.log(response.text)
  }
}
