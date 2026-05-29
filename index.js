const express = require('express');
const app = express();
const path = require('path');
const multer = require('multer')

app.set('views',path.join(__dirname,"views"));
app.set('view engine',"ejs");

var storage = multer.diskStorage({
    destination:function(req,file,cb){

        cb(null,'uploads')
    },
    filename :function(req,file,cb){
       cb(null, Date.now() + path.extname(file.originalname))
    }

})

let maxSize = 2*1000*1000

let upload = multer({
    storage : storage,
    limits:{
        fileSize: maxSize

    },
    fileFilter :function(req,file,cb){
        let filetypes = /jpeg|jpg|png/;
        let mimetype = filetypes.test(file.mimetype);

        let extname = filetypes.test(path.extname(file.originalname).toLowerCase())

        if(mimetype && extname){
             return cb(null,true);
        }
        cb("Error: File upload only supports the following filetypes:" + filetypes)
        
    }

 }).single('mypic');

 app.get('/',(req,res)=>{
    res.render('signup')
 })
app.post('/upload',(req,res)=>{

    upload(req,res,function(err){

        if(err){
            return res.send(err);
        }

        res.send("Success! Image Uploaded");

    });

});
 app.listen(8080,()=>{
    console.log(`server is Running`)
 })