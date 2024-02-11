import express from "express";

const app = express();
const port = 3000;

var week = "a weekday";
var action = "work hard!"

app.get("/",(req, res)=>{
    const date = new Date();
    let day = date.getDay();
    if(day===0 || day===6){
        week = "the weekend";
        action = "have fun!";
    }
    res.render("index.ejs",{
        weekType: week,
        actionType: action
    })
})

app.listen(port, ()=>{
    console.log(`Server is running at port ${port}`);
})