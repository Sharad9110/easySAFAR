const mongoose = require('mongoose');

const multer = require('multer');
const path = require('path');
const AVATAR_PATH = path.join('/uploads/users/avatars');

const ownerSchema = new mongoose.Schema({
    name : {
        type : String
    },
    location:{
        type : String,
        required: true
    },
    area : {
        type : String,
        required : true
    },
    space :{
        type : Number,
        required : true
    },
    user :{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User'
    },
    avatar :{
        type : String
    }
},{
    timestamps : true
})

 const storage = multer.diskStorage({
     destination: function(req, file, cb){
        cb(null, path.join(__dirname,'..',AVATAR_PATH));
     },
     filename: function (req, file, cb) {
       const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
       cb(null, file.fieldname + '-' + uniqueSuffix);
     }
 })

 //static function
ownerSchema.statics.uploadAvatar = multer({storage: storage}).single('avatar');
// making avatar path publicly available
ownerSchema.statics.avatarPath = AVATAR_PATH;

const Owner = mongoose.model('Owner', ownerSchema);

module.exports = Owner;