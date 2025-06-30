import { Link } from "react-router-dom";
import "../../styles/Home.scss";
import Card from "../preview/Card";

function Home({ projects }) {
  return (
    <div className="container home">
      <main className="main_home">
        <h1>Bienvenida a la App de Tarjeta de Proyecto</h1>
        <div className="container-link">
          <Link className="home_link" to="/create">
            Ir a crear mi Tarjeta
          </Link>
        </div>
        <ul className="card-list">
          {projects.map((projectObj) => (
            <li key={projectObj.name}>
              <Card formData={projectObj} />
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default Home;
