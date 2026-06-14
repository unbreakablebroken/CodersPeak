import mongoose from 'mongoose';

const lessonSchema = mongoose.Schema(
  {
    title: { type: String, required: true },
    track: { type: String, required: true, enum: ['frontend', 'automation', 'other'] },
    language: { type: String, required: true }, 
    content: { type: String, required: true },  
    order: { type: Number, required: true }
  },
  { timestamps: true }
);

const Lesson = mongoose.model('Lesson', lessonSchema);
export default Lesson;