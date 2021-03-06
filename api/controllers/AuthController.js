/**
 * AuthController
 *
 * @description :: Server-side logic for managing auths
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

const passport = require('passport');

module.exports = {
login: function(req, res) {

    passport.authenticate('local', function(err, user, info){
      if((err) || (!user)) {
        return res.send({
          message: info.message,
          user
        });
      }

    req.logIn(user, function(err) {
            if(err) res.send(err);
            return res.send({
              message: info.message,
              user,
              status: "SUCCESS"
            });
          });
        })(req, res);
        
  },
logout: function(req, res) {
    req.logout();
    // res.redirect('/');
    res.send({
      message: "logout success",
      status: "SUCCESS"
    });
  }
};
