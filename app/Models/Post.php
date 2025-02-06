<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    /** @use HasFactory<\Database\Factories\PostFactory> */
    use HasFactory;

    protected $fillable = ['title', 'slug', 'content', 'user_id', 'category_id', 'published_at'];

    public function author()
    {
        return $this->belongsTo(User::class);
    }

    public function category()
    {
        return $this->belongsTo(PostCategory::class);
    }

    public function tags()
    {
        return $this->belongsToMany(related: PostTag::class, table: 'post_tag_pivot', foreignPivotKey: 'post_id', relatedPivotKey: 'tag_id');
    }
}
