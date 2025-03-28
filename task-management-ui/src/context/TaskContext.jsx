import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";

const TaskContext = createContext();
const API_URL = "http://localhost:5000/api/tasks"; // Change if needed

const taskReducer = (state, action) => {
  switch (action.type) {
    case "SET_TASKS":
      return action.payload;
    case "ADD_TASK":
      return [...state, action.payload];
    case "UPDATE_TASK":
      return state.map(task =>
        task._id === action.payload._id ? action.payload : task
      );
    case "DELETE_TASK":
      return state.filter(task => task._id !== action.payload);
    default:
      return state;
  }
};

export const TaskProvider = ({ children }) => {
  const [tasks, dispatch] = useReducer(taskReducer, []);

  // Fetch tasks from backend
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const res = await axios.get(API_URL);
        dispatch({ type: "SET_TASKS", payload: res.data });
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };
    fetchTasks();
  }, []);

  // Add Task
  const addTask = async (title, description) => {
    try {
      const res = await axios.post(API_URL, { title, description });
      dispatch({ type: "ADD_TASK", payload: res.data });
    } catch (error) {
      console.error("Error adding task:", error);
    }
  };

  // Update Task Status
  const updateTaskStatus = async (id, status) => {
    try {
      const res = await axios.put(`${API_URL}/${id}`, { status });
      dispatch({ type: "UPDATE_TASK", payload: res.data });
    } catch (error) {
      console.error("Error updating task:", error);
    }
  };

  // Delete Task
  const deleteTask = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      dispatch({ type: "DELETE_TASK", payload: id });
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, updateTaskStatus, deleteTask }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTaskContext = () => useContext(TaskContext);
