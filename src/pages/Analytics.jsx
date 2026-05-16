import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

function Analytics() {

  const salesData = [
    { month: "Jan", sales: 4000 },
    { month: "Feb", sales: 3000 },
    { month: "Mar", sales: 5000 },
    { month: "Apr", sales: 4500 },
    { month: "May", sales: 6000 },
  ];

  const leadData = [
    { name: "New", value: 10 },
    { name: "Contacted", value: 6 },
    { name: "Closed", value: 4 },
  ];

  const COLORS = ["#2563eb", "#f59e0b", "#10b981"];

  return (
    <div className="p-8 bg-gray-100 min-h-screen">

      <h1 className="text-4xl font-bold mb-10">
        Analytics Dashboard
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* Sales Chart */}

        <div className="bg-white p-6 rounded shadow">

          <h2 className="text-2xl font-semibold mb-6">
            Monthly Sales
          </h2>

          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={salesData}>
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="sales" fill="#2563eb" />
            </BarChart>
          </ResponsiveContainer>

        </div>

        {/* Leads Pie Chart */}

        <div className="bg-white p-6 rounded shadow">

          <h2 className="text-2xl font-semibold mb-6">
            Leads Status
          </h2>

          <ResponsiveContainer width="100%" height={300}>
            <PieChart>

              <Pie
                data={leadData}
                cx="50%"
                cy="50%"
                outerRadius={100}
                dataKey="value"
                label
              >

                {leadData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}

              </Pie>

              <Tooltip />

            </PieChart>
          </ResponsiveContainer>

        </div>

      </div>

    </div>
  );
}

export default Analytics;