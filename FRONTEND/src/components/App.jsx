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

  // Listado de proyectos
  useEffect(() => {
    fetch("https://localhost:4000/api/projects")
      .then((res) => res.json())
      .then((projectsData) => {
        setProjects(projectsData);
      });
  }, []);

  /* fetch("https://localhost:4000/api/projects/", { method: "POST" }); */ // <-- Enviar datos de un nuevo proyecto
  return (
    <div className="container">
      <Header iconLaptop={iconLaptop} logoAdalab={logoAdalab} />

      {/*   <Link to="/" className="btnBack">
        Volver a inicio
      </Link> */}

      <main>
        <Routes>
          <Route path="/" element={<Home projects={projects} />} />
          <Route path="/create" element={<CreatePage />} />
        </Routes>
      </main>
      <Footer logoAdalab={logoAdalab} />
    </div>
  );
}

export default App;
