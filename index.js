import express from"express";
import bodyParser from "body-parser";
const app=express();
app.use(bodyParser.urlencoded({ extended: true }));
const port=3000;
app.get("/",function(req,res){
     res.render("index.ejs");
});
app.post("/submit",function(req,res){
      var num=req.body["num1"].length+req.body["num2"].length;
      res.render("index.ejs",{numb:num});
});
app.listen(port,function(req,res){
     console.log("Server Started");
});

