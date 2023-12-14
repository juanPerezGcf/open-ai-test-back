const express = require("express");
const app = express();
const port = 3000;

// Ruta GET /ikigai
app.get("/ikigai", (req, res) => {
  res.send("Bienvenido a la ruta Ikigai");
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
