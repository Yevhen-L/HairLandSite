const express = require("express");
const router = express.Router();
const productController = require("../controllers/productsControllers/index");

// Маршрути для керування продуктами
router.post("/", productController.createProduct); // Створення нового продукту
router.get("/", productController.getAllProducts); // Отримання всіх продуктів
router.get("/:id", productController.getProductById); // Отримання продукту за його ID
router.patch("/:id", productController.updateProduct); // Оновлення інформації про продукт за його ID
router.delete("/:id", productController.deleteProduct); // Видалення продукту за його ID

module.exports = router;
