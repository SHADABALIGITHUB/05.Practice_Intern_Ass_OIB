const express =require('express');

require('dotenv').config();

const app=express();

const port=process.env.PORT || 3000;

app.get('/',(req,res)=>{

     res.json({
          "hello":"shadab",
          "contac":"98216824759"
     })

})



app.listen(port,()=>{
      console.log(`you server started at port :${port}`)
})

