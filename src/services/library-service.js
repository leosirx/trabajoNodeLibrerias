const { NotFoundException } = require('../exceptions/exceptions')
const { Book } = require('../models/book')
const { Library } = require('../models/library')
const jwt = require('jsonwebtoken')

async function getAllLibrarys() {
  const libraryList = await Library.findAll({
    include: {
      model: Book
    },
    where: {
      active: true
    }
  })

  return libraryList
}

async function getLibraryById(id) {
  const library = await Library.findByPk(id,{
    include: {
      model: Book
    }
  }
    )

  if (library == null || library.active == false) {
    throw new NotFoundException("No se encontró la librería")
  }

  return library
}

async function createLibrary(name, location, telefono) {
  const library = new Library()

  library.name = name
  library.location = location
  library.telefono = telefono
  library.active = true

  const libraryCreated = await library.save()
  return libraryCreated
}

async function editLibrary(id, name, location, telefono) {
  const library = await getLibraryById(id)

  if (name) {
    library.name = name
  }
  
  if (location) {
    library.location = location
  }
  
  if (telefono) {
    library.telefono = telefono
  }
  
  const libraryEdited = await library.save()

  return libraryEdited
}

async function deleteLibrary(id) {
  const library = await getLibraryById(id)

  library.active = false

  await library.save()
}


module.exports = { getAllLibrarys, getLibraryById, createLibrary, editLibrary, deleteLibrary }