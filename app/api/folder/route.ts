import connectDB from '@/lib/mongodb'
import Category from '@/models/category'
import { NextResponse } from 'next/server'
import mongoose from 'mongoose'

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
    if (error instanceof mongoose.Error.ValidationError) {
      let errorList = []
      for (let e in error.errors) {
        errorList.push(error.errors[e].message)
      }
      console.log(errorList)
      return NextResponse.json({ msg: errorList })
    } else {
      return NextResponse.json({ msg: ['Unable to send message.'] })
    }
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
