import type React from "react";
import type { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import type { AutoScrollOptionsType } from "embla-carousel-auto-scroll";

const METRO_1_URL = "/img/metro-1.png";
const METRO_2_URL = "/img/metro-2.png";

const Header: React.FC = () => {
  const emblaOptions: EmblaOptionsType = {
    loop: true,
  };

  const emblaAutoscrollOptions: AutoScrollOptionsType = {
    speed: 2,
    startDelay: 1000,
    stopOnInteraction: false,
    direction: "backward",
  };

  const [emblaRef] = useEmblaCarousel(emblaOptions, [
    AutoScroll(emblaAutoscrollOptions),
  ]);

  return (
    <div className="relative text-white text-5xl text-center font-Helvetica font-bold w-screen">
      <div className="embla" ref={emblaRef}>
        <div className="embla__container flex">
          <img src={METRO_2_URL} alt="Metro" className="embla__slid h-36" />
          <img src={METRO_1_URL} alt="Metro" className="embla__slid h-36" />
          <img src={METRO_2_URL} alt="Metro" className="embla__slid h-36" />
          <img src={METRO_1_URL} alt="Metro" className="embla__slid h-36" />
        </div>
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-screen">
        METRO
      </div>
    </div>
  );
};

export default Header;
