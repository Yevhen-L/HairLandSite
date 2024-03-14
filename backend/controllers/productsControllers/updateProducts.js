const Product = require("../../models/products");

exports.updateProduct = async (req, res) => {
  try {
    const {
      groupe,
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

    const originalProduct = await Product.findById(req.params.id);

    if (!originalProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      {
        groupe,
        fullName,
        shortName,
        description,
        quantity,
        purchasePrice,
        sellingPrice,
        images,
        article,
        barcode,
      },
      { new: true }
    );

    if (!updatedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    const updatedField = {};

    if (originalProduct.fullName !== updatedProduct.fullName) {
      updatedField.fullName = updatedProduct.fullName;
    }
    if (originalProduct.shortName !== updatedProduct.shortName) {
      updatedField.shortName = updatedProduct.shortName;
    }
    if (originalProduct.description !== updatedProduct.description) {
      updatedField.description = updatedProduct.description;
    }

    if (originalProduct.quantity !== updatedProduct.quantity) {
      updatedField.quantity = updatedProduct.quantity;
    }

    if (originalProduct.purchasePrice !== updatedProduct.purchasePrice) {
      updatedField.purchasePrice = updatedProduct.purchasePrice;
    }
    if (originalProduct.sellingPrice !== updatedProduct.sellingPrice) {
      updatedField.sellingPrice = updatedProduct.sellingPrice;
    }
    if (originalProduct.images !== updatedProduct.images) {
      updatedField.images = updatedProduct.images;
    }
    if (originalProduct.article !== updatedProduct.article) {
      updatedField.article = updatedProduct.article;
    }
    if (originalProduct.barcode !== updatedProduct.barcode) {
      updatedField.barcode = updatedProduct.barcode;
    }

    // Повертаємо об'єкт зміненого поля
    res.json(updatedField);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
