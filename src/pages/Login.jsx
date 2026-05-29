import { useState } from "react";
import { Link } from "react-router-dom";

function Login() {

const [formData, setFormData] = useState({
email: "",
password: "",
});

const handleChange = (e) => {
setFormData({
...formData,
[e.target.name]: e.target.value,
});
};

const handleSubmit = async (e) => {


e.preventDefault();

try {

  const response = await fetch(
    "https://crm-backend-2-9mwg.onrender.com/api/auth/login",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message);
  }

  localStorage.setItem("token", data.token);
  localStorage.setItem("user", JSON.stringify(data.user));

  alert("Login Success");

  window.location.href = "/dashboard";

} catch (error) {

  console.error(error);

  alert(error.message || "Login Failed");

}

};

return ( <div className="h-screen flex items-center justify-center bg-gray-100">


  <form
    onSubmit={handleSubmit}
    className="bg-white p-8 rounded-xl shadow w-96"
  >

    <h1 className="text-3xl font-bold mb-6 text-center">
      Login
    </h1>

    <input
      type="email"
      name="email"
      placeholder="Email"
      value={formData.email}
      onChange={handleChange}
      className="w-full border p-3 mb-4 rounded"
      required
    />

    <input
      type="password"
      name="password"
      placeholder="Password"
      value={formData.password}
      onChange={handleChange}
      className="w-full border p-3 mb-4 rounded"
      required
    />

    <button
      type="submit"
      className="bg-blue-600 hover:bg-blue-700 text-white w-full p-3 rounded"
    >
      Login
    </button>

    <p className="mt-4 text-center">
      No account?

      <Link
        to="/register"
        className="text-blue-600 ml-2"
      >
        Register
      </Link>
    </p>

  </form>

</div>


);
}

export default Login;
