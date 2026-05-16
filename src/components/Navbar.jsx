import { useNavigate } from "react-router-dom";

function Navbar() {

  const navigate = useNavigate();

  const handleLogout = () => {

    // Remove token
    localStorage.removeItem("token");

    navigate("/");

  };

  return (
    <div className="bg-white shadow px-4 md:px-8 py-4 flex items-center justify-between">

      <h1 className="text-2xl md:text-4xl font-bold">
        Dashboard
      </h1>

          <button
      onClick={() => {
        localStorage.removeItem("token");
        window.location.href = "/";
      }}
      className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
    >
      Logout
    </button>

    </div>
  );
}

export default Navbar;
