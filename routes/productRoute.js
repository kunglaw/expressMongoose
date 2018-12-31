const express = require("express")
const router = express.Router()
const ProductController = require("../controllers/ProductController")

router.get("/",ProductController.findAll)
router.get("/detail",ProductController.findOne)
router.post("/",ProductController.insert)
router.put("/update/:id",ProductController.update)
router.delete("/delete/:id",ProductController.delete)

module.exports = router
