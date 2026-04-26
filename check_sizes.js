import fs from 'fs';
import path from 'path';

function getFiles(dir, files = []) {
  try {
    const list = fs.readdirSync(dir);
    for (const file of list) {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      if (stat.isDirectory()) {
        getFiles(filePath, files);
      } else {
        files.push({
          path: filePath,
          size: stat.size
        });
      }
    }
  } catch (error) {
    console.error(`Error reading ${dir}: ${error.message}`);
  }
  return files;
}

const files = getFiles('./SOURCE');
const largeFiles = files.filter(f => f.size > 5 * 1024 * 1024);

if (largeFiles.length === 0) {
    console.log("None of the files in SOURCE are over 5MB.");
} else {
    console.log("Large files (>5MB):");
    for (const file of largeFiles) {
        console.log(`${file.path}: ${(file.size / (1024 * 1024)).toFixed(2)} MB`);
    }
}
