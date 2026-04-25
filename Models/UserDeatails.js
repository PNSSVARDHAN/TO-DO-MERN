import mongoose from "mongoose";

const UserDetailsSchema = mongoose.Schema({
    user_id :{
        type : Number,
        requried : true,
        Unique : true
    },
    name : {
        type :String,
        required : true
    },
    Password : {
        type : String,
        requried : true
    }   
},
{
    timestamps : true
}
)

const User = mongoose.model("User" , UserDetailsSchema);

export default User;