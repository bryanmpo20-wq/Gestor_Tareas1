<?php

namespace App\Exceptions;

use App\Support\ApiResponse;
use Illuminate\Auth\AuthenticationException;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;
use Illuminate\Validation\ValidationException;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Throwable;

class Handler extends ExceptionHandler
{
    public function register(): void
    {
        // Mantener el comportamiento por defecto de Laravel 12.
    }

    public function render($request, Throwable $e)
    {
        if (! $request->expectsJson() && ! str_starts_with($request->path(), 'api/')) {
            return parent::render($request, $e);
        }

        if ($e instanceof ValidationException) {
            return ApiResponse::error('Validation error', 422, $e->errors());
        }

        if ($e instanceof AuthenticationException) {
            return ApiResponse::error('Unauthenticated.', 401);
        }

        if ($e instanceof ModelNotFoundException || $e instanceof NotFoundHttpException) {
            return ApiResponse::error('Resource not found.', 404);
        }

        return ApiResponse::error('Internal server error.', 500);
    }
}
