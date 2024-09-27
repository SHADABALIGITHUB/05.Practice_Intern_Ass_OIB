const cloudinary = require('cloudinary').v2;
const path = require('path');

const handlelocallink = path.join(__dirname,'../myfirstimage.png');



// Cloudinary configuration
cloudinary.config({
    cloud_name: process.env.CLOUNDINARY_CLOUD_NAME,
    api_key: process.env.CLOUNDINARY_API_KEY,
    api_secret: process.env.CLOUNDINARY_API_SECRET,
    secure: true,
});

// Async function to upload the image
const uploadResult = async () => {
    try {
        const result = await cloudinary.uploader.upload(handlelocallink, {
            public_id: 'cloud/lol',
        });
        console.log("Successfully done:", result);
        return true; // Return true on successful upload
    } catch (error) {
        console.log("Upload failed:", error);
       
         console.log(path.join(__dirname, '../myfirstimage.png'));
        return false; // Return false on error
    }
};

module.exports = { uploadResult };
