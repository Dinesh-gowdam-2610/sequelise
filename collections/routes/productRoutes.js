const productControllers = require("../controllers/productControllers.js");
const router = require("express").Router();
const {
  addProduct,
  updateProduct,
  findProductById,
  getAllProducts,
  deleteProduct,
} = productControllers;
router.post("/addProduct", addProduct);
router.get("/allProducts", getAllProducts);
router.put("/updateProduct/:id", updateProduct);
router.get("/:id", findProductById);
router.delete("/delete/:id", deleteProduct);
module.exports = router;
