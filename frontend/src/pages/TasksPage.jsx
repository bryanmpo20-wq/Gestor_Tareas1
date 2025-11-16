// src/pages/TasksPage.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const initialTasks = [
  {
    id: 1,
    title: "Revisar pendientes del día",
    description: "Organizar tareas urgentes y revisar correos.",
    status: "pendiente",
  },
  {
    id: 2,
    title: "Actualizar documentación",
    description: "Subir cambios del Gestor de Tareas al README.",
    status: "en_progreso",
  },
  {
    id: 3,
    title: "Enviar reporte",
    description: "Enviar avance del proyecto al líder técnico.",
    status: "completada",
  },
];

const statusOptions = [
  { value: "pendiente", label: "Pendiente" },
  { value: "en_progreso", label: "En progreso" },
  { value: "completada", label: "Completada" },
];

export default function TasksPage() {
  const navigate = useNavigate();

  const [tasks, setTasks] = useState(initialTasks);
  const [filter, setFilter] = useState("todas");
  const [editingId, setEditingId] = useState(null);
  const [form, setForm] = useState({
    title: "",
    description: "",
    status: "pendiente",
  });

  const filteredTasks =
    filter === "todas"
      ? tasks
      : tasks.filter((t) => t.status === filter);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.title.trim()) return;

    if (editingId) {
      // editar
      setTasks((prev) =>
        prev.map((t) =>
          t.id === editingId ? { ...t, ...form } : t
        )
      );
    } else {
      // crear
      const newTask = {
        id: Date.now(),
        ...form,
      };
      setTasks((prev) => [newTask, ...prev]);
    }

    // limpiar formulario
    setForm({
      title: "",
      description: "",
      status: "pendiente",
    });
    setEditingId(null);
  };

  const handleEdit = (task) => {
    setEditingId(task.id);
    setForm({
      title: task.title,
      description: task.description,
      status: task.status,
    });
  };

  const handleDelete = (id) => {
    if (!confirm("¿Eliminar esta tarea?")) return;
    setTasks((prev) => prev.filter((t) => t.id !== id));
    if (editingId === id) {
      setEditingId(null);
      setForm({
        title: "",
        description: "",
        status: "pendiente",
      });
    }
  };

  const handleLogout = () => {
    // por si estás guardando token
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* Header */}
      <header className="border-b border-slate-800 bg-slate-900/80 backdrop-blur-md">
        <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-xl font-semibold">
              Gestor de Tareas
            </h1>
            <p className="text-sm text-slate-400">
              Listado de tareas (mock local) con filtro y CRUD básico.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-sm text-slate-300">
              Usuario autenticado
            </span>
            <button
              onClick={handleLogout}
              className="text-sm px-3 py-1.5 rounded-full border border-slate-600 hover:bg-slate-800 transition"
            >
              Cerrar sesión
            </button>
          </div>
        </div>
      </header>

      {/* Contenido */}
      <main className="max-w-5xl mx-auto px-4 py-6 grid gap-6 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1.8fr)]">
        {/* Formulario */}
        <section className="bg-slate-900 rounded-2xl border border-slate-800 p-5">
          <h2 className="text-lg font-semibold mb-4">
            {editingId ? "Editar tarea" : "Nueva tarea"}
          </h2>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm mb-1">
                Título
              </label>
              <input
                type="text"
                name="title"
                value={form.title}
                onChange={handleChange}
                className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                placeholder="Ej. Implementar login"
                required
              />
            </div>

            <div>
              <label className="block text-sm mb-1">
                Descripción
              </label>
              <textarea
                name="description"
                value={form.description}
                onChange={handleChange}
                rows={3}
                className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                placeholder="Detalles de la tarea..."
              />
            </div>

            <div>
              <label className="block text-sm mb-1">
                Estado
              </label>
              <select
                name="status"
                value={form.status}
                onChange={handleChange}
                className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              >
                {statusOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex gap-3">
              <button
                type="submit"
                className="px-4 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-sm font-semibold"
              >
                {editingId ? "Guardar cambios" : "Crear tarea"}
              </button>

              {editingId && (
                <button
                  type="button"
                  onClick={() => {
                    setEditingId(null);
                    setForm({
                      title: "",
                      description: "",
                      status: "pendiente",
                    });
                  }}
                  className="px-4 py-2 rounded-lg border border-slate-600 text-sm hover:bg-slate-800"
                >
                  Cancelar edición
                </button>
              )}
            </div>
          </form>
        </section>

        {/* Listado + filtros */}
        <section className="bg-slate-900 rounded-2xl border border-slate-800 p-5">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-4">
            <h2 className="text-lg font-semibold">Mis tareas</h2>

            <div className="flex flex-wrap gap-2 text-sm">
              <button
                onClick={() => setFilter("todas")}
                className={`px-3 py-1.5 rounded-full border ${
                  filter === "todas"
                    ? "bg-emerald-500 border-emerald-500"
                    : "border-slate-700 hover:bg-slate-800"
                }`}
              >
                Todas
              </button>
              {statusOptions.map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => setFilter(opt.value)}
                  className={`px-3 py-1.5 rounded-full border ${
                    filter === opt.value
                      ? "bg-emerald-500 border-emerald-500"
                      : "border-slate-700 hover:bg-slate-800"
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          {filteredTasks.length === 0 ? (
            <p className="text-sm text-slate-400">
              No hay tareas para este filtro.
            </p>
          ) : (
            <ul className="space-y-3">
              {filteredTasks.map((task) => (
                <li
                  key={task.id}
                  className="border border-slate-800 rounded-xl p-4 bg-slate-950/60 flex flex-col gap-2"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="font-semibold">
                        {task.title}
                      </h3>
                      {task.description && (
                        <p className="text-sm text-slate-300 mt-1">
                          {task.description}
                        </p>
                      )}
                    </div>

                    <span
                      className={`text-xs px-2 py-1 rounded-full ${
                        task.status === "pendiente"
                          ? "bg-amber-500/20 text-amber-300 border border-amber-500/40"
                          : task.status === "en_progreso"
                          ? "bg-sky-500/20 text-sky-300 border border-sky-500/40"
                          : "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40"
                      }`}
                    >
                      {
                        statusOptions.find(
                          (s) => s.value === task.status
                        )?.label
                      }
                    </span>
                  </div>

                  <div className="flex gap-2 mt-2 text-sm">
                    <button
                      onClick={() => handleEdit(task)}
                      className="px-3 py-1 rounded-lg border border-slate-700 hover:bg-slate-800"
                    >
                      Editar
                    </button>
                    <button
                      onClick={() => handleDelete(task.id)}
                      className="px-3 py-1 rounded-lg bg-red-500/80 hover:bg-red-500"
                    >
                      Eliminar
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </section>
      </main>
    </div>
  );
}
