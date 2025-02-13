import mongoose from "mongoose";

const mediaSchema = new mongoose.Schema({
    title: {
        type: String,
        required : true,
    },
    url : { 
        type: String,
        required:true
    },
    mediaType:{
        type: String,
    },
    description:{
        type:String,
    },
    createdAt : {
        type: Date,
        default: Date.now(),
    }
});

const Media = mongoose.model("Media",mediaSchema);
export default Media;