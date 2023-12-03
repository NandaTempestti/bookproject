const mongoose = require ('mongoose')

const bookSchema = new mongoose.Schema({
    titulo: {
        type: String,
        required: true
    },
    autor: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    postUrl: {
        type: String,
        required: true
    },
    bookings: [{type: mongoose.Types.ObjectId, ref: "Booking"}],
    admin: {
        type: mongoose.Types.ObjectId,
        ref: "Admin",
        required: true
    }
})

const Book = mongoose.model('book', bookSchema)

module.exports = Book