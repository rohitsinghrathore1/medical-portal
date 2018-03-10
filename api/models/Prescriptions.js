/**
 * Prescriptions.js
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
    prescription: {
      type: 'string',
      required: true
    },
    user_id: {
      type: 'integer',
      model: 'user'
    },
    medical_record_id: {
      type:'integer',
      model:'MedicalRecord'
    }
  }
};

