import "./ParaOndeQueroIr.css";

const chapters = [
  {
    concept: "Pertencimento",
    title: "Imersão Vem Pra Globo",
    description:
      "A primeira experiência que me aproximou da Globo e me fez perceber que aquele universo também poderia ser um lugar para mim.",
    photos: [
      {
        id: "belonging-1",
        size: "large",
        label: "Vem Pra Globo",
        src: "https://res.cloudinary.com/bvyzj2l7/image/upload/v1789660870/WhatsApp_Image_2026-09-17_at_08.38.13.jpg",
        alt: "Registro da Imersão Vem Pra Globo",
      },
      {
        id: "belonging-2",
        size: "medium",
        label: "Primeiro encontro",
        src: "https://res.cloudinary.com/bvyzj2l7/image/upload/v1789660870/WhatsApp_Image_2026-09-17_at_08.38.13_5.jpg",
        alt: "Registro do primeiro encontro na Imersão Vem Pra Globo",
      },
      {
        id: "belonging-3",
        size: "small",
        label: "Experiência",
        src: "https://res.cloudinary.com/bvyzj2l7/image/upload/v1789660870/1784132945812.jpg",
        alt: "Registro da experiência na Imersão Vem Pra Globo",
      },
      {
        id: "belonging-4",
        size: "medium",
        label: "Tecnologia",
        src: "https://res.cloudinary.com/bvyzj2l7/image/upload/v1789660931/1784172233267.jpg",
        alt: "Registro relacionado à tecnologia na Imersão Vem Pra Globo",
      },
      {
        id: "belonging-5",
        size: "small",
        label: "Conexão",
        src: "https://res.cloudinary.com/bvyzj2l7/image/upload/v1789660869/WhatsApp_Image_2026-09-17_at_08.38.13_3.jpg",
        alt: "Registro de conexão na Imersão Vem Pra Globo",
      },
    ],
  },

  {
    concept: "Confiança",
    title: "GloboSec Week 2026",
    description:
      "Uma experiência que ampliou meu olhar sobre segurança, tecnologia, governança e o papel das pessoas por trás de tudo isso.",
    photos: [
      {
        id: "confidence-1",
        size: "medium",
        label: "GloboSec Week",
        src: "https://res.cloudinary.com/bvyzj2l7/image/upload/v1789661490/WhatsApp_Image_2026-09-17_at_08.41.56_1.jpg",
        alt: "Registro da GloboSec Week 2026",
      },
      {
        id: "confidence-2",
        size: "large",
        label: "Tecnologia & Segurança",
        src: "https://res.cloudinary.com/bvyzj2l7/image/upload/v1789661490/WhatsApp_Image_2026-09-17_at_08.41.56.jpg",
        alt: "Registro da experiência de tecnologia e segurança na GloboSec Week 2026",
      },
      {
        id: "confidence-3",
        size: "small",
        label: "Aprendizado",
        src: "https://res.cloudinary.com/bvyzj2l7/image/upload/v1789661491/WhatsApp_Image_2026-09-17_at_08.41.55_1.jpg",
        alt: "Registro de aprendizado na GloboSec Week 2026",
      },
      {
        id: "confidence-4",
        size: "medium",
        label: "Experiência",
        src: "https://res.cloudinary.com/bvyzj2l7/image/upload/v1789661491/WhatsApp_Image_2026-09-17_at_08.41.55.jpg",
        alt: "Registro da experiência na GloboSec Week 2026",
      },
      {
        id: "confidence-5",
        size: "small",
        label: "Conexões",
        src: "https://res.cloudinary.com/bvyzj2l7/image/upload/v1789661490/WhatsApp_Image_2026-09-17_at_08.41.56_2.jpg",
        alt: "Registro de conexões na GloboSec Week 2026",
      },
    ],
  },

  {
    concept: "Responsabilidade",
    title: "GloboSec Week · Estúdios Globo",
    description:
      "Conhecer os Estúdios Globo ampliou ainda mais essa perspectiva: tecnologia, segurança, sustentabilidade e cuidado com as pessoas fazem parte da mesma construção.",
    photos: [
      {
        id: "responsibility-1",
        size: "large",
        label: "Estúdios Globo",
        src: "https://res.cloudinary.com/bvyzj2l7/image/upload/v1789661760/WhatsApp_Image_2026-09-17_at_08.39.49.jpg",
        alt: "Registro da visita aos Estúdios Globo",
      },
      {
        id: "responsibility-2",
        size: "small",
        label: "Por trás das câmeras",
        src: "https://res.cloudinary.com/bvyzj2l7/image/upload/v1789661759/WhatsApp_Image_2026-09-17_at_08.40.09.jpg",
        alt: "Registro dos bastidores dos Estúdios Globo",
      },
      {
        id: "responsibility-3",
        size: "medium",
        label: "ESG & Sustentabilidade",
        src: "https://res.cloudinary.com/bvyzj2l7/image/upload/v1789661759/WhatsApp_Image_2026-09-17_at_08.41.56_3.jpg",
        alt: "Registro relacionado à sustentabilidade nos Estúdios Globo",
      },
      {
        id: "responsibility-4",
        size: "small",
        label: "Experiência",
        src: "https://res.cloudinary.com/bvyzj2l7/image/upload/v1789661845/WhatsApp_Image_2026-09-17_at_13.17.09.jpg",
        alt: "Registro da experiência nos Estúdios Globo",
      },
    ],
  },

  {
    concept: "Criação",
    title: "Academia LED · Maratona de IA",
    description:
      "Uma experiência que uniu criatividade, inteligência artificial e narrativa. Foi também onde o Du ganhou vida e passou a fazer parte dessa história.",
    photos: [
      {
        id: "academy-1",
        size: "large",
        label: "Academia LED",
        src: "https://res.cloudinary.com/bvyzj2l7/image/upload/v1789662044/WhatsApp_Image_2026-09-17_at_13.19.31.jpg",
        alt: "Registro da Academia LED",
      },
      {
        id: "academy-2",
        size: "large",
        label: "Maratona de IA",
        src: "https://res.cloudinary.com/bvyzj2l7/image/upload/v1789662044/WhatsApp_Image_2026-09-17_at_08.29.42.jpg",
        alt: "Registro da Maratona de IA",
      },
    ],
  },
];

function PhotoPlaceholder({ photo }) {
  return (
    <div
      className={`para-onde-quero-ir__photo para-onde-quero-ir__photo--${photo.size}`}
    >
      {photo.src ? (
        <img
          className="para-onde-quero-ir__photo-image"
          src={photo.src}
          alt={photo.alt || photo.label}
          loading="lazy"
        />
      ) : (
        <div className="para-onde-quero-ir__photo-content">
          <span className="para-onde-quero-ir__photo-mark">
            fotografia
          </span>

          <span className="para-onde-quero-ir__photo-label">
            {photo.label}
          </span>
        </div>
      )}
    </div>
  );
}

function Chapter({ chapter }) {
  return (
    <article className="para-onde-quero-ir__chapter">
      <div className="para-onde-quero-ir__chapter-header">
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
          <PhotoPlaceholder
            key={photo.id}
            photo={photo}
          />
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
            <Chapter
              key={chapter.title}
              chapter={chapter}
            />
          ))}
        </div>

        <div className="para-onde-quero-ir__closing">
          <p className="para-onde-quero-ir__closing-text">
            Continuar aprendendo, construindo, evoluindo e descobrindo
            tudo o que podemos criar juntos.
          </p>
        </div>
      </div>
    </section>
  );
}

export default ParaOndeQueroIr;