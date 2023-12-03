const express = require ('express')
const {getBookingById, newBooking, deleteBooking} = require ('../dao/controllers/bookingController')

const bookingRouter = express.Router();

bookingRouter.get('/:id', getBookingById)
bookingRouter.post('/', newBooking)


module.exports = bookingRouter;