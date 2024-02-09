require("../backend/node_modules/colors");
const path = require("path");

const configPath = path.join(__dirname, "..", "config", ".env");

require("../backend/node_modules/dotenv").config({ path: configPath });

const { connect } = require("../backend/node_modules/mongoose");

const connectDB = async () => {
  try {
    const DB = await connect(process.env.DB_HOST);
    console.log(
      `Database: ${DB.connection.name}, HOST: ${DB.connection.host}, PORT: ${DB.connection.port} - connected is successfull.`
        .blue.bold
    );
  } catch (error) {
    console.log(
      `Error connecting to database.`.brightRed.bold,
      error.message.red.italic
    );
    process.exit(1);
  }
};

module.exports = connectDB;
