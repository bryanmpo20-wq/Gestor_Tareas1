<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class ApiAuthSanctum
{
    public function handle(Request $request, Closure $next): mixed
    {
        $user = auth('sanctum')->user();

        if (! $user) {
            return response()->json([
                'message' => 'Unauthenticated',
            ], 401);
        }

        return $next($request);
    }
}
