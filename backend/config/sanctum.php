<?php

return [
    // API-only: no SPA stateful domains, usamos exclusivamente tokens Bearer
    'stateful' => [],

    // Usar el guard "sanctum" definido en config/auth.php
    'guard' => ['sanctum'],

    // Sin expiración por ahora (se puede ajustar según la política de seguridad)
    'expiration' => null,

    'token_prefix' => env('SANCTUM_TOKEN_PREFIX', ''),

    // En modo API-only no necesitamos middleware de sesión/cookies/CSRF
    'middleware' => [],
];
