import Lesson from '../models/lesson.js';

// @desc    Get all lessons (or filter by track)
// @route   GET /api/lessons
// @access  Public
export const getLessons = async (req, res) => {
  try {
    const { track } = req.query;
    const query = track ? { track } : {};
    const lessons = await Lesson.find(query).sort({ order: 1 });
    res.status(200).json(lessons);
  } catch (error) {
    res.status(500).json({ message: 'Server Error: ' + error.message });
  }
};

// @desc    Create a new lesson (Admin Upload)
// @route   POST /api/lessons
// @access  Public
export const createLesson = async (req, res) => {
  try {
    const { title, track, language, content, order } = req.body;

    if (!title || !track || !language || !content || !order) {
      return res.status(400).json({ message: 'Please include all fields' });
    }

    const lesson = new Lesson({ title, track, language, content, order });
    const createdLesson = await lesson.save();

    res.status(201).json(createdLesson);
  } catch (error) {
    res.status(400).json({ message: 'Invalid lesson data: ' + error.message });
  }
};