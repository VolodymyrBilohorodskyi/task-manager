import mongoose from 'mongoose'

const Schema = mongoose.Schema

const taskSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    required: true,
    default: false,
  },
})

const Task = mongoose.models.Task || mongoose.model('Task', taskSchema)

export default Task
