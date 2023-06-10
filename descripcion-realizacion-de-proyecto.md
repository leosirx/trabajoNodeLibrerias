## DESCRIPCION DE LA REALIZACION DEL PROYECTO

El proyceto utiliza la ORM de sequelize para la onexión con la base de de datos

se creo una instancia de sequelize

Modelos
Se crearon los modelos correspondientes para 3 entidades:
Usario, Libreria y Libro, con sus respectivos atributos

Configuramos sequelize en "sequelize-config.js" para poder conectarnos con la base de datos correspondiente

Se probaron las Queries necesarias para poder verificar la conexion con la Base de datos

### ASOCIACIONES/RELACIONES

Se trabajaró la asociación de la tabla "Libros" y la tabla "librerias para que sea posible la funcion de crear un libro como un endpoint la entidad "libreria"

Endpoints de Libros
Se realizó un endpoing "login" para poder logear un usario que luego nos permitirá acceder a algunos endpoints de libreria y libros que requieran autenticación

Endpoints de Librerias
Se crearon los endpoints necesarios para: crear,obtener, eliminar, modificar librerias, y agregar un libro a dicha libreria 

Endpoints Libros
se crearon los endpoints necesarios para poder crea, obtener, eliminar y modificar libros

importamos "express" express, se definio el puerto y se colocó el listen en el index.js para escuchar las peticiones 

se cambió el script en pkgjson por "start" con nuestro app
(index.js) para poder ejecutar nuestra API con el comando: npm start

se creó la carpeta src donde van a ir nuestras carpetas con arquitectura organizada:

dentro de src se creó:

routes
controllers
sevices

dentro de rutas:

se creó user-routes.js
donde importamos express
declaramos router para poder usarla

(para crear el objeto de la clase ruta que nos brinda express, para definir las rutas)

dentro de la carpeta controllers se crearon los archivos js necesarios para utilizar como controlador de cada una de las entidades

dentro de la carpeta services creamos los archivos js necesarios para donde controlaremos la logica de negocio de cada uno de los endpoints de las entidades

Se realizaron las exportaciones/importaciones necesarias de los archivos

Se utilizó el middleware de express: "express.json"

Se importaron las rutas necesarias para el funcionamiento de los endpoints

Se probaron los endpoints en postman

---
Esta fue la secuencia de pasos en cada uno de los endpoints realizado

Armamos la ruta sin el controlador como parametro

creamos el controller (async function), exportamos la funcion

creamos el servicio (async function), exportamos la funcion

Realizamos la lógica del servicio

corregimos el controlador en base a la funcion del servicio

completamos la ruta con el controlador que armamos

probamos la peticion

---

Dentro de la carpeta middlewares
Se creo el archivo middlewares.js donde se configuraron las validaciones necesarias para el uso del endpoints

Se creo el archivo error-handler.js para trabajar el manejo de errores

---


### AUTENTICACION

Se utilizó la estrategia de passport "JWT" para aboradar la autenticación del usuario

Se creó la carpeta "auth" para trabajar con la estrategia de passport
Configurar passport en express:

-se importaron los modulos necesarios
-se inicializo passport en express
-se configuró estrategia en el archivo passport-config.js
-configuramos las rutas relacionadas a auth


---

### Incorporación del password del usuario:

se agregó la columna password a el Modelo de Usuarios

se actualizó el endpoint de creacion de usuario para agrgarle el uso del password

se modificó el servicio. donde crea el usuario le agregamos el parametro password

se agregó la password al cuerpo de la peticion en el controlador

---
Se creó un endpoint para poder logearnos que nos devuelve un token JWT

Se creó el endpoint de logueo del usuario

se importó el JWT en services

se creó una funcion login, que nos va a pedir email, password, una validacion, 
y en esa funcion creamos un token jwt.sign() -> nos pide {id, email, name,} luego se codificaran Y una clave "admin"

Dicha funcion retorna el token jwt

se creó la función al controller para el loggin

Se creó la ruta  para el endpoint "login"

se creó una validacion en el servicio login que funcione cuando no encontramos un usuario

Se configuró la autenticacion la autenticación necesaria a los endpoints correspondientes, para poder usarlos solo si estamos identificados

se importó la funcion que tenemos en "auth.js"

se importó nuestro middleware en las rutas para poder utlizar dichos endpoints

