import { Link } from "react-router-dom";

function Navbar() {
  // Temporary dummy user (remove once AuthContext is ready)
  const user = null; 
  const logout = () => alert("Logout clicked");

  return (
    <nav className="bg-blue-600 text-white px-6 py-3 flex justify-between items-center shadow-md">
      {/* Left side - Logo */}
      <div className="text-xl font-bold">
        <Link to="/">✈️ Airline Booking</Link>
      </div>

      {/* Middle - Nav Links */}
      <div className="flex space-x-6">
        <Link to="/" className="hover:text-gray-200">Home</Link>
        <Link to="/flights" className="hover:text-gray-200">Flights</Link>
        {user && <Link to="/booking/my" className="hover:text-gray-200">My Bookings</Link>}
        {user?.role === "ADMIN" && <Link to="/admin" className="hover:text-gray-200">Admin</Link>}
      </div>

      {/* Right side - Auth */}
      <div>
        {user ? (
          <div className="flex items-center space-x-4">
            <span>Hello, {user.name}</span>
            <button
              onClick={logout}
              className="bg-red-500 px-3 py-1 rounded hover:bg-red-600"
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="flex space-x-4">
            <Link to="/login" className="bg-green-500 px-3 py-1 rounded hover:bg-green-600">Login</Link>
            <Link to="/signup" className="bg-yellow-500 px-3 py-1 rounded hover:bg-yellow-600">Signup</Link>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
