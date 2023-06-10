const { NotFoundException } = require('../exceptions/exceptions')
const { Book } = require('../models/book')
const jwt = require('jsonwebtoken')
const { Library } = require('../models/library')

async function getAllBooks() {
  const BookList = await Book.findAll({
    include: {
      model: Library,
      as: "libreria"
    },
    where: {
      active: true
    }
  })

  return BookList
}

async function getBookById(id) {
  const book = await Book.findByPk(id, {
    include: {
      model: Library,
      as: "libreria"
    }
  })

  if (book == null || book.active == false) {
    throw new NotFoundException("Libro no encontrado")
  }

  return book
}

async function createBook(isbn, title, author, year, library) {
  const book = new Book()

  book.isbn= isbn
  book.title = title
  book.author = author
  book.year = year
  book.active = true
  book.library = library

  const bookCreated = await book.save()
  return bookCreated
}

async function editBook(id, isbn, title, author, year, library) { //ver isbn
  const book = await getBookById(id)

  if (isbn) {
    book.isbn = isbn
  }
  if (title) {
    book.title = title
  }
  
  if (autor) {
    book.autor = author
  }
  
  if (year) {
    book.year = year
  }

  if (library) {
    book.library = library
  }
  
  const bookEdited = await book.save()

  return bookEdited
}

async function deleteBook(id) {
  const book = await getBookById(id)

   book.active = false

   await book.save()
}


module.exports = { getAllBooks, getBookById, createBook, editBook, deleteBook }