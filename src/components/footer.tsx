function Footer() {
  const now: Date = new Date();
  const formattedDate: string = getFormattedDate(now);
  const formattedTime: string = getFormattedTime(now);

  return (
    <footer className="flex flex-col items-center gap-2 bg-accent text-white">
      <div className="font-bold text-xl">
        {" "}
        {formattedDate} {formattedTime}
      </div>
      <div className="font-bold">Ticket Expiration</div>
    </footer>
  );
}

function getFormattedDate(now: Date) {
  const day: string = now.getDate().toString().padStart(2, "0");
  const month: string = (now.getMonth() + 1).toString().padStart(2, "0"); // Months are zero-based
  const year: number = now.getFullYear();
  return `${day}/${month}/${year}`;
}

function getFormattedTime(now: Date) {
  const hours: string = now.getHours().toString().padStart(2, "0");
  const minutes: string = now.getMinutes().toString().padStart(2, "0");

  if (hours <= "12") {
    return `${hours}:${minutes} AM`;
  } else {
    const adjustedHours: string = (parseInt(hours) - 12)
      .toString()
      .padStart(2, "0");
    return `${adjustedHours}:${minutes} PM`;
  }
}

export default Footer;
