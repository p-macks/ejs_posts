import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;


app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:true}));

app.get("/", (req, res)=>{
    res.render("index.ejs");
});

app.post("/submit", (req, res)=>{
    const name = req.body["user_name"];
    const email = req.body["user_email"];
    const message = req.body["user_message"]
    console.log(req.body);
    res.render("index.ejs",{
    user_name : name,
    user_email: email,
    user_message: message,
    });
    
});

app.listen(3000, ()=>{
   console.log(`Server listening on port ${port}`);
});

