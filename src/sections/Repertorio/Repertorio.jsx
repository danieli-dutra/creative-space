import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import "./Repertorio.css";

const timelineItems = [
  {
    id: 1,
    title: "Edificações",
    category: "FORMAÇÃO TÉCNICA",
    description:
      "Projetos, orçamentos e manutenção me ensinaram a pensar em estrutura, planejamento e execução.",
  },
  {
    id: 2,
    title: "eSports",
    category: "LIDERANÇA · COMPETIÇÃO",
    description:
      "Foram cerca de quatro anos entre competição, gestão e liderança de equipes, incluindo a primeira line 100% feminina do Brasil no Pro Clubs.",
  },
  {
    id: 3,
    title: "Artes Digitais",
    category: "DESIGN · COMUNICAÇÃO",
    description:
      "Foi onde encontrei uma forma de unir criatividade, comunicação e tecnologia para transformar ideias em experiências.",
  },
  {
    id: 4,
    title: "IBGE",
    category: "CENSO 2022 · LIDERANÇA",
    description:
      "Uma experiência fora da tecnologia que ampliou meu olhar sobre pessoas, organização, responsabilidade e trabalho em equipe.",
  },
  {
    id: 5,
    title: "Tecnologia",
    category: "DESENVOLVIMENTO · PRODUTO",
    description:
      "Escolhi a tecnologia para ampliar as possibilidades de criar, experimentar e transformar soluções que já fazia de outras formas.",
  },
];

function Repertorio() {
  const timelineRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  function updateScrollState() {
    const element = timelineRef.current;

    if (!element) return;

    const maxScrollLeft = element.scrollWidth - element.clientWidth;

    setCanScrollLeft(element.scrollLeft > 0);
    setCanScrollRight(element.scrollLeft < maxScrollLeft - 1);
  }

  function scrollTimeline(direction) {
    const element = timelineRef.current;

    if (!element) return;

    const distance = element.clientWidth * 0.7;

    element.scrollBy({
      left: direction === "left" ? -distance : distance,
      behavior: "smooth",
    });
  }

  return (
    <section className="repertorio" id="repertorio">
      <div className="repertorio__container">
        <header className="repertorio__intro">
          <span className="repertorio__eyebrow">REPERTÓRIO</span>

          <h2 className="repertorio__title">
            Sou <span>carioca</span>, mas não fui construída por um único lugar.
          </h2>
        </header>

        <div className="repertorio__places">
          <article className="repertorio__place">
            <span className="repertorio__place-name">
              RIO DE JANEIRO
            </span>

            <h3 className="repertorio__place-title">
              O lado comunicativo.
            </h3>

            <p className="repertorio__place-description">
              A espontaneidade, a conversa, a criatividade, a facilidade de
              criar conexão.
            </p>
          </article>

          <article className="repertorio__place">
            <span className="repertorio__place-name">
              MINAS GERAIS
            </span>

            <h3 className="repertorio__place-title">
              O jeito de acolher e encantar.
            </h3>

            <p className="repertorio__place-description">
              A atenção às pessoas, o cuidado, a hospitalidade, o olhar para o
              detalhe que faz alguém se sentir bem-vindo.
            </p>
          </article>

          <article className="repertorio__place">
            <span className="repertorio__place-name">
              SÃO PAULO
            </span>

            <h3 className="repertorio__place-title">
              A tecnologia em movimento.
            </h3>

            <p className="repertorio__place-description">
              O ritmo, a diversidade, a experimentação, o contato com novas
              possibilidades e um ecossistema tecnológico pulsante.
            </p>
          </article>
        </div>

        <div className="repertorio__transition">
          <p>
            Dessas experiências, trouxe diferentes formas de olhar, criar e me
            relacionar com o mundo.
          </p>
        </div>

        <div className="repertorio__trajectory">
          <div className="repertorio__trajectory-header">
            <div>
              <span className="repertorio__trajectory-eyebrow">
                TRAJETÓRIA
              </span>

              <h3 className="repertorio__trajectory-title">
                Um repertório em movimento.
              </h3>
            </div>

            <div className="repertorio__controls">
              <button
                type="button"
                className="repertorio__control"
                onClick={() => scrollTimeline("left")}
                disabled={!canScrollLeft}
                aria-label="Voltar na trajetória"
              >
                <ChevronLeft size={20} strokeWidth={1.8} />
              </button>

              <button
                type="button"
                className="repertorio__control"
                onClick={() => scrollTimeline("right")}
                disabled={!canScrollRight}
                aria-label="Avançar na trajetória"
              >
                <ChevronRight size={20} strokeWidth={1.8} />
              </button>
            </div>
          </div>

          <div
            ref={timelineRef}
            className="repertorio__timeline"
            onScroll={updateScrollState}
          >
            <div className="repertorio__timeline-track">
              {timelineItems.map((item) => (
                <article
                  className="repertorio__timeline-item"
                  key={item.id}
                >
                  <div className="repertorio__timeline-card">
                    <span className="repertorio__timeline-category">
                      {item.category}
                    </span>

                    <h4 className="repertorio__timeline-title">
                      {item.title}
                    </h4>

                    <p className="repertorio__timeline-description">
                      {item.description}
                    </p>
                  </div>

                  <div
                    className="repertorio__timeline-marker"
                    aria-hidden="true"
                  />
                </article>
              ))}
            </div>
          </div>

          <p className="repertorio__hint">
            Arraste para explorar minha trajetória
          </p>
        </div>
      </div>
    </section>
  );
}

export default Repertorio;