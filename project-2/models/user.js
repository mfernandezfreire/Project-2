const mongoose = require('mongoose')
const Schema = mongoose.Schema

const schemaUser = new Schema(
    {
        name: {type: String},
        lastName: {type: String},
        email:{type: String},
        phone: {type: Number},
        password:{type: String},
        location: {
          lat: {type: Number},
          lon: {type: Number}
      },
        type: {type: String, enum:["Admin", "Economic Maecenas", "Technical Maecenas", "Tourist Maecenas"]},
        personalDescription: {type: String},
        economicContribution: {type: Number},
        project_id: { type: Schema.Types.ObjectId, ref: 'Project'}
    },
    { timestamps: true }
  );

module.exports = mongoose.model('User', schemaUser)

