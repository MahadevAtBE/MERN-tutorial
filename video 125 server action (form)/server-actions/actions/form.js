"use server"   // using server component on another file
import fs from "fs/promises"  // fs only use in server component

  export const submitAction =  async (e)=>{   // exporting actiom handeler for submit btn
    let a = fs.writeFile("sekhar.txt",`Name is ${e.get("name")}\nAdd is ${e.get("add")}`)
    console.log(a)
  }