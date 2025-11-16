<?php

namespace Database\Factories;

use App\Models\Task;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

class TaskFactory extends Factory
{
    protected $model = Task::class;

    public function definition(): array
    {
        $titles = [
            'Revisar correos',
            'Llamar al cliente',
            'Preparar informe',
            'Actualizar tablero',
            'Reunión con el equipo',
        ];

        $descriptions = [
            'Tarea de ejemplo generada por el seeder.',
            'Acción pendiente para el usuario demo.',
            'Actividad para pruebas del sistema Gestor_Tareas.',
        ];

        $statuses = ['pending', 'in_progress', 'completed'];

        return [
            'user_id'     => User::factory(),
            'title'       => $titles[array_rand($titles)],
            'description' => $descriptions[array_rand($descriptions)],
            'status'      => $statuses[array_rand($statuses)],
        ];
    }
}
