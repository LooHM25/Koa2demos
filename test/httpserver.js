var express = require("express")
var bodyParser = require("body-parser")
var app = express()

var urlencodedParser = bodyParser.urlencoded({ extended: false })
var jsonParser = bodyParser.json()
// app.use(bodyParser.urlencoded({
//     extended: false
// }))

app.post("/go", jsonParser,function(req, res){
    var body = req.body;
    console.log("body", body)
    res.end("abc123")
})

app.listen(7333);