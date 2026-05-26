import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Login() {

const navigate = useNavigate();

const [formData, setFormData] = useState({
email: "",
password: "",
});

const [loading, setLoading] = useState(false);

const handleChange = (e) => {
setFormData({
...formData,
[e.target.name]: e.target.value,
});
};

const handleSubmit = async (e) => {

```
e.preventDefault();

setLoading(true);

try {

  const response = await fetch(
    "https://crm-backend-xcgz.onrender.com/api/auth/login",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }
  );

  const data = await response.json();

  console.log(data);

  if (!response.ok) {
    throw new Error(data.message);
  }

  localStorage.setItem("token", data.token);

  alert("Login Success");

  navigate("/dashboard");

} catch (error) {

  console.log(error);

  alert(error.message);

} finally {

  setLoading(false);

}
```

};

return ( <div className="h-screen flex items-center justify-center bg-gray-100">

```
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
      disabled={loading}
      className="bg-blue-600 hover:bg-blue-700 text-white w-full p-3 rounded"
    >
      {loading ? "Loading..." : "Login"}
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
