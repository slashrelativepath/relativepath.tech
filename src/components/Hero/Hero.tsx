import { HeroLeftCol } from "./HeroLeftCol";
import { HeroRightCol } from "./HeroRightCol";

export function Hero() {
  return (
    <div className="pt-24">
      <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
        <HeroLeftCol />
        <HeroRightCol />
      </div>
    </div>
  );
}
