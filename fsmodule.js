const fs = require('fs');

//To read a file
//readFile le yo function ko full content naauni ber smma read grxa ani tespxi ko command execute garirahanxa 
// tyaivayera finished reading file is printed first rather than contents of readFile


// fs.readFile('file.txt', 'utf8', (err, data)=> {
//     console.log(err, data)
// })


//readfileSync blocks the program till the file is read
const a = fs.readFileSync('file.txt')
console.log(a);

console.log("Finished reading file")

//To write a file
fs.writeFile('file2.txt', 'Hello World', () => {
    console.log("File created");
});

console.log("Finished writing file");

//similar to readFileSync there's writeFileSync