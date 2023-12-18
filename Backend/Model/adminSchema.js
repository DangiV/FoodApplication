import mongoose from "mongoose";

const AdminSchema =  mongoose.Schema({
    fname : {
        type : String,
        required: true
    },

    lname : {
        type : String,
        required: true
    },
    email : {
        type : String,
        required: true
    },
    password : {
        type : String,
        required: true
    }
})

const AdminModel  = mongoose.model("UserModel", AdminSchema)

export default AdminModel;