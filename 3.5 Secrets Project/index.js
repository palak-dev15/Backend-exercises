//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming
import express from "express";
import bodyParser from "body-parser";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true})); 

app.get("/" , (rep,res)=>{
    res.sendFile(__dirname + "/public/index.html");// user ko chahiye
});

app.post("/check" , (req, res) =>{
    console.log(req.body);
    if (req.body["password"] === "iLoveProgramming") {
        res.sendFile(__dirname + "/public/secret.html");// user ka input chahiye
    }
    else {
        res.sendFile(__dirname + "/public/index.html");
    }
});

app.listen(port , (req, res) => {
    console.log(`Listening on Port ${port}.`);// use backticks
});
