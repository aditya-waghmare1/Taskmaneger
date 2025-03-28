import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";
import { useTaskContext } from "../context/TaskContext";

const TaskManagement = () => {
  const { tasks, addTask, updateTaskStatus, deleteTask } = useTaskContext();

  return (
    <div className="w-full max-w-2xl bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Task Management</h2>
      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks} updateTaskStatus={updateTaskStatus} deleteTask={deleteTask} />
    </div>
  );
};

export default TaskManagement;
