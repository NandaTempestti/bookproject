const mongoose = require ('mongoose')

const UserSchema = new mongoose.Schema({
    nombre: {
        type: String, 
        required: true},
    email: {
        type: String, 
        required: true , 
        unique: true},
    password: {
        type: String, 
        required: true, 
        minLength: 6},
    bookings: [{type: mongoose.Types.ObjectId, ref: "Booking"}]
})

const User = mongoose.model('user', UserSchema)

module.exports = User




 

