const fs=require('fs');
const path=require('path');
fs.mkdir(path.join(__dirname,'demo') , (err) => {
    if(err){
        console.log(err);
    }
    console.log("folder made.");
})