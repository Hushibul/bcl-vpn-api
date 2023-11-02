import { Router } from 'express';

import { deleteFile, uploadFile } from '../controllers/controller.js';

import upload from '../middlewares/multer.js';

const router = Router();

router.post('/upload', upload.single('avatar'), uploadFile);

router.delete('/deleteFile', deleteFile);

export default router;
