const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const path = require("path");
const configPath = path.join(__dirname, ".", "config", ".env");
require("dotenv").config({ path: configPath });
const productRouter = require("./routes/products");

const connectDB = require("./config/ConnectDB");

const notFoundRoutes = require("../backend/middlewares/NotFoundRoutes");
const errorHandler = require("../backend/middlewares/errorHandler");

const app = express();

const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");
console.log("swaggerDocument");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());

app.use("/products", productRouter);

app.use("*", notFoundRoutes);
app.use(errorHandler);

connectDB();

module.exports = app;
