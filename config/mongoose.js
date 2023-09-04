//require all packages
const mongoose = require("mongoose");
//connect to db
const MONGO = "mongodb+srv://vanshikanamdev45:7417@tracker.pwmuykv.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(MONGO).then(() => console.log("db connected succesfully")).catch((err) => console.log("error in connecting db", err))