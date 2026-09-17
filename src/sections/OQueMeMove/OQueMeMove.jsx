import {
  Compass,
  Sparkles,
  Users,
  Cpu,
  FlaskConical,
  Target,
  ArrowUpRight,
} from "lucide-react";

import "./OQueMeMove.css";

const pillars = [
  {
    icon: Compass,
    title: "Curiosidade",
    description:
      "Quero entender o porquê, descobrir possibilidades e ir além do óbvio.",
  },
  {
    icon: Sparkles,
    title: "Criatividade",
    description:
      "Transformar referências, ideias e repertórios em novas possibilidades.",
  },
  {
    icon: Users,
    title: "Pessoas",
    description:
      "Criar pensando em quem vai viver, usar ou sentir aquela experiência.",
  },
  {
    icon: Cpu,
    title: "Tecnologia",
    highlight: "Código é a base. Pessoas são o destino.",
    description:
      "Enxergo a tecnologia como meio para resolver problemas e tornar a vida das pessoas mais simples.",
  },
  {
    icon: FlaskConical,
    title: "Experimentação",
    description:
      "Testar, errar, ajustar, descobrir no processo, colaborar e, sempre que possível, compartilhar conhecimento.",
  },
  {
    icon: Target,
    title: "Desafio",
    description:
      "Quanto maior o desafio, maior a vontade de descobrir até onde consigo chegar.",
  },
];

function OQueMeMove() {
  return (
    <section className="o-que-me-move" id="o-que-me-move">
      <div className="o-que-me-move__container">
        <header className="o-que-me-move__intro">
          <span className="o-que-me-move__eyebrow">
            O que me move
          </span>

          <h2 className="o-que-me-move__title">
            A vontade de ir atrás
            <span>do que ainda não sei.</span>
          </h2>

          <p className="o-que-me-move__description">
            Gosto de entender uma ideia, explorar possibilidades e descobrir
            como ela pode ganhar vida. É nesse encontro entre pessoas,
            criatividade e tecnologia que eu encontro novos desafios para
            construir.
          </p>
        </header>

        <div className="o-que-me-move__pillars">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;

            return (
              <article
                className="o-que-me-move__pillar"
                key={pillar.title}
              >
                <div className="o-que-me-move__pillar-top">
                  <div className="o-que-me-move__icon" aria-hidden="true">
                    <Icon size={20} strokeWidth={1.8} />
                  </div>

                  <ArrowUpRight
                    className="o-que-me-move__arrow"
                    size={18}
                    strokeWidth={1.8}
                    aria-hidden="true"
                  />
                </div>

                <div className="o-que-me-move__content">
                  <h3 className="o-que-me-move__pillar-title">
                    {pillar.title}
                  </h3>

                  {pillar.highlight && (
                    <p className="o-que-me-move__highlight">
                      {pillar.highlight}
                    </p>
                  )}

                  <p className="o-que-me-move__pillar-description">
                    {pillar.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default OQueMeMove;