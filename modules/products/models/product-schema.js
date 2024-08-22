import mongoose, { SchemaTypes } from "mongoose";
const ProductSchema=mongoose.Schema(
    {
    name:{type:SchemaTypes.String,maxLength:25,minLength:3,required:true,unique:true},
    desc:{type:SchemaTypes.String},
    price:{type:SchemaTypes.Number,min:100,max:1000,required:true,default:200},
    image: {type:SchemaTypes.String,required:true}

});
export const ProductModel=mongoose.model('products',ProductSchema);