// const { readAllFiles } = require('../utils/utils');
const { exec } = require("child_process");
// const command = 'find ../uploads -type f -mmin +5 -delete';

const uploadFile = async (req, res, next) => {
  res.render("index", { message: "File Uploaded Successfully" });
  try {
  } catch (err) {
    res.rend("index", { message: "Could not upload the file" });
    next(err);
  }
};

const deleteFile = async (req, res, next) => {
  try {
    const command = `
       absolutePath="$(pwd)/uploads"
       if [ ! -d "$absolutePath" ]; then
       mkdir -p "$absolutePath"
       fi  
       numberOfDeletedFile=0
        
        for file in "$absolutePath"/*; do
          if [ -f "$file" ]; then
            fileCreateTime=$(stat -f "%B" "$file")
            curTime=$(date +%s)
            timeDiffInMinutes=$(( (curTime - fileCreateTime) / 60 ))
            
            if [ $timeDiffInMinutes -le 30 ]; then
             if rm "$file"; then
             ((numberOfDeletedFile++))
              fi
            fi
          fi
        done
        
        echo "Deleted $numberOfDeletedFile files."
        `;
    exec(command, (error, stdout, stderr) => {
      if (error) {
        console.log(`Error executing the command: ${error.message}`);
        return res.status(400).json({ message: "Error executing the command" });
      }
      if (stderr) {
        console.error(`Command execution resulted in an error: ${stderr}`);
        return res.status(500).send("Command execution error");
      }
      console.log(`Command output: ${stdout}`);
      res
        .status(200)
        .json({ count: stdout, message: "Delete Operation Successfully Run" });
    });
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

module.exports = { uploadFile, deleteFile };
