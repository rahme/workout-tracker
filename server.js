const express = require("express")
const logger = require("morgan")
const mongoose = require("mongoose")
const htmlRouter = require("./routes/htmlRoutes")
const apiRouter = require("./routes/apiRoutes")
const db = mongoose.connection
const PORT = process.env.PORT || 5000
const Exercise = require("./models/exercise.js")
const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static("public"))
app.use(htmlRouter)
app.use(apiRouter)

mongoose.connect('mongodb+srv://raffayahmed:database@cluster0.ii1sf.mongodb.net/test', {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
});
db.on("error", error => console.error(error));
db.once("open", () => console.log("connection success"));
app.listen(PORT, () => {
    console.log(`App running on port 5000!`);
});