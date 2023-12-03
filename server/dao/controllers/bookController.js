const Book = require ('../models/booksModel')
const jsonwebtoken = require ('jsonwebtoken')
const mongoose = require ('mongoose')
const Admin = require ('../models/adminModel')

const addBook = async (req, res, next) =>{
    const extractedToken = req.headers.authorization.split(" ")[1]; // Bearer Token
    if(!extractedToken && extractedToken.trim() === ""){
        return res.status(404).json({mensaje: "Token no encontrado"})
    }
   
    let adminId;

    //verificar token
    jsonwebtoken.verify(extractedToken, process.env.SECRET_KEY, (err,decrypted)=>{
        if(err){
            return res.status(400).json({ mensaje: `${err.mensaje}`})
        }else{
            adminId = decrypted.id;
            return;
        }
    });


    //crear nuevo book
    const {titulo, autor,  descripcion, postUrl } = req.body;
    if(
        !titulo && titulo.trim()=== "" && 
        !autor && autor.trim()=== "" && 
        !descripcion && descripcion.trim()=== "" &&
        !postUrl && postUrl.trim()=== "" )
        {
            return res.status(422).json({mensaje: "Datos invalidos"})
        }

    let book;
    try {
        book = new Book({
            titulo,
            autor,
            descripcion,
            postUrl,
            admin: adminId
        })


        const session = await mongoose.startSession()
        const adminUser = await Admin.findById(adminId)
        session.startTransaction();

        await book.save({session})
        adminUser.addedBooks.push(book);
        await adminUser.save({session});
        await session.commitTransaction();
      
    }
    catch (err){
        return console.log(err);
    }

    if(!book){
        return res.status(500).json({mensaje: "Solicitud fallida"})
    }
    return res.status(201).json({book})
}


const getAllBooks = async (req, res, next) =>{
    let books;

    try{
        books= await Book.find();
     }catch (err){
        return console.log(err)
    }

    if(!books){
        return res.status(500).json({ mensaje: "Solicitud fallida"})
    }
    return res.status(200).json({ books })
}

const getBookById = async (req,res,next) =>{
    const id= req.params.id

    let book;
    try{
        book = await Book.findById(id)
    }catch(err){
        return console.log(err)
    }

    if(!book){
        return res.status(404).json({mensaje: "Id invalido"})

    }
    return res.status(200).json({book})

}
const deleteBook = async (req, res, next)=> {
    const id = req.params.id
    let book
    try{
        book = await Book.findByIdAndDelete(id)

    }catch(err){
        return console.log(err)
    }
    if(!book){
        return res.status(500).json({mensaje: "Falló la eliminación"})
    }
    return res.status(200).json({mensaje: "Eliminado ocn exito"})
}
module.exports = {addBook, getAllBooks, getBookById, deleteBook}
