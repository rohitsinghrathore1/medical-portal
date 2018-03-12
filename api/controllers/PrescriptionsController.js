/**
 * PrescriptionsController
 *
 * @description :: Server-side logic for managing prescriptions
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  getUsersPrescriptions: function(req, res, next) {
    const userId = req.user && req.user.id;

    Prescriptions.find({ user_id: userId }).exec(function(err, records) {
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

  getPrescriptionDetails: function(req, res, next) {
    const userId = req.user && req.user.id;
    const prescriptionId = req.params.id;

    Prescriptions.findOne({ id: prescriptionId }).exec(function(
      err,
      prescription
    ) {
      if (err) {
        return res.serverError(err);
      }

      if (prescription && userId === prescription.user_id) {
        return res.json({
          prescription,
          status: "SUCCESS"
        });
      } else {
        UserPrescription.findOne({
          prescription_id: prescriptionId,
          user_id: userId
        }).exec(function(err, userPrescription) {
          if (err) {
            return res.serverError(err);
          }
          console.log(" userPrescription = ", userPrescription);
          if (
            userPrescription &&
            userPrescription.approval_status === "accessAllowed"
          ) {
            return res.json({
              prescription,
              status: "SUCCESS"
            });
          } else {
            return res.json({
              message: "No Access",
              status: "FAILURE"
            });
          }
        });
      }
    });
  }
};
