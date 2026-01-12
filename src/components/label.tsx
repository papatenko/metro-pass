import { tickets } from "@/config/options";
import type { TicketOption } from "@/types/api";

function Label() {
  const selectedTicket = localStorage.getItem("selectedTicket");
  const ticketLabel = tickets.find(
    (ticket: TicketOption) => ticket.value === selectedTicket
  )?.label;

  return <div>{ticketLabel}</div>;
}

export default Label;
