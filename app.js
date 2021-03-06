// jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

var items = [];

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended : true}));
app.use(express.static("Public"));

app.get("/",function(req,res){
    
    var today = new Date();
    var currentDay = today.getDay();

    var options = {
        weekday : "long",
        day : "numeric",
        month : "long"
    }
    var day = today.toLocaleDateString("en-US",options);
    // sunday -> 0 , monday -> 1 and so on.

    // we use "write method to display multiple html and "send" method only display one line html

    

    res.render("list", {ListTitle : day ,listItem : items});

});

app.post("/",function(req,res){
    var item = req.body.task;

    items.push(item);

    res.redirect("/");
});

app.listen(3000,function(){
    console.log("Server started on port 3000");
});