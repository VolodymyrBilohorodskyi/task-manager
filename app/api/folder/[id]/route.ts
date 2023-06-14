import connectDB from '@/lib/mongodb'
import Category from '@/models/category'
import { NextResponse } from 'next/server'

export const DELETE = async (req: Request, { params }: { params: { id: string } }) => {
  const id = params.id
  try {
    await connectDB()
    const response = await Category.deleteOne({ _id: id })
    return NextResponse.json(response)
  } catch (error) {
    console.log(error)
    return NextResponse.json({ msg: ['ERROR'] })
  }
}
