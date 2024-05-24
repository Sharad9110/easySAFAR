const Owner = require('../models/owner');


module.exports.find = (req,res) => {
 
    const {Location} = req.body;
    console.log(Location);

     Owner.findOne({location : Location}, function(err, data){
        return res.render('location_list', {
            data : data 
        });
    })
}