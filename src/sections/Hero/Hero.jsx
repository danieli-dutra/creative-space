import "./Hero.css";

function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="hero__container">
        <div className="hero__content">
          <p className="hero__eyebrow">DANIELI DUTRA</p>

          <h1 className="hero__title">
            Transformar ideias em experiências
            <span>é o que me move.</span>
          </h1>

          <p className="hero__description">
            Desenvolvimento Full Stack · UX/UI · Artes Digitais · Comunicação
            · IA aplicada a produtos digitais
          </p>

          <a href="#repertorio" className="hero__explore">
            <span>Explorar</span>
            <span className="hero__explore-icon" aria-hidden="true">
              ↓
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;