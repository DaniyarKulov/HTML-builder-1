const path = require('path');
const fs = require('fs');

const bundle = path.join(__dirname, 'project-dist', 'bundle.css');

const style = path.join(__dirname, 'styles');

fs.readdir(style, 'utf-8',  (err, files) => {
  if (err) console.log(err); 
  fs.writeFile(bundle, '',  (err) => {
    if (err) console.log(err);
  });
  files.forEach( (item) => {
    if (path.extname(item) === '.css') {
      const creatBundle = fs.createReadStream(path.join(style, item));
      creatBundle.on('data',  (data) => {
        fs.appendFile(bundle, data,  (err) => {
          if (err) console.log(err); 
        });
      });
    }
  });
});
