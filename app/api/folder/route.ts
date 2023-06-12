import connectDB from '@/lib/mongodb'
import Category from '@/models/category'
import { NextResponse } from 'next/server'

export const POST = async (req: Request) => {
  const data = await req.json()

  try {
    await connectDB()
    await Category.create(data)

    return NextResponse.json({
      msg: ['Message sent successfully'],
      success: true,
    })
  } catch (error) {
    console.log(error)
    return NextResponse.json({ msg: error })
  }
}

export const GET = async () => {
  try {
    await connectDB()
    const response = await Category.find()
    return NextResponse.json(response)
  } catch (error) {
    console.log(error)
    return NextResponse.json({ msg: ['ERROR'] })
  }
}
