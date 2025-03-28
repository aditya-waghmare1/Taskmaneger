import { motion } from "framer-motion";

const TaskList = ({ tasks, updateTaskStatus, deleteTask }) => {
  return (
    <div>
      {tasks.map((task) => (
        <motion.div
          key={task.id}
          layout
          className="p-4 mb-2 bg-gray-200 rounded flex justify-between items-center"
        >
          <div>
            <h3 className="font-bold">{task.title}</h3>
            <p>{task.description}</p>
          </div>
          <div className="flex items-center space-x-2">
            <select
              value={task.status}
              onChange={(e) => updateTaskStatus(task.id, e.target.value)}
              className="p-1 border rounded"
            >
              <option>To Do</option>
              <option>In Progress</option>
              <option>Done</option>
            </select>
            <button onClick={() => deleteTask(task.id)} className="bg-red-500 text-white px-2 py-1 rounded">
              Delete
            </button>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default TaskList;
