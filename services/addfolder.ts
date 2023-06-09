export const addFolderFetch = async (folderName: string) => {
  const data = {
    title: folderName,
    label: folderName.replace(/\s/g, '').toLowerCase(),
    color: '#ff0000',
  }
  const response = await fetch('/api/folder', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(data),
  })
}

export const GetFolderFetch = async () => {
  const response = await fetch('http://localhost:3000/api/folder', { next: { revalidate: 0 } })
  return await response.json()
}
