import Image from "next/image";
import Link from "next/link";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const projects = [
  {
    number: "01",
    name: "Lamb Burger",
    type: "Food · Burger",
    image: {
      src: `${basePath}/lamb-burger.jpg`,
      alt: "A lamb burger served on a plate beside a bouquet of bright flowers",
      aspectRatio: "4 / 3",
    },
    art: null,
    mark: null,
    artTitle: null,
  },
  {
    number: "02",
    name: "Field Notes No. 8",
    type: "Art direction · Editorial",
    image: {
      src: `${basePath}/fourth-of-july.jpg`,
      alt: "A Fourth of July cookout plate with sausages, a cheeseburger and grilled food",
      aspectRatio: "4 / 3",
    },
    art: null,
    mark: null,
    artTitle: null,
  },
  {
    number: "03",
    name: "Sunday Objects",
    type: "Strategy · E-commerce",
    image: {
      src: `${basePath}/blt.jpg`,
      alt: "A BLT sandwich on a wooden board beside a bouquet of bright flowers",
      aspectRatio: "2809 / 3268",
    },
    art: null,
    mark: null,
    artTitle: null,
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#home" aria-label="Cullen's Studio home">
          CULLEN<span>’</span>S STUDIO
        </a>
        <nav className="main-nav" aria-label="Main navigation">
          <a href="#work">Work</a>
          <a href="#about">Kitchen</a>
          <Link href="/about-us">About Us</Link>
          <a className="nav-contact" href="mailto:hello@cullens.studio">
            Let’s talk <span aria-hidden="true">↗</span>
          </a>
        </nav>
      </header>

      <section className="hero" id="home" aria-labelledby="hero-title">
        <div className="hero-monogram" aria-hidden="true">C</div>
        <div className="hero-copy">
          <h1 id="hero-title">What’s Cooking, Good Looking?</h1>
          <div className="hero-bottom">
            <a href="#work" className="circle-link" aria-label="Explore selected work">
              <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>
        <p className="hero-index">INDEPENDENT BY NATURE · AVAILABLE WORLDWIDE</p>
      </section>

      <section className="work-section" id="work" aria-labelledby="work-title">
        <div className="section-heading">
          <div>
            <p className="eyebrow"><span /> A FEW RECENT FAVORITES</p>
            <h2 id="work-title">Selected Work<span className="accent-dot">.</span></h2>
          </div>
          <p className="section-note">Good work starts with good people.<br />Here are a few we’ve met along the way.</p>
        </div>
        <article className="featured-project" aria-labelledby="featured-project-title">
          <div className="featured-photo">
            <Image
              src={`${basePath}/pizza.jpg`}
              alt="A rectangular pizza cooling on a wire rack"
              fill
              sizes="(max-width: 520px) 86vw, (max-width: 800px) 40vw, 34vw"
            />
          </div>
          <div className="featured-info">
            <p className="eyebrow"><span /> FROM THE KITCHEN</p>
            <h3 id="featured-project-title">Pizza</h3>
            <p className="featured-type">Food · Pizza</p>
          </div>
        </article>
        <div className="project-grid">
          {projects.map((project) => (
            <article className="project" key={project.number}>
              {project.image ? (
                <div className="project-photo" style={{ aspectRatio: project.image.aspectRatio }}>
                  <Image
                    src={project.image.src}
                    alt={project.image.alt}
                    fill
                    sizes="(max-width: 800px) 46vw, 29vw"
                  />
                  <span className="project-number">{project.number}</span>
                </div>
              ) : (
                <div className={`project-art ${project.art}`} aria-hidden="true">
                  <span className="project-number">{project.number}</span>
                  <span className="project-art-mark">{project.mark}</span>
                  <span className="project-art-title">{project.artTitle}</span>
                </div>
              )}
              <div className="project-caption">
                <h3>{project.name}</h3>
                <p>{project.type}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="studio-section" id="about" aria-labelledby="studio-title">
        <div className="studio-label">
          <p className="eyebrow"><span /> SMALL STUDIO, OPEN MIND</p>
          <p className="studio-aside">GOOD IDEAS<br />GROW HERE <span>✳</span></p>
        </div>
        <div className="studio-copy">
          <h2 id="studio-title">A little curiosity<br />goes a <em>long way.</em></h2>
          <div className="studio-details">
            <p>Cullen’s Studio is an independent creative practice partnering with thoughtful people to make brands and digital spaces feel unmistakably their own.</p>
            <div className="services">
              <span>Brand identity</span><span>Digital design</span><span>Art direction</span><span>Good company</span>
            </div>
            <a className="text-link" href="mailto:hello@cullens.studio">A little about your project <span aria-hidden="true">↗</span></a>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <a className="footer-wordmark" href="#home">CULLEN’S STUDIO<span>© 2026</span></a>
      </footer>
    </main>
  );
}