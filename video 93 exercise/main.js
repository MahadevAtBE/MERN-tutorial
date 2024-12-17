import fs from "fs/promises"
import fsn from "fs"
import path from "path"
const log = console.log


const basePath = "d:\\backend\\node\\video 93 exercise"

let file = await fs.readdir(basePath) // to access the file from given directry named ad file array

for (const item of file) { // iteratimg the file array
  let ext = item.split(".")[item.split(".").length - 1]  // giving only extentions

  if (ext != "js" && ext != "json" && item.split(".").length > 1) { // excluded js or json and folders
    if (fsn.existsSync(path.join(basePath, ext))) {
      // move file  to directry 
      fs.rename(path.join(basePath,item), path.join(basePath,ext,item))
    }
    else {
      fs.mkdir(ext)
      fs.rename(path.join(basePath,item), path.join(basePath,ext,item))
    }
  }
}