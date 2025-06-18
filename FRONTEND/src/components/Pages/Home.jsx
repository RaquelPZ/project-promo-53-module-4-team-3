import { Link } from "react-router-dom";
import "../../styles/Home.scss";
import Card from "../preview/Card";
import lastProjects from "../data/projects.json";

function Home() {
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
          {lastProjects.map((projectObj) => (
            <li key={projectObj.autor}>
              <Card
                name={projectObj.name}
                slogan={projectObj.slogan}
                desc={projectObj.desc}
                technologies={projectObj.technologies}
                demo={projectObj.demo}
                repo={projectObj.repo}
                autor={projectObj.autor}
                job={projectObj.job}
                photo={projectObj.photo}
                image={projectObj.image}
              />
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default Home;
