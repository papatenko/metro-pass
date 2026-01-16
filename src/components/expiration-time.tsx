import React from "react";

const EXPIRATION_MINUTES = 180;

const ExpirationTime: React.FC = () => {
  const now = new Date();
  const ticketExpiration = new Date(now.getTime() + EXPIRATION_MINUTES * 60000);
  const formattedDate = getFormattedDate(ticketExpiration);
  const formattedTime = getFormattedTime(ticketExpiration);

  return (
    <div className="text-3xl my-12">
      {formattedDate} {formattedTime}
    </div>
  );
};

function getFormattedDate(date: Date): string {
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear();
  return `${month}/${day}/${year}`;
}

function getFormattedTime(date: Date): string {
  let hours = date.getHours();
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  if (hours === 0) hours = 12;
  return `${hours.toString().padStart(2, "0")}:${minutes} ${ampm}`;
}

export default ExpirationTime;
