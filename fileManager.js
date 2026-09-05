import fs from 'fs'

fs.writeFile('./parent/child.js', 'console.log("File System")', (err) => {
    if (err) {  
        console.log(err);
        return
    } 
        console.log('File written successfully');

});


fs.readFile('./parent/child.js', 'utf-8', (err, data) => {
    if (err) {
        console.log(err);
        return;
    } 
        console.log(data);
    
});



fs.appendFile('./parent/child.js', '\nconsole.log("Backend Development")', (err) => {
    if (err) {
        console.log(err);
        return;
    }
        console.log('File appended successfully');
    
});

fs.unlink('./parent/child.js', (err) => {
    if (err) {
        console.log(err);
        return;
    }
        console.log('File deleted successfully');
           
})
