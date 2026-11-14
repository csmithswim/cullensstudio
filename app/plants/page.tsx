import type { Metadata } from "next";
import Link from "next/link";

const plantNames = [
  "Spider Plant",
  "Spider Plant",
  "Clivia",
  "Monstera",
  "Snake Plant",
  "Snake Plant",
  "Snake Plant",
  "Snake Plant",
  "Snake Plant",
  "Pencil Cactus",
];

export const metadata: Metadata = {
  title: "Plants — Cullen's Studio",
  description: "Plant care notes from Cullen's Studio.",
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

      <section className="plants-section plants-page-section" aria-label="Plant care matrix">
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
                {Array.from({ length: 6 }, (_, column) => {
                  const value = column === 0 ? plantNames[row] ?? "" : "";
                  return (
                    <td
                      aria-label={value || `Row ${row + 1}, column ${column + 1}`}
                      key={column}
                    >
                      {value}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </main>
  );
}
