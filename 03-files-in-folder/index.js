const { stat } = require('fs');
const path = require('path');

const { readdir  } = require('fs/promises');

const secretFolder= path.join(__dirname, 'secret-folder');

const filesInfo = (folderPath)=>{
  readdir (folderPath, {
    withFileTypes: true
  }).then(res => {
    res.forEach((item) => {

      const file = path.join(folderPath, item.name);

      const output = [];

      stat(file, (err, stat) => {
        if (err) {
          console.log(err);
        }  
        if (stat.isFile()) {
          output.push(item.name.split('.').slice(0, -1).join('.'));
          output.push(path.extname(item.name).slice(1));
          output.push((stat.size/1000) + 'Kb');
          console.log(output.join(' - '));
        }  
      });
    });
  });
};

filesInfo(secretFolder);
