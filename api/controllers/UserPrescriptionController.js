/**
 * UserPrescriptionController
 *
 * @description :: Server-side logic for managing userprescriptions
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  requestPrescriptionAccess: function(req, res, next) {
    const userId = req.user && req.user.id;
    const prescriptionId = req.body.prescriptionId;

    UserPrescription.create({user_id: userId, prescription_id: prescriptionId}).exec(function(err, record){
      if (err) {
        return res.serverError(err);
      }
      return res.json(record);
    });

  },

  updatePrescriptionAccessStatus: function (req, res, next) {
    const status = req.body.status;
    const prescriptionId = req.body.prescriptionId;

    UserPrescription.update({ prescription_id :prescriptionId },{approval_status: status}).exec(function (err, record) {
     if (err) {
       return res.send(err);
     }
     // if (!record) {
     //   return res.send({
     //     message: 'not Found'
     //   });
     // }
     return res.json(record);
   });
 },
	
};

