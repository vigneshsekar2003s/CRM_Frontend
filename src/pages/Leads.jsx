import { useEffect, useState } from "react";
import axios from "axios";

function Leads() {

  const [leads, setLeads] = useState([]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
  });

  const fetchLeads = async () => {

    const res = await axios.get(
      "https://crm-backend-5-9odz.onrender.com/api/leads"
    );

    setLeads(res.data);

  };

  useEffect(() => {

    fetchLeads();

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
      "https://crm-backend-5-9odz.onrender.com/api/leads",
      formData
    );

    fetchLeads();

    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
    });

  };

  const updateStatus = async (id, status) => {

    await axios.put(
      `https://crm-backend-5-9odz.onrender.com/api/leads/${id}`,
      {
        status,
      }
    );

    fetchLeads();

  };

  const deleteLead = async (id) => {

    await axios.delete(
      `https://crm-backend-5-9odz.onrender.com/api/leads/${id}`
    );

    fetchLeads();

  };

  return (
    <div className="p-8">

      <h1 className="text-4xl font-bold mb-8">
        Leads Management
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

        <button className="bg-green-600 text-white p-3 rounded col-span-4">
          Add Lead
        </button>

      </form>

      <table className="w-full bg-white shadow rounded">

        <thead className="bg-gray-200">

          <tr>

            <th className="p-4">Name</th>

            <th>Email</th>

            <th>Company</th>

            <th>Status</th>

            <th>Actions</th>

          </tr>

        </thead>

        <tbody>

          {leads.map((lead) => (

            <tr
              key={lead._id}
              className="text-center border-t"
            >

              <td className="p-4">
                {lead.name}
              </td>

              <td>
                {lead.email}
              </td>

              <td>
                {lead.company}
              </td>

              <td>

                <select
                  value={lead.status}
                  onChange={(e) =>
                    updateStatus(
                      lead._id,
                      e.target.value
                    )
                  }
                  className="border p-2 rounded"
                >

                  <option>New</option>

                  <option>Contacted</option>

                  <option>Qualified</option>

                  <option>Proposal</option>

                  <option>Won</option>

                  <option>Lost</option>

                </select>

              </td>

              <td>

                <button
                  onClick={() =>
                    deleteLead(lead._id)
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

export default Leads;