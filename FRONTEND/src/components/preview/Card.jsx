function Card(props) {
  return (
    <article className="card">
      <h2 className="card__projectTitle">
        <span className="card__projectTitle--text">Personal project card</span>
      </h2>

      <div className="card__author">
        <div
          className="card__authorPhoto"
          style={{
            backgroundImage: props.image ? `url(${props.image})` : null,
          }}
        ></div>
        <p className="card__job">{props.job || "Full stack Developer"}</p>
        <h3 className="card__name">{props.autor || "Emmelie Bjôrklund"}</h3>
        <div className="card-icons">
          <a
            className="icon icon__www"
            href={props.repo}
            target="_blank"
            title="Haz click para ver el proyecto online"
          >
            {props.demo || "Web link"}
          </a>
          <a
            className="icon icon__github"
            href={props.demo}
            target="_blank"
            title="Haz click para ver el código del proyecto"
          >
            GitHub link
          </a>
        </div>
      </div>

      <div className="card__project">
        <h3 className="card__name-pro">{props.name || "Elegant Workspace"}</h3>
        <p className="card__slogan">{props.slogan || "Diseños Exclusivos"}</p>
        <h3 className="card__descriptionTitle">Product description</h3>
        <p className="card__description">
          {props.desc ||
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla, quos? Itaque, molestias eveniet laudantium adipisci vitae ratione"}
        </p>

        <div className="card__technicalInfo">
          <p className="card__technologies">
            {props.technologies || "React JS - HTML - CSS"}
          </p>
        </div>
      </div>
    </article>
  );
}

export default Card;
