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

  const fetchCustomers = async () => {
    const res = await axios.get(
      "https://crm-backend-iznr.onrender.com/api/customers"
    );

    setCustomers(res.data);
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

    await axios.post(
      "https://crm-backend-iznr.onrender.com/api/customers",
      formData
    );

    fetchCustomers();

    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
    });
  };

  const deleteCustomer = async (id) => {
    await axios.delete(
      `https://crm-backend-iznr.onrender.com/api/customers/${id}`
    );

    fetchCustomers();
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
          className="border p-3"
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="border p-3"
        />

        <input
          type="text"
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
          className="border p-3"
        />

        <input
          type="text"
          name="company"
          placeholder="Company"
          value={formData.company}
          onChange={handleChange}
          className="border p-3"
        />

        <button className="bg-blue-600 text-white p-3 rounded col-span-4">
          Add Customer
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
                  className="bg-red-500 text-white px-4 py-2 rounded"
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