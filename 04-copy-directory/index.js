const fs = require('fs/promises');
const path = require('path');

const main = path.resolve(__dirname, 'files');
const copy = path.resolve(__dirname, 'files-copy');

fs.rm(copy,{recursive:true, force:true}).then(()=>{
  fs.mkdir(copy,{recursive:true}).then(()=>{
    fs.readdir(main).then((res)=>{
      res.forEach((item) => {
        const itemMain = path.resolve(main, item);
        const itemCopy = path.resolve(copy, item);
        fs.copyFile(itemMain, itemCopy);
      });
    });
  });
});