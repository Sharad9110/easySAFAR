const Owner = require("../models/owner")

module.exports.home = function(req, res){


    // Populate user from owner schema
    Owner.find({}).populate('user')
    .exec(function(err, data){
            return res.render('home', {
                title : "easySAFAR", 
                data : data 
            });
        }
    )
} 

