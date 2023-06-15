import connectDB from '@/lib/mongodb'
import Task from '@/models/task'
import { NextResponse } from 'next/server'

export const POST = async (req: Request) => {
  const data = await req.json()

  try {
    await connectDB()
    await Task.create(data)

    return NextResponse.json({
      msg: ['Task success added'],
      success: true,
    })
  } catch (error) {
    console.log(error)
    return NextResponse.json({ msg: error, success: false })
  }
}

export const GET = async () => {
  try {
    await connectDB()
    const response = await Task.find()
    return NextResponse.json(response)
  } catch (error) {
    console.log(error)
    return NextResponse.json({ msg: ['ERROR'] })
  }
}
