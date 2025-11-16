<?php

namespace Tests\Feature;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class TaskTest extends TestCase
{
    use RefreshDatabase;

    public function test_authenticated_user_can_create_and_list_tasks(): void
    {
        $user = User::factory()->create();
        $token = $user->createToken('test-token')->plainTextToken;

        $headers = [
            'Authorization' => 'Bearer '.$token,
            'Accept' => 'application/json',
        ];

        $createResponse = $this->postJson('/api/tasks', [
            'title' => 'Test Task',
            'description' => 'Some description',
            'status' => 'pendiente',
        ], $headers);

        $createResponse
            ->assertStatus(201)
            ->assertJsonPath('data.title', 'Test Task');

        $listResponse = $this->getJson('/api/tasks', $headers);

        $listResponse
            ->assertStatus(200)
            ->assertJsonStructure([
                'success',
                'message',
                'data' => [
                    ['id', 'title', 'description', 'status', 'created_at', 'updated_at'],
                ],
            ]);
    }
}
