const mongoose = require('mongoose')
const {ObjectId} = mongoose.Schema.Types                        //to save the post in the database using this ObjectID
const postSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    body:{
        type:String,
        required:true
    },
    photo:{
        type:String,
        default:"no photo"
    },
    postedBy:{
        type:ObjectId,
        ref:"User"                                            //refering to the user model 

         
    }
})

mongoose.model("Post",postSchema)