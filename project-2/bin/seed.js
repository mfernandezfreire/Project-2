require('dotenv').config();
const mongoose = require('mongoose')
const User = require('../models/user')
const Project = require('../models/project')

const1 = new mongoose.mongo.ObjectId();
console.log(const1)
const2 = new mongoose.mongo.ObjectId();
console.log(const2)

const dataAdmin = [{
            _id: const1,
            name: "Pepe",
            lastName: "Gotera",
            password: "1234",
            email: "pepegoter@gmail.com",
            phone: "657984425",
            type: "Admin",
            personalDescription: "Guay",
            economicContribution: 0,
            project_id: const2
        },{
        name: "Pepe",
        lastName: "Gotera1",
        password: "1234",
        email: "pepegoter1@gmail.com",
        phone: "657984425",
        type: "Economic Maecenas",
        personalDescription: "Guay",
        economicContribution: 0,
        project_id: const2
    },
    {
        name: "Pepe3",
        lastName: "Gotera",
        password: "1234",
        email: "pepegoter@gmail.com",
        phone: "657984425",
        type: "Technical Maecenas",
        personalDescription: "Guay",
        economicContribution: 0,
        project_id: const2
    },{
        name: "Pepe3",
        lastName: "Gotera",
        password: "1234",
        email: "pepegoter@gmail.com",
        phone: "657984425",
        type: "Technical Maecenas",
        personalDescription: "Guay",
        economicContribution: 0,
        project_id: const2
    },{
        name: "Pepe4",
        lastName: "Gotera",
        password: "1234",
        email: "pepegoter@gmail.com",
        phone: "657984425",
        type: "Tourist Maecenas",
        personalDescription: "Guay",
        economicContribution: 0,
        project_id: const2
    },{
        name: "Pepe",
        lastName: "Gotera",
        password: "1234",
        email: "pepegoter@gmail.com",
        phone: "657984425",
        type: "Tourist Maecenas",
        personalDescription: "Guay",
        economicContribution: 0,
        project_id: const2
    },{
        name: "Pepe5",
        lastName: "Gotera",
        password: "1234",
        email: "pepegoter@gmail.com",
        phone: "657984425",
        type: "Technical Maecenas",
        personalDescription: "Guay",
        economicContribution: 0,
        project_id: const2
    },
]

const project = [{
        _id: const2,
        name: "Me mola el project",
        location: ["34512","35786"],
        colaborationType: "Economic Maecenas",
        projectDescription: "La puta ostia",
        projectTracking: "Vamos a tope", 
        totalRaised: 100,
        totalRequired: 120,
        adminId: const1
    },
]

mongoose
  .connect('mongodb://localhost/starter-code', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`);
    User.deleteMany()
      .then(() => {
        return User.create(dataAdmin);
      })
    .then(() => {
        console.log("succesfully added all the data");
        mongoose.connection.close();
        process.exit(0);
      });
  })
  .catch(err => {
    console.error("Error connecting to mongo", err);
  })
  .then(x => {
    Project.deleteMany()
      .then(() => {
        return Project.create(project);
      })
    .then(() => {
        console.log("succesfully added all the data");
        mongoose.connection.close();
        process.exit(0);
      });
  })
  .catch(err => {
    console.error("Error connecting to mongo", err);
  });








