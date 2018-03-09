/**
 * User.js
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
    name: {
      type: 'string',
      required: true
    },
    email: {
      type: 'email',
      required: true,
      unique: true
    },
    password: {
      type: 'string',
      required: true
    },
    medical_records: {
      collection: 'medicalrecord',
      via: 'user_id',
    },
    roles: {
      collection: 'role',
      via: 'user_id',
      through: 'userrole'
    }
  }
};

