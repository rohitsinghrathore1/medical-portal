/**
 * Sails Seed Settings
 * (sails.config.seeds)
 *
 * Configuration for the data seeding in Sails.
 *
 * For more information on configuration, check out:
 * http://github.com/frostme/sails-seed
 */
module.exports.seeds = {

  user: {
    data: [
      {
        id: 1,
        name: 'Patient 1',
        email: 'patient1@gmail.com',
        password: 'password'
      },
      {
        id: 2,
        name: 'Dr Doctor',
        email: 'doctor@gmail.com',
        password: 'password'
      },
      { 
        id: 3,
        name: 'Pharmacist',
        email: 'pharmacist@gmail.com',
        password: 'password'
      },
      {
        id: 4,
        name: 'Mr Patient 2',
        email: 'patient2@gmail.com',
        password: 'password'
      },
      {
        id: 5,
        name: 'Mr Patient 3',
        email: 'patient3@gmail.com',
        password: 'password'
      }
    ],
    overwrite: true
  },
  role: {
    data: [
      { 
        id: 1,
        title: "patient"
      },
      { 
        id: 2,
        title: "doctor"
      },
      { 
        id: 3,
        title: "pharmacist"
      }
    ],
    overwrite: true
  },
  userrole: {
    data:[
      {
        id: 1,
        user_id: 1,
        role_id: 1
      },
      {
        id: 2,
        user_id: 2,
        role_id: 2
      },
      {
        id: 3,
        user_id: 2,
        role_id: 1
      },
      {
        id: 4,
        user_id: 3,
        role_id: 3
      },
      {
        id: 5,
        user_id: 4,
        role_id: 1
      },
      {
        id: 6,
        user_id: 5,
        role_id: 1
      }
    ],
    overwrite: true
  },
  medicalrecord: {
    data:[
      { 
        id: 1,
        recordDetails: "medicalrecord 1",
        user_id: 1
      },
      {
        id: 2,
        recordDetails: "medicalrecord 12",
        user_id: 1
      },
      { 
        id: 3,
        recordDetails: "medicalrecord 2",
        user_id: 4
      },
      { 
        id: 4,
        recordDetails: "medicalrecord 3",
        user_id: 5
      },
      { 
        id: 5,
        recordDetails: "medicalrecord 3",
        user_id: 5
      }
    ],
    overwrite: true
  },
  prescriptions: {
    data: [
      {
        id: 1,
        title:"Prescription 1",
        prescription: "some prescription 1",
        medical_record_id: 1,
        user_id: 1
      },
      {
        id: 2,
        title:"Prescription 2",
        prescription: "some prescription 2",
        medical_record_id: 2,
        user_id: 1
      },
      {
        id: 3,
        title:"Prescription 3",
        prescription: "some prescription 3",
        medical_record_id: 3,
        user_id: 4
      },
      {
        id: 4,
        title:"Prescription 4",
        prescription: "some prescription 4",
        medical_record_id: 4,
        user_id: 5
      },
      {
        id: 5,
        title:"Prescription 5",
        prescription: "some prescription 5",
        medical_record_id: 5,
        user_id: 5,
      },
      {
        id: 6,
        title:"Prescription 6",
        prescription: "some prescription 6",
        medical_record_id: 1,
        user_id: 1
      }
    ],
    overwrite: true
  },
  userprescription: {
    data: [
      {
        id: 1,
        user_id: 2,
        prescription_id: 3
      },
      {
        id: 2,
        user_id: 2,
        prescription_id: 1
      },
      {
        id: 3,
        user_id: 3,
        prescription_id: 2
      },
    ],
    overwrite: true
  }

}
