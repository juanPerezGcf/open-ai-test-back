const express = require("express");
const app = express();
const port = 3000;

app.use("/assets", express.static("assets"));

// Ruta GET /ikigai para servir la imagen
app.get("/ikigai", (req, res) => {
  // Envía la imagen desde la carpeta "assets"
  res.sendFile(__dirname + "/assets/ikkigai_diagram.svg");
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
