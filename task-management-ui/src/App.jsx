import { TaskProvider } from "./context/TaskContext";
import TaskManagement from "./pages/TaskManagement";

const App = () => {
  return (
    <TaskProvider>
      <div className="min-h-screen flex items-center justify-center">
        <TaskManagement />
      </div>
    </TaskProvider>
  );
};

export default App;
