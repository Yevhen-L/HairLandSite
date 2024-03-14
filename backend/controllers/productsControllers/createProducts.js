const Product = require("../../models/products");

// Метод для створення нового продукту
exports.createProduct = async (req, res) => {
  try {
    const {
      brand,
      groupe,
      subgroupe,
      fullName,
      shortName,
      description,
      quantity,
      purchasePrice,
      sellingPrice,
      images,
      article,
      barcode,
    } = req.body;

    // Перевірка наявності продукту в базі даних за певними полями
    const existingProduct = await Product.findOne({
      brand,
      fullName,
      article,
      barcode,
    });

    // Якщо продукт вже існує, виводимо помилку
    if (existingProduct) {
      return res.status(400).json({ message: "Product already exists" });
    }
    const product = new Product({
      brand,
      groupe,
      subgroupe,
      fullName,
      shortName,
      description,
      quantity,
      purchasePrice,
      sellingPrice,
      images,
      article,
      barcode,
    });
    await product.save();
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
