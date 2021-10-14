const express = require("express");
const app = express();
const cors = require("cors");
const mysql = require("mysql2");

app.use(express.json());
app.use(cors());

const db = require("./models");

db.sequelize.sync().then(() => {
  app.listen(3001, () => {
    console.log("Servidor corriendo en el puerto 3001");
  });
});

const bd = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "",
  database: "devsfuturistics",
});

app.post("/create", (req, res) => {
  const nombre = req.body.nombre;
  const email = req.body.email;
  const password = req.body.password;
  const rol = req.body.rol;
  
bd.query(
    "INSERT INTO usuarios (nombre, email, password, rol) VALUES (?,?,?,?)",
    [nombre, email, password, rol],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Valores insertados");
      }
    }
  );
});

app.get("/show", (req, res) => {
  bd.query("SELECT * FROM usuarios", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.put("/update", (req, res) => {
  const id = req.body.id;
  const nombre = req.body.nombre;
  const email = req.body.email;
  const password = req.body.password;
  const rol = req.body.rol;
  bd.query(
    "UPDATE usuarios SET nombre = ?, email = ?, password = ?, rol = ?  WHERE id = ?",
    [nombre, email, password, rol, id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.delete("/delete/:id", (req, res) => {
  const id = req.params.id;
  bd.query("DELETE FROM usuarios WHERE id = ?", id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});