import Card from "./Card";

function Preview({ formData, cardURL, changesImage }) {
  return (
    <section className="preview">
      <div
        // key="background-1"
        className="projectImage"
        style={{
          backgroundImage: formData.photo ? `url(${formData.photo})` : null,
        }}
      ></div>
      <Card formData={formData} cardURL={cardURL} changesImage={changesImage} />
      {cardURL ? (
        <a className="link" href={cardURL} target="_blank">
          {cardURL}
        </a>
      ) : (
        <p className="link">
          Debes rellenar todos los campos del formulario para generar tu
          tarjeta.
        </p>
      )}
    </section>
  );
}

export default Preview;
