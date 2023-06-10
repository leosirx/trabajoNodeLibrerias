const express = require('express')
const bookController = require('../controllers/book-controller')
const { isAuthenticated } = require('../middlewares/authentication')

const router = express.Router()

router.get("/obtener-libros", bookController.getBooks)
router.get("/obtener-libro-por-id/:id", bookController.getBookFromId)
router.post("/crear-libro",isAuthenticated, bookController.createBook)
router.put("/modificar-libro/:id",isAuthenticated, bookController.editBook)
router.delete("/eliminar-libro/:id",isAuthenticated, bookController.deleteBook)

module.exports = router