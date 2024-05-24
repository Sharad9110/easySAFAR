const mongoose = require('mongoose');

const locationSchema = new mongoose.Schema({
    location:{
        type : String,
        required: true
    },
    space :{
        type : Number,
        required : true
    },
    owner :{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Owner'
    },
    user :{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User'
    }
},{
    timestamps : true
})

const Location = mongoose.model('Location', locationSchema);

module.exports = Location;