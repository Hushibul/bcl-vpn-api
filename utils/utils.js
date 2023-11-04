// import fs from fs;
// import path from path;

const fs = require('fs');
const path = require('path');

const deleteTheFile = (url) => {
  const filePath = path.join(__dirname, url);

  fs.unlinkSync(filePath);
};

const directoryPath = path.join(__dirname, '../uploads');

const readAllFiles = () => {
  fs.readdir(directoryPath, (err, files) => {
    if (err) {
      console.error('Error reading directory:', err);
    } else {
      console.log('List of files in the directory:');
      files.forEach((file) => {
        const fileTimeString = file.split('_')[1].split('.')[0];
        const fileTimeStamp = parseInt(fileTimeString);
        const fileCreationTime = new Date(fileTimeStamp);

        if (Date.now() > fileTimeStamp) {
          console.log('Hello');
          // const filePath = path.join(directoryPath, file); // Full path to the file
          // fs.unlinkSync(filePath);
        } else {
          console.log('BYe');
        }
        console.log(creationTime);
        console.log(file);
      });
    }
  });
};

module.exports = { deleteTheFile, readAllFiles };
