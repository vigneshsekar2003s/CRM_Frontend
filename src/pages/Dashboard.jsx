import { useEffect, useState } from "react";
import axios from "axios";

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

function Dashboard() {

  const [customers, setCustomers] = useState([]);
  const [leads, setLeads] = useState([]);

  useEffect(() => {

    fetchDashboardData();

  }, []);

  const fetchDashboardData = async () => {

    try {

      const customerRes = await axios.get(
        "http://localhost:5000/api/customers"
      );

      const leadRes = await axios.get(
        "http://localhost:5000/api/leads"
      );

      setCustomers(customerRes.data);

      setLeads(leadRes.data);

    } catch (error) {

      console.log(error);

    }
  };

  return (

    <div className="flex min-h-screen bg-gray-100">

      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 w-full">

        {/* Navbar */}
        <Navbar />

        {/* Dashboard Content */}
        <div className="p-4 md:p-8">

          <h1 className="text-3xl md:text-5xl font-bold mb-8">
            CRM Dashboard
          </h1>

          {/* Dashboard Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

            {/* Customers Card */}
            <div className="bg-white p-6 rounded-xl shadow hover:scale-105 transition duration-300">

              <h2 className="text-xl mb-4 text-gray-600">
                Total Customers
              </h2>

              <p className="text-5xl font-bold text-blue-600">
                {customers.length}
              </p>

            </div>

            {/* Leads Card */}
            <div className="bg-white p-6 rounded-xl shadow hover:scale-105 transition duration-300">

              <h2 className="text-xl mb-4 text-gray-600">
                Total Leads
              </h2>

              <p className="text-5xl font-bold text-green-600">
                {leads.length}
              </p>

            </div>

            {/* Revenue Card */}
            <div className="bg-white p-6 rounded-xl shadow hover:scale-105 transition duration-300">

              <h2 className="text-xl mb-4 text-gray-600">
                Revenue
              </h2>

              <p className="text-5xl font-bold text-purple-600">
                $15K
              </p>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;