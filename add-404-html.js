const fs = require('fs');
const path = require('path');
const htmlPath = path.resolve(__dirname + '/dist/ngx-designable/index.html');
const errorPath = path.resolve(__dirname + '/dist/ngx-designable/404.html');

fs.copyFileSync(htmlPath, errorPath, fs.constants.COPYFILE_FICLONE);
