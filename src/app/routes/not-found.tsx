import { Link } from "react-router";

const NotFound = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen">
        <Link to="/">
          <button className="btn">Go Back Home</button>
        </Link>
      </div>
    </>
  );
};

export default NotFound;
