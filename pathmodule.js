const path = require('path');

// path.basename('C:\\temp\\myfile.html');

a = path.basename('C:\\temp\\myfile.html');
console.log(a)

//to know directory
a2 =path.dirname('C:\\temp\\myfile.html');
console.log(a2)

//to acknowledge extension of a file
const a3 = path.extname(__filename)
console.log(__filename)
console.log(a3)