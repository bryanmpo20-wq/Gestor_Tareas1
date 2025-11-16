<?php

namespace App\Services;

use App\Models\User;
use App\Repositories\Task\TaskRepositoryInterface;

class TaskService
{
    public function __construct(protected TaskRepositoryInterface $tasks)
    {
    }

    public function listForUser(User $user, ?string $status = null)
    {
        return $this->tasks->allForUser($user, $status);
    }

    public function createForUser(User $user, array $data)
    {
        return $this->tasks->createForUser($user, $data);
    }

    public function getForUser(User $user, int $id)
    {
        $task = $this->tasks->findForUser($user, $id);

        if (! $task) {
            abort(404, 'Task not found');
        }

        return $task;
    }

    public function updateForUser(User $user, int $id, array $data)
    {
        return $this->tasks->updateForUser($user, $id, $data);
    }

    public function deleteForUser(User $user, int $id): void
    {
        $this->tasks->deleteForUser($user, $id);
    }
}
