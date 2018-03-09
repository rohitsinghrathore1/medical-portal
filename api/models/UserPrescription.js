/**
 * UserPrescription.js
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
    prescriptionRequestedBy: {
      type:'integer',
      model:'user'
    },
    prescriptionId: {
      type:'integer',
      model:'prescription'
    },
    approvalStatus: {
      type:'integer',
      enum: ['accessNotAllowed', 'accessRequested', 'accessAllowed'],
      defaultsTo: 'accessNotAllowed'
    }
  }
};

