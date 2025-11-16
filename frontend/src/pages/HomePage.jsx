// src/pages/HomePage.jsx
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();

  const handleEnter = () => {
    navigate("/tasks");
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center relative"
      style={{
        // IMPORTANTE: ahora la tomamos desde /public
        backgroundImage: "url('/blue.jpg')",
      }}
    >
      {/* Capa oscura para que el texto resalte */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Contenido centrado */}
      <div className="relative z-10 max-w-lg mx-auto px-6">
        <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-xl p-8 text-center border border-white/20">
          <h1 className="text-4xl font-bold text-white mb-3 drop-shadow-lg">
            Gestor de Tareas
          </h1>

          <p className="text-slate-200 mb-6">
            Bienvenido. Gestiona tus tareas de forma sencilla y rápida.
          </p>

          <button
            type="button"
            onClick={handleEnter}
            className="inline-flex items-center px-6 py-3 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white font-semibold shadow-md transition"
          >
            Entrar al panel
          </button>

          <p className="text-xs text-slate-300 mt-4">
            Fondo cargado desde <code>public/blue.jpg</code>
          </p>
        </div>
      </div>
    </div>
  );
}
