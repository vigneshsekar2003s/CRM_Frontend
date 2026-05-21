import { useEffect, useState } from "react";
import axios from "axios";

function Tasks() {

  const [tasks, setTasks] = useState([]);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    assignedTo: "",
    dueDate: "",
  });

  const [loading, setLoading] = useState(false);

  const fetchTasks = async () => {

    try {

      const res = await axios.get(
        "https://crm-backend-7-ly4a.onrender.com/api/tasks"
      );

      setTasks(res.data);

    } catch (error) {

      console.log(error);

      alert("Failed to fetch tasks");

    }
  };

  useEffect(() => {

    fetchTasks();

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
        "https://crm-backend-7-ly4a.onrender.com/api/tasks",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      fetchTasks();

      setFormData({
        title: "",
        description: "",
        assignedTo: "",
        dueDate: "",
      });

      alert("Task Added Successfully");

    } catch (error) {

      console.log(error);

      alert(
        error.response?.data?.message ||
        "Failed to add task"
      );

    } finally {

      setLoading(false);

    }
  };

  const deleteTask = async (id) => {

    try {

      await axios.delete(
        `https://crm-backend-7-ly4a.onrender.com/api/tasks/${id}`
      );

      fetchTasks();

      alert("Task Deleted");

    } catch (error) {

      console.log(error);

      alert("Failed to delete task");

    }
  };

  return (

    <div className="p-8">

      <h1 className="text-4xl font-bold mb-8">
        Tasks Management
      </h1>

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-2 gap-4 mb-8"
      >

        <input
          type="text"
          name="title"
          placeholder="Task Title"
          value={formData.title}
          onChange={handleChange}
          className="border p-3 rounded"
          required
        />

        <input
          type="text"
          name="assignedTo"
          placeholder="Assigned To"
          value={formData.assignedTo}
          onChange={handleChange}
          className="border p-3 rounded"
          required
        />

        <input
          type="date"
          name="dueDate"
          value={formData.dueDate}
          onChange={handleChange}
          className="border p-3 rounded"
          required
        />

        <input
          type="text"
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          className="border p-3 rounded"
          required
        />

        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded col-span-2"
        >
          {loading ? "Loading..." : "Add Task"}
        </button>

      </form>

      <table className="w-full bg-white shadow rounded">

        <thead className="bg-gray-200">

          <tr>
            <th className="p-4">Title</th>
            <th>Assigned</th>
            <th>Due Date</th>
            <th>Status</th>
            <th>Action</th>
          </tr>

        </thead>

        <tbody>

          {tasks.map((task) => (

            <tr
              key={task._id}
              className="text-center border-t"
            >

              <td className="p-4">
                {task.title}
              </td>

              <td>
                {task.assignedTo}
              </td>

              <td>
                {new Date(
                  task.dueDate
                ).toLocaleDateString()}
              </td>

              <td>
                {task.status}
              </td>

              <td>

                <button
                  onClick={() =>
                    deleteTask(task._id)
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

export default Tasks;