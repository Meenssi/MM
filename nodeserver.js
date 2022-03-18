const express = require('express')
const app = express()
const port = 8080
//Creating App --> Pointer(=>{Object})
app.get("/",(req,rea) =>{
    res.send("Hello NodeJS!")
})
//Open Server
app.listen(port,() =>{
    console.log("Server is Listening on port: ", port)
})