import Card from "./Card";

function Preview({ formData, cardInfo, changesImage }) {
  return (
    <section className="preview">
      <div
        // key="background-1"
        className="projectImage"
        style={{
          backgroundImage: formData.photo ? `url(${formData.photo})` : null,
        }}
      ></div>
      <Card
        formData={formData}
        cardInfo={cardInfo}
        changesImage={changesImage}
      />
      <a className="link" href={cardInfo} target="_blank">
        {cardInfo}
      </a>
    </section>
  );
}

export default Preview;
