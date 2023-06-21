import connectDB from '@/lib/mongodb'
import Task from '@/models/task'
import { NextResponse } from 'next/server'

export const DELETE = async (req: Request, { params }: { params: { label: string } }) => {
  const label = params.label
  try {
    await connectDB()
    const response = await Task.deleteMany({ category: label })
    return NextResponse.json(response)
  } catch (error) {
    console.log(error)
    return NextResponse.json({ msg: ['ERROR'] })
  }
}
