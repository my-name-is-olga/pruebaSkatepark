const express = require("express");
const cors = require("cors");
const expressFileUpload=require("express-fileupload");
const routes = require("./routes/index.routes.js");
const app = express();
const pg=require("./db.js");

//middlewares
const photoConfig={
    limits:{fileSize: 30000},
    abortOnLimit:true,
    responseOnLimit: "EL PESO DEL ARCHIVO SUPERA EL LÍMITE PERMITIDO",
}
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cors());
app.use(expressFileUpload(photoConfig));

//endpoints 
app.use("/", routes);

module.exports = app;
