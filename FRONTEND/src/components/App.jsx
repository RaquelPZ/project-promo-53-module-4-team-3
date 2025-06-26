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
  const [cardURL, setcardURL] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    slogan: "",
    repo: "",
    demo: "",
    technologies: "",
    desc: "",
    autor: "",
    job: "",
    image: "",
    photo: "",
  });
  useEffect(() => {
    const { photo, image, ...rest } = formData;
    localStorage.setItem("formData", JSON.stringify(rest));
  }, [formData]);

  const changePhoto = (uploadedPhoto) => {
    setFormData({
      ...formData,
      photo: uploadedPhoto,
    });
  };

  const changeImage = (uploadedImage) => {
    setFormData({
      ...formData,
      image: uploadedImage,
    });
  };
  const changeToAnotherState = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  localStorage.setItem("newProject", JSON.stringify(formData));

  const [newProject, setNewProject] = useState(
    JSON.parse(localStorage.getItem("newProject"))
  );

  // Listado de proyectos
  useEffect(() => {
    fetch("http://localhost:4000/api/projects")
      .then((res) => res.json())
      .then((projectsData) => {
        setProjects(projectsData);
      });
  }, []);

  const handleSubmit = (ev) => {
    ev.preventDefault();

    fetch("http://localhost:4000/api/projects", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((dataResponse) => {
        console.log("URL de la tarjeta del proyecto:", dataResponse.cardURL);
        setcardURL(dataResponse.cardURL);
        console.log(dataResponse);
      })
      .catch((error) => {
        console.error("Error al generar la tarjeta del proyecto:", error);
      });

    return;
  };

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
          <Route
            path="/create"
            element={
              <CreatePage
                handleSubmit={handleSubmit}
                formData={formData}
                changeToAnotherState={changeToAnotherState}
                changePhoto={changePhoto}
                changeImage={changeImage}
                cardURL={cardURL}
              />
            }
          />
        </Routes>
      </main>
      <Footer logoAdalab={logoAdalab} />
    </div>
  );
}

export default App;
