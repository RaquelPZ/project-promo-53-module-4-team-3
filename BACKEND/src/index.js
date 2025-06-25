const express = require("express");
const cors = require("cors");
const path = require("path");
const mysql = require("mysql2/promise");

// Creamos una vari con el servidor
const server = express();

// Configuramos server para que funcione bien como API
server.use(cors());
server.use(express.json());

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
  // 1. Conectarnos a la base de datos

  const conn = await getConnection();

  // 2. Lanzamos un SELECT y recuperamos los datos como JSON

  // const [results] = await conn.query {
  //   `SELECT *
  //     FROM projects p
  //     JOIN authors a ON (p.id = a.fk_project);`
  // };

  // 3. Cerramos la conexión

  await conn.end();

  // 4. Devolvemos en la respuesta (res) el JSON

  res.json(results);

  /* res.sendFile(path.join(__dirname, "../FRONTEND/src/data/projects.json")); */
  /*
  const results = [
    {
      name: "Proyecto 1",
      slogan: "Slogan",
      desc: "Bienvenidos a mi proyecto molón Cande",
      technologies: "Blender, GameMarker, Unity3D",
      demo: "https://github.com/Nelicah",
      repo: "",
      autor: "Cande",
      job: "Diseñadora de videojuegos molones",
      photo: "https://i.blogs.es/7f0b02/lol/840_560.jpg",
      image: "https://avatars.githubusercontent.com/u/199109765?v=4",
    },

    {
      name: "Proyecto 2",
      slogan: "Slogan",
      desc: "Bienvenidos a mi proyecto molón Jessica",
      technologies: "React, JavaScript, HTML",
      demo: "https://github.com/JessicaVR86",
      repo: "",
      autor: "Jessica",
      job: "Diseñadora web Frontend",
      photo:
        "https://www.enfoquegaussiano.com/wp-content/uploads/mockup-web-4.jpg",
      image: "https://avatars.githubusercontent.com/u/204056900?v=4 ",
    },

    {
      name: "Proyecto 3",
      slogan: "Slogan",
      desc: "Bienvenidos a mi proyecto molón Raquel",
      technologies: "CSS, Sass, Figma",
      demo: "https://github.com/RaquelPZ",
      repo: "",
      autor: "Rachel",
      job: "Diseñadora UX/UI",
      photo:
        "https://img.freepik.com/vector-premium/banner-conceptos-palabra-diseno-ux-interfaz-usuario-integracion-productos-infografia-iconos-lineales-sobre-fondo-verde-tipografia-creativa-aislada-ilustracion-color-contorno-vectorial-texto_106317-5864.jpg",
      image: "https://avatars.githubusercontent.com/u/206062240?v=4",
    },

    {
      name: "Proyecto 4",
      slogan: "Slogan",
      desc: "Bienvenidos a mi proyecto molón Chrissy",
      technologies: "React, Node.js, MySQL Workbench",
      demo: "https://github.com/Chrissy-92",
      repo: "",
      autor: "Chrissy P.",
      job: "Diseñadora web Fullstack",
      photo:
        "https://www.ldhmsoftware.com/wp-content/uploads/2023/11/0_cl7fc6pt1MHjIF4K-1024x622.png",
      image: "https://avatars.githubusercontent.com/u/185409586?v=4",
    },
  ];

  res.json(results);
  */
});

//server.post("/api/projects", (req, res) => {});

server.post("/api/projects", (req, res) => {
  console.log("Holis", req.body);
});
