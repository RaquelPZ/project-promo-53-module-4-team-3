function Card({ formData }) {
  return (
    <article className="card">
      <h2 className="card__projectTitle">
        <span className="card__projectTitle--text">Personal project card</span>
      </h2>

      <div className="card__author">
        <div
          className="card__authorPhoto"
          style={{
            backgroundImage: formData.image ? `url(${formData.image})` : null,
          }}
        ></div>
        <p className="card__job">{formData.job || "Full stack Developer"}</p>
        <h3 className="card__name">{formData.author || "Emmelie Bjôrklund"}</h3>
        <div className="card-icons">
          <a
            className="icon icon__www"
            href={formData.repo}
            target="_blank"
            title="Haz click para ver el proyecto online"
          >
            {formData.demo || "Web link"}
          </a>
          <a
            className="icon icon__github"
            href={formData.demo}
            target="_blank"
            title="Haz click para ver el código del proyecto"
          >
            GitHub link
          </a>
        </div>
      </div>

      <div className="card__project">
        <h3 className="card__name-pro">
          {formData.name || "Elegant Workspace"}
        </h3>
        <p className="card__slogan">
          {formData.slogan || "Diseños Exclusivos"}
        </p>
        <h3 className="card__descriptionTitle">Product description</h3>
        <p className="card__description">
          {formData.descripción ||
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla, quos? Itaque, molestias eveniet laudantium adipisci vitae ratione"}
        </p>

        <div className="card__technicalInfo">
          <p className="card__technologies">
            {formData.technologies || "React JS - HTML - CSS"}
          </p>
        </div>
      </div>
    </article>
  );
}

export default Card;
