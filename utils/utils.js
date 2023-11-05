const fs = require('fs');
const path = require('path');
const upload = require('../middlewares/multer');

const deleteTheFile = (url) => {
  const filePath = path.join(__dirname, url);

  fs.unlinkSync(filePath);
};

const directoryPath = path.join(__dirname, '../uploads');

const getTimeAndDate = (utfString) => {
  let dateAndTime = utfString.toString().split('T')[0];
  let time = dateAndTime.split(' ')[4];

  // console.log('Date', dateAndTime);

  let year = utfString.getFullYear();
  let month = utfString.getMonth();
  let day = utfString.getDate();
  let hour = time.split(':')[0];
  let minute = time.split(':')[1];
  // console.log(month, year, day, hour, minute);

  return { year, month, day, hour, minute };
};

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

        const fileCreationInfo = getTimeAndDate(fileCreationTime);
        const deleteRequestInfo = getTimeAndDate(new Date(Date.now()));
        // console.log('FileDate', deleteRequestInfo.minute);

        if (
          deleteRequestInfo.year >= fileCreationInfo.year &&
          deleteRequestInfo.month >= fileCreationInfo.month &&
          deleteRequestInfo.day >= fileCreationInfo.day &&
          deleteRequestInfo.hour >= fileCreationInfo.hour &&
          deleteRequestInfo.minute - fileCreationInfo.minute >= 5
        ) {
          console.log('SOme stuff happening');
          const filePath = path.join(directoryPath, file); // Full path to the file
          fs.unlinkSync(filePath);
        }
        console.log(file);
      });
    }
  });
};

module.exports = { deleteTheFile, readAllFiles };
