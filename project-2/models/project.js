const mongoose = require('mongoose')
const Schema = mongoose.Schema

const schemaProject = new Schema(
    {
        name: {type: String},
        location: {
          lat: {type: Number},
          lon: {type: Number}
      },
        date: {type: String},
        colaborationType: {type: String, enum:["Economic Maecenas", "Technical Maecenas", "Tourist Maecenas"]},
        projectDescription: {type: String},
        projectTracking: {type: String}, 
        totalRaised: {type: Number},
        totalRequired: {type: Number},
        adminId:{type: String}
    },
    { timestamps: true }
  );

module.exports = mongoose.model('Project', schemaProject)