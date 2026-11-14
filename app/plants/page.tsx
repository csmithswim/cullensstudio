import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const metadata: Metadata = {
  title: "Plants — Cullen's Studio",
  description: "A little greenery makes the studio feel more like home.",
};

export default function PlantsPage() {
  return (
    <main>
      <header className="site-header">
        <Link className="wordmark" href="/" aria-label="Cullen's Studio home">
          CULLEN<span>’</span>S STUDIO
        </Link>
        <nav className="main-nav" aria-label="Main navigation">
          <Link href="/#work">Work</Link>
          <Link href="/#about">Kitchen</Link>
          <Link href="/about-us">About Us</Link>
          <Link href="/plants" aria-current="page">Plants</Link>
        </nav>
      </header>

      <section className="plants-section plants-page-section" aria-labelledby="plants-title">
        <div className="plants-photo">
          <Image
            src={`${basePath}/home-studio.jpg`}
            alt="Green plants bringing life to the home studio"
            fill
            sizes="(max-width: 640px) 86vw, 40vw"
          />
        </div>
        <div className="plants-copy">
          <p className="eyebrow"><span /> A LITTLE GREEN</p>
          <h1 id="plants-title">Plants<span className="accent-dot">.</span></h1>
          <p>A little greenery makes the studio feel more like home.</p>
        </div>
      </section>
    </main>
  );
}
