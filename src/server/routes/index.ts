import * as express from 'express';
import blogsRouter from './api/blogs';
import emailRouter from './api/email';

const router = express.Router();

router.use('/blogs', blogsRouter);
router.use('/email-list', emailRouter);

export default router;