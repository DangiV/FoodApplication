import mongoose from "mongoose";

const Food = mongoose.Schema({
    CategoryName : {
        type : String,
        required : true
    },
    
    FoodName : {
        type : String,
        required : true
    },

    ImgUrl : {
        type : String,
        required : true
    },

    Description : {
        type : String,
        required : true
    },
})

const FoodItem = mongoose.model('fooditem', Food);

export default FoodItem;
