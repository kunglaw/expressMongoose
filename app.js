const express = require("express")
const bodyParser = require("body-parser")
const app = express()

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

const productRoute = require("./routes/productRoute")

app.use("/product",productRoute)

const port = 5800

app.get("/",function(req, res){
    res.send("Express Mongoose")
})

app.listen(port,function(){
    console.log("Application running on port :",port)
})