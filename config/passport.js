const passport = require('passport'),
      LocalStrategy = require('passport-local').Strategy,
      bcrypt = require('bcrypt-nodejs');

passport.serializeUser(function(user, cb) {
  cb(null, user.id);
});

passport.deserializeUser(function(id, cb){
  User.findOne({id}, function(err, user) {
    cb(err, user);
  });
});

passport.use(new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password'
}, function(email, password, cb){

    User.findOne({email: email}, function(err, user){
        if(err) return cb(err);
        if(!user) return cb(null, false, {message: 'Username not found'});

        bcrypt.compare(password, user.password, function(err, res){
              if(!res) return cb(null, false, { message: 'Invalid Password' });
              console.log("user details ------- ", user);
              let userDetails = {
                      email: user.email,
                      name: user.name,
                      id: user.id
                    };
              return cb(null, userDetails, { message: 'Login Succesful'});
            });
      });
}));