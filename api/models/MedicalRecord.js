/**
 * MedicalRecord.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    id: {
      type: 'integer',
      primaryKey: true,
      autoIncrement: true
    },
    recordDetails: {
      type: 'string',
      required: true
    },
    user_id: { // one sided relationship, a medical record belongs to a user
      type:'integer',
      model:'user'
    },
    prescriptions: { // one to many  with prescriptions
      collection: 'prescriptions',
      via: 'medical_record_id',
    }
  }
};

