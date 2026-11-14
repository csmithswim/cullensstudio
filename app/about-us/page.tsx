import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const metadata: Metadata = {
  title: "About Us — Cullen's Studio",
  description:
    "Meet the distinguished canine culinary professionals behind Cullen's Studio.",
};

const chefs = [
  {
    number: "01",
    name: "Chef Banjo Smith",
    title: "Executive Chef",
    image: `${basePath}/banjo.jpg`,
    alt: "Banjo, a blue-merle dog resting in a soft bed",
    education: "Le Cordon Bleu de Bark",
    restaurant: "The Houndstooth",
    biography:
      "Chef Smith brings a measured, ingredient-led discipline to the kitchen. A graduate of Le Cordon Bleu de Bark, he refined his approach at Bark & Brine before assuming the executive appointment at The Houndstooth. His seasonal menus are distinguished by patient reductions, carefully rested roasts, and an uncompromising standard for the midday supervisory nap.",
  },
  {
    number: "02",
    name: "Chef Junie Smith",
    title: "Chef de Cuisine",
    image: `${basePath}/junie.jpg`,
    alt: "Junie, a black dog looking attentively toward the camera",
    education: "Pawvard School of Culinary Arts",
    restaurant: "Leash & Ladle",
    biography:
      "Chef Smith is recognized for exacting palate work and a composed presence during service. Her formal training at the Pawvard School of Culinary Arts was followed by an influential tenure at The Good Hound. At Leash & Ladle, she leads the kitchen with particular attention to balanced sauces, seasonal ingredients, and the quiet authority required to keep every course on schedule.",
  },
];

export default function AboutUsPage() {
  return (
    <main className="about-page">
      <header className="site-header">
        <Link className="wordmark" href="/" aria-label="Cullen's Studio home">
          CULLEN<span>’</span>S STUDIO
        </Link>
        <nav className="main-nav" aria-label="Main navigation">
          <Link href="/#work">Work</Link>
          <Link href="/#about">Kitchen</Link>
          <Link href="/about-us" aria-current="page">About Us</Link>
          <a className="nav-contact" href="mailto:hello@cullens.studio">
            Let’s talk <span aria-hidden="true">↗</span>
          </a>
        </nav>
      </header>

      <section className="about-intro" aria-labelledby="about-title">
        <p className="eyebrow"><span /> CULLEN’S STUDIO · CULINARY LEADERSHIP</p>
        <h1 id="about-title">A distinguished<br />standard of <em>taste.</em></h1>
        <p className="about-deck">
          Two accomplished chefs. A shared respect for eating garbage, sniffing butts and being a good boy &amp; girl.
        </p>
        <p className="about-index">01—02 <span>EST. AT THE KITCHEN TABLE</span></p>
      </section>

      <section className="chef-profiles" aria-label="Chef biographies">
        {chefs.map((chef, index) => (
          <article
            className={`chef-profile${index === 1 ? " chef-profile-reverse" : ""}`}
            key={chef.number}
          >
            <figure className="chef-photo">
              <div className="chef-image">
                <Image
                  src={chef.image}
                  alt={chef.alt}
                  fill
                  loading={index === 0 ? "eager" : "lazy"}
                  sizes="(max-width: 640px) 86vw, (max-width: 900px) 40vw, 36vw"
                />
              </div>
              <figcaption>{chef.number} / CULLEN’S KITCHEN</figcaption>
            </figure>
            <div className="chef-copy">
              <p className="eyebrow"><span /> {chef.number} / {chef.title.toUpperCase()}</p>
              <h2>{chef.name}</h2>
              <p className="chef-biography">{chef.biography}</p>
              <dl className="chef-credentials">
                <div>
                  <dt>Formal training</dt>
                  <dd>{chef.education}</dd>
                </div>
                <div>
                  <dt>Current appointment</dt>
                  <dd>{chef.restaurant}</dd>
                </div>
              </dl>
            </div>
          </article>
        ))}
      </section>

      <footer className="site-footer">
        <Link className="footer-wordmark" href="/">CULLEN’S STUDIO<span>© 2026</span></Link>
      </footer>
    </main>
  );
}