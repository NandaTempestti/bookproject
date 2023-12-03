/* Importaciones */
const express = require('express')
const dotenv = require ('dotenv')
const cors = require ('cors')
const path = require ('path')
const userRouter = require('./routers/userRouter')
const adminRouter = require ('./routers/adminRouter')
const bookRouter = require ('./routers/bookRouter')
const bookingRouter = require ('./routers/bookingRouter')




/* Configuraciones */
dotenv.config()
const mongoose = require ('./config/dbConfig')
const app = express()
const PORT = process.env.PORT || 8080

/* Middlewere */
app.use(express.static(path.join(__dirname + '/public')))
app.use(express.urlencoded ({extended: true}))
app.use(express.json())


/* Routers */
app.use('/user' , userRouter);
app.use('/admin' , adminRouter);
app.use('/book' , bookRouter);
app.use('/booking' , bookingRouter);


app.listen(PORT, ()=>{
    console.log(`El servidor se está ejecutando en http://localhost:${PORT}/`)
})
