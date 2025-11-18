import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const TaskSchema = new Schema({
  title:  String,
  description:  String ,
  deadline: Date,
  done: Boolean,
  priority: {type: String, enum: ["Low","Medium","High"]},
  created_at: {type: Date, default: Date.now},
  updated_at: {type: Date, default: Date.now}
});

export default mongoose.model('Task', TaskSchema);
