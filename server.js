const express =require("express");
// const bodyParser =require("body-parser");
 const cors =require("cors");
 const db = require("./app/models");
 const dotenv=require('dotenv');
require("dotenv").config;
const app = express();

 var corsOptions = {
     origin:"http://localhost:8081"
 }


 //app.use();
 app.use(cors(corsOptions));
 app.use(express.json());
 app.use(express.urlencoded({ extended: true }));
 db.sequelize.sync();

app.get("/", (req,res) => {
    console.log("req.body",req.query)
    res.json({message : "welcome to  dev story."});
});

// db.sequelize.sync({ force: true }).then(() =>{
//     console.log("Drop and re-sync db.");
// });
// //})

// parse requests of content-type - application/json

// parse requests of content-type - application/x-www-form-urlencoded
const PORT = process.env.NODE_DOCKER_PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});