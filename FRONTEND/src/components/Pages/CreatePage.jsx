import { useState, useEffect } from "react";
import Hero from "../Hero";
import Preview from "../preview/Preview";

import Form from "../Form/Form";

function CreatePage() {
  const [formData, setFormData] = useState({
    name: "",
    slogan: "",
    repo: "",
    demo: "",
    technologies: "",
    desc: "",
    autor: "",
    job: "",
    image: "",
    photo: "",
  });
  useEffect(() => {
    const { photo, image, ...rest } = formData;
    localStorage.setItem("formData", JSON.stringify(rest));
  }, [formData]);

  const changePhoto = (uploadedPhoto) => {
    setFormData({
      ...formData,
      photo: uploadedPhoto,
    });
  };

  const changeImage = (uploadedImage) => {
    setFormData({
      ...formData,
      image: uploadedImage,
    });
  };
  const changeToAnotherState = (field, value) => {
    if (field) {
      const newFormData = {
        ...formData,
        [field]: value,
      };
      setFormData(newFormData);
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("handleSubmit");

    fetch("https://dev.adalab.es/api/projectCard/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((dataResponse) => {
        console.log(dataResponse);
      });
  };
  return (
    <>
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
      />
    </>
  );
}

export default CreatePage;
