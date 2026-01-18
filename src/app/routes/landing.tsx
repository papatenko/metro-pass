import { Link } from "react-router";
import React from "react";
import { tickets } from "@/config/options";
import type { TicketOptionsType } from "@/types/api";

const Q_TICKETING_LOGO_URL = "/img/q-ticketing.png";
const GITHUB_URL = "/svg/github-dark-logo.svg";
const GITHUB_HREF = "https://github.com/papatenko/metro-pass";
const IOS_GUIDE_HREF =
  "https://discussions.apple.com/thread/255899735?sortBy=rank";
const ANDROID_GUIDE_HREF =
  "https://www.androidauthority.com/add-website-android-iphone-home-screen-3181682/";

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
      <div className="flex flex-col items-center justify-between h-screen gap-12 bg-white">
        <div className="navbar bg-base-100 shadow-sm">
          <div className="flex-1">
            <a className="btn btn-ghost text-xl">Metro-Pass</a>
          </div>
          <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
              <li>
                <details>
                  <summary>Add to Home Screen</summary>
                  <ul className="bg-base-100 rounded-t-none p-2">
                    <li>
                      <a href={IOS_GUIDE_HREF}>IOS Guide</a>
                    </li>
                    <li>
                      <a href={ANDROID_GUIDE_HREF}>Android Guide</a>
                    </li>
                  </ul>
                </details>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-4 items-center">
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
        <footer className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4">
          <aside>
            <span className="badge badge-lg">
              Best viewed on mobile browsers.
            </span>
            <a
              href={GITHUB_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row gap-2"
            >
              <img src={GITHUB_URL} alt="GitHub Logo" className="w-6" />
              <span>papatenko/metro-pass</span>
            </a>
          </aside>
        </footer>
      </div>
    </>
  );
};

export default Landing;
