/* Conexion con MONGODB */
const mongoose = require ('mongoose')



mongoose.connect(
    `mongodb+srv://admin:${process.env.MONGODB_PASSWORD}@cluster0.ydxmmnw.mongodb.net/?retryWrites=true&w=majority`
)
.then(() =>{
    console.log('conexion existosa')
})
.catch((err) =>{
    console.error(err)
})

module.exports = mongoose

