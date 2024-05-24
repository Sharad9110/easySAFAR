const User = require('../models/user');

module.exports.signIn = function(req,res){
    if(req.isAuthenticated()){
        return res.redirect('/user/customer');
     }
    return res.render('sign_in');
}

module.exports.signUP = function(req,res){
    if(req.isAuthenticated()){
        return res.redirect('/user/customer');
     }

    return res.render('sign_up');
}

module.exports.customer = function(req,res){
    return res.render('customer');
}

module.exports.owner = function(req,res){
    return res.render('owner');
}


module.exports.create = function(req, res){
    if(req.body.password != req.body.confirm_password){
       console.log('pass not match')
       return res.redirect('back');
    }

    User.findOne({email : req.body.email})
    .then((data) => {
        if(!data){
            User.create(req.body, function(err, user){
                if(err){console.log('error in finding user in sign up'); return}

                return res.redirect('/user/sign-in');
           })
        }})
        .catch((err) => {
            console.log(err);
            return;
         })
    }

    module.exports.createSession = function(req,res){

        req.flash('success', 'Logged In Successfully');
        return res.redirect('/user/owner');
    }

    module.exports.destroySession = function(req,res){

        req.logout(function(err){
            console.log(err);
        });
        
        return res.redirect('/user/sign-in');
        
            
    }