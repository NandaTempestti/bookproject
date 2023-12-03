const mongoose = require ('mongoose')

const adminSchema = new mongoose.Schema({

    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true,
        minLength: 6
    },
    addedBooks: [
        {
        type: mongoose.Types.ObjectId,
        ref: "Book",
        }
    ] 
});

const Admin = mongoose.model('admin', adminSchema)

module.exports = Admin
