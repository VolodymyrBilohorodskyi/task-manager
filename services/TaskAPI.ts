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

export const GetAllTaskFetch = async () => {
  const response = await fetch('http://localhost:3000/api/task', { next: { revalidate: 0 } })
  return await response.json()
}

export const DeleteTaskFetch = async (taskId: string) => {
  const response = await fetch(`http://localhost:3000/api/task/${taskId}`, {
    method: 'DELETE',
    cache: 'no-store',
  })
  if (response.ok) {
    console.log('Delete success')
  } else {
    console.log(response.text)
  }
}

export const DeleteAllTaskFetch = async (label: string) => {
  const response = await fetch(`http://localhost:3000/api/task/delete/${label}`, {
    method: 'DELETE',
    cache: 'no-store',
  })
  if (response.ok) {
    console.log('Delete success ALL TASK')
    return response.ok
  } else {
    console.log(response.text)
  }
}

export const PatchTaskFetch = async (taskId: string, completed: boolean) => {
  const response = await fetch(`http://localhost:3000/api/task/${taskId}`, {
    method: 'PATCH',
    next: { revalidate: 0 },
    body: JSON.stringify({ completed }),
  })
  if (response.ok) {
    console.log('PATCH success')
  } else {
    console.log(response.text)
  }
}
