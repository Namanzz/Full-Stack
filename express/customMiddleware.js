import express from "express"
import url from "url";
const app=express();
const port = 3000;

function logger(req, res, next){
    console.log("Request Method: ",req.method);
    console.log("Request URL: ",req.url);
    next();
}

app.use(logger);

app.get("/",(req,res)=>{
    res.send("Hello World!");
});

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
})