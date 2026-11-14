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
        <table className="plant-matrix" aria-label="Plant matrix with 20 rows and 6 columns">
          <thead>
            <tr>
              <th scope="col">Plant Name</th>
              <th scope="col">Soil Mix</th>
              <th scope="col">Light Level</th>
              <th scope="col" aria-label="Column 4" />
              <th scope="col" aria-label="Column 5" />
              <th scope="col" aria-label="Column 6" />
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: 20 }, (_, row) => (
              <tr key={row}>
                {Array.from({ length: 6 }, (_, column) => (
                  <td aria-label={`Row ${row + 1}, column ${column + 1}`} key={column} />
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        <div className="plants-feature">
          <div className="plants-photo plants-garden-photo">
            <Image
              src={`${basePath}/garden.jpg`}
              alt="Colorful flowers and garden produce beside a window"
              fill
              sizes="(max-width: 520px) 86vw, (max-width: 800px) 40vw, 35vw"
            />
          </div>
          <div className="plants-copy">
            <p className="eyebrow"><span /> A LITTLE GREEN</p>
            <h1 id="plants-title">Plants<span className="accent-dot">.</span></h1>
            <p>A little greenery makes the studio feel more like home.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
