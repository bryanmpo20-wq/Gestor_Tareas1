<?php

namespace App\Repositories\Task;

use App\Models\Task;
use App\Models\User;
use Illuminate\Database\Eloquent\Collection;

class TaskRepository implements TaskRepositoryInterface
{
    public function allForUser(User $user, ?string $status = null): Collection
    {
        $query = Task::query()->where('user_id', $user->id);

        if ($status !== null) {
            $query->where('status', $status);
        }

        return $query->orderByDesc('created_at')->get();
    }

    public function findForUser(User $user, int $id): ?Task
    {
        return Task::where('user_id', $user->id)
            ->where('id', $id)
            ->first();
    }

    public function createForUser(User $user, array $data): Task
    {
        $data['user_id'] = $user->id;

        return Task::create($data);
    }

    public function updateForUser(User $user, int $id, array $data): Task
    {
        $task = $this->findForUser($user, $id);

        if (! $task) {
            abort(404, 'Task not found');
        }

        $task->update($data);

        return $task;
    }

    public function deleteForUser(User $user, int $id): void
    {
        $task = $this->findForUser($user, $id);

        if (! $task) {
            abort(404, 'Task not found');
        }

        $task->delete();
    }
}
