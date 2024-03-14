require("colors");

const app = require("./index");

const { PORT } = process.env;
app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}.`.blue.bold);
});
