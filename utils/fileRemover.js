import fs from "fs";
const fileRemover = (filename) =>{
    fs.unlink(path.join(__dirname, '../uploads', filename), function(err){
        if(err && err.code == "ENOENT"){
            // file doesnt exist
            console.log(`File ${filename} doesn't exist, won't remove it.`)
        }else if(err){
            console.log(`Error occured while trying to remove file ${filename}`)

        }else{
            console.log(`removed ${filename}`);
        }
    });
};

export {fileRemover};