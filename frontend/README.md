# Frontend Gestor de Tareas

Frontend construido con React + Vite + TailwindCSS para el proyecto **Gestor de Tareas**.

## Requisitos previos

- Node.js 18+ (recomendado 20+)

## Instalar dependencias

```bash
cd frontend
npm install
```

## Ejecutar en desarrollo

```bash
cd frontend
npm run dev
```

Por defecto estará disponible en:

- http://localhost:5173

## Mock API (json-server)

Este frontend ahora depende de una API falsa basada en `json-server`:

- URL base: `http://localhost:3001`
- Endpoint de tareas: `http://localhost:3001/tasks`

Para arrancar la mock API:

```bash
cd frontend
npm run mock-api
```

En paralelo, levanta el frontend con:

```bash
cd frontend
npm run dev
```

Con ambos comandos corriendo podrás:

- Abrir el login en `http://localhost:5173`.
- Iniciar sesión con cualquier email/contraseña no vacíos (login 100% simulado en frontend).
- Ser redirigido a la pantalla de tareas.
- Ver, crear, editar y eliminar tareas contra `http://localhost:3001/tasks`.

## Ejecutar con Docker

Desde la raíz del repositorio:

```bash
docker build -t gestor_tareas_frontend ./frontend
docker run --rm -it -p 5173:5173 gestor_tareas_frontend
```

Luego abre:

- http://localhost:5173
