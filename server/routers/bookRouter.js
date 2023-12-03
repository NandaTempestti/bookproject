const express = require ('express')
const {addBook, getAllBooks, getBookById, deleteBook} = require ('../dao/controllers/bookController')

const bookRouter = express.Router();


bookRouter.get("/", getAllBooks)
bookRouter.get("/:id", getBookById)
bookRouter.post("/", addBook)
bookRouter.delete("/:id", deleteBook)

module.exports = bookRouter;