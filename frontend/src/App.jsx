// src/App.jsx
import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import TasksPage from "./pages/TasksPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />

      {/* RUTA QUE FALTABA */}
      <Route path="/tasks" element={<TasksPage />} />

      {/* Opcional: alias si en algún lado usas /tareas */}
      <Route path="/tareas" element={<TasksPage />} />
    </Routes>
  );
}

export default App;
