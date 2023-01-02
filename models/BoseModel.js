const mongoose = require("mongoose")
const detailSchema = 
{
    name: String,
    email: String,
    phone: String
}

const Det = mongoose.model("Details", detailSchema);


module.exports = Det;