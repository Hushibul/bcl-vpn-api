const { readAllFiles } = require('../utils/utils');

const uploadFile = async (req, res, next) => {
  res.status(200).json({ success: true });
  try {
  } catch (err) {
    next(err);
  }
};

const deleteFile = () => {
  readAllFiles();
};

module.exports = { uploadFile, deleteFile };
