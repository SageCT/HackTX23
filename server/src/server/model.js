let mongoose = require('mongoose');
// import mongoose from "mongoose";

const modelSchema = mongoose.Schema(
    {
        fname: {
            type: String,
            required: false
        },
        lname: {
            type: String,
            required: false
        }, 
        email: {
            type: String,
            required: [true, "email is required"]
        },
        password: {
            type: String,
            required: [true, "password is required"]
        },
        location: {
            type: String,
            required: [true, "location is required"]
        },
    },
    {
     timestamps:true
    }
)

let dataModel = mongoose.model('dataModel',modelSchema);
module.exports = dataModel;
