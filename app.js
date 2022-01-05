const express = require("express");
const hbs = require("hbs")

const path = require("path");

const app = express()

app.use(express.static(path.join(__dirname, "public")))

app.set("view engine", "hbs")
app.set("views", path.join(__dirname, "/views"))



app.all("/", (request, response)=>{
    response.render("home")

})
app.all("/about", (request, response)=>{
    response.render("about")
    
})

app.all("/works", (request,response)=>{
    response.render("works")
})

app.all("/gallery", (request, response) =>{
    response.render("gallery")
})
app.listen(4000, ()=>{
    console.log("App running")
})