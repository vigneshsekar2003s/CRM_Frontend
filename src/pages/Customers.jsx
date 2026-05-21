import { useEffect, useState } from "react";
import axios from "axios";

function Customers() {

  const [customers, setCustomers] = useState([]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
  });

  const [loading, setLoading] = useState(false);

  const fetchCustomers = async () => {

    try {

      const res = await axios.get(
        "https://crm-backend-7-ly4a.onrender.com/api/customers"
      );

      setCustomers(res.data);

    } catch (error) {

      console.log(error);

      alert("Failed to fetch customers");

    }
  };

  useEffect(() => {

    fetchCustomers();

  }, []);

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    setLoading(true);

    try {

      await axios.post(
        "https://crm-backend-7-ly4a.onrender.com/api/customers",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      fetchCustomers();

      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
      });

      alert("Customer Added Successfully");

    } catch (error) {

      console.log(error);

      alert(
        error.response?.data?.message ||
        "Failed to add customer"
      );

    } finally {

      setLoading(false);

    }
  };

  const deleteCustomer = async (id) => {

    try {

      await axios.delete(
        `https://crm-backend-7-ly4a.onrender.com/api/customers/${id}`
      );

      fetchCustomers();

      alert("Customer Deleted");

    } catch (error) {

      console.log(error);

      alert("Failed to delete customer");

    }
  };

  return (

    <div className="p-8">

      <h1 className="text-4xl font-bold mb-8">
        Customers
      </h1>

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-4 gap-4 mb-8"
      >

        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          className="border p-3 rounded"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="border p-3 rounded"
          required
        />

        <input
          type="text"
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
          className="border p-3 rounded"
          required
        />

        <input
          type="text"
          name="company"
          placeholder="Company"
          value={formData.company}
          onChange={handleChange}
          className="border p-3 rounded"
          required
        />

        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded col-span-4"
        >
          {loading ? "Loading..." : "Add Customer"}
        </button>

      </form>

      <table className="w-full bg-white shadow rounded">

        <thead className="bg-gray-200">

          <tr>
            <th className="p-4">Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Company</th>
            <th>Action</th>
          </tr>

        </thead>

        <tbody>

          {customers.map((customer) => (

            <tr
              key={customer._id}
              className="text-center border-t"
            >

              <td className="p-4">
                {customer.name}
              </td>

              <td>
                {customer.email}
              </td>

              <td>
                {customer.phone}
              </td>

              <td>
                {customer.company}
              </td>

              <td>

                <button
                  onClick={() =>
                    deleteCustomer(customer._id)
                  }
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
                >
                  Delete
                </button>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}

export default Customers;