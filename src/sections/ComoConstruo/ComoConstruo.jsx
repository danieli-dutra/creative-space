import "./ComoConstruo.css";

const steps = [
  {
    number: "01",
    title: "Entender",
    description:
      "Antes de construir, procuro entender o problema, o contexto e as pessoas envolvidas.",
  },
  {
    number: "02",
    title: "Explorar",
    description:
      "Pesquiso, busco referências, levanto possibilidades e tento enxergar diferentes caminhos antes de escolher um.",
  },
  {
    number: "03",
    title: "Criar",
    description:
      "Transformo ideias em experiências, equilibrando estética, clareza, funcionalidade e propósito.",
  },
  {
    number: "04",
    title: "Testar",
    description:
      "Coloco as ideias em prática, observo o que funciona, identifico o que precisa mudar e ajusto.",
  },
  {
    number: "05",
    title: "Colaborar",
    description:
      "Gosto de construir em conjunto, trocar perspectivas e compartilhar conhecimento ao longo do processo.",
  },
  {
    number: "06",
    title: "Evoluir",
    description:
      "Não vejo uma solução como algo imutável. Aprender com o processo faz parte da construção.",
  },
];

export default function ComoConstruo() {
  return (
    <section className="como-construo" id="como-eu-construo">
      <div className="como-construo__container">
        <header className="como-construo__intro">
          <span className="como-construo__eyebrow">
            Como eu construo
          </span>

          <h2 className="como-construo__title">
            <span className="como-construo__title-primary">
              Não começo pelo código.
            </span>

            <span className="como-construo__title-highlight">
              Começo pelo problema.
            </span>
          </h2>

          <p className="como-construo__description">
            Cada projeto começa antes da primeira linha de código. Entender,
            explorar, criar, testar e evoluir fazem parte de como transformo
            ideias em experiências.
          </p>
        </header>

        <div className="como-construo__steps">
          {steps.map((step) => (
            <article
              className="como-construo__step"
              key={step.number}
            >
              <div className="como-construo__step-number">
                {step.number}
              </div>

              <div className="como-construo__step-content">
                <h3 className="como-construo__step-title">
                  {step.title}
                </h3>

                <p className="como-construo__step-description">
                  {step.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}