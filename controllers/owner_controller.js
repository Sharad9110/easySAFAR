const Owner = require('../models/owner');


module.exports.create = async function(req,res){
  try{
    await Owner.uploadAvatar(req, res, function(err){
      if(err){console.log(err, "multor error")};

      console.log(req.file);
      console.log(req.body.name);
      var newLocation = new Owner({
      name : req.body.name,
      location : req.body.location,
      area : req.body.area,
      space : req.body.space,
      user : req.body.user,
      avatar : Owner.avatarPath + '/' + req.file.filename
     })
     newLocation.save();
      
    });

    req.flash('success', 'Location Added Successfully');

    return res.redirect('/');
      }
      catch(err){
          req.flash('error', err);
          return res.redirect('/');
      }
};