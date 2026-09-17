import "./ComoConstruo.css";

export default function ComoConstruo() {
  return (
    <section className="como-construo" id="como-eu-construo">
      <div className="como-construo__container">
        <header className="como-construo__intro">
          <span className="como-construo__eyebrow">
            Como eu construo
          </span>

          <h2 className="como-construo__title">
            Não começo pelo código.
            <strong> Começo pelo problema.</strong>
          </h2>

          <p className="como-construo__description">
            Cada projeto começa antes da primeira linha de código. Entender,
            explorar, criar, testar e evoluir fazem parte de como transformo
            ideias em experiências.
          </p>
        </header>

        <div className="como-construo__steps">
          <article className="como-construo__step">
            <div className="como-construo__step-number">
              01
            </div>

            <div className="como-construo__step-content">
              <h3 className="como-construo__step-title">
                Entender
              </h3>

              <p className="como-construo__step-description">
                Antes de construir, procuro entender o problema, o contexto e
                as pessoas envolvidas.
              </p>
            </div>
          </article>

          <article className="como-construo__step">
            <div className="como-construo__step-number">
              02
            </div>

            <div className="como-construo__step-content">
              <h3 className="como-construo__step-title">
                Explorar
              </h3>

              <p className="como-construo__step-description">
                Pesquiso, busco referências, levanto possibilidades e tento
                enxergar diferentes caminhos antes de escolher um.
              </p>
            </div>
          </article>

          <article className="como-construo__step">
            <div className="como-construo__step-number">
              03
            </div>

            <div className="como-construo__step-content">
              <h3 className="como-construo__step-title">
                Criar
              </h3>

              <p className="como-construo__step-description">
                Transformo ideias em experiências, equilibrando estética,
                clareza, funcionalidade e propósito.
              </p>
            </div>
          </article>

          <article className="como-construo__step">
            <div className="como-construo__step-number">
              04
            </div>

            <div className="como-construo__step-content">
              <h3 className="como-construo__step-title">
                Testar
              </h3>

              <p className="como-construo__step-description">
                Coloco as ideias em prática, observo o que funciona, identifico
                o que precisa mudar e ajusto.
              </p>
            </div>
          </article>

          <article className="como-construo__step">
            <div className="como-construo__step-number">
              05
            </div>

            <div className="como-construo__step-content">
              <h3 className="como-construo__step-title">
                Colaborar
              </h3>

              <p className="como-construo__step-description">
                Gosto de construir em conjunto, trocar perspectivas e
                compartilhar conhecimento ao longo do processo.
              </p>
            </div>
          </article>

          <article className="como-construo__step">
            <div className="como-construo__step-number">
              06
            </div>

            <div className="como-construo__step-content">
              <h3 className="como-construo__step-title">
                Evoluir
              </h3>

              <p className="como-construo__step-description">
                Não vejo uma solução como algo imutável. Aprender com o processo
                faz parte da construção.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}