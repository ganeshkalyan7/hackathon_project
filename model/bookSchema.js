const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bookshema=new Schema({
    movieName:{
        type:String,
        required:true
    },

    movieDirecter:{
        type:String,
        required:true
    },

    language:{
        type:String,
        required:true
    },

    ticketPrice:{
        type:Number,
        required:true
    },
    movieDiscription:{
        type:String,
        required:true

    },
    moviePoster:{
        type:String,
        required:true


    }




})
module.exports = mongoose.model("Movie",bookshema)