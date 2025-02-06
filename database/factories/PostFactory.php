<?php

namespace Database\Factories;

use App\Models\PostCategory;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Post>
 */
class PostFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $title = fake()->sentence();
        $slug = Str::slug($title);

        return [
            'title' => $title,
            'slug' => $slug,
            'content' => json_encode(['data' => fake()->paragraphs(asText: true)]),
            'status' => 'published',
            'user_id' => User::inRandomOrder()->first()->id,
            'published_at' => now(),
            'category_id' => PostCategory::inRandomOrder()->first()->id,
        ];
    }
}
