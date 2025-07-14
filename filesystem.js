const path = require('path');
const fs = require('fs/promises');
const { readFile, read } = require('fs');
const { error } = require('console');
const readline = require('readline');

rl =readline.createInterface({
    input: process.stdin,
    output: process.stdout
});



directory = path.join(__dirname,'/etc', 'passwd.txt');
const bacaFile =  ()=>{
    return fs.readFile(directory, 'utf-8'); 
}
bacaFile()
.then((data)=>{
    if(data){
        console.log(data);
    }
    else{
        console.log("file tidak ditemukan");
    }
})
.catch((err)=>{
    console.log(err);
})
