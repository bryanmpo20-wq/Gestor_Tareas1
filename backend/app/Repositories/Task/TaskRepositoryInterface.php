<?php

namespace App\Repositories\Task;

use App\Models\Task;
use App\Models\User;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;
use Illuminate\Database\Eloquent\Collection;

interface TaskRepositoryInterface
{
    public function allForUser(User $user, ?string $status = null): Collection;

    public function findForUser(User $user, int $id): ?Task;

    public function createForUser(User $user, array $data): Task;

    public function updateForUser(User $user, int $id, array $data): Task;

    public function deleteForUser(User $user, int $id): void;
}
