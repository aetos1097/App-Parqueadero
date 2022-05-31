const mongoose = require('mongoose');
const { Schema } = mongoose;

const ToRegister = new Schema({
    userName: {type: String, required: true},
    userId: {type: String, required: true},
    vehicleNumber: {type:String, required: true},
    vehicleType: {type:String, required: true},
    vehicleDescription: {type:String, required: true},
    checkInDateTime: {type: Date, required: false},
    checkOutDateTime: {type:Date, required: false},
    havePlace: {type: Boolean, required: true},
})

module.exports = mongoose.model('Records', ToRegister);


