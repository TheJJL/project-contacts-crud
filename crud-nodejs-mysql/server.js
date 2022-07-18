const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
var corsOptions = {
  origin: "http://localhost:8081"
};
app.use(cors(corsOptions));
// Analizar solicitud de tipo de contenido - application/json
app.use (bodyParser.json());
// Analizar solicitud de tipo de contenido - application/x-www-form-urlencoded
app.use (bodyParser.urlencoded({extended:true}));
// Sincronizar dataBase
const db = require("./app/models");
db.sequelize.sync({ force: false }).then(() => {
  console.log("Conectado a la dataBase");
});
// Incluir Rutas
require("./app/routes/contact.routes")(app);
// Configurar PORT
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
