import Card from "./Card";
function Preview({ formData }) {
  return (
    <section className="preview">
      <div
        key="background-1"
        className="projectImage"
        style={{
          backgroundImage: formData.photo ? `url(${formData.photo})` : null,
        }}
      ></div>
      <Card
        job={formData.job}
        autor={formData.autor}
        name={formData.name}
        slogan={formData.slogan}
        repo={formData.repo}
        desc={formData.desc}
        technologies={formData.technologies}
        demo={formData.demo}
        image={formData.image}
      />
    </section>
  );
}

export default Preview;
