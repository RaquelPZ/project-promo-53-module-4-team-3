import { Link } from "react-router-dom";
import "../../styles/Home.scss";

function Home() {
  return (
    <div className="container home">
      <main className="main">
        <h1>Bienvenida a la App de Tarjeta de Proyecto</h1>
        <div className="container-link">
          <Link className="home_link" to="/create">
            Ir a crear mi Tarjeta
          </Link>
        </div>
      </main>
    </div>
  );
}

export default Home;
