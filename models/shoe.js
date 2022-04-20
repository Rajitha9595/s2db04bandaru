const mongoose = require("mongoose")
const shoeSchema = mongoose.Schema({
    shoe_brand: String,
    shoe_color: String,
    shoe_cost: Number
})
module.exports = mongoose.model("Shoe", shoeSchema)