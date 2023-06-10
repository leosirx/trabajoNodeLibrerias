const express = require('express')
const libraryController = require('../controllers/library-controller')
const { isAuthenticated } = require('../middlewares/authentication')

const router = express.Router()

router.get("/obtener-librerias", libraryController.getLibrarys)
router.get("/obtener-libreria-por-id/:id", libraryController.getLibraryFromId)
router.post("/crear-libreria",isAuthenticated, libraryController.createLibrary) 
router.put("/modificar-libreria/:id",isAuthenticated, libraryController.editLibrary) 
router.delete("/eliminar-libreria/:id",isAuthenticated, libraryController.deleteLibrary)

module.exports = router