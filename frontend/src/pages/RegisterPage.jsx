// src/pages/RegisterPage.jsx
import { useState } from "react";
import { Link } from "react-router-dom";

export default function RegisterPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí luego conectamos al backend (/api/register)
    console.log("Registrando usuario:", form);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900">
      <div className="w-full max-w-md bg-slate-800 rounded-2xl shadow-lg p-8 text-white">
        <h1 className="text-2xl font-bold mb-6 text-center">
          Crear cuenta
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm mb-1">Nombre</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Correo</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Contraseña</label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm mb-1">
              Confirmar contraseña
            </label>
            <input
              type="password"
              name="password_confirmation"
              value={form.password_confirmation}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 mt-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 font-semibold"
          >
            Registrarme
          </button>
        </form>

        <p className="text-sm text-center mt-4 text-slate-300">
          ¿Ya tienes cuenta?{" "}
          <Link
            to="/login"
            className="text-emerald-400 hover:underline"
          >
            Inicia sesión
          </Link>
        </p>
      </div>
    </div>
  );
}
