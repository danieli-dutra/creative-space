import "./OQueConstruo.css";

const projects = [
  {
    id: "01",
    name: "Junta.ai",
    category: "PRODUTO · IA · FINANÇAS",
    description:
      "Aplicação conversacional de educação financeira que ajuda pessoas a registrar despesas, acompanhar metas e construir uma relação mais consciente com o dinheiro.",
    contribution:
      "Liderança · PO · UX/UI · Pesquisa de Mercado · Agentes · Dev Full Stack · Documentação",
    stack: "React · JavaScript · Python · PostgreSQL · GitHub",
    featured: true,
    links: [
      {
        label: "Projeto",
        href: "#",
      },
      {
        label: "Repositório",
        href: "https://github.com/Junta-ai-br/junta-ai/tree/main/frontend-v2",
      },
    ],
  },
  {
    id: "02",
    name: "EON",
    category: "UX/UI · DESIGN · DESENVOLVIMENTO",
    description:
      "Landing page desenvolvida para explorar a construção de uma experiência digital unindo identidade visual, interface e desenvolvimento.",
    contribution: "Design · UX/UI · Desenvolvimento",
    stack: "HTML · CSS · JavaScript · ViaCEP API",
    links: [],
  },
  {
    id: "03",
    name: "Bike Café Gourmet",
    category: "PRODUTO · UX/UI · PROTOTIPAÇÃO",
    description:
      "Conceito de aplicativo e website para uma experiência digital voltada ao universo de café e mobilidade.",
    contribution: "UX/UI · Prototipação · Desenvolvimento",
    stack: "HTML · CSS · JavaScript",
    links: [],
  },
  {
    id: "04",
    name: "D2B Gourmet",
    category: "BRANDING · IDENTIDADE · COMUNICAÇÃO",
    description:
      "Projeto de identidade visual para uma marca real de doces gourmet personalizados, desenvolvido a partir da construção da marca e de suas aplicações.",
    contribution: "Branding · Identidade Visual · Comunicação",
    stack: "Design · Direção de Arte · Comunicação",
    links: [],
  },
];

function ProjectLinks({ links }) {
  if (!links.length) return null;

  return (
    <div className="o-que-construo__links">
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          className="o-que-construo__link"
          target={link.href.startsWith("http") ? "_blank" : undefined}
          rel={link.href.startsWith("http") ? "noreferrer" : undefined}
        >
          <span>{link.label}</span>
          <span aria-hidden="true">↗</span>
        </a>
      ))}
    </div>
  );
}

function Project({ project }) {
  return (
    <article
      className={`o-que-construo__project ${
        project.featured ? "o-que-construo__project--featured" : ""
      }`}
    >
      <div className="o-que-construo__visual">
        <span className="o-que-construo__visual-number">{project.id}</span>

        <span className="o-que-construo__visual-label">
          {project.name}
        </span>
      </div>

      <div className="o-que-construo__project-content">
        <div className="o-que-construo__project-heading">
          <span className="o-que-construo__category">
            {project.category}
          </span>

          <h3 className="o-que-construo__project-title">
            {project.name}
          </h3>
        </div>

        <p className="o-que-construo__project-description">
          {project.description}
        </p>

        <div className="o-que-construo__details">
          <div className="o-que-construo__detail">
            <span className="o-que-construo__detail-label">
              Minha contribuição
            </span>

            <p>{project.contribution}</p>
          </div>

          <div className="o-que-construo__detail">
            <span className="o-que-construo__detail-label">
              Tecnologias
            </span>

            <p>{project.stack}</p>
          </div>
        </div>

        <ProjectLinks links={project.links} />
      </div>
    </article>
  );
}

function OQueConstruo() {
  return (
    <section className="o-que-construo" id="o-que-eu-construo">
      <div className="o-que-construo__container">
        <header className="o-que-construo__intro">
          <span className="o-que-construo__eyebrow">
            O que eu construo
          </span>

          <h2 className="o-que-construo__title">
            Ideias que ganharam
            <span>forma.</span>
          </h2>

          <p className="o-que-construo__description">
            Projetos que atravessam diferentes momentos da minha trajetória,
            conectando design, comunicação, tecnologia e desenvolvimento de
            produtos digitais.
          </p>
        </header>

        <div className="o-que-construo__projects">
          {projects.map((project) => (
            <Project key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default OQueConstruo;