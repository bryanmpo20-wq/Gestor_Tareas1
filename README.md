# Gestor de Tareas – Full Stack

### *Laravel + React + React Native + Docker + MySQL*

<div align="center">

</div>

Proyecto desarrollado como parte de la  **Prueba Técnica Full Stack** , implementando un sistema completo de gestión de tareas con tres interfaces:

* **API Backend** en Laravel + Sanctum
* **Frontend Web** en React + Vite + TailwindCSS
* **App Móvil** en Expo / React Native
* **Base de datos** MySQL
* **Orquestado** con Docker Compose

---

# Índice

1. [Tecnologías Utilizadas]
2. [Arquitectura del Proyecto]
3. [Credenciales de Prueba]
4. [Instalación con Docker]
5. [Comandos útiles de Docker]
6. [Backend (Laravel)]
7. [Frontend Web (React)]
8. [Frontend Móvil (Expo--react-native)]
9. [Rutas de la API]
10. [Ejecutar sin Docker]
11. [Licencia]

---

# Tecnologías Utilizadas

### Backend

* Laravel 11
* PHP 8.2
* Sanctum
* MySQL 8
* Composer
* Docker

### Frontend Web

* React + Vite
* TailwindCSS
* Axios
* React Router

### Frontend Móvil

* Expo / React Native
* Axios
* Zustand
* SecureStore

---

# Arquitectura del Proyecto

<pre class="overflow-visible!" data-start="2130" data-end="2354"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre!"><span><span>proyecto/
├── backend/                   </span><span># API Laravel</span><span>
├── frontend/                  </span><span># React + Vite</span><span>
├── gestor-tareas-mobile/      </span><span># Expo / React Native</span><span>
└── docker/                    </span><span># Configuración de contenedores</span><span>
</span></span></code></div></div></pre>

### Servicios levantados

| Servicio                  | Puerto   | Descripción                 |
| ------------------------- | -------- | ---------------------------- |
| **Backend Laravel** | `8000` | API REST                     |
| **Frontend Web**    | `5173` | Interfaz React               |
| **MySQL**           | `3306` | Base de datos                |
| **Expo Mobile**     | QR       | Carga en dispositivo Android |

---

# Credenciales de Prueba

| Usuario                            | Contraseña         |
| ---------------------------------- | ------------------- |
| **[adminprueba@example.com]()** | **Admin123!** |

---

# Instalación con Docker

Desde la raíz del proyecto:

<pre class="overflow-visible!" data-start="2835" data-end="2895"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-bash"><span><span>docker compose down
docker compose up --build -d
</span></span></code></div></div></pre>

Esto iniciará:

* Backend → [http://localhost:8000](http://localhost:8000)
* Frontend → [http://localhost:5173](http://localhost:5173)
* MySQL
* Servicios listos para evaluación

---

# Comandos útiles de Docker

### Construir y levantar todo

<pre class="overflow-visible!" data-start="3105" data-end="3145"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-bash"><span><span>docker compose up -d --build
</span></span></code></div></div></pre>

### Construir solo el frontend

<pre class="overflow-visible!" data-start="3182" data-end="3223"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-bash"><span><span>docker compose build frontend
</span></span></code></div></div></pre>

### Levantar contenedores sin reconstruir

<pre class="overflow-visible!" data-start="3271" data-end="3303"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-bash"><span><span>docker compose up -d
</span></span></code></div></div></pre>

### Detener y eliminar contenedores

<pre class="overflow-visible!" data-start="3346" data-end="3377"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-bash"><span><span>docker compose down
</span></span></code></div></div></pre>

---

# Backend (Laravel)

## Variables de entorno (`backend/.env.docker`)

<pre class="overflow-visible!" data-start="3458" data-end="3670"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-env"><span>APP_NAME=GestorTareas
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
</span></code></div></div></pre>

### Generar APP_KEY

<pre class="overflow-visible!" data-start="3696" data-end="3770"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-bash"><span><span>docker </span><span>exec</span><span> -it gestor_tareas_backend php artisan key:generate
</span></span></code></div></div></pre>

### Migraciones + seeders

<pre class="overflow-visible!" data-start="3802" data-end="3878"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-bash"><span><span>docker </span><span>exec</span><span> -it gestor_tareas_backend php artisan migrate --seed
</span></span></code></div></div></pre>

---

# Frontend Web (React)

## Estructura

<pre class="overflow-visible!" data-start="3927" data-end="3979"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre!"><span><span>frontend/src/pages/
frontend/src/components/
</span></span></code></div></div></pre>

## Funcionalidades Implementadas

| Funcionalidad  | Estado |
| -------------- | ------ |
| Login / Logout | ✔     |
| Registro       | ✔     |
| CRUD de tareas | ✔     |
| Filtros        | ✔     |
| UI Responsive  | ✔     |
| Dockerfile     | ✔     |

## Dockerfile

<pre class="overflow-visible!" data-start="4204" data-end="4394"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-dockerfile"><span>FROM node:22-alpine
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
EXPOSE 5173
CMD ["npm", "run", "dev", "--", "--host", "--strictPort=false"]
</span></code></div></div></pre>

---

# Frontend Móvil (Expo / React Native)

### Estructura

<pre class="overflow-visible!" data-start="4460" data-end="4611"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre!"><span><span>gestor-tareas-mobile/
├── </span><span>src</span><span>/
│   ├── api/
│   ├── store/
│   ├── screens/
│   ├── navigation/
│   ├── components/
│   └── app</span><span>.json</span><span>
└── App</span><span>.js</span><span>
</span></span></code></div></div></pre>

### Autenticación móvil

✔ Token persistente (SecureStore)

✔ Estado global con Zustand

✔ Login real contra API

✔ Manejo de errores y loading

### Ejecutar la app móvil

Configurar backend:

`src/api/client.js`

<pre class="overflow-visible!" data-start="4829" data-end="4897"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-js"><span><span>export</span><span></span><span>const</span><span></span><span>API_BASE_URL</span><span> = </span><span>"http://TU_IP_LOCAL:8000/api"</span><span>;
</span></span></code></div></div></pre>

⚠ *El móvil NO puede usar localhost de la PC.*

Ejecutar:

<pre class="overflow-visible!" data-start="4958" data-end="4984"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-bash"><span><span>npx expo start
</span></span></code></div></div></pre>

---

# Rutas de la API

| Método | Ruta            | Descripción |
| ------- | --------------- | ------------ |
| POST    | /api/login      | Login        |
| POST    | /api/register   | Registro     |
| GET     | /api/tasks      | Listado      |
| POST    | /api/tasks      | Crear        |
| PUT     | /api/tasks/{id} | Editar       |
| DELETE  | /api/tasks/{id} | Eliminar     |

---

# Ejecutar sin Docker

## Backend

<pre class="overflow-visible!" data-start="5322" data-end="5452"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-bash"><span><span>cd</span><span> backend
composer install
</span><span>cp</span><span> .env.example .</span><span>env</span><span>
php artisan key:generate
php artisan migrate --seed
php artisan serve
</span></span></code></div></div></pre>

## Frontend Web

<pre class="overflow-visible!" data-start="5470" data-end="5517"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-bash"><span><span>cd</span><span> frontend
npm install
npm run dev
</span></span></code></div></div></pre>

## App Móvil

<pre class="overflow-visible!" data-start="5532" data-end="5594"><div class="contain-inline-size rounded-2xl relative bg-token-sidebar-surface-primary"><div class="sticky top-9"><div class="absolute end-0 bottom-0 flex h-9 items-center pe-2"><div class="bg-token-bg-elevated-secondary text-token-text-secondary flex items-center gap-4 rounded-sm px-2 font-sans text-xs"></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="whitespace-pre! language-bash"><span><span>cd</span><span> gestor-tareas-mobile

npm install
npx expo start
</span></span></code></div></div></pre>

---

# Licencia

Proyecto de prueba desarrollado para la  **Prueba Técnica Full Stack** .

# Nota personal

Debido al cierre de ciclo universitario y a la carga académica correspondiente, no fue posible implementar todas las funcionalidades adicionales y bonus solicitados en el documento original. Me habría gustado incluir más diseño, mejorar la arquitectura interna del sistema e incluso explorar la posibilidad de agregar microservicios; sin embargo, por falta de tiempo no fue viable extender el desarrollo más allá del alcance actual.

Aun así, el proyecto se entrega funcional en sus módulos principales.