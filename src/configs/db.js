const mongoose = require("mongoose");

//mongo-db Technology name, localhost-servername:27017=>serverName, MVC=>database Name,
module.exports = () => {
    mongoose.connect("mongodb://localhost:27017/MVC");
}