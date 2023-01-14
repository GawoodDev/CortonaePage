let express = require("express")
let app = express()
let session = require("express-session")
let bodyParse = require("body-parser")
let cookieParser = require("cookie-parser")

app.set("view engine", "ejs")
app.set("views", "views")


app.use("/assets", express.static("public"))
app.use(cookieParser())
app.use(bodyParse.urlencoded({
	extended: false
}))



app.get("/", (req, res)=> {
	res.render("index.ejs")
})


app.post("/emailServer", (req, res)=> {
	console.log(req.body)
	res.redirect("/")
})

app.listen(4001, ()=> {
	console.log("Server is running at http://localhost:4001")
})