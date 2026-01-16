import { tickets } from "@/config/options";
import type { TicketOptionsType } from "@/types/api";
import type { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import type { AutoScrollOptionsType } from "embla-carousel-auto-scroll";

import React, { useMemo } from "react";

const LOGO_SRC = "/src/assets/logo.png";
const SHOW_CODE_SRC = "/src/assets/show-code.png";

const Label: React.FC = () => {
  // Get selected ticket from localStorage and parse as string
  const selectedTicketValue = localStorage.getItem("selectedTicket");

  // Find the ticket label using useMemo for optimization
  const ticketLabel = useMemo(() => {
    if (!selectedTicketValue) return "";
    const found = tickets.find(
      (ticket: TicketOptionsType) => ticket.value === selectedTicketValue
    );
    return found ? found.label : "";
  }, [selectedTicketValue]);

  const emblaOptions: EmblaOptionsType = {
    loop: true,
  };

  const emblaAutoscrollOptions: AutoScrollOptionsType = {
    speed: 1,
    startDelay: 0,
    stopOnInteraction: false,
    direction: "backward",
  };

  const [emblaRef] = useEmblaCarousel(emblaOptions, [
    AutoScroll(emblaAutoscrollOptions),
  ]);

  return (
    <div className="relative text-black text-5xl text-center font-Helvetica font-bold bg-neutral w-screen h-screen flex items-center justify-center">
      <div className="embla" ref={emblaRef}>
        <div className="embla__container flex gap-12 px-12">
          {[...Array(4)].map((_, idx) => (
            <img key={idx} src={LOGO_SRC} alt="Logo" className="embla__slide" />
          ))}
        </div>
      </div>
      {ticketLabel && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-screen">
          {ticketLabel}
        </div>
      )}
      <img
        src={SHOW_CODE_SRC}
        alt="Show Code"
        className="absolute bottom-0 right-0 h-14"
      />
    </div>
  );
};

export default Label;
