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
router.get("/noticas/pedido/locales", apiController.local)
router.get("/noticas/pedido/provinciales", apiController.provinciales)
router.get("/noticas/pedido/nacionales", apiController.nacionales)
router.get("/noticas/pedido/deportes", apiController.deportes)
router.post("/noticias", imagenUp, apiController.add)
router.get("/noticias/buscar/:id", apiController.edit)
router.get("/noticias/imagen/:id", apiController.img)
router.put("/peliculas/editar/:id", apiController.editado)
router.delete("/noticias/borrar/:id", apiController.delete)

/*-------USUARIOS--------*/
router.get('/noticias/usuarios', userController.all)
router.post('/noticias/usuarios', userController.agregar)


module.exports = router;