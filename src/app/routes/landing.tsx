import { Link } from "react-router";
import React from "react";
import { tickets } from "@/config/options";
import type { TicketOption } from "@/types/api";

function Landing() {
  const [selectedTicket, setSelectedTicket] = React.useState("");

  const handleTicketChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedTicket(e.target.value);
  };

  const handleEnterClick = () => {
    // You can use selectedTicket state here if needed
    localStorage.setItem("selectedTicket", selectedTicket);
    console.log("Selected Ticket:", selectedTicket);
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen gap-12 ">
        <img src="/q-ticketing.png" className="w-32" alt="q ticketing logo" />
        <fieldset className="fieldset">
          <legend className="fieldset-legend">
            What Metro Ticket do you want?
          </legend>
          <select
            defaultValue="Pick a ticket"
            className="select"
            value={selectedTicket}
            onChange={handleTicketChange}
          >
            <option disabled={true}>Pick a ticket</option>
            {tickets.map((ticket: TicketOption) => (
              <option key={ticket.value} value={ticket.value}>
                {ticket.label}
              </option>
            ))}
          </select>
        </fieldset>
        <Link to="/ticket">
          <button className="btn" onClick={handleEnterClick}>
            Enter
          </button>
        </Link>
      </div>
    </>
  );
}

export default Landing;
