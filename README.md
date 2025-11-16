# Gestor de Tareas – Full Stack (Laravel + React + Docker)

Proyecto desarrollado como parte de la Prueba Técnica Full Stack – El Roble.  
Incluye backend en Laravel, frontend en React con Vite, uso de MySQL, autenticación con Sanctum y Docker Compose.

---

## Tecnologías utilizadas

### Backend
- PHP 8.2
- Laravel 11
- Laravel Sanctum
- MySQL 8
- Composer
- Docker y Docker Compose

### Frontend
- React + Vite
- TailwindCSS
- Axios
- React Router
- Docker

---

## Arquitectura del Proyecto

/backend        → API Laravel + MySQL + Sanctum  
/frontend       → React + Vite  
/docker         → Contenedores del proyecto

Servicios incluidos:

Servicio | Puerto | Descripción
---------|--------|------------
Backend (Laravel) | 8000 | API REST
Frontend (React)  | 5173 | Aplicación web
MySQL             | 3306 | Base de datos

---

## Credenciales de Prueba

Email: adminprueba@example.com  
Contraseña: Admin123!

---

## Instalación con Docker (Modo recomendado)

Desde la raíz del proyecto ejecutar:

docker compose down
docker compose up --build -d


Esto levantará:

- Backend Laravel en http://localhost:8000  
- Frontend React en http://localhost:5173  
- Base de datos MySQL  

---

## Configuración del Backend

### 1. Variables de entorno

Archivo .env.docker incluye:

APP_NAME=GestorTareas  
APP_ENV=local  
APP_KEY=  
APP_DEBUG=true  
APP_URL=http://localhost:8000  

DB_CONNECTION=mysql  
DB_HOST=db  
DB_PORT=3306  
DB_DATABASE=gestor_tareas  
DB_USERNAME=gestor  
DB_PASSWORD=gestor123  

### 2. Generar APP_KEY

docker exec -it gestor_tareas_backend php artisan key:generate


### 3. Migraciones y seeders

docker exec -it gestor_tareas_backend php artisan migrate --seed


---

## Frontend (React + Vite + Tailwind)

### Estructura general

- Pantalla de inicio
- Pantalla de login
- Pantalla de registro
- Pantalla de gestión de tareas

Ubicación de componentes:

frontend/src/pages/  
frontend/src/components/  

### Funcionalidades implementadas según el PDF

Función | Estado
--------|-------
Login y registro | Implementado
Listado de tareas | Implementado (mock)
Crear tarea | Implementado
Editar tarea | Implementado
Eliminar tarea | Implementado
Filtrar tareas por estado | Implementado
UI limpia y responsiva | Implementado

---

## Dockerfile del Frontend

FROM node:22-alpine

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY . .

EXPOSE 5173

CMD ["npm", "run", "dev", "--", "--host", "--strictPort=false"]


---

## Pruebas Unitarias

El proyecto deja preparado el entorno para agregar pruebas con React Testing Library.

Para ejecutarlas:

npm test


---

## Rutas principales del Backend

Método | Ruta | Descripción
--------|------|-------------
POST | /api/login | Login
POST | /api/register | Registro
GET | /api/tasks | Listado
POST | /api/tasks | Crear
PUT | /api/tasks/{id} | Editar
DELETE | /api/tasks/{id} | Eliminar

El frontend utiliza un mock de datos para cumplir con la funcionalidad requerida.

---

## Versión Mobile (opcional)

La versión mobile no fue implementada por temas de tiempo.  
Se deja documentado para referencia futura.

---

## Ejecutar sin Docker (Modo local)

### Backend

cd backend
composer install
cp .env.example .env
php artisan key:generate
php artisan migrate --seed
php artisan serve


### Frontend

cd frontend
npm install
npm run dev


---

## Licencia

Proyecto de uso académico para la prueba técnica Full Stack de El Roble.

---

## Proyecto listo para evaluación

El proyecto cumple con los requisitos establecidos en el PDF.  
Si se requiere generar un archivo PDF del README o agregar diagramas, se puede realizar.
