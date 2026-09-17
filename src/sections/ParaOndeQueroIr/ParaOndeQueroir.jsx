import "./ParaOndeQueroIr.css";

const chapters = [
  {
    number: "01",
    concept: "Pertencimento",
    title: "Imersão Vem Pra Globo",
    description:
      "A primeira experiência que me aproximou da Globo e me fez perceber que aquele universo também poderia ser um lugar para mim.",
    photos: [
      {
        id: "belonging-1",
        size: "large",
        label: "Vem Pra Globo",
      },
      {
        id: "belonging-2",
        size: "small",
        label: "Primeiro encontro",
        polaroid: true,
      },
      {
        id: "belonging-3",
        size: "medium",
        label: "Experiência",
      },
    ],
  },
  {
    number: "02",
    concept: "Confiança",
    title: "GloboSec Week 2026",
    description:
      "Uma experiência que ampliou meu olhar sobre segurança, tecnologia, governança e o papel das pessoas por trás de tudo isso.",
    photos: [
      {
        id: "confidence-1",
        size: "medium",
        label: "GloboSec Week",
      },
      {
        id: "confidence-2",
        size: "large",
        label: "Tecnologia & Segurança",
        polaroid: true,
      },
      {
        id: "confidence-3",
        size: "small",
        label: "Aprendizado",
      },
    ],
  },
  {
    number: "03",
    concept: "Responsabilidade",
    title: "GloboSec Week · Estúdios Globo",
    description:
      "Conhecer os Estúdios Globo ampliou ainda mais essa perspectiva: tecnologia, segurança, sustentabilidade e cuidado com as pessoas fazem parte da mesma construção.",
    photos: [
      {
        id: "responsibility-1",
        size: "large",
        label: "Estúdios Globo",
      },
      {
        id: "responsibility-2",
        size: "small",
        label: "Por trás das câmeras",
      },
      {
        id: "responsibility-3",
        size: "medium",
        label: "ESG & Sustentabilidade",
        polaroid: true,
      },
    ],
  },
];

function PhotoPlaceholder({ photo }) {
  return (
    <div
      className={`para-onde-quero-ir__photo para-onde-quero-ir__photo--${photo.size} ${
        photo.polaroid
          ? "para-onde-quero-ir__photo--polaroid"
          : ""
      }`}
    >
      <div className="para-onde-quero-ir__photo-frame">
        <span className="para-onde-quero-ir__photo-mark">
          fotografia
        </span>

        <span className="para-onde-quero-ir__photo-label">
          {photo.label}
        </span>
      </div>
    </div>
  );
}

function Chapter({ chapter }) {
  return (
    <article className="para-onde-quero-ir__chapter">
      <div className="para-onde-quero-ir__chapter-header">
        <span className="para-onde-quero-ir__chapter-number">
          {chapter.number}
        </span>

        <div className="para-onde-quero-ir__chapter-heading">
          <span className="para-onde-quero-ir__concept">
            {chapter.concept}
          </span>

          <h3 className="para-onde-quero-ir__chapter-title">
            {chapter.title}
          </h3>

          <p className="para-onde-quero-ir__chapter-description">
            {chapter.description}
          </p>
        </div>
      </div>

      <div className="para-onde-quero-ir__mosaic">
        {chapter.photos.map((photo) => (
          <PhotoPlaceholder key={photo.id} photo={photo} />
        ))}
      </div>
    </article>
  );
}

function ParaOndeQueroIr() {
  return (
    <section
      className="para-onde-quero-ir"
      id="para-onde-quero-ir"
    >
      <div className="para-onde-quero-ir__container">
        <header className="para-onde-quero-ir__intro">
          <span className="para-onde-quero-ir__eyebrow">
            Para onde eu quero ir
          </span>

          <h2 className="para-onde-quero-ir__title">
            Algumas experiências
            <span>já fazem parte do caminho.</span>
          </h2>

          <p className="para-onde-quero-ir__description">
            Cada encontro com a Globo trouxe uma nova perspectiva e abriu
            espaço para imaginar os próximos capítulos.
          </p>
        </header>

        <div className="para-onde-quero-ir__chapters">
          {chapters.map((chapter) => (
            <Chapter key={chapter.number} chapter={chapter} />
          ))}
        </div>

        <div className="para-onde-quero-ir__closing">
          <span className="para-onde-quero-ir__closing-mark">
            próxima página
          </span>

          <p className="para-onde-quero-ir__closing-text">
            Continuar aprendendo, construindo e descobrindo onde esse caminho
            pode me levar.
          </p>
        </div>
      </div>
    </section>
  );
}

export default ParaOndeQueroIr;