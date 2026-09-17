import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight, Tag } from "lucide-react";

import "./Galeria.css";

const galleryItems = [
  {
    id: 1,
    category: "ARTES DIGITAIS",
    title: "Criação",
  },
  {
    id: 2,
    category: "ESPORTS",
    title: "Competição",
  },
  {
    id: 3,
    category: "COLLAB",
    title: "Colaboração",
  },
  {
    id: 4,
    category: "EXPERIÊNCIA",
    title: "IBGE",
  },
  {
    id: 5,
    category: "TECNOLOGIA",
    title: "Desenvolvimento",
  },
  {
    id: 6,
    category: "UX/UI",
    title: "Experiência",
  },
  {
    id: 7,
    category: "COLLAB",
    title: "Construção",
  },
  {
    id: 8,
    category: "EXPERIMENTAÇÃO",
    title: "Descoberta",
  },
];

function Galeria() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    containScroll: "trimSnaps",
    dragFree: true,
    loop: false,
  });

  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const updateNavigation = useCallback((api) => {
    if (!api) return;

    setCanScrollPrev(api.canScrollPrev());
    setCanScrollNext(api.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    updateNavigation(emblaApi);

    emblaApi.on("select", updateNavigation);
    emblaApi.on("reInit", updateNavigation);

    return () => {
      emblaApi.off("select", updateNavigation);
      emblaApi.off("reInit", updateNavigation);
    };
  }, [emblaApi, updateNavigation]);

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  return (
    <section className="galeria" id="galeria">
      <div className="galeria__container">
        <header className="galeria__header">
          <div className="galeria__intro">
            <span className="galeria__eyebrow">GALERIA</span>

            <h2 className="galeria__title">
              Um pouco do caminho
              <span>que me trouxe até aqui.</span>
            </h2>

            <p className="galeria__description">
              Registros de experiências, projetos, criações e momentos que
              fazem parte do meu repertório.
            </p>
          </div>

          <div className="galeria__controls" aria-label="Controles da galeria">
            <button
              type="button"
              className="galeria__control"
              onClick={scrollPrev}
              disabled={!canScrollPrev}
              aria-label="Imagem anterior"
            >
              <ArrowLeft size={20} strokeWidth={1.8} />
            </button>

            <button
              type="button"
              className="galeria__control"
              onClick={scrollNext}
              disabled={!canScrollNext}
              aria-label="Próxima imagem"
            >
              <ArrowRight size={20} strokeWidth={1.8} />
            </button>
          </div>
        </header>

        <div className="galeria__viewport" ref={emblaRef}>
          <div className="galeria__track">
            {galleryItems.map((item) => (
              <article className="galeria__item" key={item.id}>
                <div className="galeria__image-placeholder">
                  <span className="galeria__placeholder-number">
                    {String(item.id).padStart(2, "0")}
                  </span>
                </div>

                <div className="galeria__caption">
                  <span className="galeria__category">{item.category}</span>

                  <h3 className="galeria__item-title">
                    <Tag
                      size={13}
                      strokeWidth={2}
                      aria-hidden="true"
                    />
                    <span>{item.title}</span>
                  </h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Galeria;