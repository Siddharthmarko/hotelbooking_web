import { Link } from "react-router-dom";
import { useAppContext } from "../context/AppContext";

const Header = () => {
  const { isLoggedIn } = useAppContext();
  return (
    <div className="bg-blue-800 py-8">
      <div className="container mx-auto flex justify-between">
        <span className="text-3xl text-white font-bold tracking-tight">
          <Link to="/">HoterlBooking.com</Link>
        </span>
        <span className="flex space-x-2">
          {isLoggedIn ? (
            <>
              <Link to="/my-bookings">My booking</Link>
              <Link to="/my-hotels">My Hotels</Link>
              <button>Sign Out</button>
            </>
          ) : (
            <Link
              to="/sign-in"
              className="flex items-center text-white px-3 font-bold hover:bg-blue-600 "
            >
              Sign In
            </Link>
          )}
        </span>
      </div>
    </div>
  );
};

export default Header;
