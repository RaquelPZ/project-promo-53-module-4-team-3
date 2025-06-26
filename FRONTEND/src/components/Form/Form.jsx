import PhotoButton from "../preview/PhotoButton";

function Form(props) {
  const handleInput = (ev) => {
    const field = ev.target.id;
    const value = ev.target.value;
    props.changeToAnotherState(field, value);
  };

  return (
    <>
      <form
        className="addForm"
        onSubmit={props.handleSubmit}
      >
        <h2 className="title">Información</h2>
        <fieldset className="addForm__group">
          <legend className="addForm__title">
            Cuéntanos sobre el proyecto
          </legend>
          <input
            className="addForm__input"
            type="text"
            name="name"
            id="name"
            placeholder="Nombre del proyecto"
            onChange={handleInput}
          />
          <input
            className="addForm__input"
            type="text"
            name="slogan"
            id="slogan"
            placeholder="Slogan"
            onChange={handleInput}
          />
          <div className="addForm__2col">
            <input
              className="addForm__input"
              type="url"
              name="repo"
              id="repo"
              placeholder="Repositorio"
              onChange={handleInput}
            />
            <input
              className="addForm__input"
              type="url"
              name="demo"
              id="demo"
              placeholder="Demo"
              onChange={handleInput}
            />
          </div>
          <input
            className="addForm__input"
            type="text"
            name="technologies"
            id="technologies"
            placeholder="Tecnologías"
            onChange={handleInput}
          />
          <textarea
            className="addForm__input"
            type="text"
            name="desc"
            id="desc"
            placeholder="Descripción"
            rows="5"
            onChange={handleInput}
          ></textarea>
        </fieldset>

        <fieldset className="addForm__group">
          <legend className="addForm__title">Cuéntanos sobre la autora</legend>
          <input
            className="addForm__input"
            type="text"
            name="autor"
            id="autor"
            placeholder="Nombre"
            onChange={handleInput}
          />
          <input
            className="addForm__input"
            type="text"
            name="job"
            id="job"
            placeholder="Trabajo"
            onChange={handleInput}
          />
        </fieldset>

        <fieldset className="addForm__group--upload">
          <PhotoButton
            updateAvatar={props.changePhoto}
            text="Subir foto del proyecto"
          />
          <PhotoButton
            updateAvatar={props.changeImage}
            text="Subir foto de la autora"
          />

          <button
            type="submit"
            className="button--large"
            onClick={props.handleSubmit}
          >
            Guardar proyecto
          </button>
          {props.cardInfo ? (
            <a className="link"
              href={props.cardInfo}
              target="_blank">
              {props.cardInfo}
            </a>
          ) :
            (
              <p className="link">
                Debes rellenar todos los campos del formulario para generar tu
                tarjeta.
              </p>
            )}
        </fieldset>
      </form>

    </>
  );
}

export default Form;
