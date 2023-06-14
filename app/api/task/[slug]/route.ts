import connectDB from '@/lib/mongodb'
import Task from '@/models/task'
import { NextResponse } from 'next/server'

export const GET = async (req: Request, { params }: { params: { slug: string } }) => {
  const slug = params.slug
  try {
    await connectDB()
    const response = await Task.find({ category: slug })
    return NextResponse.json(response)
  } catch (error) {
    console.log(error)
    return NextResponse.json({ msg: ['ERROR'] })
  }
}

export const DELETE = async (req: Request, { params }: { params: { slug: string } }) => {
  const id = params.slug
  try {
    await connectDB()
    const response = await Task.deleteOne({ _id: id })
    return NextResponse.json(response)
  } catch (error) {
    console.log(error)
    return NextResponse.json({ msg: ['ERROR'] })
  }
}
