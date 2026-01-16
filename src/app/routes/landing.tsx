import { Link } from "react-router";
import React from "react";
import { tickets } from "@/config/options";
import type { TicketOptionsType } from "@/types/api";

const Q_TICKETING_LOGO_URL = "/src/assets/q-ticketing.png";

const Landing: React.FC = () => {
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
      <div className="flex flex-col items-center justify-center h-screen gap-12 bg-white">
        <img
          src={Q_TICKETING_LOGO_URL}
          className="w-32"
          alt="q ticketing logo"
        />
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
            {tickets.map((ticket: TicketOptionsType) => (
              <option key={ticket.value} value={ticket.value}>
                {ticket.option}
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
};

export default Landing;
