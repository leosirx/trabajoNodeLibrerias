const bookService = require('../services/book-service')

async function getBooks(req, res) {

  const books = await bookService.getAllBooks()

  res.status(200).send(books)
}

async function getBookFromId(req, res, next) {
  const { id } = req.params;

  try {
    const book = await bookService.getBookById(id)

    res.status(200).send(book)
  } catch(error) {
    next(error)
  }
  
}

async function createBook(req, res) {
  const { isbn, title, author, year, library } = req.body;

  const book = await bookService.createBook(isbn, title, author, year, library)

  res.status(201).send(book)
}

async function editBook(req, res) {
  const { id } = req.params
  const { isbn, title, author, year, library } = req.body;

  const book = await bookService.editBook(id, isbn, title, author, year, library)

  res.status(201).send(book)
}

async function deleteBook(req, res) {
  const { id } = req.params

  await bookService.deleteBook(id)

  res.status(200).send(`El libro con el id ${id} ha sido eliminado con éxito!`) //VER
}


module.exports = { getBooks, getBookFromId, createBook, editBook, deleteBook}