const uploadController=async(req,res)=>{

    if (!req.file) return res.status(400).send('No file uploaded.');
    
    // Detect file type
    const fileType = req.file.mimetype;

    res.json({ 
        filename: req.file.filename, 
        fileType: fileType 
    });

     
       

     

}


module.exports={uploadController};