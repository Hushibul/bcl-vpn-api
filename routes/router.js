// import { Router } from 'express';

// import { deleteFile, uploadFile } from '../controllers/controller.js';

// import upload from '../middlewares/multer.js';
const express = require('express');

const upload = require('../middlewares/multer');

const { deleteFile, uploadFile } = require('../controllers/controller');

const router = express.Router();

router.post('/upload', upload.single('avatar'), uploadFile);

router.delete('/deleteFile', deleteFile);

module.exports = router;

// export default router;
