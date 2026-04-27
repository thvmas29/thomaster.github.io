import { Hero } from "../components/Hero";
import { Presentation } from "../components/Presentation";
import { Projects } from "../components/Projects";
import { TechWatch } from "../components/TechWatch";
import { LegalWatch } from "../components/LegalWatch";

export function HomePage() {
  return (
    <>
      <Hero />
      <Presentation />
      <Projects />
      <TechWatch />
      <LegalWatch />
    </>
  );
}
