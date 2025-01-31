import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";

const __dirname=dirname(fileURLToPath(import.meta.url));

const app = express();
const port =3000;
// var pass="";
var user=false;

app.use(bodyParser.urlencoded({extended: true}));

function checkPass(req,res,next){
    const pass=req.body["password"];
    if(pass==="NamanAnand"){
        user=true;
    }
    next();
}

app.use(checkPass);

app.get("/",(req, res)=>{
    res.sendFile(__dirname + "/public/index.html");
});

app.post("/check",(req,res)=>{
    // pass=req.body["password"];
    // if(pass==="NamanAnand"){
    //     res.sendFile(__dirname+"/public/secret.html");
    // }
    // else{
    //     res.sendFile(__dirname + "/public/index.html");
    // }
    if (user){
        res.sendFile(__dirname + "/public/secret.html");
        user=false;
    }
    else{
        res.sendFile(__dirname + "/public/index.html");
    }
});


app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
});