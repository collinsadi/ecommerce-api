const express = require("express")
const router = express.Router()
const {newProduct,allActiveProducts, allProducts, getSpecificProduct, editProduct, deleteProduct} = require("../controllers/productControllers")
const {checkLogin} = require("../controllers/userControllers")

router.post("/create_product",checkLogin, newProduct)
router.get("/get_active_products",allActiveProducts)
router.get("/get_all_products",allProducts)
router.get("/get_product/:id",getSpecificProduct)
router.put("/edit_product/:id",editProduct) /**
 * This is a Super Admin Specific Route and a Super Admin Login Check Would be Made to validate it
 */
router.delete("/delete_product/:id",deleteProduct) /**
 * This is a Super Admin Specific Route and a Super Admin Login Check Would be Made to validate it
 */




module.exports = router