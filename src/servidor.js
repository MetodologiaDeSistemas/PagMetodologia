const express = require('express');
const mongoose = require("mongoose");
require("dotenv").config();
const horaRoutes = require ("./BackEnd/Routes/Hora")
const imgRoutes = require ("./BackEnd/Routes/Imagenes")
const f_d_Routes = require ("./BackEnd/Routes/Fecha_Dep")
const validacionUsu = require ("./BackEnd/Routes/Validacion")
const precio = require ("./BackEnd/Routes/Precios")
const morgan = require('morgan');
const multer = require('multer');
const { v4: uuid } = require('uuid');
const path = require('path');



//Agegar Conexion
const app = express();
const port = process.env.PORT || 9000;

//middleware
app.use(express.json())
app.use(express.static('build'));
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
//-----------------------------------------------------------
const storage = multer.diskStorage({
    destination: path.join(__dirname, 'Uploads'),
    filename: (req, file, cb, filename) => {
        cb(null, uuid() + path.extname(file.originalname));
    }
}) 
app.use(multer({
    storage : storage
}).single('image'))
//-----------------------------------------------------------

app.use('/api', horaRoutes)
app.use('/api', imgRoutes)
app.use('/api', f_d_Routes)
app.use('/api', validacionUsu)
app.use('/api', precio)

//routes
app.get('/', (req, res) => {
    res.send("Bienvenido a mi API");
});


//Conexion MongoDB
mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log('Conectado a la base de datos'))
    .catch((error) => console.error(error));

app.listen(port, () => console.log('server listning on port ', port));
