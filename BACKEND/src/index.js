const express = require("express");
const cors = require("cors");
const path = require("path");
const mysql = require("mysql2/promise");
require("dotenv").config();

// Creamos una vari con el servidor
const server = express();

// Configuramos server para que funcione bien como API
server.use(cors());
server.use(express.json({ limit: "100mb" }));

//Configuramos server para que funcione como serv de fich dinámicos
server.set("view engine", "ejs");

// Conexin a la base de datos

async function getConnection() {
  const datosConexion = {
    host: process.env.MYSQL_HOST,
    port: process.env.MYSQL_PORT,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
  };

  const conexion = await mysql.createConnection(datosConexion);
  await conexion.connect();
  return conexion;
}

// Arrancamos el servidor en el puerto 4000
const port = 4000;
server.listen(port, () => {
  console.log(`Servidor iniciado <http://localhost:${port}>`);
});

server.get("/api/projects", async (req, res) => {
  try {
    // 1. Conectarnos a la base de datos
    const conn = await getConnection();
    // 2. Lanzamos un SELECT y recuperamos los datos como JSON
    const [results] = await conn.query(
      `SELECT * FROM proyectos p JOIN authors a ON (p.id = a.fk_projects);`
    );
    // 3. Cerramos la conexión
    await conn.end();
    // 4. Devolvemos en la respuesta (res) el JSON
    res.json(results);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error al obtener proyectos" });
  }
});

server.post("/api/projects", async (req, res) => {
  if (req.body.name === "") {
    res.json({
      sucess: false,
      error: "Falta rellenar nombre",
    });
  } else if (req.body.slogan === "") {
    res.json({
      sucess: false,
      error: "Falta rellenar slogan",
    });
  } else if (req.body.repo === "") {
    res.json({
      sucess: false,
      error: "Falta rellenar repo",
    });
  } else if (req.body.demo === "") {
    res.json({
      sucess: false,
      error: "Falta rellenar demo",
    });
  } else if (req.body.technologies === "") {
    res.json({
      sucess: false,
      error: "Falta rellenar technlogies",
    });
  } else if (req.body.descripción === "") {
    res.json({
      sucess: false,
      error: "Falta rellenar descripción",
    });
  } else if (req.body.author === "") {
    res.json({
      sucess: false,
      error: "Falta rellenar author",
    });
  } else if (req.body.job === "") {
    res.json({
      sucess: false,
      error: "Falta rellenar job",
    });
  } else if (req.body.image === "") {
    res.json({
      sucess: false,
      error: "Falta rellenar image",
    });
  } else if (req.body.photo === "") {
    res.json({
      sucess: false,
      error: "Falta rellenar photo",
    });
    return;
  }

  const conn = await getConnection();

  // INSERT en la bbdd

  const [resultsInsertProject] = await conn.execute(
    `INSERT INTO proyectos (name, slogan, descripción, technologies, demo, repo, photo)
       VALUES (?, ?, ?, ?, ?, ?, ?)`,
    [
      req.body.name,
      req.body.slogan,
      req.body.descripción,
      req.body.technologies,
      req.body.demo,
      req.body.repo,
      req.body.photo,
    ]
  );

  const projectId = resultsInsertProject.insertId;

  const [resultsInsertAuthor] = await conn.execute(
    `INSERT INTO authors (author, job, image, fk_projects)
    VALUES (?, ?, ?, ?)`,
    [req.body.author, req.body.job, req.body.image, projectId]
  );

  await conn.end();

  res.json({
    success: true,
    cardURL: "http://localhost:4000/projects/" + projectId,
  });

  console.log(cardURL);
});

// SERVIDOR DE PLANTILLAS

server.get("/api/projects/:id", async (req, res) => {
  // 1. Conectarnos a la base de datos

  const conn = await getConnection();

  // 2. Lanzamos un SELECT y recuperamos los datos como JSON

  const [results] = await conn.query(
    `SELECT *
      FROM proyectos p
      JOIN authors a ON (p.id = a.fk_projects)
      WHERE p.id = ?;`,
    [req.params.id]
  );

  // 3. Cerramos la conexión

  await conn.end();

  res.json({
    success: true,
    card: {
      name: results[0].name,
      slogan: results[0].slogan,
      desc: results[0].desc,
      technologies: results[0].technologies,
      demo: results[0].demo,
      repo: results[0].repo,
    },
  });
});

// renderizar la tarjeta generada
server.get("/projects/:id", async (req, res) => {
  const conn = await getConnection();

  const [results] = await conn.query(
    `SELECT * FROM proyectos p JOIN authors a ON (p.id = a.fk_projects) WHERE p.id = ?;`,
    [req.params.id]
  );
  console.log(results);

  if (results.length === 0) {
    res.render("not_found");
    return;
  }

  const projectData = results[0];

  await conn.end();

  res.render("detail", projectData);
});

/* app.get("/", (req, res) => {
  const port = process.env.MYSQL_PORT;
  res.render("index");
}); */

// SERVIDOR DE FICHEROS ESTÁTICOS PARA LA PÁGINA DE DETALLE

server.use(express.static(path.join(__dirname, "../views_static")));

server.use(express.static(path.join(__dirname, "../public_html")));
