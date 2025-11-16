import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth.js';
import { useUi } from '../hooks/useUi.js';
import {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
} from '../services/taskService.js';

const STATUS_FILTERS = [
  { value: 'all', label: 'Todas' },
  { value: 'pendiente', label: 'Pendientes' },
  { value: 'en_progreso', label: 'En progreso' },
  { value: 'completada', label: 'Completadas' },
];

const STATUS_LABELS = {
  pendiente: 'Pendiente',
  en_progreso: 'En progreso',
  completada: 'Completada',
};

const STATUS_BADGE_CLASSES = {
  pendiente: 'bg-yellow-100 text-yellow-800 border-yellow-200',
  en_progreso: 'bg-blue-100 text-blue-800 border-blue-200',
  completada: 'bg-green-100 text-green-800 border-green-200',
};

export default function TasksPage() {
  const { logout } = useAuth();
  const { startLoading, stopLoading } = useUi();
  const navigate = useNavigate();

  const [tasks, setTasks] = useState([]);
  const [statusFilter, setStatusFilter] = useState('all');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('pendiente');
  const [error, setError] = useState('');

  const loadTasks = async (filter = statusFilter) => {
    startLoading();
    setError('');

    try {
      const params = {};
      if (filter !== 'all') {
        params.status = filter;
      }

      const response = await getTasks(params);
      const result = response.data;
      setTasks(Array.isArray(result) ? result : []);
    } catch (err) {
      console.error('Error al cargar tareas', err);
      const apiMessage = err?.response?.data?.message;
      setError(apiMessage || 'No se pudieron cargar las tareas.');
    } finally {
      stopLoading();
    }
  };

  const handleEditTitle = async (task) => {
    const currentTitle = task.title ?? '';
    const newTitle = window.prompt('Nuevo título de la tarea:', currentTitle);

    if (newTitle == null) {
      return;
    }

    const trimmed = newTitle.trim();
    if (!trimmed || trimmed === currentTitle) {
      return;
    }

    startLoading();
    setError('');

    try {
      const response = await updateTask(task.id, { title: trimmed });
      const updatedTask = response.data;

      setTasks((prev) =>
        prev.map((t) =>
          t.id === task.id ? updatedTask ?? { ...t, title: trimmed } : t,
        ),
      );
    } catch (err) {
      console.error('Error al actualizar título de tarea', err);
      const apiMessage = err?.response?.data?.message;
      setError(apiMessage || 'No se pudo actualizar el título de la tarea.');
    } finally {
      stopLoading();
    }
  };

  useEffect(() => {
    loadTasks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleCreateTask = async (event) => {
    event.preventDefault();

    if (!title.trim()) {
      setError('El título es obligatorio.');
      return;
    }

    startLoading();
    setError('');

    try {
      const payload = {
        title: title.trim(),
        description: description.trim() || null,
        status,
      };

      const response = await createTask(payload);
      const newTask = response.data;

      if (!newTask) {
        await loadTasks('all');
      } else {
        setTasks((prev) => [newTask, ...prev]);
      }

      setTitle('');
      setDescription('');
      setStatus('pendiente');
    } catch (err) {
      console.error('Error al crear tarea', err);
      const apiMessage = err?.response?.data?.message;
      setError(apiMessage || 'No se pudo crear la tarea.');
    } finally {
      stopLoading();
    }
  };

  const handleChangeStatus = async (taskId, newStatus) => {
    startLoading();
    setError('');

    try {
      const response = await updateTask(taskId, { status: newStatus });
      const updatedTask = response.data;

      setTasks((prev) =>
        prev.map((task) =>
          task.id === taskId
            ? updatedTask ?? { ...task, status: newStatus }
            : task,
        ),
      );
    } catch (err) {
      console.error('Error al actualizar estado de tarea', err);
      const apiMessage = err?.response?.data?.message;
      setError(apiMessage || 'No se pudo actualizar la tarea.');
    } finally {
      stopLoading();
    }
  };

  const handleDeleteTask = async (taskId) => {
    startLoading();
    setError('');

    try {
      await deleteTask(taskId);
      setTasks((prev) => prev.filter((task) => task.id !== taskId));
    } catch (err) {
      console.error('Error al eliminar tarea', err);
      const apiMessage = err?.response?.data?.message;
      setError(apiMessage || 'No se pudo eliminar la tarea.');
    } finally {
      stopLoading();
    }
  };

  const handleChangeFilter = (value) => {
    setStatusFilter(value);
    loadTasks(value);
  };

  const handleLogout = () => {
    logout();
    navigate('/login', { replace: true });
  };

  return (
    <div className="min-h-screen bg-slate-100">
      <header className="border-b bg-white">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-4 py-3">
          <h1 className="text-lg font-semibold text-slate-900">
            Gestor de Tareas
          </h1>
          <button
            type="button"
            onClick={handleLogout}
            className="inline-flex items-center rounded border border-slate-300 bg-white px-3 py-1.5 text-sm font-medium text-slate-700 shadow-sm hover:bg-slate-50"
          >
            Cerrar sesión
          </button>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-4 py-6 space-y-6">
        <section className="bg-white rounded shadow-sm p-4">
          <h2 className="text-base font-semibold text-slate-900 mb-4">
            Nueva tarea
          </h2>

          {error && (
            <div className="mb-4 rounded border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">
              {error}
            </div>
          )}

          <form onSubmit={handleCreateTask} className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-slate-700 mb-1" htmlFor="title">
                  Título
                </label>
                <input
                  id="title"
                  type="text"
                  className="w-full rounded border border-slate-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-slate-700 mb-1" htmlFor="description">
                  Descripción
                </label>
                <textarea
                  id="description"
                  className="w-full rounded border border-slate-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  rows={3}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1" htmlFor="status">
                  Estado
                </label>
                <select
                  id="status"
                  className="w-full rounded border border-slate-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                >
                  <option value="pendiente">Pendiente</option>
                  <option value="en_progreso">En progreso</option>
                  <option value="completada">Completada</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              className="inline-flex items-center rounded bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700"
            >
              Crear tarea
            </button>
          </form>
        </section>

        <section className="bg-white rounded shadow-sm p-4">
          <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
            <h2 className="text-base font-semibold text-slate-900">
              Tareas
            </h2>
            <div className="flex flex-wrap gap-2">
              {STATUS_FILTERS.map((filter) => (
                <button
                  key={filter.value}
                  type="button"
                  onClick={() => handleChangeFilter(filter.value)}
                  className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium ${
                    statusFilter === filter.value
                      ? 'border-blue-600 bg-blue-50 text-blue-700'
                      : 'border-slate-300 bg-white text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>

          {tasks.length === 0 ? (
            <p className="text-sm text-slate-500">
              No hay tareas para mostrar.
            </p>
          ) : (
            <ul className="space-y-3">
              {tasks.map((task) => (
                <li
                  key={task.id}
                  className="rounded border border-slate-200 bg-white px-3 py-2 flex items-start justify-between gap-3"
                >
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-sm font-semibold text-slate-900">
                        {task.title}
                      </h3>
                      <span
                        className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium ${
                          STATUS_BADGE_CLASSES[task.status] || 'border-slate-200 bg-slate-50 text-slate-700'
                        }`}
                      >
                        {STATUS_LABELS[task.status] || task.status}
                      </span>
                    </div>
                    {task.description && (
                      <p className="text-xs text-slate-600">
                        {task.description}
                      </p>
                    )}
                  </div>

                  <div className="flex flex-col items-end gap-2">
                    <select
                      className="rounded border border-slate-300 px-2 py-1 text-xs focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                      value={task.status}
                      onChange={(e) => handleChangeStatus(task.id, e.target.value)}
                    >
                      <option value="pendiente">Pendiente</option>
                      <option value="en_progreso">En progreso</option>
                      <option value="completada">Completada</option>
                    </select>

                    <button
                      type="button"
                      onClick={() => handleEditTitle(task)}
                      className="inline-flex items-center rounded border border-slate-300 bg-white px-2 py-1 text-xs font-medium text-slate-700 hover:bg-slate-50"
                    >
                      Editar título
                    </button>

                    <button
                      type="button"
                      onClick={() => handleDeleteTask(task.id)}
                      className="inline-flex items-center rounded border border-red-300 bg-red-50 px-2 py-1 text-xs font-medium text-red-700 hover:bg-red-100"
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
