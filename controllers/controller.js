// const { readAllFiles } = require('../utils/utils');
const { exec } = require('child_process');
const command = 'find ../uploads -type f -mmin +5 -delete';

const uploadFile = async (req, res, next) => {
  res.status(200).json({ success: true });
  try {
  } catch (err) {
    next(err);
  }
};

const deleteFile = async (req, res, next) => {
  try {
    exec(command, (error, stdout, stderr) => {
      if (error) {
        console.error(`Error: ${error.message}`);
        return;
      }
      if (stderr) {
        console.error(`Error: ${stderr}`);
        return;
      }
      console.log(`Command output: ${stdout}`);
      // res.status(200).json({ success: true, output: stdout });
    });
  } catch (err) {
    next(err);
  }
};

module.exports = { uploadFile, deleteFile };
