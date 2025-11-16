<?php

use Illuminate\Foundation\Application;
use Illuminate\Foundation\Configuration\Exceptions;
use Illuminate\Foundation\Configuration\Middleware;
use Illuminate\Http\Middleware\HandleCors;
use Illuminate\Routing\Middleware\SubstituteBindings;
use App\Providers\RepositoryServiceProvider;
// 👉 IMPORTA también tu middleware custom si existe
use App\Http\Middleware\SanctumApiMiddleware; // o el nombre que tengas

return Application::configure(basePath: dirname(__DIR__))
    ->withRouting(
        web: __DIR__.'/../routes/web.php',
        api: __DIR__.'/../routes/api.php',
        commands: __DIR__.'/../routes/console.php',
        health: '/up',
    )
    ->withMiddleware(function (Middleware $middleware): void {
        // Grupo API (esto ya lo tenías)
        $middleware->group('api', [
            HandleCors::class,
            SubstituteBindings::class,
        ]);

        // ✅ REGISTRO CORRECTO DEL ALIAS (EN ARRAY)
        $middleware->alias([
            'auth.sanctum.api' => SanctumApiMiddleware::class,
            // si el nombre de tu clase es otro, úsalo aquí:
            // 'auth.sanctum.api' => \App\Http\Middleware\NombreQueTengas::class,
        ]);
    })
    ->withProviders([
        RepositoryServiceProvider::class,
    ])
    ->withExceptions(function (Exceptions $exceptions): void {
        //
    })->create();
