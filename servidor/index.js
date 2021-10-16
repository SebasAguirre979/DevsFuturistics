const express = require("express");
const app = express();
const cors = require("cors");
const mysql = require("mysql2");

app.use(express.json());
app.use(cors());


const db = require("./models");

db.sequelize.sync().then(() => {
  app.listen(5000, () => {
    console.log("Servidor corriendo en el puerto 3001");
  });
});

const bd = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "camilo123",
  database: "devsfuturistics",
});

// // Crea un nuevo usuario
app.post("/usuarios/newuser", (req, res) => {
  const nombre = req.body.nombre;
  const cedula = req.body.cedula;
  const email = req.body.email;
  const pass = req.body.pass;
  const rol = req.body.rol;
  
bd.query(
    "INSERT INTO usuarios (nombre,cedula, email, pass, rol) VALUES (?,?,?,?,?)",
    [nombre,cedula, email, pass, rol],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Valores insertados");
      }
    }
  );
});
//Trae todos los usuarios
app.get("/usuarios/allusers", (req, res) => {
  bd.query("SELECT * FROM usuarios", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});
//Actualiza por cedula
app.patch("/usuarios/update/", (req, res) => {
  const nombre = req.body.nombre;
  const cedula = req.body.cedula;
  const email = req.body.email;
  const pass = req.body.pass;
  const rol = req.body.rol;
  const cedulaB = req.body.cedulaB
  bd.query(
    "UPDATE usuarios SET nombre = ?, cedula = ?, email = ?, pass = ?, rol = ?  WHERE cedula = ?",
    [nombre,cedula, email, pass, rol, cedulaB],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});
// Elimina un usuario por numero de cedula
app.delete("/usuarios/deleteuser", (req, res) => {
  const cedulaB = req.body.cedulaB
  bd.query("DELETE FROM usuarios WHERE cedula = ?", cedulaB, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});