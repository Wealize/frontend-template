const fs = require("fs");

function deleteFolderRecursive(path) {
  if (fs.existsSync(path) && fs.lstatSync(path).isDirectory()) {
    fs.readdirSync(path).forEach(function (file, index) {
      const curPath = path + "/" + file;

      if (fs.lstatSync(curPath).isDirectory()) {
        // recurse
        deleteFolderRecursive(curPath);
      } else {
        // delete file
        fs.unlinkSync(curPath);
      }
    });

  // Deleting directory "${path}"...`);
    fs.rmdirSync(path);
  }
}
 
// Cleaning working tree after testing
deleteFolderRecursive("./.nyc_output");
deleteFolderRecursive("./coverage");
deleteFolderRecursive("./jest-coverage");
deleteFolderRecursive("./cypress-coverage");
deleteFolderRecursive("./reports");

