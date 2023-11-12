const mongoose=require("mongoose");
const plm=require("passport-local-mongoose")

const userSchema=mongoose.Schema({
    username:String,
    email:String,
    contact:String,
    playlist:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'playlist'
    }],
    liked:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'song'
    }],
    profileImage:{
        type:String,
        default:'/images/default.png'
    },
    isAdmin:{
        type:Boolean,
        default:false
    }
})

userSchema.plugin(plm)

const userModel=mongoose.model('user',userSchema);
module.exports=userModel;