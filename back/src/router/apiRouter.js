const express = require("express")
const router = express.Router()
const multer = require("multer")
const path = require("path")
const apiController = require("../controllers/apiController")
const userController = require("../controllers/userControllers")

const diskstorage = multer.diskStorage({
    destination: path.join(__dirname, '../image'),
    filename: (req, file, cb) => {
        cb(null, Date.now() + file.originalname)
    }
})

const imagenUp = multer({
    storage: diskstorage
}).single('image')

/*------ noticias------*/
router.get('/noticias', apiController.all)
router.get("/peliculas/pedido/:dato", apiController.pedir)
router.post("/noticias", imagenUp, apiController.add)
router.get("/noticias/buscar/:id", apiController.edit)
router.put("/peliculas/editar/:id", apiController.editado)
router.delete("/noticias/borrar/:id", apiController.delete)

/*-------USUARIOS--------*/
router.get('/noticias/usuarios', userController.all)
router.post('/noticias/usuarios', userController.agregar)


module.exports = router;