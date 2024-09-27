const express=require('express');
const multer = require('multer');
const path=require('path');

const router=express.Router();

const {uploadController}=require('../controllers/upload.controller')

const storage=multer.diskStorage({
    destination:(req,file,cb)=>{

        cb(null,'uploads/')
    },
    filename:(req,file,cb)=>{
        cb(null,file.originalname+path.extname(file.originalname));
    }
})

const upload = multer({ storage });



router.route('/upload').post(upload.single('file'),uploadController);


module.exports=router
