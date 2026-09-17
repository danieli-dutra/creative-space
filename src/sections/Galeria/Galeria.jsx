import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight, Tag } from "lucide-react";

import "./Galeria.css";

const galleryItems = [
  {
    id: 1,
    category: "EDIFICAÇÕES",
    title: "Projetos",
    src: "https://res.cloudinary.com/bvyzj2l7/image/upload/v1789659351/01.jpg",
    alt: "Projetos desenvolvidos na área de edificações",
  },
  {
    id: 2,
    category: "UMEI - PBH",
    title: "Arquitetura Sustentável",
    src: "https://res.cloudinary.com/bvyzj2l7/image/upload/v1789659351/02.jpg",
    alt: "Projeto de arquitetura sustentável para UMEI da Prefeitura de Belo Horizonte",
  },
  {
    id: 3,
    category: "ESPORTS",
    title: "Competição - Line Feminina",
    src: "https://res.cloudinary.com/bvyzj2l7/image/upload/v1789659351/03.jpg",
    alt: "Experiência com esports e competição em line feminina",
  },
  {
    id: 4,
    category: "ESPORTS",
    title: "Colaboração",
    src: "https://res.cloudinary.com/bvyzj2l7/image/upload/v1789659352/04.jpg",
    alt: "Experiência de colaboração no universo dos esports",
  },
  {
    id: 5,
    category: "ESPORTS",
    title: "Reconhecimento",
    src: "https://res.cloudinary.com/bvyzj2l7/image/upload/v1789659351/05.png",
    alt: "Registro de reconhecimento relacionado à trajetória nos esports",
  },
  {
    id: 6,
    category: "DESIGN",
    title: "Roots of Life",
    src: "https://res.cloudinary.com/bvyzj2l7/image/upload/v1789659352/06.jpg",
    alt: "Projeto de design Roots of Life",
  },
  {
    id: 7,
    category: "COMUNICAÇÃO",
    title: "Campanha de Conscientização",
    src: "https://res.cloudinary.com/bvyzj2l7/image/upload/v1789659352/07.jpg",
    alt: "Campanha de comunicação e conscientização",
  },
  {
    id: 8,
    category: "EXPERIMENTAÇÃO",
    title: "UX/UI",
    src: "https://res.cloudinary.com/bvyzj2l7/image/upload/v1789659351/08.png",
    alt: "Experimentação relacionada a UX e UI",
  },
  {
    id: 9,
    category: "IBGE",
    title: "Censo 2022",
    src: "https://res.cloudinary.com/bvyzj2l7/image/upload/v1789659519/09.jpg",
    alt: "Experiência profissional no Censo 2022 do IBGE",
  },
  {
    id: 10,
    category: "LEGADO",
    title: "Meu herói",
    src: "https://res.cloudinary.com/bvyzj2l7/image/upload/v1789659352/10.jpg",
    alt: "Registro pessoal relacionado a legado e memória",
  },
  {
    id: 11,
    category: "UNIVERSIDADE",
    title: "UVA",
    src: "https://res.cloudinary.com/bvyzj2l7/image/upload/v1789659351/11.png",
    alt: "Registro da trajetória universitária na UVA",
  },
  {
    id: 12,
    category: "TECNOLOGIA",
    title: "+PraTI",
    src: "https://res.cloudinary.com/bvyzj2l7/image/upload/v1789659352/12.png",
    alt: "Experiência de formação em tecnologia no +PraTI",
  },
  {
    id: 13,
    category: "IMPROVÁVEL",
    title: "Neri Oxman / Renato Winning",
    src: "https://res.cloudinary.com/bvyzj2l7/image/upload/v1789659352/13.jpg",
    alt: "Encontro entre referências improváveis de criatividade, tecnologia e inovação",
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

          <div
            className="galeria__controls"
            aria-label="Controles da galeria"
          >
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
              <article
                className="galeria__item"
                key={item.id}
              >
                <div className="galeria__image">
                  <img
                    src={item.src}
                    alt={item.alt}
                    loading="lazy"
                  />
                </div>

                <div className="galeria__caption">
                  <span className="galeria__category">
                    {item.category}
                  </span>

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