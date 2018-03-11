/**
 * PrescriptionsController
 *
 * @description :: Server-side logic for managing prescriptions
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  getUsersPrescriptions: function(req, res, next) {
    const userId = req.user && req.user.id;

    Prescriptions.find({user_id: userId}).exec(function(err, records){
      if (err) {
        return res.serverError(err);
      }
      return res.json({
        records,
        status: "SUCCESS"
      });
    });
  },

  getAllPrescriptions: function(req, res, next) {
    
    Prescriptions.find().exec(function(err, records) {
      if (err) {
        return res.serverError(err);
      }
      return res.json({
        records,
        status: "SUCCESS"
      });
    });
  },
	
};

