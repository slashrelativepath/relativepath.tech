import { Hero } from "../partials/Home/Hero";
import { HeroImage } from "../partials/Home/HeroImage";
import { Content } from "../partials/Home/Content";

export function Home() {
  return (
    <main className="flex flex-col pt-12">
      <Hero />
      <HeroImage />
      <Content />
    </main>
  );
}
