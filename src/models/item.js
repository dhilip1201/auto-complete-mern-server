const mongoose  = require('mongoose');
const itemSchema =new mongoose.Schema({
    product:{
        type: String,
        required: true,
        unique: true,
        lowercase:true
    }
},{timestamps : true})
module.exports = mongoose.model('Items',itemSchema)