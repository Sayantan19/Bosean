const path = require("path");
const express = require("express");
const app = express()
const mongoose = require("mongoose");

const cors = require('cors');


var corsOptions = {
    origin: 'https://boseaninterio.netlify.app/',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use(cors());

app.use(express.json());
// app.use(mongoose);
//JxBGV5lQ1XTpbwLv
mongoose.connect("mongodb+srv://Bosean-Interio:valoboi%401932@bosean.hsrfmaq.mongodb.net/bosean?retryWrites=true&w=majority");

app.use("/", require("./routes/BoseRoute"))

app.use(express.static("./client/build"));
app.post("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
})


function run() {
    console.log("Express is running on 3001");
}
app.listen(process.env.PORT || 3001, run);