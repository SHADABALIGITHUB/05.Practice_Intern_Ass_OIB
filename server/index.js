const express =require('express');


require('dotenv').config();
const cors = require('cors');
// const mongoose = require('mongoose');
const uploadRoute=require('./routes/upload.routes')
const getuserdata=require('./routes/finduserdata.routes')

const app=express();

// const {uploadResult}=require('./Config/cloudinary')

const port=process.env.PORT || 3000;


app.use(cors('*'))

app.use(express.json());



app.use('/api',getuserdata);


app.use('/api',uploadRoute);

app.listen(port,()=>{
      console.log(`you server started at port :${port}`)
})

