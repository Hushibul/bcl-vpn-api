import fs from fs;
import path from path;

export const deleteTheFile = (url) =>  {
  const filePath = path.join(__dirname, url);

  fs.unlinkSync(filePath);
}

