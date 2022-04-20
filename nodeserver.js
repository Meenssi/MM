const express = require('express') //install express
const app = express()
const port = 8080

//Define Variables
var id = 65140322;
var status = "single";

//set & call EJS
app.set('view engine','ejs')

//Creating App --> Pointer(=>{Object})
app.get("/",(req,rea) =>{
    res.send("Hello NodeJS Test!")
})
//Open Server
app.listen(port,() =>{
    console.log("Server is Listening on port: ", port)
})