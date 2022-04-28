const mongoose = require("mongoose")
const shoeSchema = mongoose.Schema({
    
    shoe_brand:{
        type: String,
        minLenght: 4
    },
    shoe_color:{
        type: String,
        minLenght: 6
    },
    shoe_cost:{
        type: Number,
        minLenght: 3
    },
})
module.exports = mongoose.model("Shoe", shoeSchema)