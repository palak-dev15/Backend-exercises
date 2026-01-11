import express from "express";

const app = express();
const port = 3000;

app.set("view engine" , "ejs");

app.get("/" , (req,res)=>{
    const today = new Date();
    const day = today.getDay();
    console.log (today.getDay());

    if(day >= 1 && day <=6){
   res.render("index",
        {day : "weekday",
        work : "work hard" }
    )}

    else {
       res.render("index",
        {day : "weekend",
        work : "have fun" }
    )}; 
    
});

app.listen(port , (req, res) => {
    console.log(`Listening on Port ${port}.`);// use backticks
});

