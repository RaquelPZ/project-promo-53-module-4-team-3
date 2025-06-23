import "../styles/App.scss";
// import "../styles/Home.scss";
import "../images/icons/github.svg";
import iconLaptop from "../images/laptop-code-solid.svg";
import logoAdalab from "../images/adalab.png";

import { useState, useEffect } from "react";

import Header from "./Header";

import Footer from "./Footer";
import { Link, Routes, Route } from "react-router-dom";
import CreatePage from "./Pages/CreatePage";

import Home from "./Pages/Home";

function App() {
  const [projects, setProjects] = useState([]);
  const [cardInfo, setCardInfo] = useState("");

  // Listado de proyectos
  /*   useEffect(() => {
    fetch("http://localhost:4000/api/projects")
      .then((res) => res.json())
      .then((projectsData) => {
        setProjects(projectsData);
      });
  }, []); */

  useEffect(() => {
    const handleSubmit = (ev) => {
    ev.preventDefault();

    fetch("https://dev.adalab.es/api/projectCard", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(objToSend),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("URL de la tarjeta del proyecto:", data.cardURL);
        setCardInfo(data.cardURL);
        console.log(data);
      })
      .catch((error) => {
        console.error("Error al generar la tarjeta del proyecto:", error);
      });

    return;
  }
  //Copiar el objToSend de nuestro proyecto
  //Copiar el useEffect de nuestro proyecto




  return (
    <div className="container">
      <Header iconLaptop={iconLaptop} logoAdalab={logoAdalab} />

      {/*   <Link to="/" className="btnBack">
        Volver a inicio
      </Link> */}

      <main>
        <Routes>
          <Route path="/" element={<Home projects={projects} />} />
          <Route path="/create" element={<CreatePage cardInfo={cardInfo} />} />
        </Routes>
      </main>
      <Footer logoAdalab={logoAdalab} />
    </div>
  );
}

export default App;
