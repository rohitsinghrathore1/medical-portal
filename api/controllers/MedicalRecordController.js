/**
 * MedicalRecordController
 *
 * @description :: Server-side logic for managing medicalrecords
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  getUsersMedicalRecords: function(req, res, next) {
    const userId = req.user && req.user.id;

    MedicalRecord.find({id: userId}).populate('prescriptions').exec(function(err, records){
      if (err) {
        return res.serverError(err);
      }
      return res.json(records);
    });
  }
	
};

