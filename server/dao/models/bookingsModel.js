const mongoose = require ('mongoose')

const bookingSchema = new mongoose.Schema({
    book: {
        type: mongoose.Types.ObjectId,
        ref: 'Book',
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    user: {
        type: mongoose.Types.ObjectId,
        ref: "User",
        required: true
    },
})

const Bookings = mongoose.model('booking', bookingSchema)

module.exports = Bookings