import Hero from "../Hero";
import Preview from "../preview/Preview";

import Form from "../Form/Form";

function CreatePage({
  handleSubmit,
  formData,
  changeToAnotherState,
  changeImage,
  changePhoto,
  cardInfo,
}) {
  return (
    <main className="main_create">
      <Hero />

      <Preview
        formData={formData}
        changeToAnotherState={changeToAnotherState}
      />

      <Form
        changeToAnotherState={changeToAnotherState}
        handleSubmit={handleSubmit}
        changePhoto={changePhoto}
        changeImage={changeImage}
        cardInfo={cardInfo}
      />
    </main>
  );
}

export default CreatePage;
