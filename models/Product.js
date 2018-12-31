const mongoose = require("mongoose")
const dbConfig = require("../config/database")
const db = mongoose.connect(dbConfig.url.primaryMongo,{useNewUrlParser: true})
const Schema = mongoose.Schema;
//console.log( dbConfig.url.primaryMongo , "<==== ")
const ProductSchema = new Schema({
    name:String,
    price:Number,
    stock:Number,
    description:String
})

ProductSchema.methods.hello = function() {
    console.log( this.name , " ==> say hello ")
    return "return say hello "
}

const Product = mongoose.model("Product",ProductSchema)

// const mobos = new Product({ 
//     name:"Motherboard Acer AC1000",
//     price:900000,
//     stock:34,
//     description:"gilee cuk, acer ngeluarin motherboard"
// })

// mobos.save()

module.exports = Product