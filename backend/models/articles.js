const mongoose = require("mongoose");

const articleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  image: {
    type: String, // URL зображення
    required: true,
  },
  // Додайте інші поля, які вам потрібні
});

const Article = mongoose.model("Article", articleSchema);

module.exports = Article;
