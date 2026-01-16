import { Link } from "react-router";

function Header() {
  return (
    <header className="bg-accent text-white text-lg w-screen flex justify-between p-4 rounded-t-xl">
      <Link to="/">
        <div className="text-white">Back</div>
      </Link>
      <div className="font-bold">Ticket</div>
      <div className="w-12"></div>
    </header>
  );
}

export default Header;
