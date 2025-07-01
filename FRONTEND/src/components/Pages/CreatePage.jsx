import Hero from "../Hero";
import Preview from "../preview/Preview";

import Form from "../Form/Form";

function CreatePage({
  handleSubmit,
  formData,
  changeToAnotherState,
  changeImage,
  changePhoto,
  cardURL,
}) {
  return (
    <main className="main_create">
      <Hero />

      <Preview
        formData={formData}
        changeToAnotherState={changeToAnotherState}
        cardURL={cardURL}
      />

      <Form
        changeToAnotherState={changeToAnotherState}
        handleSubmit={handleSubmit}
        changePhoto={changePhoto}
        changeImage={changeImage}
        cardURL={cardURL}
      />
    </main>
  );
}

export default CreatePage;
