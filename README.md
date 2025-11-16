# 🚀 Gestor de Tareas – Full Stack

[https://img.shields.io/badge/Laravel-11-FF2D20?style=for-the-badge&amp;logo=laravel](https://img.shields.io/badge/Laravel-11-FF2D20?style=for-the-badge&logo=laravel)

[https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&amp;logo=react](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react)

[https://img.shields.io/badge/Expo-50-000020?style=for-the-badge&amp;logo=expo](https://img.shields.io/badge/Expo-50-000020?style=for-the-badge&logo=expo)

[https://img.shields.io/badge/Docker-24-2496ED?style=for-the-badge&amp;logo=docker](https://img.shields.io/badge/Docker-24-2496ED?style=for-the-badge&logo=docker)
[https://img.shields.io/badge/MySQL-8-4479A1?style=for-the-badge&amp;logo=mysql](https://img.shields.io/badge/MySQL-8-4479A1?style=for-the-badge&logo=mysql)

## 📍 Información del Proyecto

**Repositorio:** [https://github.com/bryanmpo20-wq/Gestor_Tareas1.git](https://github.com/bryanmpo20-wq/Gestor_Tareas1.git)
**Desarrollador:** Bryan Manuel Pineda Orozco
**Email:** bryanmpo20@gmail.com

**Sistema de gestión de tareas** desarrollado como parte de la  **Prueba Técnica Full Stack - BlueMedical
Incluye backend robusto, interfaz web moderna y aplicación móvil nativa.**

---

## 📋 Tabla de Contenidos

* [✨ Características Principales]()
* [🏗️ Arquitectura del Sistema]()
* [🛠️ Stack Tecnológico]()
* [🚀 Instalación Rápida]()
* [📱 Demo y Acceso]()
* [🔧 Configuración Detallada]()
* [📚 Documentación de la API]()
* [🎯 Funcionalidades por Módulo]()
* [🤝 Contribución]()
* [📄 Licencia]()

---

## ✨ Características Principales

### 🔐 **Sistema de Autenticación Avanzado**

* ✅ **Registro seguro** de usuarios con validación
* ✅ **Login con tokens JWT** mediante Laravel Sanctum
* ✅ **Sesiones persistentes** en web y móvil
* ✅ **Protección de rutas** y middlewares
* ✅ **Logout seguro** con invalidación de tokens

### 📝 **Gestión Completa de Tareas**

* ✅ **CRUD completo** (Crear, Leer, Actualizar, Eliminar)
* ✅ **Filtros avanzados** por estado, prioridad y fecha
* ✅ **Búsqueda en tiempo real** en listas de tareas
* ✅ **Marcado de completado** con actualización instantánea
* ✅ **Prioridades visuales** (Alta, Media, Baja)

### 📱 **Experiencia Multiplataforma**

* ✅ **Web Responsive** con TailwindCSS
* ✅ **App Móvil Nativa** con React Native
* ✅ **Sincronización en tiempo real** entre plataformas
* ✅ **Interfaz adaptativa** para diferentes dispositivos

### 🛡️ **Seguridad y Rendimiento**

* ✅ **API RESTful** con validación de datos
* ✅ **Protección CORS** configurada
* ✅ **Almacenamiento seguro** de tokens
* ✅ **Optimización de consultas** a la base de datos

---

## 🏗️ Arquitectura del Sistema

### 📁 Estructura del Proyecto

**text**

```
Gestor_Tareas1/
├── 🐘 backend/                 # API Laravel + MySQL + Sanctum
│   ├── app/
│   ├── database/
│   ├── routes/
│   └── tests/
├── 🌐 frontend/                # React + Vite + Tailwind
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── hooks/
├── 📱 gestor-tareas-mobile/    # Expo + React Native
│   ├── src/
│   │   ├── api/
│   │   ├── store/
│   │   ├── screens/
│   │   ├── components/
│   │   └── navigation/
└── 🐳 docker/                  # Configuración de contenedores
    ├── docker-compose.yml
    └── configs/
```

---

## 🛠️ Stack Tecnológico

### 🔧 **Backend**

| Tecnología                                                                                                                   | Versión | Propósito             |
| ----------------------------------------------------------------------------------------------------------------------------- | -------- | ---------------------- |
| [https://img.shields.io/badge/PHP-8.2-777BB4?logo=php](https://img.shields.io/badge/PHP-8.2-777BB4?logo=php)                     | 8.2      | Lenguaje del servidor  |
| [https://img.shields.io/badge/Laravel-11-FF2D20?logo=laravel](https://img.shields.io/badge/Laravel-11-FF2D20?logo=laravel)       | 11       | Framework PHP          |
| [https://img.shields.io/badge/Sanctum-3.2-FF2D20?logo=laravel](https://img.shields.io/badge/Sanctum-3.2-FF2D20?logo=laravel)     | 3.2      | Autenticación API     |
| [https://img.shields.io/badge/MySQL-8-4479A1?logo=mysql](https://img.shields.io/badge/MySQL-8-4479A1?logo=mysql)                 | 8.0      | Base de datos          |
| [https://img.shields.io/badge/Composer-2.5-885630?logo=composer](https://img.shields.io/badge/Composer-2.5-885630?logo=composer) | 2.5      | Gestor de dependencias |

### 🎨 **Frontend Web**

| Tecnología                                                                                                                                 | Versión | Propósito    |
| ------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------------- |
| [https://img.shields.io/badge/React-18-61DAFB?logo=react](https://img.shields.io/badge/React-18-61DAFB?logo=react)                             | 18       | Biblioteca UI |
| [https://img.shields.io/badge/Vite-5.0-646CFF?logo=vite](https://img.shields.io/badge/Vite-5.0-646CFF?logo=vite)                               | 5.0      | Build tool    |
| [https://img.shields.io/badge/Tailwind-3.4-06B6D4?logo=tailwindcss](https://img.shields.io/badge/Tailwind-3.4-06B6D4?logo=tailwindcss)         | 3.4      | Framework CSS |
| [https://img.shields.io/badge/Axios-1.6-5A29E4?logo=axios](https://img.shields.io/badge/Axios-1.6-5A29E4?logo=axios)                           | 1.6      | Cliente HTTP  |
| [https://img.shields.io/badge/React_Router-6.8-CA4245?logo=reactrouter](https://img.shields.io/badge/React_Router-6.8-CA4245?logo=reactrouter) | 6.8      | Navegación   |

### 📱 **Frontend Móvil**

| Tecnología                                                                                                                       | Versión | Propósito              |
| --------------------------------------------------------------------------------------------------------------------------------- | -------- | ----------------------- |
| [https://img.shields.io/badge/Expo-50-000020?logo=expo](https://img.shields.io/badge/Expo-50-000020?logo=expo)                       | 50       | Plataforma React Native |
| [https://img.shields.io/badge/React_Native-0.73-61DAFB?logo=react](https://img.shields.io/badge/React_Native-0.73-61DAFB?logo=react) | 0.73     | Framework móvil        |
| [https://img.shields.io/badge/Zustand-4.4-6140EF](https://img.shields.io/badge/Zustand-4.4-6140EF)                                   | 4.4      | Gestión de estado      |
| [https://img.shields.io/badge/React_Navigation-6.0-61DAFB](https://img.shields.io/badge/React_Navigation-6.0-61DAFB)                 | 6.0      | Navegación móvil      |
| [https://img.shields.io/badge/SecureStore-12.0-000020](https://img.shields.io/badge/SecureStore-12.0-000020)                         | 12.0     | Almacenamiento seguro   |

### 🐳 **Infraestructura**

| Tecnología                                                                                                                           | Versión | Propósito    |
| ------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------------- |
| [https://img.shields.io/badge/Docker-24.0-2496ED?logo=docker](https://img.shields.io/badge/Docker-24.0-2496ED?logo=docker)               | 24.0     | Contenedores  |
| [https://img.shields.io/badge/Docker_Compose-2.0-2496ED?logo=docker](https://img.shields.io/badge/Docker_Compose-2.0-2496ED?logo=docker) | 2.0      | Orquestación |

---

## 🚀 Instalación Rápida

### 📥 Clonar el Repositorio

**bash**

```
git clone https://github.com/bryanmpo20-wq/Gestor_Tareas1.git
cd Gestor_Tareas1
```

### 🐳 Ejecutar con Docker (Recomendado)

**bash**

```
# Levantar todos los servicios
docker compose down
docker compose up --build -d

# Verificar que todos los servicios estén corriendo
docker ps
```

### ⏱️ Tiempos de Inicio

| Servicio           | Puerto | Tiempo Aproximado | Estado     |
| ------------------ | ------ | ----------------- | ---------- |
| 🐘 MySQL Database  | 3306   | 10-15 segundos    | ✅ Estable |
| 🚀 Backend Laravel | 8000   | 20-30 segundos    | ✅ Listo   |
| 🌐 Frontend React  | 5173   | 10-20 segundos    | ✅ Activo  |

---

## 📱 Demo y Acceso

### 🌐 **Frontend Web**

**URL:** [http://localhost:5173](http://localhost:5173/)
**Credenciales de prueba:**

* 📧 **Email:** `adminprueba@example.com`
* 🔑 **Contraseña:** `Admin123!`

### 🚀 **Backend API**

**URL Base:** [http://localhost:8000](http://localhost:8000/)
**Documentación API:** [http://localhost:8000/api/documentation](http://localhost:8000/api/documentation)

### 📲 **Aplicación Móvil**

1. **Instalar Expo Go** en tu dispositivo móvil
2. **Ejecutar:** `cd gestor-tareas-mobile && npx expo start`
3. **Escanear el código QR** con la app Expo Go
4. **Configurar IP** del backend en `src/api/client.js`

---

## 🔧 Configuración Detallada

### 🐘 Configuración del Backend

**bash**

```
# Acceder al contenedor del backend
docker exec -it gestor_tareas_backend bash

# Generar clave de aplicación
php artisan key:generate

# Ejecutar migraciones y seeders
php artisan migrate --seed

# Ejecutar tests
php artisan test
```

### 🔑 Variables de Entorno Críticas

**env**

```
# Backend (.env)
APP_NAME=GestorTareas
APP_ENV=local
APP_KEY=base64:your_generated_key_here
APP_URL=http://localhost:8000

DB_CONNECTION=mysql
DB_HOST=db
DB_PORT=3306
DB_DATABASE=gestor_tareas
DB_USERNAME=gestor
DB_PASSWORD=gestor123

# Frontend Móvil (src/api/client.js)
export const API_BASE_URL = "http://TU_IP_LOCAL:8000/api";
```

---

## 📚 Documentación de la API

### 🔐 Endpoints de Autenticación

| Método  | Endpoint          | Descripción           | Parámetros                       |
| -------- | ----------------- | ---------------------- | --------------------------------- |
| `POST` | `/api/login`    | Iniciar sesión        | `email`, `password`           |
| `POST` | `/api/register` | Registrar usuario      | `name`, `email`, `password` |
| `POST` | `/api/logout`   | Cerrar sesión         | `token`                         |
| `GET`  | `/api/user`     | Obtener usuario actual | `token`                         |

### 📝 Endpoints de Tareas

| Método    | Endpoint                     | Descripción           | Parámetros                                            |
| ---------- | ---------------------------- | ---------------------- | ------------------------------------------------------ |
| `GET`    | `/api/tasks`               | Listar tareas          | `filters`                                            |
| `POST`   | `/api/tasks`               | Crear tarea            | `title`, `description`, `due_date`, `priority` |
| `PUT`    | `/api/tasks/{id}`          | Actualizar tarea       | `task_data`                                          |
| `DELETE` | `/api/tasks/{id}`          | Eliminar tarea         | `id`                                                 |
| `PATCH`  | `/api/tasks/{id}/complete` | Marcar como completada | `id`                                                 |

### 🔗 Ejemplos de Uso

**javascript**

```
// Login de usuario
const response = await fetch('http://localhost:8000/api/login', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
    body: JSON.stringify({
        email: 'adminprueba@example.com',
        password: 'Admin123!'
    })
});

// Obtener tareas con filtro
const tasks = await fetch('http://localhost:8000/api/tasks?filter=completed', {
    headers: {
        'Authorization': `Bearer ${token}`,
        'Accept': 'application/json'
    }
});
```

---

## 🎯 Funcionalidades por Módulo

### 🌐 **Frontend Web (React)**

| Funcionalidad              | Estado     | Características                   |
| -------------------------- | ---------- | ---------------------------------- |
| ✅**Autenticación** | Completado | Login, registro, logout protegido  |
| ✅**Dashboard**      | Completado | Vista general de tareas            |
| ✅**CRUD Tareas**    | Completado | Crear, editar, eliminar, listar    |
| ✅**Filtros**        | Completado | Por estado, prioridad, fecha       |
| ✅**UI/UX**          | Completado | Responsive, TailwindCSS, dark mode |
| ✅**Validaciones**   | Completado | Formularios con feedback           |

### 📱 **Frontend Móvil (React Native)**

| Funcionalidad               | Estado     | Características       |
| --------------------------- | ---------- | ---------------------- |
| ✅**Autenticación**  | Completado | Login con SecureStore  |
| ✅**Gestión Estado** | Completado | Zustand stores         |
| ✅**Navegación**     | Completado | Stack y Tab navigation |
| ✅**CRUD Tareas**     | Completado | Operaciones completas  |
| ✅**Sincronización** | Completado | API real-time          |
| ✅**Offline Ready**   | Parcial    | Cache básico          |

### 🚀 **Backend (Laravel)**

| Funcionalidad              | Estado     | Características       |
| -------------------------- | ---------- | ---------------------- |
| ✅**API REST**       | Completado | Endpoints documentados |
| ✅**Autenticación** | Completado | Sanctum tokens         |
| ✅**Base de Datos**  | Completado | Migraciones, seeders   |
| ✅**Validaciones**   | Completado | Request validation     |
| ✅**Seguridad**      | Completado | CORS, middlewares      |
| ✅**Testing**        | Básico    | Tests unitarios        |

---

## 🤝 Contribución

### 📝 ¿Cómo Contribuir?

1. **Fork** el proyecto
2. **Crea una rama** para tu feature (`git checkout -b feature/AmazingFeature`)
3. **Commit** tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. **Push** a la rama (`git push origin feature/AmazingFeature`)
5. **Abre un Pull Request**

### 🐛 Reportar Issues

Si encuentras algún bug o tienes una sugerencia:

1. Ve a la sección [Issues](https://github.com/bryanmpo20-wq/Gestor_Tareas1/issues)
2. Revisa si el issue ya existe
3. Crea un nuevo issue con la plantilla correspondiente

### 📋 Estándares de Código

* **PHP:** Seguir PSR-12
* **JavaScript:** Usar ESLint y Prettier
* **Commits:** Convencional Commits
* **Documentación:** Mantener actualizado el README

---

## 📄 Licencia

Este proyecto fue desarrollado como parte de la  **Prueba Técnica Full Stack – El Roble** .

### 📊 Estado del Proyecto

[https://img.shields.io/badge/Estado-Completado-success](https://img.shields.io/badge/Estado-Completado-success)
[https://img.shields.io/badge/Versi%C3%B3n-1.0.0-blue](https://img.shields.io/badge/Versi%C3%B3n-1.0.0-blue)
[https://img.shields.io/badge/Actualizado-Diciembre%25202023-informational](https://img.shields.io/badge/Actualizado-Diciembre%25202023-informational)

### 👨‍💻 Desarrollador

**Bryan Manuel Pineda Orozco**
📧 bryanmpo20@gmail.com
🔗 [GitHub](https://github.com/bryanmpo20-wq)
💼 [Portfolio](https://bryanpineda.dev/) *[Próximamente]*

---

## 🎉 ¡Gracias por revisar este proyecto!

Si tienes alguna pregunta o feedback, no dudes en contactarme. Estaré encantado de responder cualquier consulta sobre el desarrollo, arquitectura o implementación de este sistema full stack.

---

<div align="center">**¿Te gustó el proyecto? ¡Dale una ⭐ en GitHub!**

[](https://github.com/bryanmpo20-wq/Gestor_Tareas1/stargazers)[https://img.shields.io/github/stars/bryanmpo20-wq/Gestor_Tareas1?style=social](https://img.shields.io/github/stars/bryanmpo20-wq/Gestor_Tareas1?style=social)

</div>
