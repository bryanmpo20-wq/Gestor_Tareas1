<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\API\StoreTaskRequest;
use App\Http\Requests\API\UpdateTaskRequest;
use App\Http\Resources\TaskResource;
use App\Services\TaskService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class TaskController extends Controller
{
    public function __construct(private TaskService $tasks)
    {
    }

    public function index(Request $request): JsonResponse
    {
        $user = $request->user();
        $status = $request->query('status');

        $tasks = $this->tasks->listForUser($user, $status);

        return response()->json([
            'success' => true,
            'message' => 'Lista de tareas',
            'data' => TaskResource::collection($tasks),
        ]);
    }

    public function store(StoreTaskRequest $request): JsonResponse
    {
        $user = $request->user();
        $task = $this->tasks->createForUser($user, $request->validated());

        return response()->json([
            'success' => true,
            'message' => 'Tarea creada correctamente',
            'data' => new TaskResource($task),
        ], 201);
    }

    public function show(Request $request, int $id): JsonResponse
    {
        $user = $request->user();
        $task = $this->tasks->getForUser($user, $id);

        return response()->json([
            'success' => true,
            'message' => 'Detalle de la tarea',
            'data' => new TaskResource($task),
        ]);
    }

    public function update(UpdateTaskRequest $request, int $id): JsonResponse
    {
        $user = $request->user();
        $task = $this->tasks->updateForUser($user, $id, $request->validated());

        return response()->json([
            'success' => true,
            'message' => 'Tarea actualizada correctamente',
            'data' => new TaskResource($task),
        ]);
    }

    public function destroy(Request $request, int $id): JsonResponse
    {
        $user = $request->user();
        $this->tasks->deleteForUser($user, $id);

        return response()->json([
            'success' => true,
            'message' => 'Tarea eliminada correctamente',
            'data' => null,
        ]);
    }
}
