import { Link } from "react-router-dom";
import "../styles/App.scss";
import "../styles/Home.scss";
import iconLaptop from "../images/laptop-code-solid.svg";
import logoAdalab from "../images/adalab.png";
import Header from "./Header";
import Footer from "./Footer";

function Home() {
  return (
    <div className="container home">
      <Header iconLaptop={iconLaptop} logoAdalab={logoAdalab} />
      <main className="main">
        <h1>Bienvenida a la App de Tarjeta de Proyecto</h1>
        <div className="container-link">
          <Link className="home_link" to="/crear">
            Ir a crear mi Tarjeta
          </Link>
        </div>
      </main>
      <Footer logoAdalab={logoAdalab} />
    </div>
  );
}

export default Home;
