import { NextResponse } from 'next/server'

export const POST = async (request: Request) => {
  const nameFolder = await request.json()

  const data = {
    title: nameFolder,
    label: nameFolder.replace(/\s/g, '').toLowerCase(),
    color: '#ff0000',
  }

  const res = await fetch('http://localhost:3333/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
  return NextResponse.json({ res })
}

export const GET = async () => {
  const res = await fetch('http://localhost:3333/')
  const data = await res.json()
  return NextResponse.json({ data })
}
