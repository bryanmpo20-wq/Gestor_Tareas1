<?php

return [

    'paths' => ['api/*', 'sanctum/csrf-cookie'],

    'allowed_methods' => ['*'],

    // Orígenes permitidos: tus frontends Vite
    'allowed_origins' => [
        'http://localhost:5173',
        'http://localhost:5174',
    ],

    'allowed_origins_patterns' => [],

    'allowed_headers' => ['*'],

    'exposed_headers' => [],

    'max_age' => 0,

    // No necesitamos cookies, usamos Bearer token, así que false está bien
    'supports_credentials' => false,
];
