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

    console.log("&&&&& prescription_id ", prescriptionId);

    let prescriptionOwner;

    Prescriptions.findOne({id: prescriptionId}).exec(function(err, record){
      if (err) {
        return res.serverError(err);
      }
      console.log("Prescriptions.find, record= ", record);
      prescriptionOwner = record.user_id;

      UserPrescription.create({user_id: userId, prescription_id: prescriptionId, prescription_owner: prescriptionOwner}).exec(function(err, record){
        if (err) {
          return res.serverError(err);
        }
        return res.json({
          record,
          status:"SUCCESS"
          });
      });
      
    });

  },

  updatePrescriptionAccessStatus: function (req, res, next) {
    const status = req.body.status;
    const prescriptionId = req.body.prescriptionId;

    console.log("status = ", status, " prescriptionId: ", prescriptionId);

    UserPrescription.update({ prescription_id :prescriptionId },{approval_status: status}).exec(function (err, record) {
       if (err) {
         return res.send(err);
       }

      return res.json({
        record,
        status:"SUCCESS"
        });
     });
   },

   getUserPrescriptionRecordsByUser: function (req, res, next) {
    const userId = req.user && req.user.id;

    UserPrescription.find({prescription_owner: userId}).populate("user_id").populate("prescription_id").exec(function (err, records) {
       if (err) {
         return res.send(err);
       }
      return res.json({
        records,
        status:"SUCCESS"
        });
     });
   },
	
};

