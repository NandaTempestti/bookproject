const Bookings = require ('../models/bookingsModel')

const newBooking= async (req,res,next) => {
    const {book, date, user} = req.body


    let existingBook;
    let existingUser;
    try{
        existingBook = await Book.findById(book)
        existingUser = await User.findById(user)
    }catch(err){
        return console.log(err)
    }
    if(!existingBook){
        return res.status(404).json ({mensaje: "Libro no encontrado"})
    }
    if(!user){
        return res.status(404).json ({mensaje: "Usuario no encontrado"})
    }

    let booking;

    try{
        booking = new Bookings({
            book, date: new Date(`${date}`), user
        })

        const session = await mongoose.startSession()
        await session.startTransaction()

        existingUser.bookings.push(booking)
        existingBook.bookings.push(booking)
        await existingUser.save({session})
        await existingBook.save({session})
        await booking.save({session})
        session.commitTransaction()

     }catch(err){
        return console.log(err)
    }

    if(!booking){
        return res.status(500).json({mensaje: "No se puede crear un Booking"})
    }

    return res.status(201).json({ booking })
}

const getBookingById = async (req,res,next) =>{
    const id= req.params.id

    let booking
    try{
        booking = await Bookings.findById(id)
     }catch(err){
        return console.log(err)
    }
    if(!booking){
        return res.status(500).json({mensaje: "Surgió un error"})
    }
    return res.status(200).json({booking})

}




module.exports = {newBooking, getBookingById }