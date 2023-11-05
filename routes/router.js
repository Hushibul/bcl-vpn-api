const express = require('express');

const upload = require('../middlewares/multer');

const { deleteFile, uploadFile } = require('../controllers/controller');

const router = express.Router();

router.post('/upload', upload.single('avatar'), uploadFile);

router.post('/delete', deleteFile);

module.exports = router;
