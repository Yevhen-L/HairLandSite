import React, { useState } from "react";
import axios from "axios";
import { StyledAddProducts } from "./addProducts.styled.js";

const AddProduct = () => {
  const [formData, setFormData] = useState({
    brand: "",
    groupe: "",
    subgroupe: "",
    fullName: "",
    shortName: "",
    description: "",
    quantity: "",
    purchasePrice: "",
    sellingPrice: "",
    images: [],
    article: "",
    barcode: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    const imageUrls = files.map((file) => URL.createObjectURL(file));
    setFormData((prevState) => ({
      ...prevState,
      images: [...prevState.images, ...imageUrls],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5050/products/",
        formData
      );
      console.log(response.data);
      // Очистка форми після успішної відправки даних
      setFormData({
        brand: "",
        groupe: "",
        subgroupe: "",
        fullName: "",
        shortName: "",
        description: "",
        quantity: "",
        purchasePrice: "",
        sellingPrice: "",
        images: [],
        article: "",
        barcode: "",
      });
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <StyledAddProducts>
      <div className="inputsBox">
        <div className="box">
          <label className="label">Бренд</label>
          <input
            type="text"
            id="brand"
            name="brand"
            value={formData.brand}
            onChange={handleChange}
            placeholder="Davines"
            required
          />
          <label className="label">Група</label>
          <input
            type="text"
            id="groupe"
            name="groupe"
            value={formData.groupe}
            onChange={handleChange}
            placeholder="ESSENTIAL HAIRCARE"
            required
          />
          <label className="label">Підгрупа</label>
          <input
            type="text"
            id="subgroupe"
            name="subgroupe"
            value={formData.subgroupe}
            onChange={handleChange}
            placeholder="Освіжаючий шампунь"
            required
          />
          <label className="label">Повна назва</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Essential Haircare Solu Shampoo"
            required
          />
          <label className="label">Коротка назва</label>
          <input
            type="text"
            id="shortName"
            name="shortName"
            value={formData.shortName}
            onChange={handleChange}
            placeholder="Solu Shampoo"
            required
          />
        </div>
        <div className="box">
          <label className="label">Опис продукту</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Це самий найкращій продукт..."
            required
          ></textarea>
        </div>
        <div className="box">
          <label className="label">Кількість</label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            placeholder="123"
            required
          />
          <label className="label">Ціна закупки</label>
          <input
            type="number"
            id="purchasePrice"
            name="purchasePrice"
            value={formData.purchasePrice}
            onChange={handleChange}
            placeholder="999.9"
            required
          />
          <label className="label">Ціна продажу</label>
          <input
            type="number"
            id="sellingPrice"
            name="sellingPrice"
            value={formData.sellingPrice}
            onChange={handleChange}
            placeholder="999.9"
            required
          />
          <label className="label">Артикул</label>
          <input
            type="text"
            id="article"
            name="article"
            value={formData.article}
            onChange={handleChange}
            placeholder="12345678"
            required
          />
          <label className="label">Штрихкод</label>
          <input
            type="text"
            id="barcode"
            name="barcode"
            value={formData.barcode}
            onChange={handleChange}
            placeholder="123456789101112"
            required
          />
        </div>
        <div className="box">
          <label className="label">Додайте зображення:</label>
          <input
            type="file"
            id="images"
            name="images"
            onChange={handleImageChange}
            accept="image/*"
            multiple
            required
          />
          {formData.images.length > 0 && (
            <div>
              {formData.images.map((imageUrl, index) => (
                <img
                  key={index}
                  src={imageUrl}
                  alt="Uploaded"
                  style={{
                    width: "100px",
                    height: "auto",
                    marginTop: "10px",
                  }}
                />
              ))}
            </div>
          )}
        </div>
        {/* Кнопка submit */}
        <button className="button" type="submit" onClick={handleSubmit}>
          Зберегти
        </button>
      </div>
    </StyledAddProducts>
  );
};

export default AddProduct;
