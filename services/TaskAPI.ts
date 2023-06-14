type addTaskType = {
  title: string
  category: string
  completed: boolean
}

export const addTaskFetch = async (data: addTaskType) => {
  try {
    const res = await fetch('/api/task', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    return res
  } catch (error) {
    return error
  }
}

export const getTaskFetch = async (label: string) => {
  const response = await fetch(`http://localhost:3000/api/task/${label}`, {
    next: { revalidate: 0 },
  })
  return await response.json()
}

export const DeleteTaskFetch = async (taskId: string) => {
  const response = await fetch(`http://localhost:3000/api/task/${taskId}`, {
    method: 'DELETE',
    next: { revalidate: 0 },
  })
  if (response.ok) {
    console.log('Delete success')
  } else {
    console.log(response.text)
  }
}
