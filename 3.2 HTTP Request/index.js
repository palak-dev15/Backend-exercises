import express from 'express';
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    console.log(req.rawHeaders);
    res.send("Hello World!")
});

app.get("/aboutme", (req, res) => {
    console.log(req.rawHeaders);      //navigation
    res.send("hey i am palak")
});

app.get("/contactme", (req, res) => {
    console.log(req.rawHeaders);
    res.send("<h1>contact me</h1><p>Number : 90090275489</p>")
});


app.listen(port, () => {
    console.log("Server has started on port " + port);
});


