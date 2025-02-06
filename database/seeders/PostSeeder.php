<?php

namespace Database\Seeders;

use App\Models\Post;
use App\Models\PostTag;
use Illuminate\Database\Seeder;

class PostSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $tags = PostTag::inRandomOrder()
            ->take(rand(1, 5))
            ->pluck('id');

        Post::factory(5)
            ->create()
            ->each(function ($post) use ($tags) {
                $post->tags()->attach($tags);
            });
    }
}
