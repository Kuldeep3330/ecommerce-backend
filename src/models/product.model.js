import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true, "Please enter product name"]
    },
    description:{
        type:String,
        required:[true, "Please enter product Description"]
    },
    price:{
        type:Number,
        required:true,
        maxLength:[8,"Price can not be extented by 8"]
    },
    rating:{
        type:Number,
        default:0,
    },
    images:[
        {
            public_id:{
                type:String,
                required:true
            },
            url:{
                type:String,
                required:true
            }
        }
    ],
    category:{
        type:String,
        required:[true, "Please enter product category"]
    },
    Stock:{
        type:Number,
        required:[true, "please enter product stock"],
        maxLength:[4, "Stock can not exceed 4"]
    },
    numOfReviews:{
        type:Number,
        default:0
    },
    reviews:[
        {
            name:{
                type:String,
                required:true
            },
            rating:{
                type:Number,
                required:true,
            },
            comments:{
                type:String,
                required:true
            }
        }
    ],
    

},{timestamps:true})

export const Product = mongoose.model("Product", productSchema);