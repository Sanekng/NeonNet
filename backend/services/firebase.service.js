import bucket from "../config/firebase.config.js";

const fileUpload = async (filePath)=>{
    try{
        bucket.upload(filePath);
        console.log('Uploaded successfuly')
    } catch(error){
        console.log(error);
    }
}

export default fileUpload;