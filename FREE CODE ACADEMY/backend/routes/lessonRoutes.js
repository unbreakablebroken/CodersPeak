import express from 'express';
import { getLessons, createLesson } from '../controllers/lessonController.js';

const router = express.Router();

// Route: GET /api/lessons - Fetches all lessons (or filtered by track)
// Route: POST /api/lessons - Creates a new lesson
router.route('/')
  .get(getLessons)
  .post(createLesson);

export default router;