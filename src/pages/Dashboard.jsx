import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

function Dashboard() {
  return (
    <div className="flex min-h-screen bg-gray-100">

      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1">

        <Navbar />

        <div className="p-4 md:p-8">

          <h1 className="text-3xl md:text-5xl font-bold mb-8">
            CRM Dashboard
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

            <div className="bg-white p-6 rounded-xl shadow">
              <h2 className="text-xl md:text-2xl font-semibold">
                Total Customers
              </h2>

              <p className="text-4xl font-bold text-blue-600 mt-4">
                2
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <h2 className="text-xl md:text-2xl font-semibold">
                Total Leads
              </h2>

              <p className="text-4xl font-bold text-green-600 mt-4">
                1
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <h2 className="text-xl md:text-2xl font-semibold">
                Revenue
              </h2>

              <p className="text-4xl font-bold text-purple-600 mt-4">
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