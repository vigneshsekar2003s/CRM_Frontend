import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Customers from "./pages/Customers";
import Leads from "./pages/Leads";
import Tasks from "./pages/Tasks";
import Analytics from "./pages/Analytics";

function App() {
  return (

    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<Login />}
        />

        <Route
          path="/register"
          element={<Register />}
        />

        <Route
          path="/dashboard"
          element={<Dashboard />}
        />

        <Route
          path="/customers"
          element={<Customers />}
        />

        <Route
          path="/leads"
          element={<Leads />}
        />

        <Route
          path="/tasks"
          element={<Tasks />}
        />

        <Route
          path="/analytics"
          element={<Analytics />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;