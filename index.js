const express = require('express')
const userRoutes = require('./src/routes/user-routes')
const libraryRoutes = require('./src/routes/library-routes')
const bookRoutes = require('./src/routes/book-routes')

const { errorHandlerMiddleware } = require('./src/middlewares/error-handler')
const { initializeAuthentication } = require('./src/auth/auth')

const app = express()
const port = 5000

initializeAuthentication()

app.use(express.json())
app.use('/user', userRoutes)
app.use('/library', libraryRoutes)
app.use('/book', bookRoutes)
app.use(errorHandlerMiddleware)

app.listen(port, () => {
  console.log("API con express corriendo en el puerto " + port)
})