const libraryService = require('../services/library-service')

async function getLibrarys(req, res) {

  const librarys = await libraryService.getAllLibrarys()

  res.status(200).send(librarys)
}

async function getLibraryFromId(req, res, next) {
  const { id } = req.params;

  try {
    const library = await libraryService.getLibraryById(id)

    res.status(200).send(library)
  } catch(error) {
    next(error)
  }
  
}

async function createLibrary(req, res) {
  const { name, location, telefono } = req.body;

  const library = await libraryService.createLibrary(name, location, telefono)

  res.status(201).send(library)
}

async function editLibrary(req, res) {
  const { id } = req.params
  const { name, location, telefono } = req.body;

  const library = await libraryService.editLibrary(id, name, location, telefono)

  res.status(201).send(library)
}

async function deleteLibrary(req, res) {
  const { id } = req.params

  await libraryService.deleteLibrary(id)

  res.status(200).send(`Libreria con el id ${id} ha sido eliminada con éxito!`)
}


/*async function login(req, res, next) {
  const { email, password } = req.body

  try {
    const result = await userService.login(email, password)
    res.status(200).send(result)
  } catch(error) {
    next(error)
  }
}*/

module.exports = { getLibrarys, getLibraryFromId, createLibrary, editLibrary, deleteLibrary}// login }