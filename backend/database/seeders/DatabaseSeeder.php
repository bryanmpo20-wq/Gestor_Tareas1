<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Task;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        // Usuario demo fijo
        $user = User::firstOrCreate(
            ['email' => 'demo@example.com'],
            [
                'name' => 'Demo User',
                'password' => bcrypt('password123'),
            ]
        );

        // Tareas demo sin factories
        $tasks = [
            [
                'title'       => 'Revisar correos',
                'description' => 'Revisar los correos pendientes del día.',
                'status'      => 'pending',
            ],
            [
                'title'       => 'Llamar al cliente',
                'description' => 'Llamar al cliente para confirmar la reunión.',
                'status'      => 'in_progress',
            ],
            [
                'title'       => 'Preparar informe',
                'description' => 'Preparar informe semanal de tareas.',
                'status'      => 'pending',
            ],
            [
                'title'       => 'Actualizar tablero',
                'description' => 'Actualizar el tablero de tareas en la web.',
                'status'      => 'completed',
            ],
            [
                'title'       => 'Reunión con el equipo',
                'description' => 'Reunión rápida para revisar el sprint.',
                'status'      => 'in_progress',
            ],
        ];

        foreach ($tasks as $taskData) {
            Task::create([
                'user_id'     => $user->id,
                'title'       => $taskData['title'],
                'description' => $taskData['description'],
                'status'      => $taskData['status'],
            ]);
        }
    }
}
